import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  pauseOnHover?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  children, 
  direction = 'left', 
  speed = 40,
  pauseOnHover = true 
}) => {
  return (
    <div className="flex overflow-hidden group select-none">
      <motion.div
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity
        }}
        className="flex flex-nowrap min-w-max gap-4 py-4"
        style={{
          willChange: 'transform'
        }}
      >
        {/* Render twice for continuous loop */}
        <div className="flex gap-4 items-center">
          {children}
        </div>
        <div className="flex gap-4 items-center">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
