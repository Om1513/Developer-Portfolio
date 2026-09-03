import horizon from '../assets/Horizon.png';
import continual from '../assets/download.png';
import resume from '../assets/resumefigure1.jpeg';
import rag from '../assets/rag.png';
import nyu from '../assets/nyu.jpg';

export const HERO_CONTENT =
`I am a software engineer who builds production backends and the AI systems that run on top of them.
At Sewer AI I ship secure RESTful APIs and fault-tolerant distributed pipelines in Node.js, TypeScript,
Fastify, and PostgreSQL that process 10,000+ hours of inspection data a day. I hold an MS in Computer
Engineering from NYU, and I care most about the unglamorous parts of the craft: tests that catch real bugs,
services that stay up on-call, and documentation the next engineer can actually use.`;

export const ABOUT_TEXT =
`Hi, I'm Om Singhan, a software engineer at Sewer AI and a 2025 graduate of New York University,
where I earned my MS in Computer Engineering (3.89 GPA, Dean's List).
I work across the stack — production APIs, distributed pipelines, and applied AI — with a deep interest in
Machine Learning, Algorithms and Agentic AI.
Beyond work, I believe in maintaining a balanced and active lifestyle. Whether I'm on the soccer field with friends,
showcasing my moves on the NYU dance team, or strumming my guitar (with a merit degree from the London School of Music to my name),
Im always seeking new ways to engage both mind and body.
${"\n"}${"\n"}
If I had to describe myself in three phrases, they'd be: passionate coder, music lover, and health enthusiast..`;

