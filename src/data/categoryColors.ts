// Category color mapping - each category gets a unique HSL color
export const categoryColors: Record<string, { hue: number; label: string }> = {
  'الكل': { hue: 325, label: 'primary' },
  'للمسوقين': { hue: 340, label: 'rose' },
  'للمصممين': { hue: 280, label: 'purple' },
  'للمبرمجين': { hue: 200, label: 'blue' },
  'لأخصائيي الأمن السيبراني': { hue: 160, label: 'emerald' },
  'للمعلمين': { hue: 45, label: 'amber' },
  'للباحثين': { hue: 220, label: 'indigo' },
  'للأطباء': { hue: 0, label: 'red' },
  'للمحامين': { hue: 30, label: 'orange' },
  'للمهندسين المعماريين': { hue: 180, label: 'cyan' },
  'لمديري المشاريع': { hue: 260, label: 'violet' },
  'لأخصائيي الموارد البشرية': { hue: 120, label: 'green' },
  'للمحاسبين': { hue: 50, label: 'yellow' },
  'للتمريض': { hue: 350, label: 'pink' },
  'للمختبرات الطبية': { hue: 190, label: 'teal' },
  'للصيدلة': { hue: 140, label: 'mint' },
  'لأطباء الأسنان': { hue: 170, label: 'aqua' },
  'للمصورين': { hue: 300, label: 'fuchsia' },
  'للمستثمرين والمحللين الماليين': { hue: 80, label: 'lime' },
  'للمترجمين ولغويين': { hue: 230, label: 'sky' },
  'للموسيقيين والملحنين': { hue: 310, label: 'magenta' },
  'للصحفيين والكتاب': { hue: 25, label: 'tangerine' },
  'للعاملين في مجال التجارة الإلكترونية': { hue: 100, label: 'chartreuse' },
  'للمزارعين والعاملين في القطاع الزراعي': { hue: 90, label: 'grass' },
  'للمعلمين اللغويين ومدرسي اللغات': { hue: 210, label: 'royal' },
  'للمسافرين ووكالات السفر': { hue: 15, label: 'coral' },
  'للمصممين الداخليين ومهندسي الديكور': { hue: 330, label: 'hotpink' },
  'لعلماء البيئة والمتخصصين في الاستدامة': { hue: 150, label: 'sage' },
};

export const getCategoryColor = (category: string) => {
  const color = categoryColors[category];
  const hue = color?.hue ?? 325;
  return {
    bg: `hsla(${hue}, 75%, 55%, 0.15)`,
    bgHover: `hsla(${hue}, 75%, 55%, 0.25)`,
    bgSolid: `hsl(${hue}, 75%, 55%)`,
    bgGradient: `linear-gradient(135deg, hsl(${hue}, 75%, 55%), hsl(${(hue + 30) % 360}, 80%, 60%))`,
    text: `hsl(${hue}, 85%, 65%)`,
    border: `hsla(${hue}, 75%, 55%, 0.3)`,
    shadow: `0 10px 30px -8px hsla(${hue}, 75%, 50%, 0.35)`,
    shadowHover: `0 25px 50px -10px hsla(${hue}, 75%, 50%, 0.5), 0 0 30px hsla(${hue}, 75%, 55%, 0.2)`,
    glow: `hsla(${hue}, 75%, 55%, 0.4)`,
    hue,
  };
};
