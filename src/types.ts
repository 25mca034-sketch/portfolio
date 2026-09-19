export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Web Development' | 'Artificial Intelligence' | 'Data & Automation';
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  highlights: string[];
  status: string;
  role: string;
  demoType: 'fitness' | 'vision';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  passingYear: string;
  grades: string;
  details: string;
  status: 'Ongoing' | 'Completed';
  coursework?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: string;
  description: string;
  skillsAcquired: string[];
  credentialType: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    description: string;
    tags: string[];
  }[];
}