export const EXPERIENCES = [
  {
    year: "September 2025 - Present",
    role: "Software Engineer",
    type: "Full-time",
    company: "Sewer AI",
    location: "San Francisco, CA",
    highlights: [
      {
        label: "Full-Stack API Development",
        text: `Shipped and maintained secure, production RESTful APIs and backend services in Node.js, TypeScript,
        Fastify, and PostgreSQL, applying algorithmic and architectural optimizations to sustain 10,000+ requests
        with sub-500ms latency.`,
      },
      {
        label: "Test-Driven Development",
        text: `Strengthened engineering craft and reliability through Jest unit/integration and Playwright end-to-end
        testing, reducing production bugs by 40% and achieving 85% code coverage.`,
      },
      {
        label: "Microservices Architecture",
        text: `Owned fault-tolerant, state-aware distributed pipelines (Temporal.io) end-to-end, from design through
        production operation, processing 10,000+ hours of inspection data daily at 99.5% reliability.`,
      },
      {
        label: "Incident Response & Triage",
        text: `Operated and monitored production systems during on-call rotations, triaging incidents and applying
        root cause analysis to restore service reliability and minimize downtime.`,
      },
      {
        label: "Collaborative Development",
        text: `Drove team knowledge-sharing through Git-based version control and peer code reviews within Agile/Scrum
        sprint cycles; authored technical documentation for backend services and data pipelines to support long-term
        maintainability and onboarding.`,
      },
    ],
    technologies: ["TypeScript", "Node.js", "Fastify", "PostgreSQL", "Temporal.io", "Jest", "Playwright"],
  },
  {
    year: "February 2025 - May 2025",
    role: "Artificial Intelligence (AI) Developer",
    type: "Intern",
    company: "MAK Capital",
    location: "New York, NY",
    highlights: [
      {
        label: "Multimodal RAG Integration",
        text: `Engineered and shipped a multimodal RAG pipeline (Azure Document Intelligence, GPT-4, LangChain),
        boosting response accuracy 40% through semantic chunking and text/image analysis.`,
      },
      {
        label: "ETL Pipeline Design",
        text: `Architected scalable cloud data ingestion, transformation, and storage pipelines (Python, AWS Lambda, S3),
        converting raw JSON into governed datasets for analytics and exploratory analysis.`,
      },
      {
        label: "Automation & Predictive Modeling",
        text: `Developed an automated sentiment analysis system (BeautifulSoup, Scrapy, FinBERT) to identify short
        opportunities from financial news, delivering 80% prediction accuracy and trading alpha.`,
      },
    ],
    technologies: ["Python", "GPT-4", "LangChain", "Azure", "AWS Lambda", "S3", "FinBERT"],
  },
  {
    year: "September 2024 - May 2025",
    role: "Research Assistant",
    company: "New York University",
    location: "New York, NY",
    highlights: [
      {
        label: "Time-Series Analytics & Visualization",
        text: `Delivered user-facing D3.js dashboards over TimescaleDB for real-time and historical grid metrics,
        improving query performance 50%.`,
      },
      {
        label: "AI Simulation & Model Lifecycle",
        text: `Designed and trained a power grid simulator (TensorFlow) generating 150,000+ synthetic samples at
        88% accuracy, with feedback loops for iterative refinement and drift resilience.`,
      },
      {
        label: "Mentorship & Code Review",
        text: `Mentored 2 junior developers on code review practices and software design principles.`,
      },
    ],
    technologies: ["Python", "TensorFlow", "TimescaleDB", "Express", "D3.js"],
  },
  {
    year: "May 2024 - August 2024",
    role: "Software Development Engineer",
    type: "Intern",
    company: "Aroris Health",
    location: "Minneapolis, MN",
    highlights: [
      {
        label: "Secure, Scalable System Design",
        text: `Designed secure, scalable API infrastructure (Python, Firebase) with HIPAA-compliant authentication,
        protecting 1,000+ patient health records while building data governance systems for AI-ready pipelines.`,
      },
      {
        label: "Cross-Functional Product Collaboration",
        text: `Partnered with product managers and UX designers to translate user needs into data-centric frontend
        features for analytics and reporting workflows, applying core UI/UX principles to improve usability.`,
      },
      {
        label: "Security-First Design",
        text: `Implemented OAuth 2.0 authentication, SQL injection prevention, and encrypted data transmission
        following OWASP guidelines to protect sensitive patient data.`,
      },
      {
        label: "Monitoring & Observability",
        text: `Operated and continuously improved system observability by building and maintaining monitoring
        dashboards and alerting rules, enabling faster detection and resolution of pipeline and API issues.`,
      },
    ],
    technologies: ["Python", "Firebase", "OAuth 2.0", "OWASP", "React.js"],
  },
  {
    year: "April 2023 - June 2023",
    role: "Software Developer",
    company: "Ufaber Edutech Pvt. Ltd.",
    highlights: [
      {
        label: "Cross-Platform App Development",
        text: `Led Agile frontend development for "IELTS Ninja" and "Fluent Life" apps using Flutter, achieving
        100K+ downloads on both platforms.`,
      },
      {
        label: "CI/CD & Code Quality",
        text: `Optimized CI/CD pipelines with Husky commits, automated tests, and Docker build images, improving
        code quality with lint and Prettier.`,
      },
      {
        label: "LLM Integration",
        text: `Integrated "IELTS Ninja" with the OpenAI API, increasing accuracy by 14%.`,
      },
    ],
    technologies: ["Python", "React.js", "SQLite", "Django", "Husky"],
  },
];

