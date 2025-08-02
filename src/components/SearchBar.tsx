import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ value, onChange, placeholder = "ابحث عن الأدوات..." }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div 
        className={`
          relative overflow-hidden
          bg-background/80 backdrop-blur-xl
          border transition-all duration-300 rounded-2xl
          ${isFocused 
            ? 'border-primary/50 shadow-2xl shadow-primary/20' 
            : 'border-border/40 shadow-lg'
          }
        `}
      >
        {/* Glow effect */}
        <div 
          className={`
            absolute inset-0 
            bg-gradient-to-r from-primary/10 to-accent/10
            opacity-0 transition-opacity duration-300
            ${isFocused ? 'opacity-100' : ''}
          `} 
        />

        <div className="relative flex items-center">
          {/* Search Icon */}
          <motion.div 
            className="absolute left-4 z-10"
            animate={{ 
              scale: isFocused ? 1.1 : 1,
              color: isFocused ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'
            }}
            transition={{ duration: 0.2 }}
          >
            <Search className="w-5 h-5" />
          </motion.div>

          {/* Input */}
          <Input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
              w-full pl-12 pr-12 py-4 text-lg
              bg-transparent border-0
              focus:ring-0 focus:outline-none
              placeholder:text-muted-foreground/60
              text-foreground
            `}
            dir="rtl"
          />

          {/* Clear Button */}
          {value && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onChange('')}
              className="absolute right-4 z-10 p-1 rounded-full bg-muted-foreground/20 hover:bg-muted-foreground/30 transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </motion.button>
          )}
        </div>

        {/* Bottom glow line */}
        <motion.div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ width: '0%' }}
          animate={{ width: isFocused ? '100%' : '0%' }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};