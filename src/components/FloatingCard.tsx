import { useState } from 'react';
import { motion } from 'framer-motion';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FloatingCard = ({ children, className = '', delay = 0 }: FloatingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -10, 
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`
        perspective-1000 transform-3d
        ${className}
      `}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <div 
        className={`
          relative overflow-hidden
          bg-card/80 backdrop-blur-xl
          border border-border/30
          rounded-2xl
          transition-all duration-500
          ${isHovered ? 'shadow-2xl shadow-primary/20' : 'shadow-lg shadow-black/10'}
        `}
        style={{
          boxShadow: isHovered 
            ? '0 25px 50px -12px hsl(var(--primary) / 0.4), 0 0 30px hsl(var(--primary) / 0.3)'
            : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Glow effect overlay */}
        <div 
          className={`
            absolute inset-0 
            bg-gradient-to-br from-primary/5 to-accent/5
            opacity-0 transition-opacity duration-500
            ${isHovered ? 'opacity-100' : ''}
          `} 
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Border glow */}
        <div 
          className={`
            absolute inset-0 rounded-2xl
            bg-gradient-to-r from-primary/20 to-accent/20
            opacity-0 transition-opacity duration-500 -z-10
            ${isHovered ? 'opacity-100' : ''}
          `}
          style={{ filter: 'blur(20px)' }}
        />
      </div>
    </motion.div>
  );
};