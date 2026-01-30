import React, { useMemo, useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  ReactFlowProvider,
  Panel,
} from 'reactflow';
import { RoadmapNode } from '../types';
import CustomNode from './CustomNode';
import { getLayoutedElements, parseRoadmapToFlow } from '../utils/graphUtils';

interface DesktopRoadmapProps {
  root: RoadmapNode;
  onDetailsClick: (id: string) => void;
  onExtrasClick?: () => void;
  onBackClick?: () => void;
}

const nodeTypes = {
  custom: CustomNode,
};

const DesktopRoadmapInner = ({ root, onDetailsClick, onExtrasClick, onBackClick }: DesktopRoadmapProps) => {
  const { nodes: initialNodes, edges: initialEdges } = useMemo(
    () => parseRoadmapToFlow(root, onDetailsClick, onExtrasClick, onBackClick),
    [root, onDetailsClick, onExtrasClick, onBackClick]
  );

  const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(
    () => getLayoutedElements(initialNodes, initialEdges),
    [initialNodes, initialEdges]
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const minimapStyle = {
    height: 120,
    width: 160,
  };

  return (
    <div className="w-full h-full bg-slate-50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{
          padding: 0.3,  // Add padding around the graph
          maxZoom: 0.7   // Start at 70% zoom for better overview
        }}
        attributionPosition="bottom-right"
        minZoom={0.2}
        maxZoom={2}
      >
        <Background gap={20} color="#e2e8f0" />
        <Controls className="!bg-white !shadow-lg !border-slate-200 !text-slate-700" />
        <MiniMap
          style={minimapStyle}
          zoomable
          pannable
          nodeColor={(n) => {
            const colorMap: Record<string, string> = {
              slate: '#cbd5e1',
              blue: '#93c5fd',
              emerald: '#6ee7b7',
              amber: '#fcd34d',
              rose: '#fda4af',
              zinc: '#e4e4e7'
            };
            const nodeColor = n.data.color || 'slate';
            return colorMap[nodeColor] || '#cbd5e1';
          }}
        />
        <Panel position="top-left" className="bg-white/80 backdrop-blur-md p-2 rounded-lg shadow-sm border border-slate-200 text-xs text-slate-500">
          Scroll to zoom • Drag to pan
        </Panel>
      </ReactFlow>
    </div>
  );
};

const DesktopRoadmap = (props: DesktopRoadmapProps) => (
  <ReactFlowProvider>
    <DesktopRoadmapInner {...props} />
  </ReactFlowProvider>
);

export default DesktopRoadmap;