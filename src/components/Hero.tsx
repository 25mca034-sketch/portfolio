import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, FileText, Mail, MapPin, Check, Copy, Sparkles, GraduationCap, Award, BrainCircuit } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Subtle glowing ambient orbs in blush & rose-gold */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#FAD9DF]/50 to-[#FFF6F7]/0 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#F5B9C5]/20 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-60 left-10 w-80 h-80 bg-[#E2B6B6]/20 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Status Badge & Location */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full rosegold-pill text-xs font-medium text-[#7D3F43] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#BC777A] animate-pulse" />
            <span className="tracking-wide">Open for IT Opportunities & Internship Roles</span>
            <span className="text-[#D09395]">•</span>
            <span className="inline-flex items-center text-[#55474B]">
              <MapPin className="w-3 h-3 mr-1 text-[#BC777A]" />
              Coimbatore, India
            </span>
          </div>

          {/* Candidate Name in Classical Serif */}
          <div className="space-y-2">
            <h1
              id="hero-name-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#231C1E] tracking-tight leading-[1.1]"
            >
              Muthu Harish
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-serif italic text-[#8C5559] tracking-wide">
              Master of Computer Applications Scholar & Python Technologist
            </p>
          </div>

          {/* Refined Divider Motif */}
          <div className="flex items-center justify-center space-x-3 py-1">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D09395]" />
            <Sparkles className="w-4 h-4 text-[#BC777A]" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D09395]" />
          </div>

          {/* Genuine Professional Bio */}
          <p className="text-base sm:text-lg text-[#55474B] leading-relaxed max-w-2xl mx-auto font-sans font-normal">
            Specializing in <span className="font-semibold text-[#2C2326]">Python development</span>,{' '}
            <span className="font-semibold text-[#2C2326]">data analytics pipelines</span>, and{' '}
            <span className="font-semibold text-[#2C2326]">computer vision systems</span>. Combining academic discipline
            with practical implementations to build clean, dependable, and high-performance digital solutions.
          </p>

          {/* Key Quick-Contact / Copy Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#EFD3D3] text-xs font-medium text-[#4A3E42]">
              <Mail className="w-3.5 h-3.5 text-[#BC777A]" />
              <span>{personalInfo.email}</span>
              <button
                onClick={handleCopyEmail}
                id="btn-copy-email-hero"
                className="ml-1 p-1 hover:bg-[#FDEEF0] rounded text-[#8C5559] transition-colors"
                title="Copy Email Address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#EFD3D3] text-xs font-medium text-[#4A3E42]">
              <span className="text-[#BC777A] font-bold">Tel:</span>
              <span>{personalInfo.phone}</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              id="hero-btn-explore-projects"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#BC777A] to-[#A86064] hover:from-[#B16C6F] hover:to-[#965256] shadow-md hover:shadow-lg transition-all duration-200 group active:scale-98"
            >
              <span>Explore Real Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenResume}
              id="hero-btn-view-cv"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold text-[#7D3F43] bg-white hover:bg-[#FFF6F7] border border-[#D89F9F] shadow-xs hover:shadow-sm transition-all duration-200 active:scale-98"
            >
              <FileText className="w-4 h-4 text-[#BC777A]" />
              <span>View Academic CV</span>
            </button>
          </div>

          {/* Verified Highlights Strip (No fake metrics - 100% genuine academic & project facts) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-8 text-left max-w-2xl mx-auto">
            <div className="p-3.5 rounded-2xl bg-white/75 backdrop-blur-md border border-[#F5D7DC] shadow-xs hover:border-[#E2B6B6] transition-colors">
              <div className="flex items-center space-x-2 text-[#BC777A] mb-1">
                <GraduationCap className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8C5559]">Postgraduate</span>
              </div>
              <p className="text-sm font-bold text-[#2C2326]">MCA Scholar (2025–2027)</p>
              <p className="text-xs text-[#65575C] mt-0.5">Dr. GRD Arts and Science</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/75 backdrop-blur-md border border-[#F5D7DC] shadow-xs hover:border-[#E2B6B6] transition-colors">
              <div className="flex items-center space-x-2 text-[#BC777A] mb-1">
                <BrainCircuit className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8C5559]">Core Focus</span>
              </div>
              <p className="text-sm font-bold text-[#2C2326]">Python & Vision AI</p>
              <p className="text-xs text-[#65575C] mt-0.5">Automated surveillance & analytics</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/75 backdrop-blur-md border border-[#F5D7DC] shadow-xs hover:border-[#E2B6B6] transition-colors">
              <div className="flex items-center space-x-2 text-[#BC777A] mb-1">
                <Award className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8C5559]">Accreditation</span>
              </div>
              <p className="text-sm font-bold text-[#2C2326]">Cisco Certified</p>
              <p className="text-xs text-[#65575C] mt-0.5">Data Science & Packet Tracer</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
