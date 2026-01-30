import dagre from 'dagre';
import { Node, Edge, Position } from 'reactflow';
import { RoadmapNode } from '../types';

const nodeWidth = 220;
const nodeHeight = 100;

export const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction = 'LR'
) => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  // Increased spacing for less congested view
  dagreGraph.setGraph({
    rankdir: direction,
    ranksep: 150,  // Horizontal spacing between ranks (columns in LR layout)
    nodesep: 100,  // Vertical spacing between nodes in the same rank
    edgesep: 50    // Spacing between edges
  });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      targetPosition: direction === 'LR' ? Position.Left : Position.Top,
      sourcePosition: direction === 'LR' ? Position.Right : Position.Bottom,
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
};

export const parseRoadmapToFlow = (
  rootNode: RoadmapNode,
  onDetailsClick: (id: string) => void,
  onExtrasClick?: () => void,
  onBackClick?: () => void
) => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  const visited = new Set<string>();

  const traverse = (currentNode: RoadmapNode, parentId?: string) => {
    if (visited.has(currentNode.id)) return;
    visited.add(currentNode.id);

    nodes.push({
      id: currentNode.id,
      type: 'custom',
      data: {
        label: currentNode.title,
        description: currentNode.description,
        exams: currentNode.exams,
        duration: currentNode.duration,
        color: currentNode.color,
        originalData: currentNode,
        onDetailsClick,
        onExtrasClick,
        onBackClick,
      },
      position: { x: 0, y: 0 },
    });

    if (parentId) {
      edges.push({
        id: `${parentId}-${currentNode.id}`,
        source: parentId,
        target: currentNode.id,
        type: 'smoothstep',
        animated: true,
        style: { stroke: '#94a3b8', strokeWidth: 2 },
      });
    }

    if (currentNode.children) {
      currentNode.children.forEach((child) => traverse(child, currentNode.id));
    }
  };

  traverse(rootNode);

  return { nodes, edges };
};