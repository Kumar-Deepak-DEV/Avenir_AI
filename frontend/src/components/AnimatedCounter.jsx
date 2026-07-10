import React, { useState, useEffect } from 'react';
import { useMotionValue, animate } from 'framer-motion';

export default function AnimatedCounter({ target, suffix = '', duration = 1.2 }) {
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const ctrl = animate(motionVal, target, {
      duration, ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return ctrl.stop;
  }, [target, motionVal, duration]);
  return <span>{display}{suffix}</span>;
}
