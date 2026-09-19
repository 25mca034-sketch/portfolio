import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill out all required fields.');
      return;
    }

    setFormError('');
    setFormSubmitted(true);

    // Create a pre-filled mailto URL for immediate recruiter convenience
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Muthu Harish,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Suggest opening default client
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#FFF6F7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#FDEEF0] border border-[#E2B6B6] text-xs font-semibold text-[#8C5559] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#BC777A]" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#231C1E] tracking-tight">
            Initiate a Dialogue
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#D09395] to-[#E2B6B6] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#65575C] font-normal leading-relaxed">
            Actively welcoming discussions regarding software engineering roles, technical internships, and collaborative data science initiatives.
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts & Candidate Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Cards */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#F2D7DB] shadow-sm rosegold-glow space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#231C1E]">
                  Direct Contact Channels
                </h3>
                <p className="text-xs text-[#65575C] mt-1">
                  Reachable for scheduled interviews and technical evaluations.
                </p>
              </div>

              {/* Email item */}
              <div className="p-4 rounded-2xl bg-[#FFF6F7] border border-[#F7DFE3] flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C5559] flex items-center gap-1">
                    <Mail className="w-3 h-3 text-[#BC777A]" />
                    Email Address
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-semibold text-[#231C1E] hover:text-[#BC777A] transition-colors block truncate max-w-[210px] sm:max-w-none"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  id="btn-copy-email-contact"
                  className="p-2 rounded-xl bg-white border border-[#E2B6B6] text-[#8C5559] hover:bg-[#FDEEF0] transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="p-4 rounded-2xl bg-[#FFF6F7] border border-[#F7DFE3] flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C5559] flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#BC777A]" />
                    Direct Phone / Mobile
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-semibold text-[#231C1E] hover:text-[#BC777A] transition-colors block"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  onClick={handleCopyPhone}
                  id="btn-copy-phone-contact"
                  className="p-2 rounded-xl bg-white border border-[#E2B6B6] text-[#8C5559] hover:bg-[#FDEEF0] transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-2xl bg-[#FFF6F7] border border-[#F7DFE3] space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C5559] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#BC777A]" />
                  Geographic Location
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#231C1E]">
                  Coimbatore - 641035, Tamil Nadu, India
                </p>
                <p className="text-[11px] text-[#65575C]">
                  {personalInfo.fullAddress}
                </p>
              </div>

              {/* Operational Timezone */}
              <div className="pt-2 flex items-center justify-between text-xs text-[#65575C] border-t border-[#F7E1E4]">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#BC777A]" />
                  Timezone
                </span>
                <span className="font-semibold text-[#231C1E]">Indian Standard Time (IST, UTC+5:30)</span>
              </div>
            </div>

            {/* Quick CV Download Prompt Card */}
            <div className="p-5 rounded-3xl bg-gradient-to-br from-[#FFF8F9] to-[#FDEEF0] border border-[#E2B6B6] flex items-center justify-between">
              <div className="space-y-0.5">
                <h4 className="text-sm font-serif font-bold text-[#231C1E]">Need an Official Printout?</h4>
                <p className="text-xs text-[#65575C]">Access the clean formatted academic resume.</p>
              </div>
              <button
                onClick={onOpenResume}
                id="btn-contact-open-cv"
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#BC777A] to-[#A86064] shadow-xs hover:shadow-sm transition-all"
              >
                View CV
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Professional Message Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#F2D7DB] shadow-sm rosegold-glow">
              <div className="pb-5 border-b border-[#F7E1E4] mb-6">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#231C1E]">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-[#65575C] mt-1">
                  Submit your message below; it will draft directly to Muthu Harish's inbox.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#FFF6F7] border border-[#E2B6B6] text-center space-y-4 animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-serif font-bold text-[#231C1E]">Message Ready to Dispatch</h4>
                    <p className="text-xs text-[#55474B]">
                      Thank you for contacting Muthu Harish. Your message has been prepared for dispatch to{' '}
                      <strong>{personalInfo.email}</strong>.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-full text-xs font-semibold text-[#8C5559] bg-white border border-[#E2B6B6]"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-[#4A3E42]">
                        Your Name / Organization <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. HR Manager / Lead Recruiter"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFFDFE] border border-[#EED0D4] focus:border-[#BC777A] focus:outline-none text-xs sm:text-sm text-[#231C1E] transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-[#4A3E42]">
                        Your Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFFDFE] border border-[#EED0D4] focus:border-[#BC777A] focus:outline-none text-xs sm:text-sm text-[#231C1E] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#4A3E42]">
                      Subject / Role Title
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineer Opportunity / Interview Request"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFFDFE] border border-[#EED0D4] focus:border-[#BC777A] focus:outline-none text-xs sm:text-sm text-[#231C1E] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#4A3E42]">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide details about the role, technical focus, or meeting schedule..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFFDFE] border border-[#EED0D4] focus:border-[#BC777A] focus:outline-none text-xs sm:text-sm text-[#231C1E] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="btn-submit-contact-form"
                    className="w-full py-3 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#BC777A] to-[#A86064] hover:from-[#B16C6F] hover:to-[#965256] shadow-sm hover:shadow-md transition-all flex items-center justify-center space-x-2 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Muthu Harish</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
