import { RoadmapData } from './types';
import After10thDataEnhanced from './After10th_data_enhanced.json';
import ProgrammingRoadmapEnhanced from './programming_roadmap_enhanced.json';

// Export the enhanced After 10th data
export const ROADMAP_DATA: RoadmapData = After10thDataEnhanced as any as RoadmapData;

// Export the Programming Career Path Hub (Original Intent)
export const PROGRAMMING_ROADMAP: RoadmapData = {
  meta: {
    title: "Programming & Software Development",
    version: "2.0",
    description: "Career paths and programming language selection guide."
  },
  language_details: (ProgrammingRoadmapEnhanced as any).language_details,
  roadmap: [
    {
      id: "programming_hub",
      title: "Programming & Software Development",
      type: "root",
      description: "Start here. Choose to explore by career path or get help choosing a language.",
      color: "slate",
      showExtrasLink: true,
      children: [
        {
          id: "prog_start",
          title: "Explore Career Paths",
          description: "Explore programming by domain. Choose your path.",
          color: "blue",
          children: [
            {
              id: "web_dev",
              title: "Web Development",
              description: "Building websites and web applications.",
              color: "blue",
              children: [
                {
                  id: "frontend",
                  title: "Frontend",
                  description: "HTML, CSS, JavaScript, React.",
                  meta_ref: "javascript",
                  avg_salary: "$99,000",
                  difficulty: 2,
                  children: [
                    {
                      id: "ui_ux",
                      title: "UI/UX Design",
                      description: "Figma, User Research, Prototyping."
                    }
                  ]
                },
                {
                  id: "backend",
                  title: "Backend",
                  description: "Node.js (JS), Django (Python), Java.",
                  children: [
                    {
                      id: "devops",
                      title: "DevOps",
                      description: "Docker, Kubernetes, CI/CD Pipelines."
                    }
                  ]
                }
              ]
            },
            {
              id: "data_tech",
              title: "Data & AI",
              description: "Working with data, ML models, and statistics.",
              color: "emerald",
              children: [
                {
                  id: "data_science",
                  title: "Data Science",
                  description: "Python, Pandas, Statistics, Visualization.",
                  meta_ref: "python",
                  avg_salary: "$107,000",
                  difficulty: 1,
                  exams: ["Google Data Analytics"]
                },
                {
                  id: "ml_ai",
                  title: "Machine Learning",
                  description: "TensorFlow, PyTorch, Neural Networks.",
                  children: [
                    {
                      id: "nlp_cv",
                      title: "NLP & Computer Vision",
                      description: "Advanced AI fields."
                    }
                  ]
                }
              ]
            },
            {
              id: "mobile_dev",
              title: "Mobile App Dev",
              description: "Android (Kotlin) or iOS (Swift) or Cross-platform (Flutter).",
              color: "amber",
              children: [
                {
                  id: "react_native",
                  title: "React Native",
                  description: "Build mobile apps using JavaScript.",
                  meta_ref: "javascript"
                }
              ]
            },
            {
              id: "core_cs",
              title: "Core CS Concepts",
              description: "Essential for high-level engineering roles.",
              color: "rose",
              children: [
                {
                  id: "dsa",
                  title: "DSA",
                  description: "Data Structures & Algorithms. Crucial for interviews.",
                  sources: ["https://leetcode.com/"]
                },
                {
                  id: "os_dbms",
                  title: "OS & DBMS",
                  description: "Operating Systems and Database Management."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
} as any as RoadmapData;

// Export the enhanced decision tree for "Help Me Choose"
export const PROGRAMMING_EXTRAS_ROADMAP: RoadmapData = {
  ...(ProgrammingRoadmapEnhanced as any),
  roadmap: [
    {
      ...(ProgrammingRoadmapEnhanced as any).roadmap[0],
      showBackToProgramming: true
    },
    ...(ProgrammingRoadmapEnhanced as any).roadmap.slice(1)
  ]
} as any as RoadmapData;