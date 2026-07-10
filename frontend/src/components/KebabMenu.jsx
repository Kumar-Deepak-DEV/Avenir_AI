import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoreVertical, Edit, Trash2, Share2 } from 'lucide-react';

export default function KebabMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(p => !p)}
        className="p-1.5 rounded-lg hover:bg-[#F3F4F6] transition-colors cursor-pointer text-[#6B7280]">
        <MoreVertical size={16} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, scale: 0.92, y: -4 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -4 }} transition={{ duration: 0.14 }}
            className="absolute right-0 top-8 z-50 w-36 bg-white/95 backdrop-blur-lg border border-[#E5E7EB] rounded-xl shadow-xl overflow-hidden">
            {[{ label: 'Edit', icon: Edit }, { label: 'Delete', icon: Trash2 }, { label: 'Share', icon: Share2 }].map(({ label, icon: Icon }) => (
              <button key={label}
                className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-medium text-[#111827] hover:bg-[#F8FAFC] transition-colors cursor-pointer">
                <Icon size={13} className="text-[#6B7280]" />{label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
