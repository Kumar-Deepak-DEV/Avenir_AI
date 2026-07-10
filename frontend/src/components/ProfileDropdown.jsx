import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProfileDropdown({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(p => !p)} id="profile-btn" className="flex items-center gap-2.5 cursor-pointer">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md select-none"
          style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)' }}>AM</div>
        <div className="hidden lg:block text-left">
          <p className="text-sm font-bold text-[#111827] leading-tight">Alex Mercer</p>
          <p className="text-[10px] font-bold uppercase tracking-wider"
            style={{ background: 'linear-gradient(135deg,#F59E0B,#EF4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Premium Member
          </p>
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, scale: 0.95, y: -6 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -6 }} transition={{ duration: 0.16 }}
            className="absolute right-0 top-12 z-50 w-48 bg-white/95 backdrop-blur-xl border border-[#E5E7EB] rounded-xl shadow-2xl overflow-hidden">
            {['My Profile', 'Account Settings', 'Billing'].map(item => (
              <button key={item} className="w-full text-left px-4 py-2.5 text-xs font-medium text-[#111827] hover:bg-[#F8FAFC] transition-colors cursor-pointer">{item}</button>
            ))}
            <div className="border-t border-[#E5E7EB]" />
            <button onClick={() => onNavigate('landing')}
              className="w-full text-left px-4 py-2.5 text-xs font-medium text-[#EF4444] hover:bg-red-50 transition-colors cursor-pointer">
              Sign Out
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
