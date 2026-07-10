import React from 'react';
import { motion } from 'framer-motion';
import {
  Download, Clock, Video, BookOpen, Presentation, Code, GraduationCap,
  Calendar, Check, Flag, Target
} from 'lucide-react';

const PRIORITY_LEVELS = {
  HIGH: { label: 'HIGH PRIORITY', color: 'text-red-600', bg: 'bg-red-50', dot: 'bg-red-500' },
  MEDIUM: { label: 'MEDIUM PRIORITY', color: 'text-blue-600', bg: 'bg-blue-50', dot: 'bg-blue-500' },
  LOW: { label: 'LOW PRIORITY', color: 'text-slate-600', bg: 'bg-slate-100', dot: 'bg-slate-500' }
};

const TaskCard = ({ title, time, difficulty, diffColor, diffBg, desc, resources, completed }) => (
  <motion.div
    whileHover={{ y: -2, boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}
    className="bg-white border border-[#E5E7EB] rounded-xl p-5 mb-4 relative flex flex-col"
  >
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-[15px] font-bold text-[#111827]">{title}</h3>
      <button className={`w-5 h-5 rounded flex items-center justify-center border ${completed ? 'bg-[#2563EB] border-[#2563EB]' : 'border-[#D1D5DB] hover:border-[#9CA3AF]'}`}>
        {completed && <Check size={14} className="text-white" />}
      </button>
    </div>
    
    <div className="flex items-center gap-3 mb-3">
      <div className="flex items-center gap-1 text-[11px] font-medium text-[#6B7280]">
        <Clock size={12} />
        {time}
      </div>
      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${diffColor} ${diffBg}`}>
        {difficulty}
      </span>
    </div>
    
    <p className="text-xs font-medium text-[#6B7280] leading-relaxed mb-4 flex-1">
      {desc}
    </p>
    
    <div>
      <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider mb-2">Learning Resources</p>
      <div className="flex flex-wrap gap-3">
        {resources.map((res, i) => (
          <a key={i} href="#" className="flex items-center gap-1.5 text-[11px] font-bold text-[#2563EB] hover:underline">
            <res.icon size={12} />
            {res.label}
          </a>
        ))}
      </div>
    </div>
  </motion.div>
);

const PrepPlanPage = () => {
  return (
    <div className="animate-in fade-in duration-500 pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl lg:text-[2.2rem] font-extrabold text-[#111827] tracking-tight mb-2">
            Your Personalized Roadmap
          </h1>
          <p className="text-sm font-medium text-[#6B7280] max-w-2xl leading-relaxed">
            Based on your Gap Analysis for the <span className="font-bold text-[#2563EB]">Senior Software Engineer</span> position, we've curated a 4-week preparation sprint.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#2563EB] font-bold text-sm rounded-xl transition-colors shrink-0">
          <Download size={16} />
          Download Plan as PDF
        </button>
      </div>

      {/* Overall Completion */}
      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 mb-8 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#4B5563]">
            <Flag size={16} className="text-[#6B7280]" />
            Overall Completion
          </div>
          <span className="text-2xl font-extrabold text-[#2563EB]">35%</span>
        </div>
        <div className="w-full bg-[#F3F4F6] rounded-full h-2.5 mb-3 overflow-hidden">
          <div className="bg-[#4F46E5] h-2.5 rounded-full" style={{ width: '35%' }}></div>
        </div>
        <div className="flex items-center gap-4 text-[11px] font-medium text-[#6B7280]">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#2563EB]"></div>
            <span className="text-[#111827] font-semibold">7 Topics Completed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#E5E7EB]"></div>
            <span>13 Remaining</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px] gap-8">
        
        {/* Left Column - Tasks */}
        <div>
          {/* HIGH PRIORITY */}
          <div className="mb-8 relative">
            <div className="flex items-center mb-4">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${PRIORITY_LEVELS.HIGH.bg} ${PRIORITY_LEVELS.HIGH.color} tracking-widest`}>
                {PRIORITY_LEVELS.HIGH.label}
              </span>
              <div className="flex-1 h-px bg-[#E5E7EB] ml-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TaskCard 
                title="System Design & Scalability"
                time="12h" difficulty="Hard" diffColor="text-purple-700" diffBg="bg-purple-100"
                desc="Deep dive into microservices, load balancing, and distributed databases for high-traffic apps."
                resources={[
                  { label: 'Video Guide', icon: Video },
                  { label: 'Documentation', icon: BookOpen }
                ]}
                completed={false}
              />
              <TaskCard 
                title="Behavioral Leadership"
                time="4h" difficulty="Medium" diffColor="text-blue-700" diffBg="bg-blue-100"
                desc="Applying the STAR method to demonstrate technical leadership and conflict resolution."
                resources={[
                  { label: 'Interview Deck', icon: Presentation }
                ]}
                completed={true}
              />
            </div>
          </div>

          {/* MEDIUM PRIORITY */}
          <div className="mb-8 relative">
            <div className="flex items-center mb-4">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${PRIORITY_LEVELS.MEDIUM.bg} ${PRIORITY_LEVELS.MEDIUM.color} tracking-widest`}>
                {PRIORITY_LEVELS.MEDIUM.label}
              </span>
              <div className="flex-1 h-px bg-[#E5E7EB] ml-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TaskCard 
                title="Advanced React Patterns"
                time="8h" difficulty="Medium" diffColor="text-blue-700" diffBg="bg-blue-100"
                desc="Higher-order components, render props, and performance optimization with memoization."
                resources={[
                  { label: 'GitHub Repo', icon: Code }
                ]}
                completed={false}
              />
            </div>
          </div>

          {/* LOW PRIORITY */}
          <div className="relative">
            <div className="flex items-center mb-4">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${PRIORITY_LEVELS.LOW.bg} ${PRIORITY_LEVELS.LOW.color} tracking-widest`}>
                {PRIORITY_LEVELS.LOW.label}
              </span>
              <div className="flex-1 h-px bg-[#E5E7EB] ml-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TaskCard 
                title="Unit Testing Strategies"
                time="3h" difficulty="Easy" diffColor="text-green-700" diffBg="bg-green-100"
                desc="Modern testing libraries and practices for React and Node.js environments."
                resources={[
                  { label: 'Course', icon: GraduationCap }
                ]}
                completed={true}
              />
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="flex flex-col gap-6">
          
          {/* Prep Statistics */}
          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-5">
            <h3 className="text-[13px] font-bold text-[#4B5563] mb-4">Prep Statistics</h3>
            <div className="bg-white rounded-lg p-3 mb-2 flex justify-between items-center shadow-sm">
              <span className="text-xs font-medium text-[#6B7280]">Total Hours</span>
              <span className="text-sm font-bold text-[#111827]">48h</span>
            </div>
            <div className="bg-white rounded-lg p-3 mb-2 flex justify-between items-center shadow-sm">
              <span className="text-xs font-medium text-[#6B7280]">Daily Commitment</span>
              <span className="text-sm font-bold text-[#2563EB]">2.5h</span>
            </div>
            <div className="bg-white rounded-lg p-3 flex flex-col items-center shadow-sm">
              <div className="flex justify-between items-center w-full">
                <span className="text-xs font-medium text-[#6B7280]">Target Date</span>
                <div className="text-right">
                  <span className="block text-sm font-bold text-[#7C3AED]">Nov 15,</span>
                  <span className="block text-sm font-bold text-[#7C3AED]">2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Week 1 Focus */}
          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-5">
            <h3 className="text-[11px] font-bold text-[#4B5563] tracking-widest uppercase mb-4">Week 1 Focus</h3>
            <div className="flex items-center gap-4 mb-5">
              {/* Simple Circular Progress SVG */}
              <div className="relative w-12 h-12 shrink-0">
                <svg className="w-12 h-12 transform -rotate-90">
                  <circle cx="24" cy="24" r="20" stroke="#E5E7EB" strokeWidth="4" fill="transparent" />
                  <circle cx="24" cy="24" r="20" stroke="#2563EB" strokeWidth="4" fill="transparent" strokeDasharray="125" strokeDashoffset="85" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#111827]">System Design</h4>
                <p className="text-[10px] font-medium text-[#6B7280]">4/12 hours logged</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-2.5 rounded-lg text-xs font-bold transition-colors">
              <Calendar size={14} />
              Sync with Calendar
            </button>
          </div>

          {/* AI Coach Tip */}
          <div className="bg-gradient-to-br from-[#7C3AED] to-[#6366F1] rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Target size={14} className="text-white" />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase">AI Coach Tip</span>
            </div>
            <p className="text-[13px] font-medium leading-relaxed opacity-95">
              "Focus on System Design first. It accounts for 60% of the interview score based on historical data for this role."
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrepPlanPage;
