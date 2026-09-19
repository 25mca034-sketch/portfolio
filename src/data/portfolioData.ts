import { Project, EducationItem, Certification, SkillCategory } from '../types';

export const personalInfo = {
  name: 'Muthu Harish',
  preferredTitle: 'Python Developer & Data Analytics Enthusiast',
  tagline: 'Bridging Analytical Rigor, Clean Architecture & Modern Artificial Intelligence',
  bio: 'Master of Computer Applications (MCA) scholar at Dr. GRD Arts and Science College, passionate about Python programming, data-driven analytics, computer vision, and prompt engineering. Focused on writing disciplined, maintainable code and turning complex computational challenges into elegant software solutions.',
  email: 'muthuharish793@gmail.com',
  phone: '+91 98942 30135',
  location: 'Coimbatore, Tamil Nadu, India',
  fullAddress: '2/7 Annai Velakanni Nagar, 3rd Street, Vinayagapuram, Coimbatore - 641035',
  dob: '29.08.2004',
  degree: 'Master of Computer Applications (MCA)',
  currentInstitution: 'Dr. GRD Arts and Science College',
  languages: [
    { language: 'English', proficiency: 'Professional Working Proficiency' },
    { language: 'Tamil', proficiency: 'Native / Mother Tongue' },
  ],
  interests: [
    'Data Analytics & Exploratory Data Analysis',
    'Artificial Intelligence & Deep Learning',
    'Computer Vision & Real-time Object Detection',
    'Prompt Engineering & LLM Orchestration',
    'Network Topologies & System Infrastructure',
  ],
};

export const projectsData: Project[] = [
  {
    id: 'ai-surveillance-camera',
    title: 'AI Surveillance Camera',
    subtitle: 'Intelligent Vision-Based Monitoring & Automated Event Detection',
    category: 'Artificial Intelligence',
    description: 'An automated computer vision surveillance system built with Python and OpenCV, engineered for real-time human detection, motion tracking, and automated security event logging.',
    longDescription: 'The AI Surveillance Camera project addresses the necessity for proactive security monitoring. Leveraging Python and OpenCV with deep-learning-based object detection, the system continuously analyzes video input streams, tracks visual disturbances, isolates human presence within designated regions of interest (ROI), and logs suspicious movement timestamps to optimize security audit trails.',
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'Pre-trained Neural Models', 'NumPy', 'Event Logging'],
    features: [
      'Real-time frame ingestion with optimized video capture stream buffers',
      'Dynamic background subtraction and contour-based movement segmentation',
      'Human presence isolation using bounding-box spatial coordinates',
      'Automated snapshot capture and timestamped event persistence',
      'Configurable sensitivity thresholds to suppress environmental noise',
    ],
    highlights: [
      'High-throughput real-time frame processing optimized for standard hardware',
      'Intelligent false-positive suppression for wind and ambient lighting shifts',
      'Designed with clean modular Python classes for vision pipelines',
    ],
    status: 'Completed Prototype',
    role: 'Lead Developer & Computer Vision Engineer',
    demoType: 'vision',
  },
  {
    id: 'gym-website',
    title: 'Gym Management & Fitness Web Portal',
    subtitle: 'Comprehensive Digital Platform for Health Hubs & Membership Management',
    category: 'Web Development',
    description: 'A responsive and intuitive web application designed for fitness centers to manage membership packages, display workout regimens, enable session scheduling, and engage athletes.',
    longDescription: 'Developed to modernize traditional gym operations, this web platform offers an all-in-one digital hub for athletic clubs. It features interactive fitness calculators, dynamic membership plan comparisons, trainer availability schedules, and mobile-first responsive architecture designed to elevate member conversion and retention.',
    technologies: ['HTML5 / CSS3', 'JavaScript', 'Python Backend Logic', 'Responsive UI', 'Data Structures', 'Form Validation'],
    features: [
      'Interactive membership tier selector with transparent perk breakdown',
      'Live Fitness & BMI evaluation tool for personalized goal estimation',
      'Trainer showcase directory featuring specialized coaching disciplines',
      'Clean appointment booking and membership inquiry workflow',
      'Adaptive layouts tested across smartphones, tablets, and desktop workstations',
    ],
    highlights: [
      'Lightweight, high-speed client-side rendering with zero bloat',
      'Structured form validation preventing incomplete client registrations',
      'User-centric fitness journey layout prioritizing visual clarity',
    ],
    status: 'Completed Production Build',
    role: 'Full-Stack Developer & UI Architect',
    demoType: 'fitness',
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Dr. GRD Arts and Science College',
    location: 'Coimbatore, Tamil Nadu',
    period: '2025 – 2027',
    passingYear: '2027',
    grades: 'Sem 1: 65% | Sem 2: 67%',
    details: 'Advanced postgraduate curriculum focusing on advanced computing architectures, algorithmic optimization, data analytics pipelines, software engineering standards, and enterprise application development.',
    status: 'Ongoing',
    coursework: [
      'Advanced Data Structures & Algorithms',
      'Data Analytics & Statistical Methods',
      'Python for Scientific Computation',
      'Database Management Systems & Optimization',
      'Artificial Intelligence Foundations',
    ],
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Dr. N.G.P. Arts and Science College',
    location: 'Coimbatore, Tamil Nadu',
    period: '2022 – 2025',
    passingYear: '2025',
    grades: '67%',
    details: 'Comprehensive foundational undergraduate degree in computer science. Built solid grounding in core programming paradigms, relational database systems, web development, and operating system principles.',
    status: 'Completed',
    coursework: [
      'Object-Oriented Programming (Python / Java)',
      'Relational Database Systems & SQL',
      'Web Application Fundamentals',
      'Computer Networks & Protocols',
      'Software Engineering Methodologies',
    ],
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate (12th Standard)',
    institution: 'Sree Dharmasastha Matric Hr. Sec. School',
    location: 'Coimbatore, Tamil Nadu',
    period: '2020 – 2022',
    passingYear: '2022',
    grades: '64%',
    details: 'Specialized in computer science and quantitative mathematics, establishing an analytical foundation for higher algorithmic computing.',
    status: 'Completed',
  },
  {
    id: 'sslc',
    degree: 'Secondary School Leaving Certificate (10th Standard)',
    institution: 'RJ Matric Hr. Sec. School',
    location: 'Coimbatore, Tamil Nadu',
    period: '2019 – 2020',
    passingYear: '2020',
    grades: '67%',
    details: 'Secondary education with rigorous academic curriculum covering science, mathematics, and foundational humanities.',
    status: 'Completed',
  },
];

