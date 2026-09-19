import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Sparkles, Send } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 glass-surface shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand signature */}
        <a
          href="#"
          id="navbar-brand-link"
          className="group flex items-center space-x-2 text-left"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#E2B6B6] to-[#FDEEF0] border border-[#D09395] flex items-center justify-center text-[#332A2D] font-serif font-semibold text-base shadow-sm group-hover:scale-105 transition-transform duration-200">
            MH
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#231C1E] group-hover:text-[#A86064] transition-colors">
              Muthu Harish
            </span>
            <span className="hidden sm:block text-[11px] font-sans text-[#65575C] tracking-wider uppercase">
              MCA Scholar • Python & Analytics
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#F5D7DC]/70 shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase()}`}
              className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-[#4A3E42] hover:text-[#A86064] hover:bg-[#FDEEF0]/60 transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={onOpenResume}
            id="btn-navbar-resume"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#8C4F53] bg-[#FDEEF0] hover:bg-[#FAD9DF] border border-[#E2B6B6] transition-all duration-150 hover:shadow-sm active:scale-98"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Academic CV</span>
          </button>
          <a
            href="#contact"
            id="btn-navbar-contact"
            className="inline-flex items-center space-x-1.5 px-4.5 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#C48286] to-[#A86064] hover:from-[#B77377] hover:to-[#965256] shadow-sm hover:shadow-md transition-all duration-200 active:scale-98"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onOpenResume}
            id="btn-mobile-cv-quick"
            className="px-2.5 py-1.5 rounded-full text-xs font-semibold text-[#8C4F53] bg-[#FDEEF0] border border-[#E2B6B6]"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="btn-mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-full bg-white/70 border border-[#F0D5D8] text-[#332A2D]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden glass-surface border-b border-[#F0D5D8] px-4 pt-3 pb-6 mt-2 space-y-2"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#332A2D] hover:bg-[#FDEEF0] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#F0D5D8] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-xl text-sm font-semibold text-[#8C4F53] bg-[#FDEEF0] border border-[#E2B6B6] flex items-center justify-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Academic Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#C48286] to-[#A86064] flex items-center justify-center space-x-2 shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Contact Candidate</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
