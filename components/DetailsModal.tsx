import React from 'react';
import { RoadmapNode } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, GraduationCap, Calendar, FileCheck, Map } from 'lucide-react';
import { getColorClasses } from '../utils/colorMap';

interface DetailsModalProps {
  node: RoadmapNode | null;
  onClose: () => void;
  onNavigate: (mapId: string) => void;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ node, onClose, onNavigate }) => {
  const colors = getColorClasses(node?.color || 'slate');

  return (
    <AnimatePresence>
      {node && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-50 overflow-y-auto custom-scrollbar flex flex-col"
          >
            <div className={`p-6 border-b ${colors.border} ${colors.bg}`}>
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-lg bg-white shadow-sm border ${colors.border}`}>
                    <GraduationCap className={colors.text} size={28} />
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-black/5 rounded-full transition-colors"
                >
                  <X size={24} className="text-slate-500" />
                </button>
              </div>
              <h2 className={`text-2xl font-bold ${colors.text} mb-2`}>{node.title}</h2>
              {node.duration && (
                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <Calendar size={16} />
                  <span>{node.duration}</span>
                </div>
              )}
            </div>

            <div className="p-6 space-y-8 flex-1">

              <div className="prose prose-slate">
                <p className="text-lg text-slate-700 leading-relaxed">
                  {node.description || "No description available."}
                </p>
              </div>

              {node.relatedMap && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 shadow-sm">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">Detailed Roadmap Available</h4>
                  <p className="text-xs text-blue-600 mb-3">View the specific roadmap for this career path.</p>
                  <button 
                    onClick={() => {
                        onNavigate(node.relatedMap!);
                        onClose();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    <Map size={16} />
                    View {node.relatedMap.charAt(0).toUpperCase() + node.relatedMap.slice(1)} Map
                  </button>
                </div>
              )}

              {node.exams && node.exams.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    <FileCheck size={16} />
                    Entrance Exams
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {node.exams.map((exam) => (
                      <span 
                        key={exam}
                        className={`px-3 py-1.5 rounded-lg text-sm font-semibold border ${colors.border} ${colors.bg} ${colors.text}`}
                      >
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {node.sources && node.sources.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Official Sources
                  </h3>
                  <div className="space-y-2">
                    {node.sources.map((source, idx) => (
                      <a 
                        key={idx}
                        href={source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-all group"
                      >
                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 truncate mr-2">
                          {source.replace(/^https?:\/\//, '')}
                        </span>
                        <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-6 border-t border-slate-100 bg-slate-50">
               <button 
                onClick={onClose}
                className="w-full py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
               >
                 Close Details
               </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DetailsModal;