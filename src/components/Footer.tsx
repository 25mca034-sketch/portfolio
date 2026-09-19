import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#FFFCFA] border-t border-[#F2D7DB] py-14 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#F7E1E4]">
          
          {/* Brand Signature */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FAD9DF] to-[#FFF6F7] border border-[#D09395] flex items-center justify-center text-[#332A2D] font-serif font-bold text-base shadow-xs">
              MH
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#231C1E]">
                Muthu Harish
              </span>
              <p className="text-xs text-[#65575C]">
                MCA Scholar • Python & Analytics • Coimbatore, India
              </p>
            </div>
          </div>

          {/* Quick Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-[#55474B]">
            <a href="#about" className="hover:text-[#BC777A] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#BC777A] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#BC777A] transition-colors">Skills</a>
            <a href="#education" className="hover:text-[#BC777A] transition-colors">Education</a>
            <a href="#certifications" className="hover:text-[#BC777A] transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-[#BC777A] transition-colors">Contact</a>
            <button
              onClick={onOpenResume}
              className="text-[#8C5559] hover:underline font-semibold"
            >
              Academic CV
            </button>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            id="btn-back-to-top"
            aria-label="Scroll back to top"
            className="p-2.5 rounded-full bg-white border border-[#E2B6B6] text-[#8C5559] hover:bg-[#FDEEF0] transition-all duration-200 shadow-xs hover:shadow-sm"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A6B70] gap-3">
          <p>
            © {new Date().getFullYear()} Muthu Harish. Designed with classical elegance, modern precision, and technical integrity.
          </p>
          <div className="flex items-center space-x-1 text-[#8C5559]">
            <Sparkles className="w-3.5 h-3.5 text-[#BC777A]" />
            <span>Prepared for IT Recruitment & Interviews</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
