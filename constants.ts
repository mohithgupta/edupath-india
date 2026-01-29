import { RoadmapData } from './types';

export const PROGRAMMING_ROADMAP: RoadmapData = {
  "meta": {
    "title": "Programming & Software Development",
    "version": "2.0",
    "description": "Career paths and programming language selection guide."
  },
  "language_details": {
    "python": {
      "title": "Python",
      "lotr_character": "The Ent",
      "lotr_analogy": "Help little Hobbits (beginners) understand programming concepts. Help Wizards (scientists) conduct research.",
      "difficulty": 1,
      "avg_salary": "$107,000",
      "popularity": 5,
      "used_to_build": ["YouTube", "Instagram", "Spotify"]
    },
    "java": {
      "title": "Java",
      "lotr_character": "Gandalf",
      "lotr_analogy": "Wants peace & works with everyone (portable). Very popular on all platforms, OS, and devices.",
      "difficulty": 3,
      "avg_salary": "$102,000",
      "popularity": 5,
      "used_to_build": ["Gmail", "Minecraft", "Android Apps", "Enterprise"]
    },
    "c": {
      "title": "C",
      "lotr_character": "One Ring",
      "lotr_analogy": "The power of C is known to them all. Everyone wants its power. Lingua franca of programming.",
      "difficulty": 3,
      "avg_salary": "$102,000",
      "popularity": 5,
      "used_to_build": ["Operating Systems", "Hardware"]
    },
    "cpp": {
      "title": "C++",
      "lotr_character": "Saruman",
      "lotr_analogy": "Everyone thinks he is the good guy, but once you get to know him, you realize he wants power. Complex version of C.",
      "difficulty": 5,
      "avg_salary": "$104,000",
      "popularity": 5,
      "used_to_build": ["Operating Systems", "Browsers", "Games"]
    },
    "javascript": {
      "title": "JavaScript",
      "lotr_character": "Hobbit",
      "lotr_analogy": "Frequently underestimated (powerful). Well-known for the slow, gentle life of the Shire (web browsers).",
      "difficulty": 2,
      "avg_salary": "$99,000",
      "popularity": 5,
      "used_to_build": ["Paypal", "Front-end of majority websites"]
    },
    "c_sharp": {
      "title": "C#",
      "lotr_character": "Elf",
      "lotr_analogy": "Beautiful creature used to stay in their land, Rivendell (Microsoft Platform), but recently started to open up.",
      "difficulty": 3,
      "avg_salary": "$94,000",
      "popularity": 5,
      "used_to_build": ["Enterprise", "Windows Applications"]
    },
    "ruby": {
      "title": "Ruby",
      "lotr_character": "Man (Middle Earth)",
      "lotr_analogy": "Very emotional creature. They feel they are superior & need to rule Middle Earth. Mostly known for Ruby on Rails.",
      "difficulty": 2,
      "avg_salary": "$107,000",
      "popularity": 4,
      "used_to_build": ["Hulu", "Groupon", "Slideshare"]
    },
    "php": {
      "title": "PHP",
      "lotr_character": "Orc",
      "lotr_analogy": "Ugly guy (language) and doesn't respect the rules. Big headache to manage (codes). Suitable for building small sites quickly.",
      "difficulty": 2,
      "avg_salary": "$89,000",
      "popularity": 4,
      "used_to_build": ["Wordpress", "Wikipedia", "Flickr"]
    },
    "objective_c": {
      "title": "Objective-C",
      "lotr_character": "Smaug",
      "lotr_analogy": "Lonely and loves gold. Primary language used by Apple for Mac OS X & iOS.",
      "difficulty": 3,
      "avg_salary": "$107,000",
      "popularity": 3,
      "used_to_build": ["Most iOS Apps", "Part of Mac OS X"]
    }
  },
  roadmap: [
    {
      "id": "programming_hub",
      "title": "Programming & Software Development",
      "type": "root",
      "description": "Start here. Choose to explore by career path or get help choosing a language.",
      "color": "slate",
      "showExtrasLink": true,
      "children": [
        {
          "id": "prog_start",
          "title": "Explore Career Paths",
          "description": "Explore programming by domain. Choose your path.",
          "color": "blue",
          "children": [
            {
              "id": "web_dev",
              "title": "Web Development",
              "description": "Building websites and web applications.",
              "color": "blue",
              "children": [
                {
                  "id": "frontend",
                  "title": "Frontend",
                  "description": "HTML, CSS, JavaScript, React.",
                  "meta_ref": "javascript",
                  "avg_salary": "$99,000",
                  "difficulty": 2,
                  "children": [
                    {
                      "id": "ui_ux",
                      "title": "UI/UX Design",
                      "description": "Figma, User Research, Prototyping."
                    }
                  ]
                },
                {
                  "id": "backend",
                  "title": "Backend",
                  "description": "Node.js (JS), Django (Python), Java.",
                  "children": [
                    {
                      "id": "devops",
                      "title": "DevOps",
                      "description": "Docker, Kubernetes, CI/CD Pipelines."
                    }
                  ]
                }
              ]
            },
            {
              "id": "data_tech",
              "title": "Data & AI",
              "description": "Working with data, ML models, and statistics.",
              "color": "emerald",
              "children": [
                {
                  "id": "data_science",
                  "title": "Data Science",
                  "description": "Python, Pandas, Statistics, Visualization.",
                  "meta_ref": "python",
                  "avg_salary": "$107,000",
                  "difficulty": 1,
                  "exams": ["Google Data Analytics"]
                },
                {
                  "id": "ml_ai",
                  "title": "Machine Learning",
                  "description": "TensorFlow, PyTorch, Neural Networks.",
                  "children": [
                    {
                      "id": "nlp_cv",
                      "title": "NLP & Computer Vision",
                      "description": "Advanced AI fields."
                    }
                  ]
                }
              ]
            },
            {
              "id": "mobile_dev",
              "title": "Mobile App Dev",
              "description": "Android (Kotlin) or iOS (Swift) or Cross-platform (Flutter).",
              "color": "amber",
              "children": [
                {
                  "id": "react_native",
                  "title": "React Native",
                  "description": "Build mobile apps using JavaScript.",
                  "meta_ref": "javascript"
                }
              ]
            },
            {
              "id": "core_cs",
              "title": "Core CS Concepts",
              "description": "Essential for high-level engineering roles.",
              "color": "rose",
              "children": [
                {
                  "id": "dsa",
                  "title": "DSA",
                  "description": "Data Structures & Algorithms. Crucial for interviews.",
                  "sources": ["https://leetcode.com/"]
                },
                {
                  "id": "os_dbms",
                  "title": "OS & DBMS",
                  "description": "Operating Systems and Database Management."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const PROGRAMMING_EXTRAS_ROADMAP: RoadmapData = {
  "meta": {
    "title": "Help Me Choose & Fun",
    "version": "1.0",
    "description": "Language decision helper and analogies."
  },
  "roadmap": [
    {
      "id": "extras_root",
      "title": "Decision & Fun Zone",
      "type": "root",
      "description": "Explore which language fits you best or just have fun with analogies.",
      "color": "purple",
      "children": [
        {
          "id": "start",
          "title": "Help Me Choose a Language",
          "description": "A decision tree to find your perfect first programming language.",
          "color": "orange",
          "children": [
            {
              "id": "kids",
              "title": "For my kids",
              "children": [
                {
                  "id": "scratch",
                  "title": "Start with Scratch",
                  "description": "An easy visual programming language.",
                  "children": [
                    {
                      "id": "python_kids",
                      "title": "Move on to Python",
                      "type": "language",
                      "meta_ref": "python"
                    }
                  ]
                }
              ]
            },
            {
              "id": "dont_know",
              "title": "I don't know, just pick one",
              "children": [
                {
                  "id": "python_default",
                  "title": "Python",
                  "type": "language",
                  "meta_ref": "python"
                }
              ]
            },
            {
              "id": "money_job",
              "title": "Make Money / Get a Job",
              "color": "green",
              "children": [
                {
                  "id": "platform",
                  "title": "Which Platform / Field?",
                  "children": [
                    {
                      "id": "gaming",
                      "title": "3D / Gaming",
                      "children": [
                        {
                          "id": "cpp_gaming",
                          "title": "C++",
                          "type": "language",
                          "meta_ref": "cpp"
                        }
                      ]
                    },
                    {
                      "id": "mobile",
                      "title": "Mobile Apps",
                      "children": [
                        {
                          "id": "mobile_os",
                          "title": "Which OS?",
                          "children": [
                            {
                              "id": "ios",
                              "title": "iOS",
                              "children": [
                                {
                                  "id": "obj_c",
                                  "title": "Objective-C (or Swift)",
                                  "type": "language",
                                  "meta_ref": "objective_c"
                                }
                              ]
                            },
                            {
                              "id": "android",
                              "title": "Android",
                              "children": [
                                {
                                  "id": "java_mobile",
                                  "title": "Java",
                                  "type": "language",
                                  "meta_ref": "java"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": "enterprise",
                      "title": "Enterprise",
                      "children": [
                        {
                          "id": "microsoft_opinion",
                          "title": "What do you think about Microsoft?",
                          "children": [
                            {
                              "id": "ms_fan",
                              "title": "I'm a fan!",
                              "children": [
                                {
                                  "id": "c_sharp_ent",
                                  "title": "C#",
                                  "type": "language",
                                  "meta_ref": "c_sharp"
                                }
                              ]
                            },
                            {
                              "id": "ms_neutral",
                              "title": "Not Bad / Suck",
                              "children": [
                                {
                                  "id": "java_ent",
                                  "title": "Java",
                                  "type": "language",
                                  "meta_ref": "java"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": "web",
                      "title": "Web Development",
                      "children": [
                        {
                          "id": "frontend",
                          "title": "Front-end (Web Interface)",
                          "children": [
                            {
                              "id": "js_front",
                              "title": "JavaScript",
                              "type": "language",
                              "meta_ref": "javascript"
                            }
                          ]
                        },
                        {
                          "id": "backend",
                          "title": "Back-end (Brain behind website)",
                          "children": [
                            {
                              "id": "startup_corp",
                              "title": "I want to work for...",
                              "children": [
                                {
                                  "id": "corporate",
                                  "title": "Corporate",
                                  "children": [
                                    {
                                      "id": "ms_check_web",
                                      "title": "Microsoft User?",
                                      "children": [
                                        {
                                          "id": "c_sharp_web",
                                          "title": "Yes: C#",
                                          "type": "language",
                                          "meta_ref": "c_sharp"
                                        },
                                        {
                                          "id": "java_web",
                                          "title": "No: Java",
                                          "type": "language",
                                          "meta_ref": "java"
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "id": "startup",
                                  "title": "Startup",
                                  "children": [
                                    {
                                      "id": "realtime",
                                      "title": "Does app provide real-time info?",
                                      "children": [
                                        {
                                          "id": "yes_realtime",
                                          "title": "Yes",
                                          "children": [
                                            {
                                              "id": "js_back",
                                              "title": "JavaScript",
                                              "type": "language",
                                              "meta_ref": "javascript"
                                            }
                                          ]
                                        },
                                        {
                                          "id": "no_realtime",
                                          "title": "No",
                                          "children": [
                                            {
                                              "id": "python_ruby_php",
                                              "title": "Python / Ruby / PHP",
                                              "description": "Review the 'Fun' section to choose between these.",
                                              "type": "language",
                                              "meta_ref": "python"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "fun_interest",
          "title": "Just for Fun / Interested",
          "color": "purple",
          "children": [
            {
              "id": "idea_check",
              "title": "Do you have a brilliant idea in mind?",
              "children": [
                {
                  "id": "yes_idea",
                  "title": "Yes",
                  "description": "Go to the 'Get a Job' card in the 'help me choose a langauge' section.",
                  "children": []
                },
                {
                  "id": "no_idea",
                  "title": "No / Not Sure",
                  "children": [
                    {
                      "id": "learning_style",
                      "title": "I prefer to learn things...",
                      "children": [
                        {
                          "id": "easy_way",
                          "title": "The Easy Way",
                          "children": [
                            {
                              "id": "python_easy",
                              "title": "Python",
                              "type": "language",
                              "meta_ref": "python"
                            }
                          ]
                        },
                        {
                          "id": "best_way",
                          "title": "The Best Way",
                          "children": [
                            {
                              "id": "python_best",
                              "title": "Python",
                              "type": "language",
                              "meta_ref": "python"
                            }
                          ]
                        },
                        {
                          "id": "harder_way",
                          "title": "The Slightly Harder Way",
                          "children": [
                            {
                              "id": "car_analogy",
                              "title": "Auto or Manual Car?",
                              "children": [
                                {
                                  "id": "auto_car",
                                  "title": "Auto",
                                  "children": [
                                    {
                                      "id": "java_auto",
                                      "title": "Java",
                                      "type": "language",
                                      "meta_ref": "java"
                                    }
                                  ]
                                },
                                {
                                  "id": "manual_car",
                                  "title": "Manual",
                                  "children": [
                                    {
                                      "id": "c_manual",
                                      "title": "C",
                                      "type": "language",
                                      "meta_ref": "c"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "really_hard",
                          "title": "The Really Hard Way",
                          "children": [
                            {
                              "id": "cpp_hard",
                              "title": "C++",
                              "type": "language",
                              "meta_ref": "cpp"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": "toy_analogy",
                      "title": "Which is your favorite toy?",
                      "children": [
                        {
                          "id": "lego",
                          "title": "Lego",
                          "children": [
                            {
                              "id": "python_lego",
                              "title": "Python",
                              "type": "language",
                              "meta_ref": "python"
                            }
                          ]
                        },
                        {
                          "id": "playdoh",
                          "title": "Play-Doh",
                          "children": [
                            {
                              "id": "ruby_playdoh",
                              "title": "Ruby",
                              "type": "language",
                              "meta_ref": "ruby"
                            }
                          ]
                        },
                        {
                          "id": "old_toy",
                          "title": "Old & Ugly Toy",
                          "children": [
                            {
                              "id": "php_toy",
                              "title": "PHP",
                              "type": "language",
                              "meta_ref": "php"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const ROADMAP_DATA: RoadmapData = {
  "meta": {
    "title": "Indian Education Comprehensive Roadmap",
    "version": "2.0",
    "description": "Education paths from Class 10 to PhD."
  },
  "roadmap": [
    {
      "id": "10th_std",
      "title": "10th Standard",
      "type": "root",
      "description": "The starting point of your higher education journey. Choose your stream wisely based on interest and aptitude.",
      "color": "slate",
      "children": [
        {
          "id": "science_pcm",
          "title": "Science (PCM)",
          "description": "Physics, Chemistry, Maths. For Logic, Tech & Engineering enthusiasts.",
          "color": "blue",
          "children": [
            {
              "id": "btech",
              "title": "B.Tech / B.E.",
              "duration": "4 Years",
              "exams": ["JEE Main", "JEE Advanced", "BITSAT", "MHTCET"],
              "sources": ["https://jeemain.nta.nic.in/"],
              "children": [
                {
                  "id": "mtech",
                  "title": "M.Tech / ME",
                  "duration": "2 Years",
                  "exams": ["GATE"],
                  "description": "Specializations: AI, VLSI, Robotics, Data Science.",
                  "children": [
                    {
                      "id": "phd_engg",
                      "title": "PhD in Engineering",
                      "description": "Deep research in technology.",
                      "sources": ["https://iitd.ac.in/research"]
                    }
                  ]
                },
                {
                  "id": "psu_job",
                  "title": "PSU Jobs",
                  "description": "Jobs in ONGC, NTPC, BHEL via GATE score."
                }
              ]
            },
            {
              "id": "architecture",
              "title": "B.Arch",
              "duration": "5 Years",
              "exams": ["NATA", "JEE Paper 2"],
              "sources": ["https://www.nata.in/"]
            },
            {
              "id": "pure_science",
              "title": "B.Sc / BS-MS (Research)",
              "duration": "3-5 Years",
              "exams": ["IISER Aptitude", "NEST", "CUET"],
              "description": "For future Scientists. Physics, Maths, Chem, Stats.",
              "sources": ["https://www.iiseradmission.in/"],
              "children": [
                {
                  "id": "msc_phy",
                  "title": "M.Sc Physics/Maths",
                  "exams": ["IIT JAM", "TIFR GS"],
                  "children": [
                    {
                      "id": "phd_phy",
                      "title": "PhD (Doctorate)",
                      "description": "Astrophysics, Quantum Computing, Cosmology.",
                      "sources": ["https://www.iiap.res.in/", "https://www.isro.gov.in/"]
                    }
                  ]
                }
              ]
            },
            {
              "id": "nda",
              "title": "National Defence Academy",
              "description": "Join Army/Navy/AirForce as Officer.",
              "exams": ["NDA Exam (UPSC)"],
              "sources": ["https://upsc.gov.in/"]
            }
          ]
        },
        {
          "id": "science_pcb",
          "title": "Science (BiPC)",
          "description": "Physics, Chemistry, Biology. For Medical & Life Sciences.",
          "color": "emerald",
          "children": [
            {
              "id": "mbbs",
              "title": "MBBS / BDS",
              "duration": "5.5 Years",
              "exams": ["NEET UG"],
              "sources": ["https://neet.nta.nic.in/"],
              "children": [
                {
                  "id": "md_ms",
                  "title": "MD / MS",
                  "exams": ["NEET PG", "INI-CET"],
                  "children": [
                    {
                      "id": "dm_mch",
                      "title": "Super Speciality (DM/MCh)",
                      "description": "Cardiology, Neurology, Oncology."
                    }
                  ]
                }
              ]
            },
            {
              "id": "bsc_bio",
              "title": "B.Sc Life Sciences",
              "exams": ["CUET"],
              "description": "Zoology, Botany, Microbiology, Genetics.",
              "children": [
                {
                  "id": "msc_bio",
                  "title": "M.Sc",
                  "exams": ["IIT JAM", "GAT-B"],
                  "children": [
                    {
                      "id": "phd_bio",
                      "title": "PhD Research",
                      "description": "CRISPR, Virology, Marine Biology, Neuroscience.",
                      "sources": ["https://rcb.res.in/"]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "commerce",
          "title": "Commerce (MEC/CEC)",
          "description": "Finance, Business, Economics, Law.",
          "color": "amber",
          "children": [
            {
              "id": "ca_cs",
              "title": "CA / CS / CMA",
              "description": "Professional certifications. Can be done alongside degree.",
              "exams": ["CA Foundation", "CSEET"],
              "sources": ["https://www.icai.org/"]
            },
            {
              "id": "bcom",
              "title": "B.Com / BBA",
              "exams": ["CUET", "IPMAT"],
              "children": [
                {
                  "id": "mba",
                  "title": "MBA",
                  "exams": ["CAT", "XAT", "GMAT"],
                  "sources": ["https://iimcat.ac.in/"]
                },
                {
                  "id": "phd_eco",
                  "title": "PhD Economics/Finance",
                  "description": "Behavioral Finance, Public Policy.",
                  "sources": ["https://www.rbi.org.in/"]
                }
              ]
            }
          ]
        },
        {
          "id": "arts",
          "title": "Arts & Humanities",
          "description": "Society, Policy, Design, Media.",
          "color": "rose",
          "children": [
            {
              "id": "law",
              "title": "BA LLB (Law)",
              "duration": "5 Years",
              "exams": ["CLAT", "AILET"],
              "sources": ["https://consortiumofnlus.ac.in/"],
              "children": [
                {
                  "id": "judge",
                  "title": "Judiciary / Litigation",
                  "description": "Civil Judge, Corporate Lawyer."
                }
              ]
            },
            {
              "id": "design",
              "title": "B.Des (Design)",
              "exams": ["NIFT", "NID", "UCEED"],
              "sources": ["https://nift.ac.in/"]
            },
            {
              "id": "upsc",
              "title": "Civil Services",
              "exams": ["UPSC CSE"],
              "description": "IAS, IPS, IFS - The Administrative Backbone.",
              "sources": ["https://upsc.gov.in/"]
            }
          ]
        },
        {
          "id": "diploma",
          "title": "Polytechnic / Diploma",
          "description": "Skill-based technical education after 10th.",
          "color": "zinc",
          "children": [
            {
              "id": "poly_eng",
              "title": "Engineering Diploma",
              "duration": "3 Years",
              "exams": ["PolyCET"],
              "children": [
                {
                  "id": "btech_lat",
                  "title": "B.Tech (Lateral Entry)",
                  "description": "Join directly in 2nd Year B.Tech.",
                  "exams": ["ECET"]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};