export const PROJECTS = [
  {
    title: "NSF Funded: Distribution System Situational Awareness via Continuous-Time Adaptive Data Fusion",
    image: nyu,
    description:
      `Designed and trained a power grid simulator (TensorFlow) generating 150,000+ synthetic samples at 88% accuracy,
      with feedback loops for iterative model refinement and drift resilience. Delivered user-facing D3.js dashboards
      for real-time and historical metrics backed by TimescaleDB and an Express API, improving query performance 50%
      through chart-selection and color-hierarchy best practices.`,
    technologies: ["Generative AI", "TensorFlow", "TimescaleDB", "Express", "Python", "D3.js"],
  },
  {
    title: "AI Fitness Tool Using Retrieval Augmented Generation (RAG)",
    image: rag,
    sourceCode: "https://github.com/Om1513/RAG_PersonalFitnessTool",
    description:
      `Built a personal fitness assistant that grounds LLM responses in a curated corpus of training and nutrition material
      instead of answering from memory alone. Documents are chunked and embedded into an AstraDB vector store, retrieved by
      semantic similarity at query time, and passed to the OpenAI API as context, so recommendations stay traceable to a source.
      The retrieval and prompting flow is orchestrated in Langflow and exposed through a Streamlit interface where users can
      describe their goals, constraints, and equipment and get back a plan with the supporting passages surfaced alongside it.`,
    technologies: ["Python", "Streamlit", "Langflow", "AstraDB", "OpenAI API", "RAG"],
  },
  {
    title: "Enhanced Resume/CV Matching Using Doc2Vec and Deep Learning",
    image: resume,
    sourceCode: "https://github.com/revforyou/DEEPLEARNINGFINAL",
    description:
      `Developed a job-matching system using the Doc2Vec algorithm, enabling semantic matching between resumes and job descriptions.
       The project leveraged advanced text processing with NLTK and SpaCy for tokenization and lemmatization, and utilized Gensim for Doc2Vec implementation.
       Integrated a deep learning model to enhance accuracy, employing Pandas and NumPy for efficient data handling. The system provides an accuracy score for
       how well a resume fits a job description and generates the top 5 most suitable resumes for any given job description. It calculates cosine similarity scores to quantify matches, processing datasets from Kaggle and Hugging Face, specifically tailored to the tech industry. This approach resulted in a powerful tool that significantly streamlines the recruitment process.`,
    technologies: ["Python", "NTLK/SpaCy", "Doc2Vec", "Gensim", "Pandas", "NumPy"],
  },
  {
    title: "Continual Learning with Regularization-Based Methods",
    sourceCode: "https://github.com/Om1513/Continual-Learning-with-Regularization-Based-Methods",
    image: continual,
    description:
      `Developed and implemented a research project focused on addressing catastrophic forgetting in neural networks through
      regularization-based continual learning methods. Specifically, I explored Elastic Weight Consolidation (EWC) and adaptive
      EWC to evaluate their effectiveness in recovering flat regions within the optimization landscape. The project involved
      rigorous testing on benchmarks such as Permuted MNIST, demonstrating improved model stability and adaptability across
      sequential tasks. This work contributes to advancing the understanding of how regularization can be leveraged to maintain
      performance in dynamic learning environments.`,
    technologies: ["Python", "TensorFlow", "PyTorch", "Latex"],
  },
  {
    title: "Horizon- Banking Made Easy",
    image: horizon,
    live: "https://horizon-banking.vercel.app/",
    sourceCode: "https://github.com/Om1513/bankingapp",
    description:
      `Developed Horizon, a financial SaaS platform built with Next.js, TypeScript, and Appwrite, that connects to multiple bank
      accounts using Plaid, displays transactions in real-time, and enables secure fund transfers via Dwolla. Leveraged React Hook
      Form, Zod, and TailwindCSS to implement robust authentication, dynamic user interfaces, and responsive design across all devices.
      Implemented real-time updates, pagination, and filtering for transaction history, enhancing user experience. Actively contributed
      to the platform's code architecture, focusing on reusability and performance optimization, and engaged with a vibrant developer
      community to resolve issues and continuously improve the platform.`,
    technologies: ["React", "Next.js", "Appwrite", "PLAID", "Dwolla", "TailwindCSS", "TypeScript"],
  },
  // {
  //   title: "Code Summarizer Using BERT",
  //   // image: project2,
  //   description:
  //   `Designed a Bidirectional Encoder Representations from Transformers (BERT) model to alleviate developer’s struggles
  //   incomprehending intricate syntaxes caused by the absence of code comments and descriptions.Emphasized on optimizing
  //   hyperparameters, resulting in a significant 12% enhancement in accuracy. Deployed an extension, empowering developers
  //   to effortlessly generate comments and function descriptions, streamlining their coding workflows`,
  //   technologies: ["Python", "BERT","Tensorflow","Keras"],
  // },
];

export const EDUCATION = [
  {
    year: "September 2023 - May 2025",
    degree: "Master of Science (MS), Computer Engineering",
    school: "New York University",
    location: "New York, NY",
    detail: "GPA: 3.89/4 · Dean's List",
  },
  {
    year: "July 2019 - May 2023",
    degree: "Bachelor of Technology, Computer Engineering",
    school: "NMIMS (Deemed-to-be University)",
    location: "Mumbai, India",
    detail: "GPA: 3.76/4",
  },
];

export const CONTACT = {
  address: "Chicago, IL",
  phoneNo: "+1 9173280100 ",
  email: "omsinghan25@gmail.com",
};
