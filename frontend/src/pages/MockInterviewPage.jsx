import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mic, Phone, User, MoreHorizontal } from 'lucide-react';

const MockInterviewPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="-mx-5 lg:-mx-10 -my-8 h-[calc(100vh-73px)] flex flex-col bg-white overflow-hidden animate-in fade-in duration-500">
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Panel - Visualizer */}
        <div className="flex-1 bg-[#F8FAFC] relative flex flex-col items-center justify-center border-r border-[#E5E7EB]">
          
          {/* Top Floating Card: Current Question */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="absolute top-8 w-[90%] max-w-lg bg-white border border-[#E5E7EB] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] p-5 z-10"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center shrink-0 shadow-inner">
                <MessageSquare size={18} className="text-white" fill="white" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider mb-1.5">Current Question</p>
                <p className="text-[15px] font-semibold text-[#111827] leading-relaxed">
                  "Can you walk me through a situation where you had to manage a conflict within a high-stakes team environment?"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Center Circular Visualizer */}
          <div className="relative flex flex-col items-center mt-8">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[340px] h-[340px] rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] shadow-[0_0_80px_rgba(37,99,235,0.25)] relative flex items-center justify-center overflow-hidden"
            >
              {/* Inner subtle rings */}
              <div className="absolute inset-0 rounded-full border border-white/10 m-4"></div>
              <div className="absolute inset-0 rounded-full border border-white/5 m-12"></div>
              
              {/* Soundwaves */}
              <div className="flex items-center gap-1.5 z-10 h-24">
                {mounted && Array.from({ length: 45 }).map((_, i) => {
                  // Create a symmetrical wave pattern based on index
                  const distanceFromCenter = Math.abs(22 - i);
                  const maxH = Math.max(15, 80 - distanceFromCenter * 3);
                  const minH = Math.max(10, 20 - distanceFromCenter);
                  
                  return (
                    <motion.div
                      key={i}
                      animate={{ height: [minH, Math.random() * maxH + minH, minH] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 0.5 + Math.random() * 0.5, 
                        ease: 'easeInOut',
                        delay: i * 0.05
                      }}
                      className="w-[3px] bg-white rounded-full"
                      style={{ height: minH }}
                    />
                  );
                })}
              </div>
            </motion.div>
            
            {/* Listening Badge */}
            <motion.div 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-5 bg-white border border-[#E5E7EB] shadow-[0_4px_15px_rgba(0,0,0,0.05)] rounded-full px-5 py-2 flex items-center gap-2.5 z-20"
            >
              <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[11px] font-bold text-[#4B5563] tracking-widest">AI AGENT LISTENING</span>
            </motion.div>
          </div>

          {/* Bottom Floating Card: Confidence */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="absolute bottom-10 w-[90%] max-w-sm bg-white/90 backdrop-blur-md border border-[#E5E7EB] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] p-5 z-10"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[13px] font-bold text-[#111827]">Candidate Confidence</span>
              <span className="text-[15px] font-extrabold text-[#2563EB]">84%</span>
            </div>
            <div className="w-full h-2 bg-[#EFF6FF] rounded-full mb-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-full" style={{ width: '84%' }} />
            </div>
            <p className="text-[10px] font-medium text-[#6B7280] italic leading-relaxed">
              Tone analysis indicates high professional engagement.
            </p>
          </motion.div>

        </div>
        
        {/* Right Panel - Chat Area */}
        <div className="w-[420px] bg-[#FAFBFC] flex flex-col shrink-0">
          <div className="flex justify-end p-4">
            <span className="text-[9px] font-bold bg-[#E5E7EB] px-2.5 py-1 rounded-sm text-[#4B5563] tracking-wider">
              AUTO-SAVE ON
            </span>
          </div>
          
          <div className="flex-1 overflow-y-auto px-6 pb-6 pt-2 space-y-8 scrollbar-hide">
            
            {/* AI Message */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-1 items-start"
            >
              <div className="bg-[#F3F4F6] border border-[#E5E7EB]/50 rounded-2xl rounded-tl-sm px-5 py-4 max-w-[92%] shadow-sm">
                <p className="text-[13px] text-[#111827] leading-relaxed font-medium">
                  Hello Alex. Let's start with your experience at TechGlobal. Can you walk me through a situation where you had to manage a conflict within a high-stakes team environment?
                </p>
              </div>
            </motion.div>

            {/* User Message */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-1 items-end"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[12px] font-semibold text-[#4F46E5]">You</span>
                <div className="w-6 h-6 rounded bg-[#E0E7FF] flex items-center justify-center text-[#4F46E5]">
                  <User size={14} />
                </div>
              </div>
              <div className="bg-[#F3F4F6] border border-[#E5E7EB]/50 rounded-2xl rounded-tr-sm px-5 py-4 max-w-[92%] shadow-sm text-left">
                <p className="text-[13px] text-[#111827] leading-relaxed font-medium">
                  Absolutely. In my last project, we had a major architectural disagreement just two weeks before the alpha release. I facilitated a technical brainstorm...
                </p>
              </div>
            </motion.div>

            {/* Typing Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 pt-2"
            >
              <div className="w-8 h-8 rounded-lg bg-[#F3F4F6] border border-[#E5E7EB]/50 flex items-center justify-center shrink-0">
                <MoreHorizontal size={16} className="text-[#9CA3AF]" />
              </div>
              <div className="h-3.5 w-32 bg-[#F3F4F6] rounded-full" />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="h-[84px] border-t border-[#E5E7EB] bg-white flex items-center px-6 gap-4 shrink-0 shadow-[0_-5px_15px_rgba(0,0,0,0.02)] z-20">
        <button className="w-12 h-12 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white flex items-center justify-center shrink-0 shadow-md transition-all hover:scale-105 active:scale-95">
          <Mic size={22} />
        </button>
        <div className="flex-1 bg-[#EFF6FF] rounded-2xl h-[52px] flex items-center px-5 border border-[#BFDBFE]/50 text-[#9CA3AF] text-[13px] font-medium shadow-inner">
          Type your response instead...
        </div>
        <div className="text-center px-6 border-l border-[#E5E7EB] shrink-0">
          <p className="text-[9px] font-bold text-[#6B7280] uppercase tracking-widest mb-1">Time Elapsed</p>
          <p className="text-[15px] font-extrabold text-[#111827]">14:22</p>
        </div>
        <button className="h-[52px] px-6 bg-[#FEE2E2] hover:bg-[#FECACA] text-[#EF4444] rounded-2xl font-bold text-[13px] flex items-center gap-2.5 transition-colors shrink-0 border border-[#FECACA]/50">
          <Phone size={16} className="transform rotate-[135deg]" fill="currentColor" /> End Session
        </button>
      </div>
    </div>
  );
};

export default MockInterviewPage;
