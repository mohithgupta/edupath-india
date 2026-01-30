import React, { useState, useEffect } from 'react';
import { RoadmapNode } from '../types';
import { ChevronRight, ArrowLeft, Info, Sparkles, Home, Map } from 'lucide-react';
import { getColorClasses } from '../utils/colorMap';

interface MobileRoadmapProps {
    root: RoadmapNode;
    onDetailsClick: (n: RoadmapNode) => void;
    onExtrasClick?: () => void;
    onBackClick?: () => void;
}

const MobileRoadmap: React.FC<MobileRoadmapProps> = ({ root, onDetailsClick, onExtrasClick, onBackClick }) => {
    const [history, setHistory] = useState<RoadmapNode[]>([root]);

    useEffect(() => {
        setHistory([root]);
    }, [root.id]);

    const currentNode = history[history.length - 1];
    const hasChildren = currentNode.children && currentNode.children.length > 0;

    const handleNodeClick = (node: RoadmapNode, e?: React.MouseEvent) => {
        if (e) e.stopPropagation();

        if (node.children && node.children.length > 0) {
            setHistory(prev => [...prev, node]);
        } else {
            onDetailsClick(node);
        }
    };

    const handleBack = () => {
        if (history.length > 1) {
            setHistory(prev => prev.slice(0, -1));
        }
    };

    return (
        <div className="flex flex-col h-full bg-slate-50">
            <div className="flex items-center gap-3 p-4 border-b border-slate-200 bg-white sticky top-0 z-20 shadow-sm">
                {history.length > 1 ? (
                    <button
                        onClick={handleBack}
                        className="p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                        aria-label="Go Back"
                    >
                        <ArrowLeft size={20} />
                    </button>
                ) : (
                    <div className="p-2 -ml-2 text-blue-600 bg-blue-50 rounded-lg">
                        <Map size={20} />
                    </div>
                )}

                <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-slate-800 truncate leading-tight animate-fade-in">
                        {currentNode.title}
                    </h2>
                    <p className="text-xs text-slate-500 truncate">
                        {history.length > 1 ? `Step ${history.length} of Path` : 'Tap options to explore'}
                    </p>
                </div>

                <button
                    onClick={() => onDetailsClick(currentNode)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                    title="View Current Section Details"
                >
                    <Info size={20} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 pb-32 animate-fade-in custom-scrollbar">
                {currentNode.description && (
                    <div className="p-4 bg-white border border-slate-200 rounded-xl text-sm text-slate-600 mb-6 shadow-sm">
                        {currentNode.description}
                    </div>
                )}

                {currentNode.showExtrasLink && onExtrasClick && (
                    <button
                        onClick={onExtrasClick}
                        className="w-full flex items-center justify-center gap-2 p-4 mb-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-xl shadow-lg shadow-violet-200 active:scale-95 transition-all animate-pulse"
                    >
                        <Sparkles size={18} />
                        Help Me Choose
                    </button>
                )}

                {currentNode.showBackToProgramming && onBackClick && (
                    <button
                        onClick={onBackClick}
                        className="w-full flex items-center justify-center gap-2 p-4 mb-6 bg-slate-800 text-white font-bold rounded-xl shadow-lg shadow-slate-200 active:scale-95 transition-all border-2 border-white"
                    >
                        <ArrowLeft size={18} />
                        Back to Hub
                    </button>
                )}

                {hasChildren ? (
                    <div className="space-y-3">
                        {currentNode.children?.map(child => {
                            const childColors = getColorClasses(child.color || currentNode.color);
                            const isLeaf = !child.children || child.children.length === 0;

                            return (
                                <div
                                    key={child.id}
                                    onClick={(e) => handleNodeClick(child, e)}
                                    className={`group relative bg-white border-2 ${childColors.border} rounded-xl p-4 active:scale-[0.98] transition-all shadow-sm hover:shadow-md flex items-center gap-4 cursor-pointer`}
                                >
                                    <div className={`flex-1 min-w-0`}>
                                        <h3 className={`font-bold text-base ${childColors.text} mb-1`}>{child.title}</h3>

                                        {child.duration && (
                                            <div className="flex items-center gap-1 text-xs text-slate-400 font-medium mb-1">
                                                <span>⏱</span> {child.duration}
                                            </div>
                                        )}

                                        {child.description && (
                                            <p className="text-xs text-slate-500 line-clamp-2">
                                                {child.description}
                                            </p>
                                        )}

                                        {child.showExtrasLink && onExtrasClick && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); onExtrasClick(); }}
                                                className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-violet-600 bg-violet-50 px-2 py-1.5 rounded-md hover:bg-violet-100"
                                            >
                                                <Sparkles size={12} /> Help Me Choose
                                            </button>
                                        )}
                                    </div>

                                    <div className="text-slate-300 group-hover:text-slate-400 transition-colors">
                                        {isLeaf ? <Info size={20} className="text-blue-200" /> : <ChevronRight size={20} />}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                        <div className="p-4 bg-slate-100 rounded-full text-slate-300">
                            <Info size={32} />
                        </div>
                        <div className="max-w-xs">
                            <p className="text-slate-500 font-medium">End of this path.</p>
                            <p className="text-xs text-slate-400 mt-1">Tap the info button in the header for more details about {currentNode.title}.</p>
                        </div>
                        <button
                            onClick={() => onDetailsClick(currentNode)}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium shadow-md active:scale-95 transition-transform"
                        >
                            View Full Details
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileRoadmap;