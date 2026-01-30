import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { CustomNodeData } from '../types';
import { getColorClasses } from '../utils/colorMap';
import { Info, Clock, Sparkles, ArrowLeft } from 'lucide-react';

const CustomNode = ({ data, isConnectable }: NodeProps<CustomNodeData>) => {
  const colors = getColorClasses(data.color);

  // Determine if this node has meaningful data to show in the details modal
  const hasDetailsToShow = () => {
    const node = data.originalData;

    // Always show if it has a meta_ref (language details)
    if (node.meta_ref) return true;

    // Check for various enhanced fields
    const hasEnhancedData = !!(
      node.description ||
      (node.exams && node.exams.length > 0) ||
      node.stream_details ||
      node.avg_starting_salary ||
      node.salary_range ||
      node.avg_salary_after_grad ||
      node.specializations ||
      node.top_colleges ||
      node.top_recruiters ||
      node.career_paths ||
      node.career_options ||
      node.learning_resources ||
      node.career_trajectories ||
      node.benefits ||
      node.warning ||
      node.note ||
      node.recommendation ||
      node.relatedMap
    );

    return hasEnhancedData;
  };

  return (
    <div
      className={`relative w-[240px] rounded-xl shadow-lg border-2 ${colors.border} ${colors.bg} transition-transform hover:scale-105 hover:shadow-xl duration-300 group`}
    >
      {data.originalData.showExtrasLink && data.onExtrasClick && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            data.onExtrasClick?.();
          }}
          className="absolute -top-6 -right-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold py-1.5 px-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center gap-1 z-50 animate-pulse"
        >
          <Sparkles size={12} />
          Help Me Choose
        </button>
      )}

      {data.originalData.showBackToProgramming && data.onBackClick && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            data.onBackClick?.();
          }}
          className="absolute -top-6 -left-6 bg-slate-800 text-white text-xs font-bold py-1.5 px-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center gap-1 z-50 border-2 border-white"
        >
          <ArrowLeft size={12} />
          Back to Hub
        </button>
      )}

      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        className="!bg-slate-400 !w-3 !h-3"
      />

      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <h3 className={`font-bold text-md leading-tight ${colors.text}`}>
            {data.label}
          </h3>
          {hasDetailsToShow() && (
            <button
              onClick={() => data.onDetailsClick(data.originalData.id)}
              className="p-1 hover:bg-black/5 rounded-full transition-colors"
              title="View Details"
            >
              <Info size={18} className="text-slate-500" />
            </button>
          )}
        </div>

        {data.duration && (
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <Clock size={12} />
            <span>{data.duration}</span>
          </div>
        )}

        {data.description && (
          <p className="text-xs text-slate-600 line-clamp-2 mt-1">
            {data.description}
          </p>
        )}

        {data.exams && data.exams.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {data.exams.slice(0, 2).map((exam) => (
              <span
                key={exam}
                className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${colors.badge}`}
              >
                {exam}
              </span>
            ))}
            {data.exams.length > 2 && (
              <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-slate-200 text-slate-600">
                +{data.exams.length - 2}
              </span>
            )}
          </div>
        )}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="!bg-slate-400 !w-3 !h-3"
      />
    </div>
  );
};

export default memo(CustomNode);