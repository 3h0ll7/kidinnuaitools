import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Layers, Megaphone, Palette, Code, Shield, GraduationCap, 
  FlaskConical, Stethoscope, Scale, Building2, FolderKanban, 
  Users, Calculator 
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'الكل': <Layers className="w-4 h-4" />,
  'للمسوقين': <Megaphone className="w-4 h-4" />,
  'للمصممين': <Palette className="w-4 h-4" />,
  'للمبرمجين': <Code className="w-4 h-4" />,
  'لأخصائيي الأمن السيبراني': <Shield className="w-4 h-4" />,
  'للمعلمين': <GraduationCap className="w-4 h-4" />,
  'للباحثين': <FlaskConical className="w-4 h-4" />,
  'للأطباء': <Stethoscope className="w-4 h-4" />,
  'للمحامين': <Scale className="w-4 h-4" />,
  'للمهندسين المعماريين': <Building2 className="w-4 h-4" />,
  'لمديري المشاريع': <FolderKanban className="w-4 h-4" />,
  'لأخصائيي الموارد البشرية': <Users className="w-4 h-4" />,
  'للمحاسبين': <Calculator className="w-4 h-4" />,
};

interface FilterButtonProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

export const FilterButton = ({ category, isActive, onClick, index }: FilterButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant={isActive ? "default" : "outline"}
        onClick={onClick}
        className={`
          relative overflow-hidden
          px-6 py-3 rounded-full
          font-medium text-sm
          transition-all duration-300
          gap-2
          ${isActive 
            ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30 border-0' 
            : 'bg-background/60 backdrop-blur-sm border-border/40 text-muted-foreground hover:text-foreground hover:bg-background/80'
          }
        `}
      >
        {isActive && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full"
            style={{ zIndex: -1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        
        <span className="relative z-10 flex items-center gap-2">
          {categoryIcons[category]}
          {category}
        </span>
      </Button>
    </motion.div>
  );
};
        <span className="relative z-10">{category}</span>
      </Button>
    </motion.div>
  );
};