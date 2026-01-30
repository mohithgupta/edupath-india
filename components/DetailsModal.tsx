import React, { useMemo } from 'react';
import { RoadmapNode } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ExternalLink, GraduationCap, Calendar, FileCheck, Map,
  DollarSign, Briefcase, Building2, Award, BookOpen, TrendingUp,
  Users, AlertCircle, Lightbulb, Target, Code, Zap, Sparkles, Globe
} from 'lucide-react';
import { getColorClasses } from '../utils/colorMap';
import { PROGRAMMING_ROADMAP } from '../constants';

interface DetailsModalProps {
  node: RoadmapNode | null;
  onClose: () => void;
  onNavigate: (mapId: string) => void;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ node, onClose, onNavigate }) => {
  const colors = getColorClasses(node?.color || 'slate');

  // Fetch language details if node has meta_ref
  const languageDetails = useMemo(() => {
    if (!node?.meta_ref || !PROGRAMMING_ROADMAP.language_details) return null;
    return (PROGRAMMING_ROADMAP.language_details as any)[node.meta_ref];
  }, [node?.meta_ref]);

  // Check if this is a multi-language node (Python/Ruby/PHP)
  const isMultiLanguageNode = useMemo(() => {
    return node?.title?.includes('/') && (
      node.title.includes('Python') ||
      node.title.includes('Ruby') ||
      node.title.includes('PHP')
    );
  }, [node?.title]);

  // Get all three language details for comparison
  const multiLanguageDetails = useMemo(() => {
    if (!isMultiLanguageNode || !PROGRAMMING_ROADMAP.language_details) return null;
    const details = PROGRAMMING_ROADMAP.language_details as any;
    return {
      python: details.python,
      ruby: details.ruby,
      php: details.php
    };
  }, [isMultiLanguageNode]);

  // Helper to render list items
  const renderList = (items: string[] | undefined, icon?: React.ReactNode) => {
    if (!items || items.length === 0) return null;
    return (
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
            {icon && <span className="mt-0.5 flex-shrink-0">{icon}</span>}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  };

  // Helper to render info cards
  const InfoCard = ({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) => (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 border border-slate-200">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-slate-500">{icon}</span>
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{title}</h4>
      </div>
      <p className="text-sm font-semibold text-slate-800">{value}</p>
    </div>
  );

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
            className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white shadow-2xl z-50 overflow-y-auto custom-scrollbar flex flex-col"
          >
            {/* Header */}
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

            {/* Content */}
            <div className="p-6 space-y-6 flex-1">

              {/* Description */}
              {node.description && (
                <div className="prose prose-slate">
                  <p className="text-base text-slate-700 leading-relaxed">
                    {node.description}
                  </p>
                </div>
              )}

              {/* Multi-Language Comparison (Python/Ruby/PHP) */}
              {isMultiLanguageNode && multiLanguageDetails && (
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border border-purple-200 rounded-xl p-4">
                    <h3 className="flex items-center gap-2 text-sm font-bold text-purple-800 mb-4">
                      <Code size={16} />
                      Compare: Python vs Ruby vs PHP
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Python */}
                      <div className="bg-white rounded-lg p-3 border-2 border-blue-300">
                        <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-1">
                          <span className="text-lg">🐍</span> Python
                        </h4>
                        <div className="space-y-1.5 text-xs">
                          <p><span className="font-semibold">Difficulty:</span> {Array.from({ length: multiLanguageDetails.python.difficulty }).map(() => '●').join('')}{'○'.repeat(5 - multiLanguageDetails.python.difficulty)}</p>
                          <p><span className="font-semibold">Best For:</span> Data Science, AI, Web</p>
                          <p><span className="font-semibold">Salary:</span> ₹8-18 lakhs p.a.</p>
                          <p><span className="font-semibold">Job Market:</span> Extremely High</p>
                          <p className="text-blue-600 italic mt-2">"{multiLanguageDetails.python.lotr_analogy}"</p>
                        </div>
                      </div>

                      {/* Ruby */}
                      <div className="bg-white rounded-lg p-3 border-2 border-red-300">
                        <h4 className="font-bold text-red-700 mb-2 flex items-center gap-1">
                          <span className="text-lg">💎</span> Ruby
                        </h4>
                        <div className="space-y-1.5 text-xs">
                          <p><span className="font-semibold">Difficulty:</span> {Array.from({ length: multiLanguageDetails.ruby.difficulty }).map(() => '●').join('')}{'○'.repeat(5 - multiLanguageDetails.ruby.difficulty)}</p>
                          <p><span className="font-semibold">Best For:</span> Startups, Web Apps</p>
                          <p><span className="font-semibold">Salary:</span> ₹6-14 lakhs p.a.</p>
                          <p><span className="font-semibold">Job Market:</span> Moderate</p>
                          <p className="text-red-600 italic mt-2">"{multiLanguageDetails.ruby.lotr_analogy}"</p>
                        </div>
                      </div>

                      {/* PHP */}
                      <div className="bg-white rounded-lg p-3 border-2 border-purple-300">
                        <h4 className="font-bold text-purple-700 mb-2 flex items-center gap-1">
                          <span className="text-lg">🐘</span> PHP
                        </h4>
                        <div className="space-y-1.5 text-xs">
                          <p><span className="font-semibold">Difficulty:</span> {Array.from({ length: multiLanguageDetails.php.difficulty }).map(() => '●').join('')}{'○'.repeat(5 - multiLanguageDetails.php.difficulty)}</p>
                          <p><span className="font-semibold">Best For:</span> WordPress, Quick Sites</p>
                          <p><span className="font-semibold">Salary:</span> ₹4-10 lakhs p.a.</p>
                          <p><span className="font-semibold">Job Market:</span> Moderate</p>
                          <p className="text-purple-600 italic mt-2">"{multiLanguageDetails.php.lotr_analogy}"</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Recommendation */}
                    <div className="mt-4 bg-blue-100 border border-blue-300 rounded-lg p-3">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">💡 Quick Pick:</span> Choose <strong>Python</strong> for data/AI, <strong>Ruby</strong> for fast startup development, or <strong>PHP</strong> if you need WordPress/legacy support.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Programming Language Details */}
              {languageDetails && !isMultiLanguageNode && (
                <div className="space-y-4">
                  {/* LOTR Analogy - Fun Section */}
                  {(languageDetails.lotr_character || languageDetails.lotr_analogy) && (
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-4">
                      <h3 className="flex items-center gap-2 text-sm font-bold text-purple-800 mb-2">
                        <Sparkles size={16} />
                        {languageDetails.lotr_character && `${languageDetails.lotr_character} - `}Fun Analogy
                      </h3>
                      {languageDetails.lotr_analogy && (
                        <p className="text-sm text-purple-700 italic">"{languageDetails.lotr_analogy}"</p>
                      )}
                    </div>
                  )}

                  {/* Language Overview */}
                  <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                    <h3 className="flex items-center gap-2 text-sm font-bold text-indigo-800 mb-3">
                      <Code size={16} />
                      Language Overview
                    </h3>
                    <div className="space-y-2 text-sm">
                      {languageDetails.difficulty !== undefined && (
                        <div>
                          <span className="font-semibold text-indigo-700">Difficulty:</span>{' '}
                          <span className="inline-flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span
                                key={i}
                                className={`w-2 h-2 rounded-full ${i < languageDetails.difficulty ? 'bg-indigo-600' : 'bg-indigo-200'
                                  }`}
                              />
                            ))}
                            {languageDetails.difficulty_explanation && (
                              <span className="ml-2 text-indigo-600">({languageDetails.difficulty_explanation})</span>
                            )}
                          </span>
                        </div>
                      )}
                      {languageDetails.avg_salary && (
                        <p><span className="font-semibold text-indigo-700">Average Salary:</span> {languageDetails.avg_salary}</p>
                      )}
                      {languageDetails.job_market_in_india && (
                        <p><span className="font-semibold text-indigo-700">Job Market in India:</span> {languageDetails.job_market_in_india}</p>
                      )}
                      {languageDetails.time_to_job_readiness && (
                        <p><span className="font-semibold text-indigo-700">Time to Job Ready:</span> {languageDetails.time_to_job_readiness}</p>
                      )}
                      {languageDetails.official_website && (
                        <a
                          href={languageDetails.official_website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium"
                        >
                          <Globe size={14} />
                          Official Website
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Cool Projects - What's Built With This */}
                  {languageDetails.used_to_build && languageDetails.used_to_build.length > 0 && (
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                      <h3 className="flex items-center gap-2 text-sm font-bold text-green-800 mb-3">
                        <Sparkles size={16} />
                        Cool Things Built With {languageDetails.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {languageDetails.used_to_build.map((project: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg text-sm font-medium border border-green-200"
                          >
                            ✨ {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Frameworks & Technologies */}
                  {languageDetails.key_frameworks && languageDetails.key_frameworks.length > 0 && (
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                        <Zap size={16} />
                        Key Frameworks & Tools
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {languageDetails.key_frameworks.map((framework: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-indigo-100 text-indigo-800 rounded-lg text-sm font-medium"
                          >
                            {framework}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Learning Resources */}
                  {languageDetails.learning_resources && (
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                        <BookOpen size={16} />
                        Learning Resources
                      </h3>
                      <div className="space-y-3">
                        {languageDetails.learning_resources.free && languageDetails.learning_resources.free.length > 0 && (
                          <div>
                            <p className="text-xs font-semibold text-green-600 mb-2">🆓 Free Resources</p>
                            {renderList(languageDetails.learning_resources.free, <BookOpen size={14} className="text-green-600" />)}
                          </div>
                        )}
                        {languageDetails.learning_resources.paid && languageDetails.learning_resources.paid.length > 0 && (
                          <div>
                            <p className="text-xs font-semibold text-amber-600 mb-2">💎 Premium Resources</p>
                            {renderList(languageDetails.learning_resources.paid, <BookOpen size={14} className="text-amber-600" />)}
                          </div>
                        )}
                        {languageDetails.learning_resources.classic && (
                          <div>
                            <p className="text-xs font-semibold text-blue-600 mb-2">📚 Classic Books</p>
                            {Array.isArray(languageDetails.learning_resources.classic)
                              ? renderList(languageDetails.learning_resources.classic, <BookOpen size={14} className="text-blue-600" />)
                              : <p className="text-sm text-slate-700">{languageDetails.learning_resources.classic}</p>
                            }
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Career Trajectories */}
                  {languageDetails.career_trajectories && languageDetails.career_trajectories.length > 0 && (
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                        <TrendingUp size={16} />
                        Career Paths & Salary Growth
                      </h3>
                      {renderList(languageDetails.career_trajectories, <TrendingUp size={14} className="text-green-600" />)}
                    </div>
                  )}

                  {/* Special Advantages */}
                  {(languageDetails.special_advantage || languageDetails.unique_advantage) && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <Lightbulb size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-blue-600 mb-1">💡 Unique Advantage</p>
                          <p className="text-sm text-blue-800">{languageDetails.special_advantage || languageDetails.unique_advantage}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Warning if exists */}
                  {languageDetails.warning && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <AlertCircle size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-amber-600 mb-1">⚠️ Important Note</p>
                          <p className="text-sm text-amber-800">{languageDetails.warning}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Stream Details */}
              {node.stream_details && (
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <h3 className="flex items-center gap-2 text-sm font-bold text-blue-800 mb-3">
                    <Target size={16} />
                    Stream Overview
                  </h3>
                  <div className="space-y-2 text-sm">
                    {node.stream_details.best_for && (
                      <p><span className="font-semibold text-blue-700">Best For:</span> {node.stream_details.best_for}</p>
                    )}
                    {node.stream_details.career_scope && (
                      <p><span className="font-semibold text-blue-700">Career Scope:</span> {node.stream_details.career_scope}</p>
                    )}
                    {node.stream_details.avg_starting_salary && (
                      <p><span className="font-semibold text-blue-700">Avg Starting Salary:</span> {node.stream_details.avg_starting_salary}</p>
                    )}
                    {node.stream_details.job_market && (
                      <p><span className="font-semibold text-blue-700">Job Market:</span> {node.stream_details.job_market}</p>
                    )}
                    {node.stream_details.subjects && node.stream_details.subjects.length > 0 && (
                      <div>
                        <p className="font-semibold text-blue-700 mb-1">Subjects:</p>
                        <div className="flex flex-wrap gap-1">
                          {node.stream_details.subjects.map((sub, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Salary Information Grid */}
              {(node.avg_starting_salary || node.avg_salary_after_grad || node.salary_range || node.avg_salary_after_mtech) && (
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    <DollarSign size={16} />
                    Salary Information
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {node.avg_starting_salary && <InfoCard title="Starting Salary" value={node.avg_starting_salary} icon={<DollarSign size={16} />} />}
                    {node.salary_range && <InfoCard title="Salary Range" value={node.salary_range} icon={<TrendingUp size={16} />} />}
                    {node.avg_salary_after_grad && <InfoCard title="After Graduation" value={node.avg_salary_after_grad} icon={<GraduationCap size={16} />} />}
                    {node.avg_salary_after_mtech && <InfoCard title="After M.Tech" value={node.avg_salary_after_mtech} icon={<Award size={16} />} />}
                  </div>
                </div>
              )}

              {/* Market Info */}
              {(node.market_size || node.market_opportunity || node.market_trend || node.time_to_job_readiness) && (
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    <TrendingUp size={16} />
                    Market Insights
                  </h3>
                  <div className="space-y-2 text-sm text-slate-700">
                    {node.market_size && <p><span className="font-semibold">Market Size:</span> {node.market_size}</p>}
                    {node.market_opportunity && <p><span className="font-semibold">Opportunity:</span> {node.market_opportunity}</p>}
                    {node.market_trend && <p><span className="font-semibold">Trend:</span> {node.market_trend}</p>}
                    {node.time_to_job_readiness && <p><span className="font-semibold">Time to Job Ready:</span> {node.time_to_job_readiness}</p>}
                  </div>
                </div>
              )}

              {/* Related Map */}
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

              {/* Entrance Exams */}
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

              {/* Specializations */}
              {node.specializations && node.specializations.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    <Award size={16} />
                    Specializations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {node.specializations.map((spec, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-200 rounded-lg text-sm font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Top Colleges */}
              {node.top_colleges && node.top_colleges.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    <Building2 size={16} />
                    Top Colleges
                  </h3>
                  {renderList(node.top_colleges, <GraduationCap size={14} className="text-slate-400" />)}
                </div>
              )}

              {/* Top Recruiters */}
              {node.top_recruiters && node.top_recruiters.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    <Briefcase size={16} />
                    Top Recruiters
                  </h3>
                  {renderList(node.top_recruiters, <Building2 size={14} className="text-slate-400" />)}
                </div>
              )}

              {/* Top Companies */}
              {node.top_companies && node.top_companies.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    <Building2 size={16} />
                    Top Companies
                  </h3>
                  {renderList(node.top_companies, <Building2 size={14} className="text-slate-400" />)}
                </div>
              )}

              {/* Career Paths/Options */}
              {(node.career_paths || node.career_options || node.career_prospects) && (
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    <Target size={16} />
                    Career Opportunities
                  </h3>
                  {renderList(node.career_paths || node.career_options || node.career_prospects, <Zap size={14} className="text-emerald-500" />)}
                </div>
              )}

              {/* Career Trajectories */}
              {node.career_trajectories && node.career_trajectories.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    <TrendingUp size={16} />
                    Career Trajectories
                  </h3>
                  {renderList(node.career_trajectories, <TrendingUp size={14} className="text-blue-500" />)}
                </div>
              )}

              {/* Job Titles */}
              {node.job_titles && node.job_titles.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    <Briefcase size={16} />
                    Job Titles
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {node.job_titles.map((title, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                        {title}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies/Frameworks */}
              {(node.technologies || node.frameworks || node.key_frameworks) && (
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    <Code size={16} />
                    Technologies & Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(node.technologies || node.frameworks || node.key_frameworks)?.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Learning Resources */}
              {node.learning_resources && (
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    <BookOpen size={16} />
                    Learning Resources
                  </h3>
                  <div className="space-y-3">
                    {node.learning_resources.free && node.learning_resources.free.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold text-emerald-600 mb-2">Free Resources</h4>
                        {renderList(node.learning_resources.free, <BookOpen size={12} className="text-emerald-500" />)}
                      </div>
                    )}
                    {node.learning_resources.paid && node.learning_resources.paid.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold text-blue-600 mb-2">Paid Resources</h4>
                        {renderList(node.learning_resources.paid, <BookOpen size={12} className="text-blue-500" />)}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {(node.benefits || node.additional_benefits || node.life_benefits) && (
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    <Award size={16} />
                    Benefits & Perks
                  </h3>
                  {renderList(node.benefits || node.additional_benefits || node.life_benefits, <Award size={14} className="text-amber-500" />)}
                </div>
              )}

              {/* Research Areas */}
              {(node.research_areas || node.research_domains) && (
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    <Lightbulb size={16} />
                    Research Areas
                  </h3>
                  {renderList(node.research_areas || node.research_domains, <Lightbulb size={14} className="text-yellow-500" />)}
                </div>
              )}

              {/* Monthly Stipend */}
              {node.monthly_stipend && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm">
                    <span className="font-semibold text-green-800">Monthly Stipend:</span>{' '}
                    <span className="text-green-700">{node.monthly_stipend}</span>
                  </p>
                </div>
              )}

              {/* Warning/Note */}
              {node.warning && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
                  <AlertCircle size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-800">{node.warning}</p>
                </div>
              )}

              {node.note && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
                  <Lightbulb size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-blue-800">{node.note}</p>
                </div>
              )}

              {/* Official Sources */}
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

            {/* Footer */}
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