import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { 
  Sparkles, 
  Eye, 
  Dumbbell, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Sliders, 
  Activity, 
  Terminal, 
  Calculator, 
  ChevronRight,
  Maximize2,
  X
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Artificial Intelligence' | 'Web Development'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // States for AI Surveillance interactive demo
  const [detectionActive, setDetectionActive] = useState(true);
  const [sensitivity, setSensitivity] = useState(75);
  const [visionMode, setVisionMode] = useState<'detection' | 'contours' | 'logs'>('detection');

  // States for Gym Website interactive demo
  const [heightCm, setHeightCm] = useState(172);
  const [weightKg, setWeightKg] = useState(68);
  const [selectedPlan, setSelectedPlan] = useState<'Monthly' | 'Quarterly' | 'Annual'>('Quarterly');

  // Filter projects
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  // Calculate BMI for Gym demo
  const bmiValue = ((weightKg / ((heightCm / 100) * (heightCm / 100)))).toFixed(1);
  const getBmiCategory = (bmi: number) => {
    if (bmi < 18.5) return { label: 'Underweight', color: 'text-amber-700 bg-amber-50' };
    if (bmi < 25) return { label: 'Optimal Athletic Range', color: 'text-emerald-700 bg-emerald-50' };
    if (bmi < 30) return { label: 'Overweight', color: 'text-amber-700 bg-amber-50' };
    return { label: 'High BMI Range', color: 'text-rose-700 bg-rose-50' };
  };

  return (
    <section id="projects" className="py-24 bg-[#FFF6F7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#FDEEF0] border border-[#E2B6B6] text-xs font-semibold text-[#8C5559] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#BC777A]" />
            <span>Practical Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#231C1E] tracking-tight">
            Featured Software Projects
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#D09395] to-[#E2B6B6] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#65575C] font-normal leading-relaxed">
            Real software systems engineered by Muthu Harish during academic and independent development, verified with authentic technical architectures.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {(['All', 'Artificial Intelligence', 'Web Development'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                id={`filter-btn-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-[#BC777A] text-white shadow-sm'
                    : 'bg-white/80 text-[#65575C] hover:text-[#231C1E] border border-[#F2D7DB] hover:bg-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="rounded-3xl bg-white border border-[#F2D7DB] shadow-sm hover:shadow-md hover:border-[#E2B6B6] transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Project Header Banner */}
                <div className="p-6 sm:p-7 border-b border-[#F7E1E4] bg-gradient-to-br from-[#FFFDFE] to-[#FFF6F7] relative">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FDEEF0] text-[#8C5559] border border-[#EFD3D3]">
                      {project.category === 'Artificial Intelligence' ? (
                        <Cpu className="w-3.5 h-3.5 text-[#BC777A]" />
                      ) : (
                        <Dumbbell className="w-3.5 h-3.5 text-[#BC777A]" />
                      )}
                      <span>{project.category}</span>
                    </span>

                    <span className="text-[11px] font-medium text-[#7A6B70] px-2.5 py-0.5 rounded-full bg-white border border-[#F2D7DB]">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#231C1E] tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8C5559] mt-1 font-serif italic">
                    {project.subtitle}
                  </p>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-5">
                  <p className="text-sm text-[#4A3E42] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C5559]">
                      Core Capabilities
                    </span>
                    <ul className="space-y-1.5">
                      {project.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="text-xs text-[#55474B] flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#BC777A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C5559] block mb-2">
                      Engineered With
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#FFF6F7] border border-[#F2D7DB] text-[#4A3E42]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-7 pt-0 border-t border-[#F7E1E4]/50 mt-4 flex items-center justify-between">
                <span className="text-xs text-[#7A6B70] font-sans">
                  Role: <strong className="text-[#231C1E]">{project.role}</strong>
                </span>
                
                <button
                  onClick={() => setSelectedProject(project)}
                  id={`btn-open-project-${project.id}`}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#8C5559] bg-[#FDEEF0] hover:bg-[#FAD9DF] border border-[#E2B6B6] transition-all hover:shadow-xs active:scale-98"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Interactive Deep Dive</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Interactive Project Sandbox */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-white border border-[#EED0D4] shadow-sm rosegold-glow">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#F7E1E4] gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#8C5559] mb-1">
                <Activity className="w-3.5 h-3.5 text-[#BC777A]" />
                <span>Interactive Demonstration Laboratory</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#231C1E]">
                Explore Real Project Workflows Live
              </h3>
              <p className="text-xs sm:text-sm text-[#65575C] mt-0.5">
                Experience simulated functionality of Muthu Harish's real AI and web systems right in your browser.
              </p>
            </div>

            {/* Selector between the 2 projects */}
            <div className="inline-flex p-1 rounded-2xl bg-[#FFF6F7] border border-[#F2D7DB]">
              <button
                onClick={() => setSelectedProject(projectsData[0])}
                id="btn-switch-demo-vision"
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-[#4A3E42] hover:text-[#8C5559] hover:bg-white transition-all flex items-center space-x-1.5"
              >
                <Cpu className="w-3.5 h-3.5 text-[#BC777A]" />
                <span>AI Surveillance System</span>
              </button>
              <button
                onClick={() => setSelectedProject(projectsData[1])}
                id="btn-switch-demo-fitness"
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-[#4A3E42] hover:text-[#8C5559] hover:bg-white transition-all flex items-center space-x-1.5"
              >
                <Dumbbell className="w-3.5 h-3.5 text-[#BC777A]" />
                <span>Gym Web Portal</span>
              </button>
            </div>
          </div>

          {/* Demonstration Canvas 1: AI Surveillance Camera Simulator */}
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left side: Simulated Camera Stream Canvas */}
            <div className="lg:col-span-7 bg-[#231C1E] rounded-2xl p-4 text-white relative overflow-hidden flex flex-col justify-between min-h-[340px] shadow-inner">
              
              {/* Camera Header Overlay */}
              <div className="flex items-center justify-between text-xs z-10">
                <div className="flex items-center space-x-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${detectionActive ? 'bg-rose-500 animate-ping' : 'bg-emerald-500'}`} />
                  <span className="font-mono text-[11px] tracking-wider text-rose-200">
                    CAM_01 • 1080P @ 30FPS • OPENCV_CORE
                  </span>
                </div>
                <span className="font-mono text-[10px] text-zinc-400">
                  LATENCY: 18ms | SENSITIVITY: {sensitivity}%
                </span>
              </div>

              {/* Simulated Visual Frame */}
              <div className="my-auto py-6 relative flex items-center justify-center">
                {/* Background grid simulation */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#332A2D_1px,transparent_1px),linear-gradient(to_bottom,#332A2D_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
                
                {/* Simulated Target Detection Box */}
                {detectionActive ? (
                  <div className="relative border-2 border-rose-400/80 bg-rose-500/10 rounded-lg p-5 max-w-xs w-full transition-all duration-300 backdrop-blur-xs">
                    <div className="absolute -top-3 left-3 bg-[#BC777A] text-white px-2 py-0.5 rounded text-[10px] font-mono font-bold flex items-center space-x-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>TARGET DETECTED • CONF: 96.2%</span>
                    </div>

                    <div className="space-y-1.5 text-center text-rose-100 font-mono text-xs py-2">
                      <p className="font-semibold text-white">OBJECT: Person [ID: #042]</p>
                      <p className="text-[11px] text-rose-200/80">Bounding Box: [X: 184, Y: 92, W: 240, H: 410]</p>
                      <p className="text-[10px] text-emerald-300">Status: In Region of Interest (ROI)</p>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-rose-400/30 text-[10px] font-mono text-rose-300">
                      <span>Motion Vector: +0.42 m/s</span>
                      <span>Buffer: Active</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-10 space-y-2 text-zinc-400 font-mono text-xs">
                    <p>SURVEILLANCE IDLE • MONITORING PERIMETER</p>
                    <p className="text-[10px] text-zinc-500">No anomalous motion detected in designated ROI</p>
                  </div>
                )}
              </div>

              {/* Camera Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-zinc-800 text-[10px] font-mono text-zinc-400 z-10">
                <span>MODEL: MobileNet SSD / OpenCV DNN</span>
                <span>STATUS: {detectionActive ? 'TRIGGER_LOGGED' : 'STANDBY'}</span>
                <span>PYTHON_RUNTIME: V3.11</span>
              </div>
            </div>

            {/* Right side: Controls & Diagnostic Log */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="p-4 rounded-2xl bg-[#FFF6F7] border border-[#F2D7DB] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C5559] flex items-center justify-between">
                  <span>Detection Parameters</span>
                  <Sliders className="w-3.5 h-3.5 text-[#BC777A]" />
                </h4>

                {/* Sensitivity Slider */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium text-[#4A3E42]">
                    <span>Motion Sensitivity Threshold</span>
                    <span className="font-bold text-[#8C5559]">{sensitivity}%</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="95"
                    value={sensitivity}
                    onChange={(e) => setSensitivity(Number(e.target.value))}
                    className="w-full accent-[#BC777A] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#7A6B70]">
                    <span>Low (High False Negatives)</span>
                    <span>High (Granular Motion)</span>
                  </div>
                </div>

                {/* Trigger toggle */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#4A3E42]">Simulate Active Intrusion</span>
                  <button
                    onClick={() => setDetectionActive(!detectionActive)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                      detectionActive
                        ? 'bg-[#BC777A] text-white'
                        : 'bg-white text-[#65575C] border border-[#E2B6B6]'
                    }`}
                  >
                    {detectionActive ? 'Target In Frame' : 'Clear Frame'}
                  </button>
                </div>
              </div>

              {/* Event Log Output */}
              <div className="p-3.5 rounded-2xl bg-[#231C1E] text-zinc-300 font-mono text-[11px] space-y-1.5 max-h-36 overflow-y-auto">
                <div className="flex items-center justify-between text-[#E2B6B6] text-[10px] pb-1 border-b border-zinc-800">
                  <span className="flex items-center space-x-1">
                    <Terminal className="w-3 h-3" />
                    <span>Real-time Python Event Stream</span>
                  </span>
                  <span>STD_OUT</span>
                </div>
                <p className="text-zinc-400">[INFO] cv2.VideoCapture(0) initialized @ 1920x1080</p>
                <p className="text-zinc-400">[PROCESS] BackgroundSubtractorMOG2 applied</p>
                {detectionActive && (
                  <>
                    <p className="text-rose-400">[ALERT] Contour area &gt; 1200px detected in Zone 1</p>
                    <p className="text-emerald-400">[PERSIST] Snapshot saved to /data/events/frame_2026.jpg</p>
                  </>
                )}
                <p className="text-zinc-500">[HEARTBEAT] Buffer latency: 14.8ms • GPU acceleration enabled</p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Deep-Dive Modal for Selected Project */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#231C1E]/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full border border-[#E2B6B6] shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-150">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              id="btn-close-project-modal"
              aria-label="Close project modal"
              className="absolute top-5 right-5 p-2 rounded-full bg-[#FFF6F7] hover:bg-[#FDEEF0] text-[#4A3E42] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#FDEEF0] text-[#8C5559] border border-[#EFD3D3] mb-2">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#231C1E]">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-serif italic text-[#8C5559] mt-0.5">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Deep Description */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C5559]">
                Architectural Breakdown
              </h4>
              <p className="text-sm text-[#4A3E42] leading-relaxed">
                {selectedProject.longDescription}
              </p>
            </div>

            {/* Technical Highlights */}
            <div className="p-4 rounded-2xl bg-[#FFF6F7] border border-[#F2D7DB] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C5559]">
                Key Engineering Highlights
              </h4>
              <ul className="space-y-1.5">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-[#55474B] flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#BC777A] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Feature: If Gym, show the interactive Fitness Calculator preview */}
            {selectedProject.demoType === 'fitness' && (
              <div className="p-5 rounded-2xl bg-white border border-[#E2B6B6] space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-2 border-b border-[#F7E1E4]">
                  <div className="flex items-center space-x-2 text-[#8C5559]">
                    <Calculator className="w-4 h-4 text-[#BC777A]" />
                    <span className="text-xs font-bold uppercase tracking-wider">Gym Portal Live Module: BMI & Fitness Estimator</span>
                  </div>
                  <span className="text-[10px] text-[#7A6B70]">Real Client-Side Computing</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-[#4A3E42] font-semibold mb-1">
                      Athlete Height: <span className="text-[#8C5559]">{heightCm} cm</span>
                    </label>
                    <input
                      type="range"
                      min="140"
                      max="210"
                      value={heightCm}
                      onChange={(e) => setHeightCm(Number(e.target.value))}
                      className="w-full accent-[#BC777A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#4A3E42] font-semibold mb-1">
                      Body Weight: <span className="text-[#8C5559]">{weightKg} kg</span>
                    </label>
                    <input
                      type="range"
                      min="40"
                      max="130"
                      value={weightKg}
                      onChange={(e) => setWeightKg(Number(e.target.value))}
                      className="w-full accent-[#BC777A]"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FFF6F7] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[#65575C]">Calculated Body Mass Index (BMI):</span>
                    <p className="text-lg font-serif font-bold text-[#231C1E]">{bmiValue}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full font-semibold text-xs ${getBmiCategory(Number(bmiValue)).color}`}>
                    {getBmiCategory(Number(bmiValue)).label}
                  </span>
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C5559] mb-2">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF3F4] text-[#4A3E42] border border-[#EED0D4]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-[#F7E1E4] flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#BC777A] to-[#A86064] hover:from-[#B16C6F] hover:to-[#965256] transition-all shadow-sm"
              >
                Close Deep Dive
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
