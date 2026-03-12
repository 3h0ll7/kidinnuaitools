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
        {/* Hero Image / Preview Section */}
        <div 
          className="relative h-40 overflow-hidden flex items-center justify-center"
          style={{
            background: colors.bgGradient,
          }}
        >
          {/* Decorative pattern overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px), radial-gradient(circle at 60% 80%, white 1px, transparent 1px)`,
              backgroundSize: '60px 60px, 80px 80px, 40px 40px',
            }}
          />
          
          {/* Floating shapes */}
          <div 
            className="absolute top-3 right-3 w-16 h-16 rounded-full opacity-20"
            style={{ background: `hsla(${(colors.hue + 40) % 360}, 80%, 70%, 0.4)` }}
          />
          <div 
            className="absolute bottom-3 left-3 w-10 h-10 rounded-lg opacity-15 rotate-45"
            style={{ background: `hsla(${(colors.hue + 60) % 360}, 80%, 70%, 0.5)` }}
          />

          {/* Centered Logo */}
          <motion.div
            whileHover={{ rotate: 5, scale: 1.15 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            {!imageError ? (
              <img 
                src={tool.logo} 
                alt={`${tool.name} Logo`}
                className="w-20 h-20 rounded-2xl shadow-2xl object-contain bg-white/90 dark:bg-background/90 p-3 backdrop-blur-sm"
                onError={() => setImageError(true)}
              />
            ) : (
              <div 
                className="w-20 h-20 rounded-2xl shadow-2xl flex items-center justify-center bg-white/90 dark:bg-background/90 backdrop-blur-sm"
              >
                <span className="text-3xl font-black" style={{ color: colors.bgSolid }}>
                  {tool.name.charAt(0)}
                </span>
              </div>
            )}
          </motion.div>

          {/* Category badge on image */}
          <div className="absolute top-3 left-3">
            <Badge 
              className="text-xs border backdrop-blur-md font-semibold"
              style={{ 
                background: 'hsla(0, 0%, 0%, 0.3)', 
                color: '#fff', 
                borderColor: 'hsla(0, 0%, 100%, 0.2)' 
              }}
            >
              {tool.category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title & Description */}
          <h3 
            className="text-lg font-bold text-foreground mb-2 transition-colors duration-300"
            style={{ color: isHovered ? colors.text : undefined }}
          >
            {tool.name}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
            {tool.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
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
