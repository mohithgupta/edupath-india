import React, { useState, useMemo, useEffect } from 'react';
import { useMediaQuery } from './hooks/useMediaQuery';
import { ROADMAP_DATA, PROGRAMMING_ROADMAP, PROGRAMMING_EXTRAS_ROADMAP } from './constants';
import { RoadmapNode } from './types';
import MobileRoadmap from './components/MobileRoadmap';
import DesktopRoadmap from './components/DesktopRoadmap';
import DetailsModal from './components/DetailsModal';
import { Search, Map as MapIcon, GraduationCap, List, Code, Layout, Sparkles } from 'lucide-react';

const flattenNodes = (node: RoadmapNode): RoadmapNode[] => {
    let list = [node];
    if (node.children) {
        node.children.forEach(child => {
            list = [...list, ...flattenNodes(child)];
        });
    }
    return list;
};

type PageType = 'main' | 'programming' | 'extras';
type ViewMode = 'list' | 'map';

export default function App() {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    const [currentPage, setCurrentPage] = useState<PageType>('main');
    const [viewMode, setViewMode] = useState<ViewMode>('list');
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setViewMode(isDesktop ? 'map' : 'list');
    }, [isDesktop]);

    const currentMapData = useMemo(() => {
        switch (currentPage) {
            case 'programming': return PROGRAMMING_ROADMAP;
            case 'extras': return PROGRAMMING_EXTRAS_ROADMAP;
            default: return ROADMAP_DATA;
        }
    }, [currentPage]);

    const allNodes = useMemo(() => flattenNodes(currentMapData.roadmap[0]), [currentMapData]);
    const selectedNode = useMemo(
        () => allNodes.find((n) => n.id === selectedNodeId) || null,
        [selectedNodeId, allNodes]
    );

    const handleDetailsClick = (nodeOrId: RoadmapNode | string) => {
        if (typeof nodeOrId === 'string') {
            setSelectedNodeId(nodeOrId);
        } else {
            setSelectedNodeId(nodeOrId.id);
        }
    };

    const handleCloseModal = () => setSelectedNodeId(null);

    const handleNavigate = (mapId: string) => {
        if (mapId === 'programming') {
            setCurrentPage('programming');
        } else if (mapId === 'extras') {
            setCurrentPage('extras');
        } else {
            setCurrentPage('main');
        }
        setSelectedNodeId(null);
    };

    const filteredNodes = useMemo(() => {
        if (!searchQuery) return [];
        return allNodes.filter(n =>
            n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            n.description?.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, allNodes]);

    return (
        <div className="h-screen w-screen flex flex-col bg-slate-50 overflow-hidden">
            <header className="flex-none bg-white border-b border-slate-200 px-4 py-3 shadow-sm z-30">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">

                    <div className="flex items-center gap-4 justify-between w-full md:w-auto">
                        <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => setCurrentPage('main')}
                        >
                            <div className="p-2 bg-blue-600 rounded-lg text-white">
                                <GraduationCap size={20} />
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-slate-800 leading-none">EduPath India</h1>
                                <p className="text-xs text-slate-500">{currentMapData.meta.title}</p>
                            </div>
                        </div>

                        {!isDesktop && (
                            <button
                                onClick={() => setViewMode(prev => prev === 'list' ? 'map' : 'list')}
                                className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 flex items-center gap-2"
                            >
                                {viewMode === 'list' ? <MapIcon size={20} /> : <List size={20} />} Change to {viewMode === 'list' ? 'Map' : 'List'} view
                            </button>
                        )}
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <nav className="hidden md:flex gap-1 bg-slate-100 p-1 rounded-lg">
                            <button
                                onClick={() => setCurrentPage('main')}
                                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${currentPage === 'main' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Main Path
                            </button>
                            <button
                                onClick={() => setCurrentPage('programming')}
                                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${(currentPage === 'programming' || currentPage === 'extras') ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Programming
                            </button>
                        </nav>

                        <div className="relative flex-1 md:flex-none md:w-80 group">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <Search size={16} className="text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search careers..."
                                className="w-full pl-10 pr-4 py-2 bg-slate-100 border-transparent focus:bg-white border focus:border-blue-500 rounded-lg text-sm transition-all outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />

                            {searchQuery && (
                                <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-xl border border-slate-100 max-h-60 overflow-y-auto z-50">
                                    {filteredNodes.length === 0 ? (
                                        <div className="p-4 text-sm text-slate-500 text-center">No results found.</div>
                                    ) : (
                                        filteredNodes.map(node => (
                                            <button
                                                key={node.id}
                                                onClick={() => {
                                                    handleDetailsClick(node);
                                                    setSearchQuery('');
                                                }}
                                                className="w-full text-left px-4 py-3 hover:bg-slate-50 flex flex-col border-b border-slate-50 last:border-0"
                                            >
                                                <span className="font-medium text-slate-800 text-sm">{node.title}</span>
                                                <span className="text-xs text-slate-400 truncate">{node.description}</span>
                                            </button>
                                        ))
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="md:hidden mt-3 flex gap-2 overflow-x-auto pb-1">
                    <button
                        onClick={() => setCurrentPage('main')}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border ${currentPage === 'main' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 border-slate-200'}`}
                    >
                        <Layout size={12} />
                        General
                    </button>
                    <button
                        onClick={() => setCurrentPage('programming')}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border ${(currentPage === 'programming' || currentPage === 'extras') ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 border-slate-200'}`}
                    >
                        <Code size={12} />
                        Programming
                    </button>
                </div>
            </header>

            <main className="flex-1 overflow-hidden relative">
                {viewMode === 'map' ? (
                    <div className="h-full w-full animate-fade-in">
                        <DesktopRoadmap
                            key={currentPage}
                            root={currentMapData.roadmap[0]}
                            onDetailsClick={handleDetailsClick}
                            onExtrasClick={currentPage === 'programming' ? () => handleNavigate('extras') : undefined}
                        />
                    </div>
                ) : (
                    <div className="h-full overflow-y-auto p-4 custom-scrollbar bg-slate-50">
                        <MobileRoadmap
                            key={currentPage}
                            root={currentMapData.roadmap[0]}
                            onDetailsClick={handleDetailsClick}
                            onExtrasClick={currentPage === 'programming' ? () => handleNavigate('extras') : undefined}
                        />
                    </div>
                )}
            </main>

            {!isDesktop && viewMode === 'list' && (
                <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-200 p-2 text-center text-[10px] text-slate-400 z-10">
                    EduPath India • 2024
                </div>
            )}

            <DetailsModal
                node={selectedNode}
                onClose={handleCloseModal}
                onNavigate={handleNavigate}
            />
        </div>
    );
}