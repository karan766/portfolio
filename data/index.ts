export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Discord Clone",
    des: "Built a real-time messaging and voice/video system supporting low-latency collaboration. Designed relational schemas with indexing and self-delete for integrity and efficient querying. Containerized and deployed services with monitoring and error tracking to ensure reliability.",
    img: "/p1.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/next.svg",
      "/socketio.svg",
    ],
    liveLink:
      "https://discord-clone-1hzz.onrender.com/server/4b485892-47b6-4ee0-ab2e-1a3c8a110779",
    githubLink: "https://github.com/karan766/discord-clone",
    downloadLink:
      "https://github.com/karan766/discord-clone/archive/refs/heads/main.zip",
    tech: "Socket.IO, LiveKit, Next.js 15, Docker",
    features: [
      "Real-time messaging with 10+ concurrent users",
      "Voice/video system with low-latency collaboration",
      "Relational database design with indexing",
      "Containerized deployment with monitoring",
    ],
  },

  {
    id: 2,
    title: "E-Kart (MERN Ecommerce App)",
    des: "Built and deployed a full-featured MERN Ecommerce platform with secure authentication, product management, and Stripe payment integration. Implemented cart, order tracking, and admin dashboard with optimized API performance and scalable MongoDB schema.",
    img: "/p2.png",
    iconLists: [
      "/re.svg",
      "/node.svg",
      "/mongodb.svg",
      "/express.svg",
      "/js.svg",
    ],
    liveLink: "https://ecommerce-x9jr.onrender.com/",
    githubLink: "https://github.com/karan766/Ecommerce",
    downloadLink:
      "https://github.com/karan766/Ecommerce/archive/refs/heads/main.zip",
    tech: "MERN Stack, Stripe, JWT Authentication, Redux Toolkit",
    features: [
      "Secure JWT-based authentication & authorization",
      "Add to cart and dynamic quantity management",
      "Stripe payment gateway integration",
      "Admin panel for product & order management",
      "Order history and real-time status updates",
      "Optimized REST APIs with MongoDB schema design",
    ],
  },

  {
    id: 3,
    title: "LinkNest (Social Media Platform)",
    des: "Developed a full-stack social media platform inspired by Threads, enabling users to create posts, follow others, like, and comment in real-time. Designed scalable MongoDB schemas for users, posts, comments, and followers while building 15+ secure REST APIs with JWT authentication and robust validation.",
    img: "/p3.svg",
    iconLists: [
      "/node.svg",
      "/mongodb.svg",
      "/express.svg",
      "/jwt.svg",
      "/socketio.svg",
    ],
    liveLink: "",
    githubLink: "https://github.com/karan766/LinkNest-Intenship-project-",
    downloadLink:
      "https://github.com/karan766/LinkNest-Intenship-project-/archive/refs/heads/main.zip",
    tech: "MERN Stack, JWT Authentication, REST APIs, Socket.IO",
    features: [
      "User authentication and profile management",
      "Create, edit, delete posts (thread-style)",
      "Like, comment, and follow/unfollow system",
      "Real-time updates using Socket.IO",
      "Scalable MongoDB schema for social relationships",
      "Secure REST APIs with validation and error handling",
    ],
  },

  {
    id: 4,
    title: "AI PPT Generator",
    des: "Built an automated slide-generation system improving content throughput by 7x. Increased output consistency by 40% through structured JSON templates and deterministic rendering. Added a template marketplace enabling custom content creation and user-driven workflows.",
    img: "/p4.img.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/js.svg", "/node.svg"],
    liveLink: "",
    githubLink: "https://github.com/karan766/Ai-ppt-builder",
    downloadLink:
      "https://github.com/karan766/Ai-ppt-builder/archive/refs/heads/main.zip",
    tech: "Zealand, Clerk, OpenAI API",
    features: [
      "40% improvement in output consistency",
      "7x content throughput improvement",
      "Structured JSON templates",
      "Custom template marketplace",
    ],
  },
];

export const skills = {
  languages: [
    { name: "JavaScript", icon: "/js.svg" },
    { name: "TypeScript", icon: "/ts.svg" },
    { name: "Python", icon: "/python.svg" },
    { name: "Java", icon: "/java.svg" },
    { name: "C++", icon: "/cpp.svg" },
  ],
  frontend: [
    { name: "React.js", icon: "/re.svg" },
    { name: "Next.js", icon: "/next.svg" },
    { name: "HTML/CSS", icon: "/html.svg" },
    { name: "Tailwind CSS", icon: "/tail.svg" },
    { name: "Framer Motion", icon: "/fm.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/node.svg" },
    { name: "Express.js", icon: "/express.svg" },
    { name: "REST APIs", icon: "/api.svg" },
    { name: "JWT Authentication", icon: "/jwt.svg" },
    { name: "Socket.IO", icon: "/socketio.svg" },
  ],
  databases: [
    { name: "MongoDB", icon: "/mongodb.svg" },
    { name: "PostgreSQL", icon: "/postgresql.svg" },
    { name: "Query Optimization", icon: "/db.svg" },
  ],
  cloud: [
    { name: "AWS (EC2, S3, Lambda)", icon: "/aws.svg" },
    { name: "Docker", icon: "/docker.svg" },
    { name: "CI/CD", icon: "/cicd.svg" },
    { name: "Linux", icon: "/linux.svg" },
  ],
  tools: [
    { name: "Git/GitHub", icon: "/git.svg" },
    { name: "VS Code", icon: "/vscode.svg" },
    { name: "Postman", icon: "/postman.svg" },
    { name: "Figma", icon: "/figma.svg" },
  ],
};

export const education = {
  degree: "Bachelor of Technology in Computer Science and Engineering",
  university: "Dr. A.P.J. Abdul Kalam Technical University",
  location: "UP, India",
  duration: "2023 - 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
  ],
};

export const certifications = [
  {
    name: "Full Stack Web Development (MERN)",
    issuer: "Sheriyans Coding School",
    year: "2025",
    icon: "/cert1.svg",
  },
  {
    name: "JavaScript (ES6+) & Data Structures",
    issuer: "Coursera",
    year: "2024",
    icon: "/cert2.svg",
  },
  {
    name: "AWS Cloud Practitioner & Fundamentals",
    issuer: "freeCodeCamp",
    year: "2025",
    icon: "/cert3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/karan766",
    name: "GitHub",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/karan-singh-sodhi-a53021228/",
    name: "LinkedIn",
  },
  {
    id: 3,
    img: "/mail.svg",
    link: "mailto:karansodhi703@gmail.com",
    name: "Email",
  },
  {
    id: 4,
    img: "/phone.svg",
    link: "tel:+919319107417",
    name: "Phone",
  },
];

export const personalInfo = {
  name: "Karan Singh Sodhi",
  title: "Software Engineer",
  location: "UP, India",
  email: "karansodhi703@gmail.com",
  phone: "+91-9319107417",
  summary:
    "Entry-level Software Engineer with hands-on experience building full-stack and real-time web applications using MERN and Next.js. Strong foundation in data structures, RESTful API design, object-oriented programming, and backend performance optimization. Experienced with AWS, Docker, and CI/CD through internships and production-grade projects. Comfortable working in agile environments, debugging complex issues, and delivering reliable software.",
};
