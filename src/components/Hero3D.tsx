import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import heroBackground from '@/assets/hero-bg.jpg';
import { aiToolsData } from '@/data/aiToolsData';

export const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        mousePosition.current = { x, y };
        
        // Apply parallax effect to floating elements
        const floatingElements = containerRef.current.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
          const speed = (index + 1) * 0.5;
          (element as HTMLElement).style.transform = 
            `translate3d(${x * speed * 20}px, ${y * speed * 20}px, 0)`;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--background-secondary)) 100%)`,
      }}
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <img 
          src={heroBackground}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Shape 1 */}
        <motion.div
          className="floating-element absolute top-1/4 left-1/4 w-32 h-32 opacity-20"
          animate={{ 
            rotate: 360,
            y: [-20, 20, -20],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-primary/40 to-accent/40 rounded-3xl backdrop-blur-sm" 
               style={{ transform: 'rotateX(45deg) rotateY(45deg)' }} />
        </motion.div>

        {/* Shape 2 */}
        <motion.div
          className="floating-element absolute top-1/3 right-1/4 w-24 h-24 opacity-25"
          animate={{ 
            rotate: -360,
            x: [-30, 30, -30],
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-accent/50 to-primary/50 rounded-full backdrop-blur-sm" />
        </motion.div>

        {/* Shape 3 */}
        <motion.div
          className="floating-element absolute bottom-1/4 left-1/3 w-20 h-20 opacity-30"
          animate={{ 
            rotateX: [0, 180, 0],
            rotateY: [0, 180, 0],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-primary/60 to-accent/60 rounded-lg backdrop-blur-sm" />
        </motion.div>

        {/* Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="floating-element absolute w-2 h-2 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-xl border border-primary/30 shadow-2xl">
            <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              K
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Kidinnu
          </span>
          <br />
          <span className="text-foreground/80 text-3xl md:text-5xl font-bold">
            المنصة الرائدة في تجميع
            <br />
            أدوات الذكاء الاصطناعي
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          دليلك الشامل لأكثر من <span className="text-primary font-bold">100 أداة</span> مصنفة بعناية، 
          لتعزيز إنتاجيتك وإطلاق العنان لإبداعك
        </motion.p>

        {/* Creator Credit */}
        <motion.p 
          className="text-lg text-muted-foreground/70 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          by <span className="font-bold text-primary">𝓗𝓪𝓼𝓼𝓪𝓷 𝓼𝓪𝓵𝓶𝓪𝓷</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-2xl shadow-2xl hover:shadow-primary/30 transition-all duration-300"
            onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
          >
            استكشف الأدوات
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-background/20 backdrop-blur-xl border border-border/30 text-foreground font-bold rounded-2xl hover:bg-background/30 transition-all duration-300"
          >
            تعرف على المزيد
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};