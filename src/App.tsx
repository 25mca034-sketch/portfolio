/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF6F7] text-[#332A2D] font-sans antialiased selection:bg-[#FAD9DF] selection:text-[#332A2D]">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About onOpenResume={() => setIsResumeModalOpen(true)} />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact onOpenResume={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Classical Modern Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Printable / Interactive Academic CV Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

