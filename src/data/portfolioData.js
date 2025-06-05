export const portfolioData = {
    personal: {
      name: "Ashish Reddy Tummuri",
      title: "Data Science & ML Engineer",
      location: "Manhattan, NY",
      phone: "646-385-9474",
      email: "ashish48769@gmail.com",
      linkedin: "https://linkedin.com/in/ashishrt",
      github: "https://github.com/ashish-reddy-t/",
      tagline: "Building intelligent systems at the intersection of AI and software engineering"
    },
    
    education: {
      degree: "B.A. Data Science",
      minor: "Business Studies",
      school: "New York University – College of Arts & Science",
      location: "Manhattan, NY",
      duration: "Aug. 2024 - May. 2028",
      gpa: "3.88/4.0",
      majorGPA: "4.0/4.0",
      coursework: ["Python Programming", "Java Programming", "Object-Oriented Programming", "Calculus I", "Calculus II"]
    },
    
    skills: {
      "Languages & Query": ["Python", "Java", "SQL"],
      "LLM/ML Frameworks": ["Hugging Face Transformers", "PEFT (LoRA/DoRA)", "DPO", "LangChain", "PyTorch", "Numpy", "Pandas", "Scikit-learn", "OpenCV", "FAISS", "ElasticSearch", "CLIP", "BM25"],
      "Web & DevOps": ["AngularJS", "HTML/CSS", "Kivy", "Git", "FastAPI", "Pygame"]
    },
    
    experience: [
      {
        id: 1,
        title: "Software Developer Intern",
        company: "BMS Solutions LLC",
        location: "Dubai, UAE",
        duration: "Jun. 2023 – Aug. 2023",
        description: [
          "Developed and enhanced front-end components of the company's school portal system using HTML, CSS, and AngularJS",
          "Enhanced user experience by implementing frontend improvements using AngularJS and CSS, resolving critical issues, and introducing new functionalities such as streamlined payment access for parents",
          "Utilized Flask (Python) and SQL to build and optimize backend functionalities, ensuring seamless data management and system efficiency"
        ]
      }
    ],
    
    certifications: [
      {
        title: "Inspirit AI Scholars Program",
        description: "Object Detection for Self-Driving Cars based upon CNNs",
        period: "Summer 2023"
      },
      {
        title: "Member, NYU Self-Drive VIP team",
        description: "Looking to build 4-bit YOLO object detection on NVIDIA Jetson",
        period: "Fall 2025"
      },
      {
        title: "HarvardX CS50x Introduction to Computer Science",
        description: "in progress",
        period: "Jul. 2025"
      }
    ],
    
    projects: [
      {
        id: 1,
        title: "Hallucination-Resistant LLM",
        status: "ongoing",
        technologies: ["Python", "DoRA", "Self-RAG"],
        description: "Architecting a 'self-retrieval' LLM that emits [Retrieve] tokens mid-generation with CoVe-style verification",
        highlights: [
          "Tool-augmented with Google Fact-Check API, Wolfram-Alpha, and Python REPL for numeric/logic queries",
          "Training on 4-bit Mistral-7B-Instruct with DoRA adapters; adversarially fine-tuned using synthetic counter-factuals",
          "Early tests on HaluEval show ≈20% hallucination-reduction vs plain QLoRA"
        ],
        github: "https://github.com/Ashish-Reddy-T/HallucinationResistantProject",
        featured: true
      },
      {
        id: 2,
        title: "Corner 'Vibe Search' RAG Engine",
        status: "completed",
        technologies: ["Python", "FastAPI", "FAISS", "Hugging Face", "Ollama"],
        description: "Built a retrieval-augmented semantic search system for Corner's Datathon track",
        highlights: [
          "Executed multimodal retrieval by combining CLIP image encodings with bge-large-en text embeddings",
          "Implemented hybrid score fusion re-ranking (0.4*FAISS + 0.6*LLM scores)",
          "Deployed with FastAPI supporting 20+ QPS"
        ],
        demo: "https://youtu.be/pe6IovJ92xs",
        github: "https://github.com/Ashish-Reddy-T/vibeSearchForCorner",
        featured: true
      },
      {
        id: 3,
        title: "PEFT at the Edge: Comparing LoRA-Family Methods",
        status: "research in progress",
        technologies: ["Python", "PyTorch", "LoRA", "QLoRA", "SC-LoRA"],
        description: "Systematically benchmarking LoRA-family methods on ≤16 GB GPUs",
        highlights: [
          "Testing on TinyLlama 1.1B & Mistral 7B (4-bit) inside Kaggle's free T4/P100 instances",
          "Logging VRAM footprint, epoch time, and AlpacaEval scores",
          "Preparing arXiv pre-print plus open-source training scripts"
        ],
        github: "https://github.com/ashish-reddy-t/",
        featured: false
      },
      {
        id: 4,
        title: "Siamese Face Recognition App",
        status: "completed",
        technologies: ["Python", "Tensorflow", "OpenCV", "Kivy"],
        description: "Implemented contrastive-loss Siamese network with high accuracy metrics",
        highlights: [
          "Achieved 95% Precision, 93% Recall and 85% Verification Accuracy",
          "Packaged into cross-platform GUI (Kivy) for real-time CPU inference"
        ],
        github: "https://github.com/Ashish-Reddy-T/Siamese-Face-Recognition-Model",
        featured: false
      },
      {
        id: 5,
        title: "Sentiment Analysis with LoRA",
        status: "completed",
        technologies: ["Python", "PyTorch", "Hugging Face", "LoRA"],
        description: "Engineered an IMDB review sentiment classifier using DistilBERT with LoRA",
        highlights: [
          "Implemented memory-optimized training with gradient checkpointing, reducing memory footprint by ~60%",
          "Developed end-to-end pipeline processing 50K+ movie reviews with stratified 80-10-10 splits",
          "Integrated LayerIntegratedGradients-based interpretability system with interactive HTML visualizations"
        ],
        github: "https://github.com/Ashish-Reddy-T/SentimentAnalysisUsingLoRA",
        featured: false
      },
      {
        id: 6,
        title: "Space Invaders, Tetris & Snake Game Retro Replicas",
        status: "completed",
        technologies: ["Python", "Pygame", "Vector"],
        description: "Developed Retro games using Pygame.",
        highlights: [
          "Developed Space Invaders, Tetris, and Snake.io from scratch using Pygame; focused on enhancing logic, problem-solving, and debugging skills.",
          "Implemented ghost pieces in Tetris to preview the landing position of tetrominoes, improving player strategy and gameplay fluidity.",
          "Engineered sprite animations, AI-controlled enemy movement, dynamic scoring, and collision detection to replicate the original arcade experience"
        ],
        github: "https://github.com/stars/Ashish-Reddy-T/lists/recreational-games",
        featured: false
      }
    ]
  };