export interface RoadmapNode {
  id: string;
  title: string;
  type?: string; // 'root' | 'default' | 'output'
  description?: string;
  duration?: string;
  exams?: string[];
  sources?: string[];
  color?: string;

  // Enhanced metadata fields (backward compatible)
  difficulty?: number;
  avg_salary?: string;
  popularity?: number;
  used_to_build?: string[];
  lotr_character?: string;
  lotr_analogy?: string;
  meta_ref?: string;

  // Stream/Career details
  stream_details?: {
    subjects?: string[];
    best_for?: string;
    career_scope?: string;
    avg_starting_salary?: string;
    job_market?: string;
    job_security?: string;
    job_sectors?: string[];
    unique_advantage?: string;
  };

  // Education details
  specializations?: string[];
  top_colleges?: string[];
  top_mtech_colleges?: string[];
  top_phd_institutions?: string[];
  top_research_institutes?: string[];
  subjects_in_course?: string[];

  // Salary & Career info
  avg_starting_salary?: string;
  avg_salary_after_grad?: string;
  avg_salary_after_mtech?: string;
  salary_range?: string;
  salary_as_officer?: string;
  md_ms_salary?: string;
  dm_salary?: string;
  senior_lawyer_income?: string;
  senior_designer_income?: string;

  // Job market info
  top_recruiters?: string[];
  career_paths?: string[];
  career_options?: string[];
  career_prospects?: string[];
  job_opportunities?: string[];
  job_roles?: string[];
  job_titles?: string[];
  top_companies?: string[];
  top_employers?: string[];

  // Exam & admission details
  exam_requirement?: string;
  neet_score_required?: string;
  gate_score_requirement?: string;
  cat_score_required?: string;
  clat_score_required?: string;
  eligibility?: string;
  selection_stages?: string[];

  // Benefits & perks
  benefits?: string[];
  additional_benefits?: string[];
  life_benefits?: string[];

  // Programming/Tech specific
  learning_resources?: {
    free?: string[];
    paid?: string[];
    classic?: string[];
    online?: string[];
  };
  frameworks?: string[];
  key_frameworks?: string[];
  technologies?: string[];
  libraries?: string[];
  career_trajectories?: string[];
  time_to_job_readiness?: string;
  market_size?: string;
  market_opportunity?: string;
  market_trend?: string;

  // Research specific
  monthly_stipend?: string;
  research_areas?: string[];
  research_domains?: string[];

  // Misc
  funding?: string;
  career_growth?: string;
  job_security?: string;
  job_market?: string;
  industry_demand?: string;
  unique_advantage?: string;
  warning?: string;
  note?: string;
  recommendation?: string;

  children?: RoadmapNode[];
  relatedMap?: string; // ID of another map to load (e.g., 'programming')
  showExtrasLink?: boolean;
  showBackToProgramming?: boolean;
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
  onBackClick?: () => void;
  originalData: RoadmapNode;
}