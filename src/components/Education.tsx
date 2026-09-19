import React from 'react';
import { educationData } from '../data/portfolioData';
import { Sparkles, GraduationCap, Calendar, MapPin, Award, BookCheck } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#FFF6F7] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#FDEEF0] border border-[#E2B6B6] text-xs font-semibold text-[#8C5559] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#BC777A]" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#231C1E] tracking-tight">
            Education & Qualifications
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#D09395] to-[#E2B6B6] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#65575C] font-normal leading-relaxed">
            Authentic academic trajectory spanning postgraduate computer applications, undergraduate degree, and foundational schooling in Coimbatore.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-[#EED0D4] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          
          {educationData.map((item, index) => (
            <div
              key={item.id}
              id={`edu-card-${item.id}`}
              className="relative group"
            >
              {/* Timeline node icon */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-[#BC777A] flex items-center justify-center text-[#BC777A] shadow-xs group-hover:scale-110 transition-transform">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#F2D7DB] shadow-sm hover:shadow-md hover:border-[#E2B6B6] transition-all space-y-4">
                
                {/* Degree, Institution & Status */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#231C1E]">
                        {item.degree}
                      </h3>
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                        item.status === 'Ongoing'
                          ? 'bg-[#FDEEF0] text-[#8C5559] border border-[#E2B6B6]'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base font-medium text-[#7D3F43] mt-1 font-serif">
                      {item.institution}
                    </p>
                  </div>

                  {/* Academic Period */}
                  <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0.5 text-xs text-[#65575C]">
                    <span className="inline-flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#BC777A]" />
                      Passing Year: {item.passingYear}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#8C7C83]">
                      <MapPin className="w-3 h-3 text-[#BC777A]" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Grades & Marks Highlight */}
                <div className="p-3.5 rounded-2xl bg-[#FFF6F7] border border-[#F7DFE3] flex items-center justify-between">
                  <span className="text-xs text-[#65575C] font-medium flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#BC777A]" />
                    Academic Performance:
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#231C1E] bg-white px-3 py-1 rounded-xl border border-[#EFD3D3]">
                    {item.grades}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#55474B] leading-relaxed">
                  {item.details}
                </p>

                {/* Coursework Tags (if available) */}
                {item.coursework && item.coursework.length > 0 && (
                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C5559] flex items-center gap-1 mb-2">
                      <BookCheck className="w-3 h-3 text-[#BC777A]" />
                      <span>Key Curricular Modules</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#FFF6F7] border border-[#F2D7DB] text-[#4A3E42]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
