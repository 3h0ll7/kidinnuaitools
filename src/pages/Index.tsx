import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Github, Youtube, Facebook } from 'lucide-react';
import { Hero3D } from '@/components/Hero3D';
import { SearchBar } from '@/components/SearchBar';
import { FilterButton } from '@/components/FilterButton';
import { ToolCard } from '@/components/ToolCard';
import { aiToolsData, categoryIntros } from '@/data/aiToolsData';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('الكل');

  const categories = ['الكل', ...new Set(aiToolsData.map(tool => tool.category))];

  const filteredTools = useMemo(() => {
    return aiToolsData.filter(tool => {
      const matchesCategory = activeCategory === 'الكل' || tool.category === activeCategory;
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <Hero3D />

      {/* Search and Filter Section */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <SearchBar 
            value={searchTerm}
            onChange={setSearchTerm}
          />

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <FilterButton
                key={category}
                category={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                index={index}
              />
            ))}
          </div>

          {activeCategory !== 'الكل' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-muted-foreground leading-relaxed">
                {categoryIntros[activeCategory as keyof typeof categoryIntros]}
              </p>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="container mx-auto px-6 pb-20">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          layout
        >
          {filteredTools.map((tool, index) => (
            <ToolCard
              key={tool.name}
              tool={tool}
              index={index}
            />
          ))}
        </motion.div>

        {filteredTools.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-muted-foreground">
              لم يتم العثور على أدوات تطابق البحث
            </p>
          </motion.div>
        )}
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30">
        <div className="container mx-auto px-6 flex flex-col items-center gap-6">
          <div className="flex gap-4">
            {[
              { icon: Instagram, href: 'https://instagram.com/staiiq', label: 'Instagram' },
              { icon: Twitter, href: 'https://twitter.com/3h0ll7', label: 'X / Twitter' },
              { icon: Github, href: 'https://github.com/3h0ll7', label: 'GitHub' },
              { icon: Youtube, href: 'https://youtube.com/@stai9', label: 'YouTube' },
              { icon: Facebook, href: 'https://www.facebook.com/share/1SXTmx3Zcj/', label: 'Facebook' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
            <motion.a
              href="https://linktr.ee/3h0ll"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors text-sm font-bold"
            >
              TT
            </motion.a>
          </div>
          <p className="text-muted-foreground text-sm">
            &copy; 2024 Kidinnu. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
