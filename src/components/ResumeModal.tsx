import React, { useState } from 'react';
import { personalInfo, educationData, projectsData, certificationsData } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  Code2 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const plainTextResume = `
MUTHU HARISH
Address: ${personalInfo.fullAddress}
Contact: ${personalInfo.phone}
Email: ${personalInfo.email}
DOB: ${personalInfo.dob}

SKILLS
• Python
• Prompting / AI Prompt Engineering
• Data Analytics

INTERESTS
• Data Analytics
• Artificial Intelligence

LANGUAGE
• Tamil (Native)
• English (Professional Working)

EDUCATION
1. Dr. GRD Arts and Science College
   MCA (Master of Computer Applications)
   Passing Year: 2027
   Grades: 1 sem: 65% | 2 sem: 67%

2. Dr. NGP Arts and Science College
   BCA (Bachelor of Computer Applications)
   Passing Year: 2025
   Grades: 67%

3. Sree Dharmasastha Matric Hr. Sec. School
   12th Standard
   Passing Year: 2022
   Grades: 64%

4. RJ Matric Hr. Sec. School
   10th Standard
   Passing Year: 2020
   Grades: 67%

PROJECTS
1. GYM Website (Full-featured Athletic & Gym Management Portal)
2. AI Surveillance Camera (Intelligent Computer Vision & Event Detection System)

ACHIEVEMENTS & AWARDS
• Cisco Introduction to Data Science
• Cisco Packet Tracer
  `.trim();

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2200);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#231C1E]/60 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-3xl max-w-4xl w-full border border-[#E2B6B6] shadow-2xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Action Bar */}
        <div className="px-6 py-4 border-b border-[#F2D7DB] bg-[#FFF6F7] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#BC777A]" />
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#231C1E]">
              Curriculum Vitae • Muthu Harish
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyText}
              id="btn-copy-plain-resume"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#4A3E42] bg-white hover:bg-[#FDEEF0] border border-[#E2B6B6] transition-colors"
              title="Copy Text Format"
            >
              {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">Copy Text</span>
            </button>

            <button
              onClick={handlePrint}
              id="btn-print-resume"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#BC777A] to-[#A86064] hover:from-[#B16C6F] hover:to-[#965256] transition-all shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              id="btn-close-resume-modal"
              aria-label="Close CV Modal"
              className="p-1.5 rounded-full hover:bg-[#FDEEF0] text-[#4A3E42] transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto print:p-0 print:m-0 space-y-8 bg-white font-sans text-[#231C1E]">
          
          {/* Resume Header */}
          <div className="border-b-2 border-[#BC777A] pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#231C1E]">
                Muthu Harish
              </h1>
              <p className="text-sm font-serif italic text-[#8C5559] mt-0.5">
                Master of Computer Applications (MCA) Scholar
              </p>
              <p className="text-xs text-[#55474B] mt-1.5 max-w-md">
                {personalInfo.fullAddress}
              </p>
            </div>

            <div className="text-xs text-[#4A3E42] space-y-1 sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#BC777A]" />
                <span className="font-semibold">{personalInfo.phone}</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#BC777A]" />
                <span>{personalInfo.email}</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#BC777A]" />
                <span>DOB: {personalInfo.dob}</span>
              </p>
            </div>
          </div>

          {/* Two-Column Structured CV Body */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Sidebar: Skills, Interests, Languages */}
            <div className="md:col-span-4 space-y-6">
              
              {/* Skills */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C5559] border-b border-[#F2D7DB] pb-1">
                  Technical Skills
                </h3>
                <ul className="space-y-1 text-xs text-[#332A2D]">
                  <li className="flex items-center space-x-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BC777A]" />
                    <span>Python Programming</span>
                  </li>
                  <li className="flex items-center space-x-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BC777A]" />
                    <span>AI Prompting / Prompt Engineering</span>
                  </li>
                  <li className="flex items-center space-x-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BC777A]" />
                    <span>Data Analytics & EDA</span>
                  </li>
                </ul>
              </div>

              {/* Interests */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C5559] border-b border-[#F2D7DB] pb-1">
                  Interests
                </h3>
                <ul className="space-y-1 text-xs text-[#332A2D]">
                  <li className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D09395]" />
                    <span>Data Analytics</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D09395]" />
                    <span>Artificial Intelligence</span>
                  </li>
                </ul>
              </div>

              {/* Languages */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C5559] border-b border-[#F2D7DB] pb-1">
                  Languages
                </h3>
                <div className="text-xs space-y-1 text-[#332A2D]">
                  <p><strong className="text-[#231C1E]">Tamil</strong> — Native / Mother Tongue</p>
                  <p><strong className="text-[#231C1E]">English</strong> — Professional Communication</p>
                </div>
              </div>

              {/* Achievements & Awards */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C5559] border-b border-[#F2D7DB] pb-1">
                  Achievements & Awards
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#FFF6F7] border border-[#F2D7DB]">
                    <p className="font-semibold text-[#231C1E]">Cisco Introduction to Data Science</p>
                    <p className="text-[11px] text-[#65575C]">Cisco Networking Academy</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FFF6F7] border border-[#F2D7DB]">
                    <p className="font-semibold text-[#231C1E]">Cisco Packet Tracer</p>
                    <p className="text-[11px] text-[#65575C]">Network Simulation & Topology</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Main Column: Education & Projects */}
            <div className="md:col-span-8 space-y-6">
              
              {/* Education Section */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C5559] border-b border-[#F2D7DB] pb-1">
                  Education & Academic Qualifications
                </h3>

                <div className="space-y-3.5 text-xs">
                  {educationData.map((edu) => (
                    <div key={edu.id} className="p-3.5 rounded-2xl border border-[#F2D7DB] bg-white">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-sm text-[#231C1E]">{edu.institution}</h4>
                          <p className="font-serif italic text-xs text-[#7D3F43]">{edu.degree}</p>
                        </div>
                        <span className="text-[11px] text-[#65575C] font-medium">Passing: {edu.passingYear}</span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[11px] bg-[#FFF6F7] px-2.5 py-1 rounded-lg">
                        <span className="text-[#65575C]">Performance / Grades:</span>
                        <span className="font-semibold text-[#231C1E]">{edu.grades}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects Section */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C5559] border-b border-[#F2D7DB] pb-1">
                  Applied Software Projects
                </h3>

                <div className="space-y-3 text-xs">
                  {projectsData.map((proj) => (
                    <div key={proj.id} className="p-3.5 rounded-2xl border border-[#F2D7DB] bg-white space-y-1.5">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-sm text-[#231C1E]">{proj.title}</h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FDEEF0] text-[#8C5559]">
                          {proj.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#55474B] leading-relaxed">
                        {proj.description}
                      </p>
                      <p className="text-[11px] text-[#8C5559] font-medium">
                        Technologies: {proj.technologies.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
