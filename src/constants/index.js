import horizon from '../assets/Horizon.png';
import continual from '../assets/download.png';
import resume from '../assets/resumefigure1.jpeg';
import rag from '../assets/rag.png';

export const HERO_CONTENT = 
`I am a passionate software developer with a knack for crafting robust and scalable web applications. 
With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, 
as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise 
to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = 
`Hi, I'm Om Singhan, a passionate coder currently pursuing my Master's Degree in Computer Engineering at New York University. 
My academic journey is driven by a deep interest in Machine Learning, Algorithms and Artificial Intelligence.
Beyond the classroom, I believe in maintaining a balanced and active lifestyle. Whether I'm on the soccer field with friends, 
showcasing my moves on the NYU dance team, or strumming my guitar (with a merit degree from the London School of Music to my name), 
Im always seeking new ways to engage both mind and body.
${"\n"}${"\n"}
If I had to describe myself in three phrases, they'd be: passionate coder, music lover, and health enthusiast..`;

export const EXPERIENCES = [
  {
    year: "Feb 2024 - Present",
    role: "Lead Software Developer",
    company: "MAK Capital",
    description: 
      `Spearheaded a modular LLM analytics pipeline using OpenAI APIs and LoRA fine-tuning, boosting alpha signal throughput by 40%. 
      Developed a Python screening engine with SEC Edgar API, Pandas, and NumPy, flagging 50%+ insider sell-offs, achieving 20% downside capture on shorts. 
      Integrated scalable ETL workflows with async RESTful APIs (Yahoo Finance, SEC Edgar), reducing false positives by 30% via market filters.`,
    technologies: ["Python", "OpenAI", "Pandas", "NumPy", "REST APIs"],
  },
  {
    year: "September 2024 - Present",
    role: "Research Assistant",
    company: "New York University",
    description: 
      `Created a scalable visualization tool using Node.js and Socket.io, enabling 30% faster situational response and enhancing grid management efficiency. 
      Achieved 50% improved data fetching efficiency by incorporating TimeScale to handle large datasets, supporting high fidelity modeling and real-time processing. 
      Designed D3.js dashboards providing actionable insights into grid health and resilience, allowing 10+ metrics for real-time monitoring. Established CI/CD pipelines and explored predictive ML models, contributing to 15% improvement in outage prediction accuracy.`,
    technologies: ["Socket.io", "Node.js", "TimeScale", "D3.js", "HTML/CSS"],
  },
  {
    year: "May 2023 - August 2023",
    role: "Software Developer",
    company: "Aroris Health",
    description: 
      `Developed and maintained web application using GraphQL types, TypeORM migrations, and React components, resolving 10+ critical bugs and adding features. 
      Implemented a data validator feature via API with advanced routing, integrated with company databases, ensuring HIPAA compliance. 
      Created a data anonymization feature, enhancing data security for 1000+ patient records.`,
    technologies: ["React.js", "Node.js", "GraphQL", "TypeORM", "Jira"],
  },
  {
    year: "April 2023 - June 2023",
    role: "Software Developer",
    company: "Ufaber Edutech Pvt. Ltd.",
    description: 
      `Led Agile frontend development for "IELTS Ninja" and "Fluent Life" apps using Flutter, achieving 100K+ downloads on both platforms. 
      Optimized CI/CD pipelines with Husky commits, automated tests, and Docker build images, improving code quality with lint and Prettier. 
      Integrated "IELTS Ninja" with OpenAI API, increasing accuracy by 14%.`,
    technologies: ["Python", "React.js", "SQLite", "Django", "Husky"],
  },
];

export const PROJECTS = [
  {
    title: "AI Fitness Tool Using Retrieval Augmented Generation (RAG)",
    image: rag,
    sourceCode: "https://github.com/Om1513/RAG_PersonalFitnessTool",
    description:
      `Developed a job-matching system using the Doc2Vec algorithm, enabling semantic matching between resumes and job descriptions.
       The project leveraged advanced text processing with NLTK and SpaCy for tokenization and lemmatization, and utilized Gensim for Doc2Vec implementation. 
       Integrated a deep learning model to enhance accuracy, employing Pandas and NumPy for efficient data handling. The system provides an accuracy score for 
       how well a resume fits a job description and generates the top 5 most suitable resumes for any given job description. It calculates cosine similarity scores to quantify matches, processing datasets from Kaggle and Hugging Face, specifically tailored to the tech industry. This approach resulted in a powerful tool that significantly streamlines the recruitment process.`,
    technologies: ["Python", "Streamlit", "Langflow", "AstraDB", "OpenAI API"],
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

export const CONTACT = {
  address: "137 Albany Avenue, Brooklyn, NY 11213",
  phoneNo: "+1 9173280100 ",
  email: "omsinghan25@gmail.com",
};
