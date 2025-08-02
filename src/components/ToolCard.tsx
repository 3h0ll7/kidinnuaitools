import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, DollarSign, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ToolCardProps {
  tool: {
    name: string;
    url: string;
    logo: string;
    description: string;
    category: string;
    pricing: string;
    arabic_support: string;
  };
  index: number;
}

export const ToolCard = ({ tool, index }: ToolCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getPricingColor = (pricing: string) => {
    if (pricing.includes('مجاني')) return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (pricing === 'مدفوع') return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
  };

  const getArabicSupportColor = (support: string) => {
    if (support === 'نعم') return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (support === 'جزئي') return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    return 'bg-red-500/20 text-red-400 border-red-500/30';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 20 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -15, 
        rotateX: 8,
        rotateY: 3,
        scale: 1.03,
        transition: { duration: 0.4, type: "spring", stiffness: 300 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="perspective-1000"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div 
        className={`
          relative overflow-hidden
          bg-card/90 backdrop-blur-xl
          border border-border/40
          rounded-3xl
          transition-all duration-500
          group cursor-pointer
          ${isHovered ? 'shadow-2xl' : 'shadow-lg'}
        `}
        style={{
          boxShadow: isHovered 
            ? '0 30px 60px -12px hsl(var(--primary) / 0.4), 0 0 40px hsl(var(--primary) / 0.2)'
            : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Animated background gradient */}
        <div 
          className={`
            absolute inset-0 
            bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5
            opacity-0 transition-all duration-700
            ${isHovered ? 'opacity-100' : ''}
          `} 
        />

        {/* Header with logo */}
        <div className="p-6 border-b border-border/30">
          <div className="flex items-center space-x-4 space-x-reverse mb-4">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {!imageError ? (
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} Logo`}
                  className="w-16 h-16 rounded-2xl shadow-lg object-contain bg-background/50 p-2"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-16 h-16 rounded-2xl shadow-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {tool.name.charAt(0)}
                  </span>
                </div>
              )}
              {/* Glow effect behind logo */}
              <div 
                className={`
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-r from-primary/30 to-accent/30
                  opacity-0 transition-opacity duration-500 -z-10
                  ${isHovered ? 'opacity-60' : ''}
                `}
                style={{ filter: 'blur(15px)' }}
              />
            </motion.div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {tool.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>أداة ذكاء اصطناعي</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {tool.description}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="text-xs">
              {tool.category}
            </Badge>
            <Badge 
              className={`text-xs border ${getPricingColor(tool.pricing)}`}
              variant="outline"
            >
              <DollarSign className="w-3 h-3 ml-1" />
              {tool.pricing}
            </Badge>
            <Badge 
              className={`text-xs border ${getArabicSupportColor(tool.arabic_support)}`}
              variant="outline"
            >
              <Languages className="w-3 h-3 ml-1" />
              عربي: {tool.arabic_support}
            </Badge>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent text-primary-foreground font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a 
                href={tool.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                زيارة الأداة
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Bottom glow effect */}
        <div 
          className={`
            absolute bottom-0 left-1/2 transform -translate-x-1/2
            w-1/2 h-1 
            bg-gradient-to-r from-transparent via-primary to-transparent
            opacity-0 transition-opacity duration-500
            ${isHovered ? 'opacity-60' : ''}
          `}
          style={{ filter: 'blur(8px)' }}
        />
      </div>
    </motion.div>
  );
};