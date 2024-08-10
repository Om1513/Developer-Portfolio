export const HERO_CONTENT = 
`I am a passionate software developer with a knack for crafting robust and scalable web applications. 
With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, 
as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise 
to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

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
    title: "Horizon- Banking Made Easy",
    // image: project1,
    description:
      `Developed Horizon, a financial SaaS platform built with Next.js, TypeScript, and Appwrite, that connects to multiple bank 
      accounts using Plaid, displays transactions in real-time, and enables secure fund transfers via Dwolla. Leveraged React Hook 
      Form, Zod, and TailwindCSS to implement robust authentication, dynamic user interfaces, and responsive design across all devices. 
      Implemented real-time updates, pagination, and filtering for transaction history, enhancing user experience. Actively contributed 
      to the platform's code architecture, focusing on reusability and performance optimization, and engaged with a vibrant developer 
      community to resolve issues and continuously improve the platform.`,
    technologies: ["React", "Next.js", "Appwrite", "PLAID", "Dwolla", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Code Summarizer Using BERT",
    // image: project2,
    description:
    `Designed a Bidirectional Encoder Representations from Transformers (BERT) model to alleviate developer’s struggles 
    incomprehending intricate syntaxes caused by the absence of code comments and descriptions.Emphasized on optimizing 
    hyperparameters, resulting in a significant 12% enhancement in accuracy. Deployed an extension, empowering developers 
    to effortlessly generate comments and function descriptions, streamlining their coding workflows`,
    technologies: ["Python", "BERT"],
  },
  {
    title: "Portfolio Website",
    // image: project3,
    description:
      "A personal portfolio website showcasing projects, skills,work experience and contact information with framer animation and interactive design.",
    technologies: ["React", "TailwindCSS", "Framer", "NodeJs"],
  },
  {
    title: "Blogging Platform",
    // image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "137 Albany Avenue, Brooklyn, NY 11213",
  phoneNo: "+1 9173280100 ",
  email: "omsinghan25@gmail.com",
};
