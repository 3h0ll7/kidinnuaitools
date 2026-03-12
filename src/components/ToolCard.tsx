import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, DollarSign, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getCategoryColor } from '@/data/categoryColors';

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
  const colors = getCategoryColor(tool.category);

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
        className="relative overflow-hidden bg-card/90 backdrop-blur-xl border rounded-3xl transition-all duration-500 group cursor-pointer"
        style={{
          borderColor: isHovered ? colors.border : 'hsl(var(--border) / 0.4)',
          boxShadow: isHovered ? colors.shadowHover : '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Category color top accent bar */}
        <div 
          className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
          style={{ 
            background: colors.bgGradient,
            opacity: isHovered ? 1 : 0.6,
          }} 
        />

        {/* Animated background gradient */}
        <div 
          className="absolute inset-0 opacity-0 transition-all duration-700"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${colors.bg}, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
          }}
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
                <div 
                  className="w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center"
                  style={{ background: colors.bg }}
                >
                  <span className="text-2xl font-bold" style={{ color: colors.text }}>
                    {tool.name.charAt(0)}
                  </span>
                </div>
              )}
              {/* Glow effect behind logo */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 -z-10"
                style={{ 
                  background: colors.bgGradient,
                  filter: 'blur(15px)',
                  opacity: isHovered ? 0.6 : 0,
                }}
              />
            </motion.div>
            
            <div className="flex-1">
              <h3 
                className="text-xl font-bold text-foreground mb-1 transition-colors duration-300"
                style={{ color: isHovered ? colors.text : undefined }}
              >
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
            <Badge 
              variant="secondary" 
              className="text-xs border"
              style={{ 
                background: colors.bg, 
                color: colors.text, 
                borderColor: colors.border 
              }}
            >
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
              className="w-full text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ background: colors.bgGradient }}
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
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 transition-opacity duration-500"
          style={{ 
            background: `linear-gradient(to right, transparent, ${colors.bgSolid}, transparent)`,
            filter: 'blur(8px)',
            opacity: isHovered ? 0.6 : 0,
          }}
        />
      </div>
    </motion.div>
  );
};
