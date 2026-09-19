import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Sparkles, Award, ShieldCheck, CheckCircle2, Network, BarChart3, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-[#FFFCFA] border-t border-[#F7E1E4]/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#FDEEF0] border border-[#E2B6B6] text-xs font-semibold text-[#8C5559] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#BC777A]" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#231C1E] tracking-tight">
            Certifications & Accreditations
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#D09395] to-[#E2B6B6] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#65575C] font-normal leading-relaxed">
            Professional industry coursework awarded by Cisco Networking Academy, validating competencies in data analytics and computer networking.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="p-7 rounded-3xl bg-white border border-[#F2D7DB] shadow-sm hover:shadow-md hover:border-[#E2B6B6] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Badge Header */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAD9DF] to-[#FFF6F7] border border-[#E2B6B6] flex items-center justify-center text-[#BC777A]">
                    {cert.id.includes('data') ? (
                      <BarChart3 className="w-6 h-6" />
                    ) : (
                      <Network className="w-6 h-6" />
                    )}
                  </div>
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#FDEEF0] text-[#8C5559] border border-[#EFD3D3]">
                    {cert.issuer}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#231C1E]">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#8C5559] font-medium mt-0.5 font-serif italic">
                    {cert.category} • {cert.credentialType}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4A3E42] leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Acquired */}
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C5559] block mb-2">
                    Verified Competencies
                  </span>
                  <ul className="space-y-1.5">
                    {cert.skillsAcquired.map((skill, idx) => (
                      <li key={idx} className="text-xs text-[#55474B] flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#BC777A] shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verified Ribbon */}
              <div className="mt-6 pt-4 border-t border-[#F7E1E4] flex items-center justify-between text-xs text-[#65575C]">
                <span className="flex items-center space-x-1.5 text-emerald-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Authenticated Certificate</span>
                </span>
                <span className="font-mono text-[11px] text-[#8C7C83]">Cisco Academy</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
