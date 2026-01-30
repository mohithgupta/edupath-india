import { RoadmapData } from './types';
import After10thDataEnhanced from './After10th_data_enhanced.json';
import ProgrammingRoadmapEnhanced from './programming_roadmap_enhanced.json';

// Export the enhanced After 10th data
export const ROADMAP_DATA: RoadmapData = After10thDataEnhanced as any as RoadmapData;

// Export the Programming Career Path Hub (Original Intent)
export const PROGRAMMING_ROADMAP: RoadmapData = {
  meta: {
    title: "Software Engineering Career Roadmap",
    version: "2.5",
    description: "A comprehensive guide to modern software engineering roles, core concepts, and career trajectories."
  },
  language_details: (ProgrammingRoadmapEnhanced as any).language_details,
  roadmap: [
    {
      id: "programming_hub",
      title: "Programming & Software Development",
      type: "root",
      description: "Your comprehensive portal to the world of coding. Start by exploring career domains or use our decision tree to pick your first language.",
      color: "slate",
      showExtrasLink: true,
      children: [
        {
          id: "prog_start",
          title: "Explore Career Paths",
          description: "Dive into specific specialized domains of software engineering to see what fits your interests.",
          color: "blue",
          children: [
            {
              id: "web_dev",
              title: "Web Development",
              description: "Building the digital infrastructure of the internet, from simple blogs to complex enterprise applications.",
              color: "blue",
              avg_salary: "₹5L - ₹25L+ p.a.",
              technologies: ["HTML/CSS", "JavaScript", "React/Next.js", "Node.js", "PostgreSQL"],
              career_paths: ["Frontend Developer", "Backend Developer", "Fullstack Architect"],
              children: [
                {
                  id: "frontend",
                  title: "Frontend Engineering",
                  description: "Creating the visual, interactive, and user-facing parts of websites using modern web technologies.",
                  meta_ref: "javascript",
                  avg_salary: "₹6L - ₹18L p.a.",
                  difficulty: 2,
                  technologies: ["React", "Vue", "TypeScript", "Tailwind CSS", "Three.js"],
                  career_trajectories: [
                    "Junior Frontend Dev → Senior UI Engineer",
                    "Frontend Architect → Head of Experience"
                  ],
                  children: [
                    {
                      id: "ui_ux",
                      title: "UI/UX Design",
                      description: "Focuses on the user's journey, usability, and the visual aesthetics of the digital product.",
                      technologies: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing"],
                      career_trajectories: [
                        "UI Designer → Product Designer",
                        "UX Researcher → Head of Design"
                      ],
                      note: "Perfect for those who bridge the gap between creative visual art and logical user behavior."
                    }
                  ]
                },
                {
                  id: "backend",
                  title: "Backend Engineering",
                  description: "Architecting server-side logic, database management, and robust API integrations that power systems.",
                  avg_salary: "₹7L - ₹22L p.a.",
                  difficulty: 3,
                  technologies: ["Node.js", "Python (Django/Flask)", "Java (Spring)", "Go", "Redis"],
                  career_paths: ["Backend Developer", "Database Architect", "API Engineer"],
                  children: [
                    {
                      id: "devops",
                      title: "DevOps & Cloud",
                      description: "Bridging the gap between software development and IT operations to ensure fast, reliable, and scalable delivery.",
                      technologies: ["Docker", "Kubernetes", "AWS/Azure", "CI/CD (Jenkins/GitHub Actions)", "Terraform"],
                      avg_salary: "₹8L - ₹30L+ p.a.",
                      career_paths: ["Cloud Architect", "SRE (Site Reliability Engineer)", "Platform Engineer"],
                      difficulty: 4,
                      note: "The 'glue' of modern software teams. Highly paid and critically important for scaling."
                    }
                  ]
                }
              ]
            },
            {
              id: "data_tech",
              title: "Data Science & AI",
              description: "The science of extracting meaningful insights from massive datasets and building predictive, intelligent systems.",
              color: "emerald",
              avg_salary: "₹7L - ₹35L+ p.a.",
              technologies: ["Python", "SQL", "Spark", "TensorFlow", "Hadoop"],
              career_paths: ["Data Scientist", "ML Engineer", "Data Analyst"],
              children: [
                {
                  id: "data_science",
                  title: "Data Science",
                  description: "Combines statistical methods, programming, and domain expertise to solve complex business problems.",
                  meta_ref: "python",
                  avg_salary: "₹8L - ₹22L p.a.",
                  difficulty: 3,
                  technologies: ["Python", "Pandas/NumPy", "Scikit-Learn", "SQL", "Tableau/PowerBI"],
                  exams: ["Google Data Analytics", "IBM Data Science Professional"],
                  career_trajectories: [
                    "Data Analyst → Senior Data Scientist",
                    "Decision Scientist → Chief Data Officer"
                  ]
                },
                {
                  id: "ml_ai",
                  title: "Machine Learning",
                  description: "Development of advanced algorithms that allow computers to learn patterns and make autonomous decisions from data.",
                  technologies: ["TensorFlow", "PyTorch", "Deep Learning", "Neural Networks"],
                  avg_salary: "₹10L - ₹30L p.a.",
                  difficulty: 5,
                  career_paths: ["ML Engineer", "AI Researcher", "Computer Vision Specialist"],
                  children: [
                    {
                      id: "nlp_cv",
                      title: "Advanced AI (NLP/CV)",
                      description: "Specialized fields focused on processing human language and interpreting visual information.",
                      technologies: ["Transformers", "HuggingFace", "OpenCV", "LLMs (Large Language Models)"],
                      note: "The cutting-edge technology behind ChatGPT, Stable Diffusion, and autonomous vehicles."
                    }
                  ]
                }
              ]
            },
            {
              id: "mobile_dev",
              title: "Mobile App Development",
              description: "Building high-performance applications for iOS, Android, and cross-platform mobile environments.",
              color: "amber",
              avg_salary: "₹6L - ₹25L p.a.",
              technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Dart"],
              career_paths: ["iOS Developer", "Android Developer", "Mobile Architect"],
              children: [
                {
                  id: "react_native",
                  title: "React Native",
                  description: "Leverage React and JavaScript to build truly native mobile apps for iOS and Android with a single codebase.",
                  meta_ref: "javascript",
                  avg_salary: "₹6L - ₹18L p.a.",
                  technologies: ["JavaScript/TypeScript", "React", "Metro", "Native Modules"],
                  note: "Ideal for startups needing to launch on both platforms quickly and efficiently."
                }
              ]
            },
            {
              id: "core_cs",
              title: "Core CS Concepts",
              description: "The fundamental logical pillars of computer science required for high-end engineering and design roles.",
              color: "rose",
              difficulty: 4,
              career_paths: ["System Architect", "Embedded Engineer", "Software Researcher"],
              children: [
                {
                  id: "dsa",
                  title: "DSA (Data Structures)",
                  description: "The foundational methods of organizing data and implementing logic to solve computational problems efficiently.",
                  technologies: ["Arrays/Graphs", "Linked Lists", "Sorting Algorithms", "Dynamic Programming", "Trees"],
                  difficulty: 5,
                  avg_salary: "Higher entry-level packages in Product Companies",
                  sources: ["https://leetcode.com/", "https://geeksforgeeks.org/", "https://interviewbit.com/"],
                  note: "This is the 'Great Filter' of technical interviews. Mastery here is required for Google, Amazon, and Microsoft."
                },
                {
                  id: "os_dbms",
                  title: "OS & Database Systems",
                  description: "Understanding how computers manage resources (Memory, CPU) and how data is persisted and queried at scale.",
                  technologies: ["SQL/NoSQL", "Transaction Management", "Memory Paging", "Processes & Threads", "System Design"],
                  difficulty: 4,
                  career_paths: ["DBA", "System Developer", "SRE"],
                  note: "Crucial for understanding how to build high-performance, concurrent, and scalable distributed systems."
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