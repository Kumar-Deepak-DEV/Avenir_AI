import React from 'react';
import { motion } from 'framer-motion';

export default function CircularProgress({ percentage = 70, size = 140, strokeWidth = 10 }) {
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percentage / 100) * circ;
  return (
    <div style={{ width: size, height: size }} className="relative flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 -rotate-90">
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" /><stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#E5E7EB" strokeWidth={strokeWidth} />
        <motion.circle cx={size/2} cy={size/2} r={r} fill="none" stroke="url(#ringGrad)"
          strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }} animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.6 }} />
      </svg>
      <div className="z-10 flex flex-col items-center">
        <span className="text-2xl font-extrabold text-[#111827]">{percentage}%</span>
        <span className="text-[11px] font-medium text-[#6B7280]">Ready</span>
      </div>
    </div>
  );
}
