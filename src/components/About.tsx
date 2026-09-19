import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, Calendar, MapPin, Languages, BookOpen, CheckCircle2, Terminal, Lightbulb, Compass } from 'lucide-react';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 bg-[#FFFCFA] border-y border-[#F7E1E4]/70 relative">
      {/* Decorative subtle rose-gold background geometry */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FCE8EB]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFF0F2]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FDEEF0] border border-[#E2B6B6] text-xs font-semibold text-[#8C5559] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#BC777A]" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#231C1E] tracking-tight">
            Academic Rigor & Technical Purpose
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#D09395] to-[#E2B6B6] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#65575C] font-normal leading-relaxed">
            An overview of my academic foundation, programming discipline, and technical philosophy as an aspiring software engineer.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 rounded-3xl bg-white border border-[#F2D7DB] shadow-sm space-y-5">
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#2C2326]">
                Cultivating Deep Computational Thinking
              </h3>
              
              <p className="text-sm sm:text-base text-[#4A3E42] leading-relaxed font-sans">
                I am <span className="font-semibold text-[#231C1E]">Muthu Harish</span>, currently pursuing my{' '}
                <span className="font-semibold text-[#8C5559]">Master of Computer Applications (MCA)</span> at{' '}
                <span className="font-semibold text-[#231C1E]">Dr. GRD Arts and Science College</span>, Coimbatore, after successfully earning my BCA with distinction from Dr. NGP Arts and Science College.
              </p>

              <p className="text-sm sm:text-base text-[#4A3E42] leading-relaxed font-sans">
                My technological interests are rooted in practical problem-solving. Through hands-on development in{' '}
                <span className="font-medium text-[#231C1E]">Python</span>, <span className="font-medium text-[#231C1E]">Computer Vision</span>, and <span className="font-medium text-[#231C1E]">Data Analytics</span>, I have designed functioning prototypes—such as an automated AI surveillance motion detection system and a full-featured fitness management web application.
              </p>

              {/* Core Pillars */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-2xl bg-[#FFF6F7] border border-[#F7DFE3] space-y-1">
                  <div className="flex items-center space-x-2 text-[#8C5559]">
                    <Terminal className="w-4 h-4 text-[#BC777A]" />
                    <span className="text-xs font-bold uppercase tracking-wider">Clean Code</span>
                  </div>
                  <p className="text-xs text-[#594D52]">
                    Readable, modular Python scripting, structured algorithms, and maintainable project architectures.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FFF6F7] border border-[#F7DFE3] space-y-1">
                  <div className="flex items-center space-x-2 text-[#8C5559]">
                    <Lightbulb className="w-4 h-4 text-[#BC777A]" />
                    <span className="text-xs font-bold uppercase tracking-wider">Analytical Mindset</span>
                  </div>
                  <p className="text-xs text-[#594D52]">
                    Data-driven discovery through exploratory analysis, hypothesis validation, and structured thinking.
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Interests Grid */}
            <div className="p-6 rounded-3xl bg-white border border-[#F2D7DB] shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C5559] mb-3 flex items-center space-x-2">
                <Compass className="w-3.5 h-3.5 text-[#BC777A]" />
                <span>Primary Technical Fields of Interest</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#4A3E42] bg-[#FAF3F4] border border-[#EED0D4] hover:bg-[#FCE8EB] transition-colors"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#BC777A]" />
                    <span>{interest}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Verified Candidate Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#EED0D4] shadow-sm rosegold-glow space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#F7E1E4]">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#231C1E]">Candidate Dossier</h4>
                  <p className="text-xs text-[#65575C]">Official Academic Profile Details</p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FAD9DF] to-[#FFF6F7] border border-[#E2B6B6] flex items-center justify-center text-[#8C5559] font-serif font-bold text-sm">
                  MH
                </div>
              </div>

              {/* Data Items */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start justify-between py-1">
                  <span className="text-[#65575C] flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#BC777A]" />
                    Current Academic Level
                  </span>
                  <span className="font-semibold text-[#231C1E] text-right">MCA (2025–2027)</span>
                </div>

                <div className="flex items-start justify-between py-1">
                  <span className="text-[#65575C] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#BC777A]" />
                    Date of Birth
                  </span>
                  <span className="font-medium text-[#231C1E]">{personalInfo.dob}</span>
                </div>

                <div className="flex items-start justify-between py-1">
                  <span className="text-[#65575C] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#BC777A]" />
                    Location
                  </span>
                  <span className="font-medium text-[#231C1E] text-right">{personalInfo.location}</span>
                </div>

                <div className="flex items-start justify-between py-1">
                  <span className="text-[#65575C] flex items-center gap-1.5">
                    <Languages className="w-3.5 h-3.5 text-[#BC777A]" />
                    Languages
                  </span>
                  <div className="text-right">
                    <p className="font-semibold text-[#231C1E]">Tamil <span className="font-normal text-[11px] text-[#8C5559]">(Native)</span></p>
                    <p className="font-semibold text-[#231C1E]">English <span className="font-normal text-[11px] text-[#8C5559]">(Professional)</span></p>
                  </div>
                </div>
              </div>

              {/* Address snippet from resume */}
              <div className="p-3.5 rounded-2xl bg-[#FFF6F7] border border-[#F2D7DB] text-xs space-y-1">
                <span className="font-semibold text-[#8C5559] uppercase tracking-wider text-[10px]">Residential Address</span>
                <p className="text-[#4A3E42] leading-relaxed">
                  {personalInfo.fullAddress}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenResume}
                id="btn-about-view-resume"
                className="w-full py-3 rounded-2xl text-xs sm:text-sm font-semibold text-[#7D3F43] bg-[#FDEEF0] hover:bg-[#FAD9DF] border border-[#D89F9F] transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Examine Full Curriculum Vitae</span>
                <Sparkles className="w-3.5 h-3.5 text-[#BC777A]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
