import horizon from '../assets/horizon.png';
import continual from '../assets/download.png';
import resume from '../assets/resumefigure1.jpeg';

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
    year: "2023 - Present",
    role: "Software Developer",
    company: "Aroris Health",
    description: 
    `Developed and maintained web application using GraphQl types, TypeORM Migrations and React components while fixing 10+ critical bugs and adding new features. 
    Implemented  a Data Validator feature to be called via API using advanced routing and integrated it with company's databases and the platform. 
    Created a data anonymization feature to ensure HIPAA compliance, resulting in improved data security for the company.`,
    technologies: [ "React.js", "Node.js", "GraphQL", "TypeORM","Jira"],
  },
  {
    year: "2022 - 2023",
    role: "Software Developer",
    company: "Ufaber Edutech Pvt. Ltd.",
    description: 
    `Led Agile frontend development for "IELTS Ninja" and "Fluent Life" apps using Flutter, achieving 100K+ downloads on both
    platforms.Optimized development pipelines by building Husky commits, improving CI/CD by implementing automated tests and build images for 
    dockerfiles along with lint and prettier styles to beautify our codebase. 
    Collaborated across cross-functional teams, integrating "IELTS Ninja" with OpenAI API, resulting in a 14% accuracy increase.`,
    technologies: ["Python", "React.js", "SQLite", "Django","Husky"],
  },
  {
    year: "2021 - 2022",
    role: "Machine Learning Developer",
    company: "Adani Energy Mumbai Ltd.",
    description: 
    `Utilized PowerBI and MySQL for comprehensive business reports on cable line expenses and maintenance.
    Developed a Python script to automate data extraction,analysis and cleaning, saving hours of manual work.
    Deployed ARIMA Time Series model to predict future cable line expenses, reducing costs by 15% and securing cable lines in Mumbai.
    `,
    technologies: ["Python", "MATLAB", "PowerBI", "SQL"],
  },
  
];

export const PROJECTS = [
  {
    title: "Enhanced Resume/CV Matching Using Doc2Vec and Deep Learning",
    image: resume,
    sourceCode: "https://github.com/revforyou/DEEPLEARNINGFINAL",
    description:
      `Developed a job-matching system using the Doc2Vec algorithm, enabling semantic matching between resumes and job descriptions.
       The project leveraged advanced text processing with NLTK and SpaCy for tokenization and lemmatization, and utilized Gensim for Doc2Vec implementation. 
       Integrated a deep learning model to enhance accuracy, employing Pandas and NumPy for efficient data handling. The system provides an accuracy score for 
       how well a resume fits a job description and generates the top 5 most suitable resumes for any given job description. It calculates cosine similarity scores to quantify matches, processing datasets from Kaggle and Hugging Face, specifically tailored to the tech industry. This approach resulted in a powerful tool that significantly streamlines the recruitment process.`,
    technologies: ["Python", "NTLK/SpaCy", "Doc2Vec"],
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
