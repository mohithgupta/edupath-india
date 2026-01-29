export interface RoadmapNode {
  id: string;
  title: string;
  type?: string; // 'root' | 'default' | 'output'
  description?: string;
  duration?: string;
  exams?: string[];
  sources?: string[];
  color?: string;
  // Enhanced metadata fields
  difficulty?: number;
  avg_salary?: string;
  popularity?: number;
  used_to_build?: string[];
  lotr_character?: string;
  lotr_analogy?: string;
  meta_ref?: string;
  children?: RoadmapNode[];
  relatedMap?: string; // ID of another map to load (e.g., 'programming')
  showExtrasLink?: boolean;
}

export interface RoadmapData {
  meta: {
    title: string;
    version: string;
    description: string;
  };
  roadmap: RoadmapNode[];
  language_details?: Record<string, {
    title: string;
    lotr_character: string;
    lotr_analogy: string;
    difficulty: number;
    avg_salary: string;
    popularity: number;
    used_to_build: string[];
  }>;
}

// React Flow Types (simplified for internal use if needed)
export interface CustomNodeData {
  label: string;
  description?: string;
  exams?: string[];
  duration?: string;
  color?: string;
  onDetailsClick: (nodeId: string) => void;
  onExtrasClick?: () => void;
  originalData: RoadmapNode;
}