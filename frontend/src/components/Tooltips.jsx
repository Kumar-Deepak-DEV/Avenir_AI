import React from 'react';

export function LineTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white/95 backdrop-blur-md border border-[#E5E7EB] rounded-xl px-3 py-2 shadow-lg text-xs">
      <p className="font-bold text-[#111827]">{label}</p>
      <p className="text-[#2563EB] font-semibold">Score: {payload[0].value}%</p>
    </div>
  );
}

export function BarTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white/95 backdrop-blur-md border border-[#E5E7EB] rounded-xl px-3 py-2 shadow-lg text-xs">
      <p className="font-bold text-[#111827]">{label}</p>
      <p className="text-[#7C3AED] font-semibold">Score: {payload[0].value}%</p>
    </div>
  );
}
