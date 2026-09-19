import React, { useState } from 'react';
import { skillCategoriesData } from '../data/portfolioData';
import { 
  Sparkles, 
  Code, 
  Terminal, 
  Database, 
  Bot, 
  Network, 
  Check, 
  Copy, 
  Layers, 
  BarChart3, 
  Cpu, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedPromptCategory, setSelectedPromptCategory] = useState<'analytics' | 'vision' | 'sql'>('analytics');
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  // Real, disciplined prompt architecture examples demonstrating Muthu's prompt engineering capability
  const promptExamples = {
    analytics: {
      title: 'Structured Exploratory Data Analysis & Anomaly Detection',
      role: 'Principal Data Engineer & Statistical Analyst',
      context: 'A dataset of multivariate sensor timestamps containing intermittent nulls and telemetry drift.',
      promptTemplate: `SYSTEM: You are a senior Python Data Engineer. Analyze the input telemetry data for variance abnormalities.
CONSTRAINTS:
- Identify missing values and determine whether median imputation or forward-fill is mathematically optimal.
- Detect distribution outliers using Interquartile Range (IQR = Q3 - Q1, threshold 1.5).
- Output must strictly conform to JSON format: {"anomalies_count": int, "imputation_strategy": string, "key_correlations": list}.`,
      outputFormat: 'Enforced JSON Schema with statistical validation bounds'
    },
    vision: {
      title: 'Surveillance Video Frame Event Categorization',
      role: 'Computer Vision Architect & Real-Time Event Classifier',
      context: 'Real-time CCTV frame bounding box coordinates with optical flow motion vectors.',
      promptTemplate: `SYSTEM: Act as a Computer Vision Security Analyst evaluating bounding box spatial telemetry.
INPUT: BoundingBox=[X: 184, Y: 92, W: 240, H: 410], SpeedVector=0.42m/s, Zone='Restricted Perimeter'.
TASK:
- Calculate intersection-over-union (IoU) with defined safety geofence coordinates.
- Classify event urgency as {NORMAL_PASS, MONITORED_LINGER, CRITICAL_BREACH}.
- Provide short reasoning under 30 words and return structured payload for webhook dispatch.`,
      outputFormat: 'Structured Webhook Dispatch Object'
    },
    sql: {
      title: 'Analytical SQL Query Optimization for Membership Logs',
      role: 'Database Optimization Specialist',
      context: 'High-volume gym attendance transactions spanning multiple quarters.',
      promptTemplate: `SYSTEM: Act as a relational database tuning specialist.
QUERY REQUIREMENT: Retrieve monthly attendance retention cohorts grouped by signup membership tiers.
CONSTRAINTS:
- Use window functions (ROW_NUMBER() OVER(PARTITION BY member_id ORDER BY check_in_time)).
- Avoid costly subquery cartesian joins; leverage indexed CTEs.
- Provide EXPLAIN ANALYZE execution cost comparison.`,
      outputFormat: 'Optimized CTE SQL Query with Performance Benchmark'
    }
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(promptExamples[selectedPromptCategory].promptTemplate);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <section id="skills" className="py-24 bg-[#FFFCFA] border-y border-[#F7E1E4]/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#FDEEF0] border border-[#E2B6B6] text-xs font-semibold text-[#8C5559] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#BC777A]" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#231C1E] tracking-tight">
            Competencies & Tooling
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#D09395] to-[#E2B6B6] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#65575C] font-normal leading-relaxed">
            Core capabilities cultivated across MCA postgraduate studies, Python development, and applied data analytics.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillCategoriesData.map((cat, idx) => (
            <div
              key={idx}
              id={`skill-category-${idx}`}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#F2D7DB] shadow-sm hover:shadow-md hover:border-[#E2B6B6] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#FFF6F7] border border-[#EFD3D3] flex items-center justify-center text-[#BC777A] mb-4">
                  {cat.iconName === 'Code' && <Code className="w-5 h-5" />}
                  {cat.iconName === 'Sparkles' && <Bot className="w-5 h-5" />}
                  {cat.iconName === 'Network' && <Network className="w-5 h-5" />}
                </div>

                <h3 className="text-lg font-serif font-bold text-[#231C1E] mb-1">
                  {cat.category}
                </h3>
                <p className="text-xs text-[#65575C] mb-5 leading-relaxed font-sans">
                  {cat.description}
                </p>

                {/* Sub-skills list */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="p-3.5 rounded-2xl bg-[#FFF6F7] border border-[#F7DFE3] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#231C1E]">{skill.name}</span>
                        <span className="text-[10px] font-semibold text-[#8C5559] px-2 py-0.5 rounded-full bg-white border border-[#EFD3D3]">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#55474B] leading-relaxed">
                        {skill.description}
                      </p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {skill.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-medium text-[#7A6B70] px-2 py-0.5 rounded-md bg-white border border-[#F2D7DB]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Applied Engineering Showcase: Prompt Engineering & Context Design */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EED0D4] shadow-sm rosegold-glow space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#F7E1E4] gap-3">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#8C5559] mb-1">
                <Bot className="w-3.5 h-3.5 text-[#BC777A]" />
                <span>Specialized Domain Proficiency</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#231C1E]">
                Prompt Engineering & Context Design Architecture
              </h3>
              <p className="text-xs sm:text-sm text-[#65575C]">
                Demonstrating rigorous, structured few-shot instructions and strict schema-bound reasoning.
              </p>
            </div>

            {/* Category Selectors */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-[#FFF6F7] border border-[#F2D7DB]">
              <button
                onClick={() => setSelectedPromptCategory('analytics')}
                id="btn-prompt-cat-analytics"
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedPromptCategory === 'analytics'
                    ? 'bg-[#BC777A] text-white shadow-xs'
                    : 'text-[#4A3E42] hover:bg-white'
                }`}
              >
                Data Cleansing
              </button>
              <button
                onClick={() => setSelectedPromptCategory('vision')}
                id="btn-prompt-cat-vision"
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedPromptCategory === 'vision'
                    ? 'bg-[#BC777A] text-white shadow-xs'
                    : 'text-[#4A3E42] hover:bg-white'
                }`}
              >
                Vision Telemetry
              </button>
              <button
                onClick={() => setSelectedPromptCategory('sql')}
                id="btn-prompt-cat-sql"
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedPromptCategory === 'sql'
                    ? 'bg-[#BC777A] text-white shadow-xs'
                    : 'text-[#4A3E42] hover:bg-white'
                }`}
              >
                SQL Tuning
              </button>
            </div>
          </div>

          {/* Active Prompt Details Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            <div className="lg:col-span-4 space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-[#FFF6F7] border border-[#F2D7DB] space-y-2">
                <span className="font-bold text-[#8C5559] uppercase tracking-wider text-[10px]">Objective</span>
                <p className="font-semibold text-[#231C1E] text-sm">
                  {promptExamples[selectedPromptCategory].title}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF6F7] border border-[#F2D7DB] space-y-1">
                <span className="font-bold text-[#8C5559] uppercase tracking-wider text-[10px]">Persona / Role Conditioning</span>
                <p className="text-[#4A3E42]">{promptExamples[selectedPromptCategory].role}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF6F7] border border-[#F2D7DB] space-y-1">
                <span className="font-bold text-[#8C5559] uppercase tracking-wider text-[10px]">Output Guarantee</span>
                <p className="text-[#4A3E42] font-mono text-[11px]">{promptExamples[selectedPromptCategory].outputFormat}</p>
              </div>
            </div>

            {/* Prompt Template Box */}
            <div className="lg:col-span-8 bg-[#231C1E] rounded-2xl p-5 text-zinc-300 font-mono text-xs relative space-y-3 shadow-inner">
              <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800 pb-2">
                <span className="flex items-center space-x-2 text-[#E2B6B6] text-[11px]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Engineered System Prompt Specification</span>
                </span>
                <button
                  onClick={handleCopyPrompt}
                  id="btn-copy-prompt-spec"
                  className="px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] flex items-center space-x-1.5 transition-colors"
                >
                  {copiedPrompt ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Template</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="whitespace-pre-wrap leading-relaxed text-zinc-300 text-[11px] font-mono select-all">
                {promptExamples[selectedPromptCategory].promptTemplate}
              </pre>

              <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[10px] text-zinc-400">
                <span>Model Target: Gemini 2.5 / Claude / GPT-4o</span>
                <span>Deterministic Seed: 42 • Temperature: 0.1</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