export const certificationsData: Certification[] = [
  {
    id: 'cisco-data-science',
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    category: 'Data Analytics & AI',
    description: 'Certified verification of core competencies in exploratory data analytics, statistical reasoning, data collection methodologies, and ethical considerations in automated decision-making systems.',
    skillsAcquired: [
      'Exploratory Data Analysis (EDA)',
      'Data Cleansing & Transformation',
      'Data Storytelling & Visualization',
      'Statistical Significance & Correlation',
      'Data Science Project Lifecycles',
    ],
    credentialType: 'Professional Accreditation',
  },
  {
    id: 'cisco-packet-tracer',
    title: 'Cisco Packet Tracer Network Simulation',
    issuer: 'Cisco Networking Academy',
    category: 'Computer Networks & Systems',
    description: 'Practical training on configuring, simulating, and diagnosing enterprise network topologies, routing tables, switch configurations, and IPv4/IPv6 address provisioning.',
    skillsAcquired: [
      'Network Topology Modeling',
      'Router & Switch Configuration',
      'Subnetting & IP Addressing',
      'Packet Inspection & Troubleshooting',
      'Network Security Protocols',
    ],
    credentialType: 'Practical Simulation Certification',
  },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    category: 'Core Programming & Data Analytics',
    description: 'Disciplined application of Python, mathematical logic, and analytical pipelines to solve structured data challenges.',
    iconName: 'Code',
    skills: [
      {
        name: 'Python',
        level: 'Proficient',
        description: 'Object-oriented programming, data structures, automation scripts, modular package design, and file handling.',
        tags: ['OOP', 'Automation', 'Scripting', 'Standard Library'],
      },
      {
        name: 'Data Analytics',
        level: 'Advanced Student',
        description: 'Exploratory data analysis, statistical summarization, data validation, pattern discovery, and reporting.',
        tags: ['EDA', 'Data Cleansing', 'Statistical Analysis', 'Pattern Recognition'],
      },
      {
        name: 'Relational Databases & SQL',
        level: 'Intermediate',
        description: 'Writing structured queries, joins, grouping aggregates, schema design, and table relationship integrity.',
        tags: ['SQL', 'Query Optimization', 'Schema Modeling', 'Data Retrieval'],
      },
    ],
  },
  {
    category: 'Artificial Intelligence & Prompt Engineering',
    description: 'Leveraging cutting-edge generative models, computer vision libraries, and precision context architectures.',
    iconName: 'Sparkles',
    skills: [
      {
        name: 'Prompt Engineering',
        level: 'Skilled Practitioner',
        description: 'Crafting precise few-shot prompts, chain-of-thought instructions, role conditioning, and output schema enforcement.',
        tags: ['Context Windows', 'Chain of Thought', 'System Prompts', 'Evaluation'],
      },
      {
        name: 'Computer Vision Basics',
        level: 'Intermediate',
        description: 'Image processing with OpenCV, contour analysis, video frame buffer processing, and bounding-box spatial tracking.',
        tags: ['OpenCV', 'Object Detection', 'Frame Processing', 'Bounding Boxes'],
      },
      {
        name: 'AI Model Integration',
        level: 'Intermediate',
        description: 'Connecting LLM and vision APIs to practical software workflows for automation and real-time response.',
        tags: ['API Orchestration', 'Structured Output', 'Workflow Automation'],
      },
    ],
  },
  {
    category: 'Systems, Networks & Development Practices',
    description: 'Comprehensive networking simulation, infrastructure fundamentals, and software delivery standards.',
    iconName: 'Network',
    skills: [
      {
        name: 'Cisco Packet Tracer',
        level: 'Certified',
        description: 'Designing virtual topologies, configuring routers and switches, and troubleshooting packet lifecycles.',
        tags: ['Topology Design', 'Switching', 'Routing Tables', 'Diagnostics'],
      },
      {
        name: 'Web Technologies',
        level: 'Competent',
        description: 'Building modern responsive interfaces using semantic HTML5, CSS3, and JavaScript with clean UI ergonomics.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      },
      {
        name: 'Version Control & Development Tools',
        level: 'Intermediate',
        description: 'Git workflows, code versioning, branch management, and collaborative code practices.',
        tags: ['Git', 'GitHub', 'VS Code', 'CLI Tools'],
      },
    ],
  },
];
