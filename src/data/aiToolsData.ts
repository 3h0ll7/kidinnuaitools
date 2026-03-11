export interface AITool {
  name: string;
  url: string;
  logo: string;
  description: string;
  category: string;
  pricing: string;
  arabic_support: string;
}

export const aiToolsData: AITool[] = [
  // للمسوقين 📢
  { name: "Jasper", url: "https://www.jasper.ai/", logo: "https://logo.clearbit.com/jasper.ai", description: "لكتابة محتوى إعلاني وتسويقي إبداعي وجذاب.", category: "للمسوقين", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "HubSpot AI", url: "https://www.hubspot.com/artificial-intelligence", logo: "https://logo.clearbit.com/hubspot.com", description: "لتحسين إدارة علاقات العملاء وأتمتة التسويق.", category: "للمسوقين", pricing: "مدفوع", arabic_support: "جزئي" },
  { name: "Google Analytics 4", url: "https://analytics.google.com/", logo: "https://logo.clearbit.com/google.com", description: "لتحليل سلوك العملاء بذكاء وتقديم رؤى دقيقة.", category: "للمسوقين", pricing: "مجاني/مدفوع", arabic_support: "نعم" },
  { name: "AdCreative.ai", url: "https://www.adcreative.ai/", logo: "https://logo.clearbit.com/adcreative.ai", description: "لإنشاء تصميمات إعلانية متنوعة بشكل آلي.", category: "للمسوقين", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Synthesia", url: "https://www.synthesia.io/", logo: "https://logo.clearbit.com/synthesia.io", description: "لإنشاء مقاطع فيديو واقعية باستخدام شخصيات افتراضية.", category: "للمسوقين", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Hootsuite Insights", url: "https://www.hootsuite.com/platform/insights", logo: "https://logo.clearbit.com/hootsuite.com", description: "لمراقبة وتحليل وسائل التواصل الاجتماعي.", category: "للمسوقين", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Optimizely", url: "https://www.optimizely.com/", logo: "https://logo.clearbit.com/optimizely.com", description: "لتحسين تجربة المستخدم (UX) عبر اختبارات A/B.", category: "للمسوقين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Salesforce Einstein", url: "https://www.salesforce.com/products/einstein/overview/", logo: "https://logo.clearbit.com/salesforce.com", description: "لتقديم توصيات ذكية لتحسين استراتيجيات المبيعات.", category: "للمسوقين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Adobe Sensei", url: "https://www.adobe.com/sensei.html", logo: "https://logo.clearbit.com/adobe.com", description: "لتحسين الصور والفيديوهات وأتمتة المهام الإبداعية.", category: "للمسوقين", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "ChatGPT", url: "https://chat.openai.com/", logo: "https://logo.clearbit.com/openai.com", description: "للمساعدة في كتابة المحتوى، والرد على العملاء، ووضع خطط تسويقية.", category: "للمسوقين", pricing: "مجاني/مدفوع", arabic_support: "نعم" },

  // للمصممين 🎨
  { name: "Midjourney", url: "https://www.midjourney.com/", logo: "https://logo.clearbit.com/midjourney.com", description: "لتوليد صور فنية عالية الجودة بناءً على أوامر نصية.", category: "للمصممين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "DALL-E 2", url: "https://openai.com/dall-e-2", logo: "https://logo.clearbit.com/openai.com", description: "لإنشاء صور ورسومات فريدة من خلال وصف نصي.", category: "للمصممين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Adobe Firefly", url: "https://www.adobe.com/sensei/generative-ai/firefly.html", logo: "https://logo.clearbit.com/adobe.com", description: "مساعد إبداعي متكامل مع تطبيقات Adobe لتوليد الصور والتأثيرات.", category: "للمصممين", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Canva Magic Design", url: "https://www.canva.com/magic-design/", logo: "https://logo.clearbit.com/canva.com", description: "لإنشاء تصاميم مخصصة تلقائيًا بناءً على فكرة بسيطة.", category: "للمصممين", pricing: "مجاني/مدفوع", arabic_support: "نعم" },
  { name: "Khroma", url: "https://www.khroma.co/", logo: "https://logo.clearbit.com/khroma.co", description: "لاكتشاف وتوليد لوحات ألوان لانهائية.", category: "للمصممين", pricing: "مجاني", arabic_support: "لا" },
  { name: "Let's Enhance", url: "https://letsenhance.io/", logo: "https://logo.clearbit.com/letsenhance.io", description: "لتحسين جودة الصور وزيادة دقتها دون فقدان التفاصيل.", category: "للمصممين", pricing: "مجاني/مدفوع", arabic_support: "لا" },
  { name: "Remove.bg", url: "https://www.remove.bg/", logo: "https://logo.clearbit.com/remove.bg", description: "لإزالة خلفيات الصور بنقرة واحدة.", category: "للمصممين", pricing: "مجاني/مدفوع", arabic_support: "نعم" },
  { name: "Uizard", url: "https://uizard.io/", logo: "https://logo.clearbit.com/uizard.io", description: "لتحويل الرسومات اليدوية إلى نماذج أولية لواجهات المستخدم.", category: "للمصممين", pricing: "مجاني/مدفوع", arabic_support: "لا" },
  { name: "Looka", url: "https://looka.com/", logo: "https://logo.clearbit.com/looka.com", description: "لتصميم شعارات احترافية باستخدام الذكاء الاصطناعي.", category: "للمصممين", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Autodesk Forma", url: "https://www.autodesk.com/products/forma/overview", logo: "https://logo.clearbit.com/autodesk.com", description: "لمساعدة المصممين المعماريين على اتخاذ قرارات تصميم أفضل.", category: "للمصممين", pricing: "مدفوع", arabic_support: "لا" },

  // للمبرمجين 💻
  { name: "GitHub Copilot", url: "https://github.com/features/copilot", logo: "https://logo.clearbit.com/github.com", description: "مساعد برمجي يقترح أكوادًا كاملة ووظائف أثناء الكتابة.", category: "للمبرمجين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Tabnine", url: "https://www.tabnine.com/", logo: "https://logo.clearbit.com/tabnine.com", description: "أداة تكميل الكود التي تتعلم من أسلوبك لتقديم اقتراحات مخصصة.", category: "للمبرمجين", pricing: "مجاني/مدفوع", arabic_support: "لا" },
  { name: "ChatGPT/GPT-4", url: "https://chat.openai.com/", logo: "https://logo.clearbit.com/openai.com", description: "للمساعدة في كتابة أجزاء من الكود، تصحيح الأخطاء، وشرح المفاهيم.", category: "للمبرمجين", pricing: "مجاني/مدفوع", arabic_support: "نعم" },
  { name: "Replit Ghostwriter", url: "https://replit.com/ghostwriter", logo: "https://logo.clearbit.com/replit.com", description: "مساعد برمجي متكامل داخل بيئة التطوير Replit.", category: "للمبرمجين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Snyk", url: "https://snyk.io/", logo: "https://logo.clearbit.com/snyk.io", description: "لاكتشاف الثغرات الأمنية في الكود والمكتبات المفتوحة المصدر.", category: "للمبرمجين", pricing: "مجاني/مدفوع", arabic_support: "لا" },
  { name: "DeepCode", url: "https://www.deepcode.ai/", logo: "https://logo.clearbit.com/snyk.io", description: "يقوم بمراجعة الكود ويقدم اقتراحات لتحسين الجودة والأداء.", category: "للمبرمجين", pricing: "مجاني", arabic_support: "لا" },
  { name: "Amazon CodeWhisperer", url: "https://aws.amazon.com/codewhisperer/", logo: "https://logo.clearbit.com/amazon.com", description: "مساعد ترميز قائم على التعلم الآلي.", category: "للمبرمجين", pricing: "مجاني", arabic_support: "لا" },
  { name: "Mintlify", url: "https://mintlify.com/", logo: "https://logo.clearbit.com/mintlify.com", description: "لإنشاء توثيق (Documentation) للكود بشكل آلي.", category: "للمبرمجين", pricing: "مجاني/مدفوع", arabic_support: "لا" },
  { name: "BlackBox AI", url: "https://www.useblackbox.io/", logo: "https://logo.clearbit.com/useblackbox.io", description: "للعثور على مقتطفات الكود التي تحتاجها من أي سؤال تطرحه.", category: "للمبرمجين", pricing: "مجاني/مدفوع", arabic_support: "لا" },
  { name: "CodeT5", url: "https://github.com/salesforce/CodeT5", logo: "https://logo.clearbit.com/github.com", description: "نموذج ذكاء اصطناعي مفتوح المصدر لفهم وتوليد الكود.", category: "للمبرمجين", pricing: "مجاني", arabic_support: "لا" },

  // لأخصائيي الأمن السيبراني 🛡️
  { name: "Darktrace", url: "https://darktrace.com/", logo: "https://logo.clearbit.com/darktrace.com", description: "يستخدم الذكاء الاصطناعي لاكتشاف التهديدات السيبرانية المتقدمة.", category: "لأخصائيي الأمن السيبراني", pricing: "مدفوع", arabic_support: "لا" },
  { name: "CrowdStrike Falcon", url: "https://www.crowdstrike.com/falcon-platform/", logo: "https://logo.clearbit.com/crowdstrike.com", description: "منصة لحماية النقاط النهائية تعتمد على الذكاء الاصطناعي لمنع الهجمات.", category: "لأخصائيي الأمن السيبراني", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Vectra AI", url: "https://www.vectra.ai/", logo: "https://logo.clearbit.com/vectra.ai", description: "للكشف عن التهديدات والهجمات المخفية داخل الشبكة.", category: "لأخصائيي الأمن السيبراني", pricing: "مدفوع", arabic_support: "لا" },
  { name: "IBM QRadar Advisor", url: "https://www.ibm.com/qradar", logo: "https://logo.clearbit.com/ibm.com", description: "يستخدم الذكاء الاصطناعي للمساعدة في التحقيق في الحوادث الأمنية.", category: "لأخصائيي الأمن السيبراني", pricing: "مدفوع", arabic_support: "لا" },
  { name: "CylancePROTECT", url: "https://www.blackberry.com/us/en/products/endpoint-security/cylance-protect", logo: "https://logo.clearbit.com/blackberry.com", description: "يستخدم الذكاء الاصطناعي لمنع البرامج الضارة قبل أن يتم تنفيذها.", category: "لأخصائيي الأمن السيبراني", pricing: "مدفوع", arabic_support: "لا" },
  { name: "SentinelOne", url: "https://www.sentinelone.com/", logo: "https://logo.clearbit.com/sentinelone.com", description: "منصة مستقلة للكشف عن التهديدات والاستجابة لها عبر النقاط النهائية.", category: "لأخصائيي الأمن السيبراني", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Tessian", url: "https://www.tessian.com/", logo: "https://logo.clearbit.com/tessian.com", description: "لحماية البريد الإلكتروني من هجمات التصيد الاحتيالي وتسرب البيانات.", category: "لأخصائيي الأمن السيبراني", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Check Point Infinity AI", url: "https://www.checkpoint.com/ai-copilot/", logo: "https://logo.clearbit.com/checkpoint.com", description: "مساعد أمني لإدارة التهديدات والاستجابة لها بفعالية.", category: "لأخصائيي الأمن السيبراني", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Fortinet FortiAI", url: "https://www.fortinet.com/products/fortiai", logo: "https://logo.clearbit.com/fortinet.com", description: "للكشف عن التهديدات المتقدمة وأتمتة الاستجابة.", category: "لأخصائيي الأمن السيبراني", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Purple AI", url: "https://www.sentinelone.com/platform/purple-ai/", logo: "https://logo.clearbit.com/sentinelone.com", description: "أداة لتحليل الهجمات السيبرانية من خلال المحادثات النصية.", category: "لأخصائيي الأمن السيبراني", pricing: "مدفوع", arabic_support: "لا" },

  // للمعلمين 👩‍🏫
  { name: "Gradescope", url: "https://www.gradescope.com/", logo: "https://logo.clearbit.com/gradescope.com", description: "لتقييم وتصحيح الواجبات والامتحانات بشكل سريع.", category: "للمعلمين", pricing: "مدفوع", arabic_support: "جزئي" },
  { name: "MagicSchool AI", url: "https://www.magicschool.ai/", logo: "https://logo.clearbit.com/magicschool.ai", description: "منصة شاملة تساعد المعلمين في التخطيط والتقييم والتواصل.", category: "للمعلمين", pricing: "مجاني/مدفوع", arabic_support: "نعم" },
  { name: "Curipod", url: "https://curipod.com/", logo: "https://logo.clearbit.com/curipod.com", description: "لإنشاء دروس تفاعلية وجذابة للطلاب.", category: "للمعلمين", pricing: "مجاني/مدفوع", arabic_support: "نعم" },
  { name: "Canva for Education", url: "https://www.canva.com/education/", logo: "https://logo.clearbit.com/canva.com", description: "لإنشاء مواد تعليمية بصرية بسهولة.", category: "للمعلمين", pricing: "مجاني", arabic_support: "نعم" },
  { name: "Twee", url: "https://www.twee.com/", logo: "https://logo.clearbit.com/twee.com", description: "للمساعدة في إنشاء أسئلة وأنشطة لمعلمي اللغة.", category: "للمعلمين", pricing: "مجاني/مدفوع", arabic_support: "لا" },
  { name: "Gemini", url: "https://gemini.google.com/", logo: "https://logo.clearbit.com/google.com", description: "لإنشاء خطط دروس، وأمثلة، وشرح مبسط للمفاهيم المعقدة.", category: "للمعلمين", pricing: "مجاني", arabic_support: "نعم" },
  { name: "Socrative", url: "https://www.socrative.com/", logo: "https://logo.clearbit.com/socrative.com", description: "لإنشاء اختبارات قصيرة وأنشطة تفاعلية داخل الفصل.", category: "للمعلمين", pricing: "مجاني/مدفوع", arabic_support: "نعم" },
  { name: "Fetchy", url: "https://www.fetchy.com/", logo: "https://logo.clearbit.com/fetchy.com", description: "متخصص في إنشاء مواد تعليمية مصممة خصيصًا لتلبية متطلبات المعلمين.", category: "للمعلمين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Quizlet Q-Chat", url: "https://quizlet.com/q-chat", logo: "https://logo.clearbit.com/quizlet.com", description: "مدرس افتراضي يعمل بالذكاء الاصطناعي لتقديم تجارب دراسية تفاعلية.", category: "للمعلمين", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Formative", url: "https://www.formative.com/", logo: "https://logo.clearbit.com/formative.com", description: "لإنشاء تقييمات تفاعلية وتقديم ملاحظات فورية للطلاب.", category: "للمعلمين", pricing: "مجاني/مدفوع", arabic_support: "نعم" },

  // للباحثين 🔬
  { name: "Elicit", url: "https://elicit.com/", logo: "https://logo.clearbit.com/elicit.com", description: "مساعد بحثي لأتمتة مراجعة الأدبيات وتلخيص الأوراق البحثية.", category: "للباحثين", pricing: "مجاني/مدفوع", arabic_support: "لا" },
  { name: "Semantic Scholar", url: "https://www.semanticscholar.org/", logo: "https://logo.clearbit.com/semanticscholar.org", description: "محرك بحث أكاديمي يستخدم الذكاء الاصطناعي للعثور على الأبحاث.", category: "للباحثين", pricing: "مجاني", arabic_support: "لا" },
  { name: "Connected Papers", url: "https://www.connectedpapers.com/", logo: "https://logo.clearbit.com/connectedpapers.com", description: "لرسم خرائط بصرية تظهر العلاقات بين الأوراق البحثية.", category: "للباحثين", pricing: "مجاني/مدفوع", arabic_support: "لا" },
  { name: "Scite.ai", url: "https://scite.ai/", logo: "https://logo.clearbit.com/scite.ai", description: "لتقييم موثوقية الدراسات من خلال عرض كيفية الاستشهاد بها.", category: "للباحثين", pricing: "مجاني/مدفوع", arabic_support: "لا" },
  { name: "Zotero", url: "https://www.zotero.org/", logo: "https://logo.clearbit.com/zotero.org", description: "لإدارة المراجع وإنشاء قوائم الم ببليوغرافيا تلقائيًا.", category: "للباحثين", pricing: "مجاني", arabic_support: "نعم" },
  { name: "Trinka AI", url: "https://www.trinka.ai/", logo: "https://logo.clearbit.com/trinka.ai", description: "مساعد كتابة أكاديمية متخصص في تصحيح الأخطاء النحوية والأسلوبية.", category: "للباحثين", pricing: "مجاني/مدفوع", arabic_support: "لا" },
  { name: "Consensus", url: "https://consensus.app/", logo: "https://logo.clearbit.com/consensus.app", description: "محرك بحث يستخدم الذكاء الاصطناعي للعثور على نتائج من الأبحاث.", category: "للباحثين", pricing: "مجاني/مدفوع", arabic_support: "لا" },
  { name: "ResearchRabbit", url: "https://www.researchrabbit.ai/", logo: "https://logo.clearbit.com/researchrabbit.ai", description: "أداة لاكتشاف الأدبيات العلمية وتصورها.", category: "للباحثين", pricing: "مجاني", arabic_support: "لا" },
  { name: "Litmaps", url: "https://www.litmaps.com/", logo: "https://logo.clearbit.com/litmaps.com", description: "لإنشاء خرائط للمراجع العلمية واكتشاف الأبحاث الجديدة تلقائيًا.", category: "للباحثين", pricing: "مجاني/مدفوع", arabic_support: "لا" },
  
  // للأطباء 🩺
  { name: "Viz.ai", url: "https://www.viz.ai/", logo: "https://logo.clearbit.com/viz.ai", description: "يستخدم الذكاء الاصطناعي لتحليل الصور الطبية والكشف المبكر.", category: "للأطباء", pricing: "مدفوع", arabic_support: "لا" },
  { name: "PathAI", url: "https://www.pathai.com/", logo: "https://logo.clearbit.com/pathai.com", description: "منصة لعلم الأمراض مدعومة بالذكاء الاصطناعي لتحسين دقة التشخيص.", category: "للأطباء", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Tempus", url: "https://www.tempus.com/", logo: "https://logo.clearbit.com/tempus.com", description: "لتحليل البيانات الجزيئية والسريرية لتخصيص علاج السرطان.", category: "للأطباء", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Aidoc", url: "https://www.aidoc.com/", logo: "https://logo.clearbit.com/aidoc.com", description: "لتحليل فحوصات الأشعة وتحديد الحالات الحرجة بسرعة.", category: "للأطباء", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Butterfly iQ+", url: "https://www.butterflynetwork.com/", logo: "https://logo.clearbit.com/butterflynetwork.com", description: "جهاز محمول للموجات فوق الصوتية يستخدم الذكاء الاصطناعي.", category: "للأطباء", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Abridge", url: "https://www.abridge.com/", logo: "https://logo.clearbit.com/abridge.com", description: "لتلخيص المحادثات الطبية وتدوين الملاحظات تلقائيًا.", category: "للأطباء", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Glass AI", url: "https://glass.health/", logo: "https://logo.clearbit.com/glass.health", description: "قاعدة معرفية طبية تفاضلية للمساعدة في التشخيص.", category: "للأطباء", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Suki", url: "https://www.suki.ai/", logo: "https://logo.clearbit.com/suki.ai", description: "مساعد صوتي مدعوم بالذكاء الاصطناعي لتقليل وقت التوثيق الطبي.", category: "للأطباء", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Ada Health", url: "https://ada.com/", logo: "https://logo.clearbit.com/ada.com", description: "تطبيق يساعد المرضى على فهم أعراضهم، ويدعم الأطباء.", category: "للأطباء", pricing: "مجاني/مدفوع", arabic_support: "نعم" },
  { name: "Corti", url: "https://www.corti.ai/", logo: "https://logo.clearbit.com/corti.ai", description: "يحلل محادثات الطوارئ لتقديم إرشادات للمستجيبين.", category: "للأطباء", pricing: "مدفوع", arabic_support: "لا" },

  // للمحامين ⚖️
  { name: "Casetext (CoCounsel)", url: "https://casetext.com/cocounsel/", logo: "https://logo.clearbit.com/casetext.com", description: "مساعد قانوني للبحث ومراجعة المستندات وإعداد المذكرات.", category: "للمحامين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Harvey AI", url: "https://www.harvey.ai/", logo: "https://logo.clearbit.com/harvey.ai", description: "منصة ذكاء اصطناعي مصممة خصيصًا للمهام القانونية المعقدة.", category: "للمحامين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Lexis+ AI", url: "https://www.lexisnexis.com/en-us/products/lexis-plus/ai.page", logo: "https://logo.clearbit.com/lexisnexis.com", description: "حل متكامل للبحث القانوني وتحليل المستندات وصياغتها.", category: "للمحامين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Westlaw Edge", url: "https://legal.thomsonreuters.com/en/products/westlaw-edge", logo: "https://logo.clearbit.com/thomsonreuters.com", description: "يستخدم الذكاء الاصطناعي لتحسين سرعة ودقة البحث القانوني.", category: "للمحامين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Kira Systems", url: "https://www.kirasystems.com/", logo: "https://logo.clearbit.com/kirasystems.com", description: "لتحليل العقود والمستندات واستخلاص البنود الرئيسية.", category: "للمحامين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Luminance", url: "https://www.luminance.com/", logo: "https://logo.clearbit.com/luminance.com", description: "منصة ذكاء اصطناعي لمراجعة العقود والعناية الواجبة.", category: "للمحامين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "eDiscovery.ai", url: "https://www.ediscovery.ai/", logo: "https://logo.clearbit.com/ediscovery.ai", description: "لأتمتة وتحسين عملية المراجعة في الاكتشاف الإلكتروني.", category: "للمحامين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "DoNotPay", url: "https://donotpay.com/", logo: "https://logo.clearbit.com/donotpay.com", description: "يساعد في حل مجموعة متنوعة من القضايا القانونية الصغيرة.", category: "للمحامين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "ContractPodAi", url: "https://www.contractpodai.com/", logo: "https://logo.clearbit.com/contractpodai.com", description: "لإدارة دورة حياة العقود بالكامل باستخدام الذكاء الاصطناعي.", category: "للمحامين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "vLex (Vincent AI)", url: "https://vlex.com/", logo: "https://logo.clearbit.com/vlex.com", description: "مساعد بحث قانوني عالمي.", category: "للمحامين", pricing: "مدفوع", arabic_support: "لا" },

  // للمهندسين المعماريين 🏛️
  { name: "Finch3D", url: "https://www.finch3d.com/", logo: "https://logo.clearbit.com/finch3d.com", description: "مساعد ذكاء اصطناعي لبرنامج Revit لتحسين وتصميم مخططات المباني.", category: "للمهندسين المعماريين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Veras", url: "https://www.evolvelab.io/veras", logo: "https://logo.clearbit.com/evolvelab.io", description: "أداة لتصور التصاميم وتحويل النماذج ثلاثية الأبعاد إلى صور واقعية.", category: "للمهندسين المعماريين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Hypar", url: "https://hypar.io/", logo: "https://logo.clearbit.com/hypar.io", description: "منصة تصميم توليدي لإنشاء حلول للمباني والمساحات.", category: "للمهندسين المعماريين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Cove.tool", url: "https://cove.tools/", logo: "https://logo.clearbit.com/cove.tools", description: "لتحليل أداء المباني (الطاقة، ضوء النهار، التكلفة).", category: "للمهندسين المعماريين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Arkio", url: "https://www.arkio.is/", logo: "https://logo.clearbit.com/arkio.is", description: "لتصميم المباني والمدن بشكل تعاوني في الواقع الافتراضي.", category: "للمهندسين المعماريين", pricing: "مجاني/مدفوع", arabic_support: "لا" },
  { name: "Sidewalk Labs (Delve)", url: "https://www.sidewalklabs.com/products/delve", logo: "https://logo.clearbit.com/sidewalklabs.com", description: "لتوليد خيارات تصميم حضري محسّنة.", category: "للمهندسين المعماريين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Maket.ai", url: "https://www.maket.ai/", logo: "https://logo.clearbit.com/maket.ai", description: "لتوليد مخططات طوابق معمارية بسرعة.", category: "للمهندسين المعماريين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "TestFit", url: "https://testfit.io/", logo: "https://logo.clearbit.com/testfit.io", description: "لتكوين مخططات المواقع والمباني بشكل فوري.", category: "للمهندسين المعماريين", pricing: "مدفوع", arabic_support: "لا" },

  // لمديري المشاريع 🗓️
  { name: "ClickUp AI", url: "https://clickup.com/ai", logo: "https://logo.clearbit.com/clickup.com", description: "لإدارة المهام، وتوليد الملخصات، وأتمتة سير العمل.", category: "لمديري المشاريع", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Asana Intelligence", url: "https://asana.com/ai", logo: "https://logo.clearbit.com/asana.com", description: "لتقديم رؤى ذكية حول تقدم المشاريع وتحسين التخطيط.", category: "لمديري المشاريع", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Motion", url: "https://www.usemotion.com/", logo: "https://logo.clearbit.com/usemotion.com", description: "يستخدم الذكاء الاصطناعي لجدولة المهام والاجتماعات تلقائيًا.", category: "لمديري المشاريع", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Trello AI", url: "https://trello.com/ai", logo: "https://logo.clearbit.com/trello.com", description: "لتقديم اقتراحات ذكية لتنظيم البطاقات وأتمتة المهام.", category: "لمديري المشاريع", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Wrike AI", url: "https://www.wrike.com/features/ai-project-management/", logo: "https://logo.clearbit.com/wrike.com", description: "للتنبؤ بمخاطر المشاريع وأتمتة الموافقات.", category: "لمديري المشاريع", pricing: "مدفوع", arabic_support: "لا" },
  { name: "monday.com AI", url: "https://monday.com/ai-assistant", logo: "https://logo.clearbit.com/monday.com", description: "لأتمتة المهام المتكررة وإنشاء التقارير.", category: "لمديري المشاريع", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Notion AI", url: "https://www.notion.so/product/ai", logo: "https://logo.clearbit.com/notion.so", description: "لإنشاء الملخصات، وجداول الأعمال، وتوزيع المهام داخل مساحة العمل.", category: "لمديري المشاريع", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Fireflies.ai", url: "https://fireflies.ai/", logo: "https://logo.clearbit.com/fireflies.ai", description: "لتدوين ملاحظات الاجتماعات وتلخيصها وتوزيع المهام.", category: "لمديري المشاريع", pricing: "مجاني/مدفوع", arabic_support: "لا" },
  { name: "Forecast.app", url: "https://www.accelo.com/products/forecast/", logo: "https://logo.clearbit.com/accelo.com", description: "للتنبؤ بالموارد والجداول الزمنية للمشاريع.", category: "لمديري المشاريع", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Teamwork.com AI", url: "https://www.teamwork.com/ai-project-manager/", logo: "https://logo.clearbit.com/teamwork.com", description: "للمساعدة في إنشاء المهام وإدارة المحتوى المتعلق بالمشاريع.", category: "لمديري المشاريع", pricing: "مدفوع", arabic_support: "لا" },

  // لأخصائيي الموارد البشرية 🧑‍💼
  { name: "HireVue", url: "https://www.hirevue.com/", logo: "https://logo.clearbit.com/hirevue.com", description: "لإجراء مقابلات فيديو مدعومة بالذكاء الاصطناعي وتقييم المرشحين.", category: "لأخصائيي الموارد البشرية", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Eightfold.ai", url: "https://eightfold.ai/", logo: "https://logo.clearbit.com/eightfold.ai", description: "منصة ذكاء مواهب لإدارة دورة حياة الموظف بالكامل.", category: "لأخصائيي الموارد البشرية", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Paradox (Olivia)", url: "https://www.paradox.ai/", logo: "https://logo.clearbit.com/paradox.ai", description: "مساعد توظيف محادثاتي لأتمتة جدولة المقابلات والرد على المرشحين.", category: "لأخصائيي الموارد البشرية", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Glean", url: "https://www.glean.com/", logo: "https://logo.clearbit.com/glean.com", description: "محرك بحث ذكي لمساعدة الموظفين في العثور على المعلومات.", category: "لأخصائيي الموارد البشرية", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Leena AI", url: "https://leena.ai/", logo: "https://logo.clearbit.com/leena.ai", description: "منصة لإدارة تجربة الموظفين وحل استفساراتهم تلقائيًا.", category: "لأخصائيي الموارد البشرية", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Textio", url: "https://textio.com/", logo: "https://logo.clearbit.com/textio.com", description: "لتحسين لغة إعلانات الوظائف لجذب مجموعة متنوعة من المرشحين.", category: "لأخصائيي الموارد البشرية", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Visier", url: "https://www.visier.com/", logo: "https://logo.clearbit.com/visier.com", description: "منصة تحليلات الموظفين لتقديم رؤى حول القوى العاملة.", category: "لأخصائيي الموارد البشرية", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Pymetrics", url: "https://www.pymetrics.ai/", logo: "https://logo.clearbit.com/pymetrics.ai", description: "تستخدم الألعاب لتقييم المهارات الشخصية للمرشحين.", category: "لأخصائيي الموارد البشرية", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Culture Amp", url: "https://www.cultureamp.com/", logo: "https://logo.clearbit.com/cultureamp.com", description: "منصة لجمع وتحليل ملاحظات الموظفين باستخدام الذكاء الاصطناعي.", category: "لأخصائيي الموارد البشرية", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Personio", url: "https://www.personio.com/", logo: "https://logo.clearbit.com/personio.com", description: "نظام شامل للموارد البشرية مع ميزات أتمتة مدعومة بالذكاء الاصطناعي.", category: "لأخصائيي الموارد البشرية", pricing: "مدفوع", arabic_support: "لا" },

  // للمحاسبين 💰
  { name: "DEXT", url: "https://dext.com/", logo: "https://logo.clearbit.com/dext.com", description: "لأتمتة إدخال البيانات من الفواتير والإيصالات.", category: "للمحاسبين", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Botkeeper", url: "https://www.botkeeper.com/", logo: "https://logo.clearbit.com/botkeeper.com", description: "يقدم مسك دفاتر آلي مدعوم بالذكاء الاصطناعي.", category: "للمحاسبين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Vic.ai", url: "https://www.vic.ai/", logo: "https://logo.clearbit.com/vic.ai", description: "منصة لأتمتة الحسابات الدائنة والعمليات المحاسبية.", category: "للمحاسبين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "QuickBooks Online", url: "https://quickbooks.intuit.com/", logo: "https://logo.clearbit.com/intuit.com", description: "يستخدم الذكاء الاصطناعي لتصنيف المعاملات وتقديم رؤى مالية.", category: "للمحاسبين", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Xero", url: "https://www.xero.com/", logo: "https://logo.clearbit.com/xero.com", description: "لأتمتة المهام المحاسبية اليومية وتقديم تنبؤات بالتدفق النقدي.", category: "للمحاسبين", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Expensify", url: "https://www.expensify.com/", logo: "https://logo.clearbit.com/expensify.com", description: "لإدارة تقارير النفقات تلقائيًا باستخدام التعرف الذكي.", category: "للمحاسبين", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Auditoria.AI", url: "https://www.auditoria.ai/", logo: "https://logo.clearbit.com/auditoria.ai", description: "لأتمتة المهام المالية المتكررة في الحسابات الدائنة والمدينة.", category: "للمحاسبين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Docyt", url: "https://docyt.com/", logo: "https://logo.clearbit.com/docyt.com", description: "محرك محاسبة يعمل بالذكاء الاصطناعي لأتمتة مسك الدفاتر.", category: "للمحاسبين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Zeni", url: "https://www.zeni.ai/", logo: "https://logo.clearbit.com/zeni.ai", description: "خدمة مالية شاملة تستخدم الذكاء الاصطناعي لإدارة الشؤون المالية.", category: "للمحاسبين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Indy", url: "https://indy.com/", logo: "https://logo.clearbit.com/indy.com", description: "منصة متكاملة للمستقلين تتضمن أدوات فواتير ومحاسبة ذكية.", category: "للمحاسبين", pricing: "مدفوع", arabic_support: "لا" },

  // للتمريض 🩺
  { name: "NurseGrid", url: "https://www.nursegrid.com/", logo: "https://logo.clearbit.com/nursegrid.com", description: "منصة ذكية لإدارة جداول العمل والمهام للممرضين.", category: "للتمريض", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Care.ai", url: "https://care.ai/", logo: "https://logo.clearbit.com/care.ai", description: "نظام مراقبة ذكي للمرضى باستخدام أجهزة الاستشعار والذكاء الاصطناعي.", category: "للتمريض", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Kepler Nurse", url: "https://www.kepler.co/", logo: "https://logo.clearbit.com/kepler.co", description: "مساعد افتراضي للممرضين لتوثيق الرعاية وتحسين سير العمل.", category: "للتمريض", pricing: "مدفوع", arabic_support: "لا" },
  { name: "TigerConnect", url: "https://www.tigerconnect.com/", logo: "https://logo.clearbit.com/tigerconnect.com", description: "منصة تواصل آمنة للفرق الطبية مع تحليلات ذكية.", category: "للتمريض", pricing: "مدفوع", arabic_support: "لا" },
  { name: "NurseMind", url: "https://www.nursemind.com/", logo: "https://logo.clearbit.com/nursemind.com", description: "أداة ذكاء اصطناعي لتحليل بيانات المرضى وتقديم توصيات الرعاية.", category: "للتمريض", pricing: "مدفوع", arabic_support: "لا" },

  // للمختبرات الطبية 🔬
  { name: "Proscia", url: "https://www.proscia.com/", logo: "https://logo.clearbit.com/proscia.com", description: "منصة تحليل رقمي لعلم الأمراض باستخدام الذكاء الاصطناعي.", category: "للمختبرات الطبية", pricing: "مدفوع", arabic_support: "لا" },
  { name: "PathAI Lab", url: "https://www.pathai.com/", logo: "https://logo.clearbit.com/pathai.com", description: "تحليل شرائح الأنسجة بدقة عالية وتحديد التشوهات.", category: "للمختبرات الطبية", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Lunit Insight", url: "https://www.lunit.io/", logo: "https://logo.clearbit.com/lunit.io", description: "تحليل صور الأشعة السينية والطباعية بدقة غير مسبوقة.", category: "للمختبرات الطبية", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Aidoc Lab", url: "https://www.aidoc.com/", logo: "https://logo.clearbit.com/aidoc.com", description: "تحليل نتائج المختبرات وتحديد الحالات الطارئة تلقائيًا.", category: "للمختبرات الطبية", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Paige AI", url: "https://www.paige.ai/", logo: "https://logo.clearbit.com/paige.ai", description: "منصة تشخيص سرطان البروستاتا باستخدام الذكاء الاصطناعي.", category: "للمختبرات الطبية", pricing: "مدفوع", arabic_support: "لا" },

  // للصيدلة 💊
  { name: "PharmEasy", url: "https://pharmeasy.in/", logo: "https://logo.clearbit.com/pharmeasy.in", description: "منصة ذكية لإدارة الصيدليات وتحليل الوصفات الطبية.", category: "للصيدلة", pricing: "مجاني/مدفوع", arabic_support: "نعم" },
  { name: "Rx.ai", url: "https://www.rx.ai/", logo: "https://logo.clearbit.com/rx.ai", description: "كشف التفاعلات الدوائية وتحسين سلامة الأدوية.", category: "للصيدلة", pricing: "مدفوع", arabic_support: "لا" },
  { name: "PharmaEngine", url: "https://www.pharmaengine.com/", logo: "https://logo.clearbit.com/pharmaengine.com", description: "تحليل البيانات الدوائية وتحسين فعالية العلاجات.", category: "للصيدلة", pricing: "مدفوع", arabic_support: "لا" },
  { name: "CureMetrix", url: "https://www.curemetrix.com/", logo: "https://logo.clearbit.com/curemetrix.com", description: "تحليل الصور الطبية لتشخيص الأمراض بدقة.", category: "للصيدلة", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Pharma Intelligence", url: "https://www.pharmaintelligence.informa.com/", logo: "https://logo.clearbit.com/informa.com", description: "تحليلات ذكية لصناعة الأدوية وتطوراتها.", category: "للصيدلة", pricing: "مدفوع", arabic_support: "لا" },

  // لأطباء الأسنان 🦷
  { name: "Overjet", url: "https://www.overjet.ai/", logo: "https://logo.clearbit.com/overjet.ai", description: "تحليل صور الأشعة السينية للأسنان وتحديد المشاكل.", category: "لأطباء الأسنان", pricing: "مدفوع", arabic_support: "لا" },
  { name: "VideaHealth", url: "https://www.videahealth.com/", logo: "https://logo.clearbit.com/videahealth.com", description: "منصة ذكاء اصطناعي لتشخيص أمراض اللثة والأسنان.", category: "لأطباء الأسنان", pricing: "مدفوع", arabic_support: "لا" },
  { name: "DentalMonitoring", url: "https://www.dentalmonitoring.com/", logo: "https://logo.clearbit.com/dentalmonitoring.com", description: "مراقبة تقدم علاجات تقويم الأسنان عن بعد.", category: "لأطباء الأسنان", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Denti.AI", url: "https://denti.ai/", logo: "https://logo.clearbit.com/denti.ai", description: "تخطيط علاجات الأسنان وتصميم الأجهزة التقويمية.", category: "لأطباء الأسنان", pricing: "مدفوع", arabic_support: "لا" },

  // للمصورين 📸
  { name: "Luminar Neo", url: "https://skylum.com/luminar", logo: "https://logo.clearbit.com/skylum.com", description: "برنامج تحرير صور متطور باستخدام الذكاء الاصطناعي.", category: "للمصورين", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Adobe Photoshop AI", url: "https://www.adobe.com/products/photoshop.html", logo: "https://logo.clearbit.com/adobe.com", description: "أدوات ذكاء اصطناعي متقدمة لتحرير الصور الاحترافية.", category: "للمصورين", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Topaz Labs", url: "https://topazlabs.com/", logo: "https://logo.clearbit.com/topazlabs.com", description: "تحسين جودة الصور وتقليل الضوضاء باستخدام الذكاء الاصطناعي.", category: "للمصورين", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Runway ML", url: "https://runwayml.com/", logo: "https://logo.clearbit.com/runwayml.com", description: "منصة إبداعية لتعديل الفيديو والصور بالذكاء الاصطناعي.", category: "للمصورين", pricing: "مجاني/مدفوع", arabic_support: "نعم" },
  { name: "Pixelmator Pro", url: "https://www.pixelmator.com/pro/", logo: "https://logo.clearbit.com/pixelmator.com", description: "تحرير صور احترافي مع أدوات ذكاء اصطناعي متقدمة.", category: "للمصورين", pricing: "مدفوع", arabic_support: "نعم" },

  // للمستثمرين والمحللين الماليين 📈
  { name: "Bloomberg Terminal", url: "https://www.bloomberg.com/professional/", logo: "https://logo.clearbit.com/bloomberg.com", description: "منصة متكاملة للتحليل المالي والتنبؤ بالأسواق المالية.", category: "للمستثمرين والمحللين الماليين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Kensho", url: "https://www.kensho.com/", logo: "https://logo.clearbit.com/kensho.com", description: "محرك تحليل ذكي للبيانات المالية وتنبؤات السوق.", category: "للمستثمرين والمحللين الماليين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "AlphaSense", url: "https://www.alphasense.com/", logo: "https://logo.clearbit.com/alphasense.com", description: "منصة بحث ذكية للبيانات المالية وأبحاث السوق.", category: "للمستثمرين والمحللين الماليين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Kavout", url: "https://www.kavout.com/", logo: "https://logo.clearbit.com/kavout.com", description: "منصة ذكاء اصطناعي للاستثمار الكمي وتحليل الأسهم.", category: "للمستثمرين والمحللين الماليين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Trade Ideas", url: "https://www.tradeideas.com/", logo: "https://logo.clearbit.com/tradeideas.com", description: "مساعد تداول ذكي يقدم إشارات تداول بناءً على تحليل السوق.", category: "للمستثمرين والمحللين الماليين", pricing: "مدفوع", arabic_support: "لا" },

  // للمترجمين ولغويين 🌍
  { name: "DeepL", url: "https://www.deepl.com/translator", logo: "https://logo.clearbit.com/deepl.com", description: "محرك ترجمة دقيق يدعم العديد من اللغات واللهجات.", category: "للمترجمين ولغويين", pricing: "مجاني/مدفوع", arabic_support: "نعم" },
  { name: "Google Translate", url: "https://translate.google.com/", logo: "https://logo.clearbit.com/google.com", description: "أداة ترجمة مجانية تدعم أكثر من 100 لغة.", category: "للمترجمين ولغويين", pricing: "مجاني", arabic_support: "نعم" },
  { name: "Unbabel", url: "https://unbabel.com/", logo: "https://logo.clearbit.com/unbabel.com", description: "منصة ترجمة تجمع بين الذكاء الاصطناعي والمترجمين البشر.", category: "للمترجمين ولغويين", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Smartling", url: "https://www.smartling.com/", logo: "https://logo.clearbit.com/smartling.com", description: "منصة ترجمة وإدارة محتوى متعددة اللغات.", category: "للمترجمين ولغويين", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Systran", url: "https://www.systransoft.com/", logo: "https://logo.clearbit.com/systransoft.com", description: "حلول ترجمة ذكية للمؤسسات والأفراد.", category: "للمترجمين ولغويين", pricing: "مدفوع", arabic_support: "نعم" },

  // للموسيقيين والملحنين 🎵
  { name: "Amper Music", url: "https://www.permusic.com/", logo: "https://logo.clearbit.com/permusic.com", description: "لإنشاء موسيقى أصلية مخصصة للمشاريع الإبداعية.", category: "للموسيقيين والملحنين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "AIVA", url: "https://www.aiva.ai/", logo: "https://logo.clearbit.com/aiva.ai", description: "ملحن ذكاء اصطناعي لإنشاء موسيقى عاطفية للأفلام والألعاب.", category: "للموسيقيين والملحنين", pricing: "مجاني/مدفوع", arabic_support: "لا" },
  { name: "Soundraw", url: "https://soundraw.com/", logo: "https://logo.clearbit.com/soundraw.com", description: "لإنشاء موسيقى بدون حقوق ملكية للفيديوهات والبودكاست.", category: "للموسيقيين والملحنين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "LANDR", url: "https://www.landr.com/", logo: "https://logo.clearbit.com/landr.com", description: "لإتقان الصوت وإتقان الموسيقى باستخدام الذكاء الاصطناعي.", category: "للموسيقيين والملحنين", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Moises.ai", url: "https://moises.ai/", logo: "https://logo.clearbit.com/moises.ai", description: "لفصل الآلات الموسيقية والصوت عن الأغاني.", category: "للموسيقيين والملحنين", pricing: "مجاني/مدفوع", arabic_support: "نعم" },

  // للصحفيين والكتاب ✍️
  { name: "Grammarly", url: "https://www.grammarly.com/", logo: "https://logo.clearbit.com/grammarly.com", description: "لتحسين الكتابة وتصحيح الأخطاء النحوية والأسلوبية.", category: "للصحفيين والكتاب", pricing: "مجاني/مدفوع", arabic_support: "نعم" },
  { name: "Hemingway Editor", url: "https://hemingwayapp.com/", logo: "https://logo.clearbit.com/hemingwayapp.com", description: "لتحسين أسلوب الكتابة وجعلها أكثر وضوحًا.", category: "للصحفيين والكتاب", pricing: "مجاني/مدفوع", arabic_support: "نعم" },
  { name: "Wordsmith", url: "https://www.automatedinsights.com/wordsmith/", logo: "https://logo.clearbit.com/automatedinsights.com", description: "لإنشاء تقارير ومقالات إخبارية بشكل آلي.", category: "للصحفيين والكتاب", pricing: "مدفوع", arabic_support: "لا" },
  { name: "QuillBot", url: "https://quillbot.com/", logo: "https://logo.clearbit.com/quillbot.com", description: "لإعادة صياغة النصوص وتحسين جودة المحتوى.", category: "للصحفيين والكتاب", pricing: "مجاني/مدفوع", arabic_support: "نعم" },
  { name: "Article Forge", url: "https://www.articleforge.com/", logo: "https://logo.clearbit.com/articleforge.com", description: "لكتابة مقالات فريدة ومنظمة بشكل آلي.", category: "للصحفيين والكتاب", pricing: "مدفوع", arabic_support: "لا" },

  // للعاملين في مجال التجارة الإلكترونية 🛒
  { name: "Shopify Kit", url: "https://www.shopify.com/kit", logo: "https://logo.clearbit.com/shopify.com", description: "مساعد تسويق ذكي لمتاجر التجارة الإلكترونية.", category: "للعاملين في مجال التجارة الإلكترونية", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Octane AI", url: "https://octaneai.com/", logo: "https://logo.clearbit.com/octaneai.com", description: "لإنشاء روبوتات محادثة ذكية لمتاجر التجارة الإلكترونية.", category: "للعاملين في مجال التجارة الإلكترونية", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Granify", url: "https://www.granify.com/", logo: "https://logo.clearbit.com/granify.com", description: "لزيادة المبيعات من خلال تحسين تجربة التسوق.", category: "للعاملين في مجال التجارة الإلكترونية", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Vue.ai", url: "https://www.vue.ai/", logo: "https://logo.clearbit.com/vue.ai", description: "لتحسين الصور المنتجات وتخصيص تجربة التسوق.", category: "للعاملين في مجال التجارة الإلكترونية", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Syte", url: "https://www.syte.ai/", logo: "https://logo.clearbit.com/syte.ai", description: "لتقديم توصيات منتجات ذكية وتحسين تجربة المستخدم.", category: "للعاملين في مجال التجارة الإلكترونية", pricing: "مدفوع", arabic_support: "لا" },

  // للمزارعين والعاملين في القطاع الزراعي 🌾
  { name: "Blue River Technology", url: "https://www.bluerivertechnology.com/", logo: "https://logo.clearbit.com/bluerivertechnology.com", description: "للتحكم الدقيق في الأعشاب الضارة في المزارع.", category: "للمزارعين والعاملين في القطاع الزراعي", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Prospera", url: "https://www.prospera.ag/", logo: "https://logo.clearbit.com/prospera.ag", description: "لرصد صحة المحاصيل وتحليل بيانات المزارع.", category: "للمزارعين والعاملين في القطاع الزراعي", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Taranis", url: "https://www.taranis.com/", logo: "https://logo.clearbit.com/taranis.com", description: "لرصد صحة المحاصيل باستخدام الطائرات بدون طيار.", category: "للمزارعين والعاملين في القطاع الزراعي", pricing: "مدفوع", arabic_support: "لا" },
  { name: "FarmBot", url: "https://farm.bot/", logo: "https://logo.clearbit.com/farm.bot", description: "روبوت زراعي ذكي لزراعة الحدائق والمزارع الصغيرة.", category: "للمزارعين والعاملين في القطاع الزراعي", pricing: "مدفوع", arabic_support: "لا" },
  { name: "CropX", url: "https://www.cropx.com/", logo: "https://logo.clearbit.com/cropx.com", description: "لإدارة الري الزراعي الذكي وتحليل التربة.", category: "للمزارعين والعاملين في القطاع الزراعي", pricing: "مدفوع", arabic_support: "لا" },

  // للمعلمين اللغويين ومدرسي اللغات 📚
  { name: "Duolingo", url: "https://www.duolingo.com/", logo: "https://logo.clearbit.com/duolingo.com", description: "لتعلم اللغات بطريقة تفاعلية ومخصصة.", category: "للمعلمين اللغويين ومدرسي اللغات", pricing: "مجاني/مدفوع", arabic_support: "نعم" },
  { name: "Babbel", url: "https://www.babbel.com/", logo: "https://logo.clearbit.com/babbel.com", description: "لتعلم اللغات العملية والمحادثات اليومية.", category: "للمعلمين اللغويين ومدرسي اللغات", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Rosetta Stone", url: "https://www.rosettastone.com/", logo: "https://logo.clearbit.com/rosettastone.com", description: "لتعلم اللغات بطريقة الغمر والتفاعل المباشر.", category: "للمعلمين اللغويين ومدرسي اللغات", pricing: "مدفوع", arabic_support: "نعم" },
  { name: "Lingvist", url: "https://lingvist.com/", logo: "https://logo.clearbit.com/lingvist.com", description: "لتسريع تعلم اللغات باستخدام الذكاء الاصطناعي.", category: "للمعلمين اللغويين ومدرسي اللغات", pricing: "مدفوع", arabic_support: "لا" },
  { name: "ELSA Speak", url: "https://www.elsaspeak.com/", logo: "https://logo.clearbit.com/elsaspeak.com", description: "لتحسين النطق واللهجة في اللغة الإنجليزية.", category: "للمعلمين اللغويين ومدرسي اللغات", pricing: "مجاني/مدفوع", arabic_support: "نعم" },

  // للمسافرين ووكالات السفر ✈️
  { name: "Hopper", url: "https://www.hopper.com/", logo: "https://logo.clearbit.com/hopper.com", description: "للتنبؤ بأفضل وقت لحجز تذاكر الطيران والفنادق.", category: "للمسافرين ووكالات السفر", pricing: "مجاني", arabic_support: "نعم" },
  { name: "Kayak", url: "https://www.kayak.com/", logo: "https://logo.clearbit.com/kayak.com", description: "لمقارنة أسعار السفر والعثور على أفضل الصفقات.", category: "للمسافرين ووكالات السفر", pricing: "مجاني", arabic_support: "نعم" },
  { name: "Skyscanner", url: "https://www.skyscanner.net/", logo: "https://logo.clearbit.com/skyscanner.net", description: "لبحث ومقارنة تذاكر الطيران والفنادق وتأجير السيارات.", category: "للمسافرين ووكالات السفر", pricing: "مجاني", arabic_support: "نعم" },
  { name: "Lola", url: "https://www.lolatravel.com/", logo: "https://logo.clearbit.com/lolatravel.com", description: "للتخطيط للرحلات وحجزها بمساعدة الذكاء الاصطناعي.", category: "للمسافرين ووكالات السفر", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Utrip", url: "https://www.utrip.com/", logo: "https://logo.clearbit.com/utrip.com", description: "للتخطيط لرحلات مخصصة بناءً على اهتمامات المسافر.", category: "للمسافرين ووكالات السفر", pricing: "مجاني", arabic_support: "نعم" },

  // للمصممين الداخليين ومهندسي الديكور 🏠
  { name: "Houzz", url: "https://www.houzz.com/", logo: "https://logo.clearbit.com/houzz.com", description: "للإلهام بالتصاميم الداخلية والعثور على محترفين.", category: "للمصممين الداخليين ومهندسي الديكور", pricing: "مجاني", arabic_support: "نعم" },
  { name: "Modsy", url: "https://www.modsy.com/", logo: "https://logo.clearbit.com/modsy.com", description: "لتصميم الديكور الداخلي ثلاثي الأبعاد.", category: "للمصممين الداخليين ومهندسي الديكور", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Planner 5D", url: "https://planner5d.com/", logo: "https://logo.clearbit.com/planner5d.com", description: "لإنشاء تصاميم داخلية وخارجية في ثنائي وثلاثي الأبعاد.", category: "للمصممين الداخليين ومهندسي الديكور", pricing: "مجاني/مدفوع", arabic_support: "نعم" },
  { name: "Homestyler", url: "https://www.homestyler.com/", logo: "https://logo.clearbit.com/homestyler.com", description: "لتصميم وتصور الديكور الداخلي بشكل احترافي.", category: "للمصممين الداخليين ومهندسي الديكور", pricing: "مجاني/مدفوع", arabic_support: "نعم" },
  { name: "RoomGPT", url: "https://roomgpt.io/", logo: "https://logo.clearbit.com/roomgpt.io", description: "لتوليد تصاميم داخلية بناءً على صور الغرف.", category: "للمصممين الداخليين ومهندسي الديكور", pricing: "مجاني", arabic_support: "لا" },

  // لعلماء البيئة والمتخصصين في الاستدامة 🌿
  { name: "ClimateAI", url: "https://www.climate.ai/", logo: "https://logo.clearbit.com/climate.ai", description: "لتحليل تأثير التغير المناخي على الزراعة والغذاء.", category: "لعلماء البيئة والمتخصصين في الاستدامة", pricing: "مدفوع", arabic_support: "لا" },
  { name: "SilviaTerra", url: "https://www.silviaterra.com/", logo: "https://logo.clearbit.com/silviaterra.com", description: "لتحليل ورصد الغابات باستخدام الذكاء الاصطناعي.", category: "لعلماء البيئة والمتخصصين في الاستدامة", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Descartes Labs", url: "https://www.descarteslabs.com/", logo: "https://logo.clearbit.com/descarteslabs.com", description: "لتحليل صور الأقمار الصناعية لمراقبة الأرض.", category: "لعلماء البيئة والمتخصصين في الاستدامة", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Orbital Insight", url: "https://www.orbitalinsight.com/", logo: "https://logo.clearbit.com/orbitalinsight.com", description: "لتحليل بيانات الأقمار الصناعية لفهم الأنشطة البشرية.", category: "لعلماء البيئة والمتخصصين في الاستدامة", pricing: "مدفوع", arabic_support: "لا" },
  { name: "Blue Marble", url: "https://www.bluemarble.com/", logo: "https://logo.clearbit.com/bluemarble.com", description: "لمحاكاة تأثير المشاريع على البيئة والمناخ.", category: "لعلماء البيئة والمتخصصين في الاستدامة", pricing: "مدفوع", arabic_support: "لا" }
];

export const categoryIntros: Record<string, string> = {
  "للمسوقين": "يقدم الذكاء الاصطناعي للمسوقين القدرة على تحليل كميات هائلة من البيانات، وتخصيص الحملات التسويقية، وأتمتة المهام المتكررة، مما يؤدي إلى استهداف أكثر فعالية وزيادة عائد الاستثمار.",
  "للمصممين": "أدوات الذكاء الاصطناعي تساعد المصممين على تسريع عمليات التصميم، وتوليد أفكار إبداعية جديدة، وأتمتة المهام الروتينية مثل إزالة الخلفيات أو تحسين جودة الصور.",
  "للمبرمجين": "يُمكن للذكاء الاصطناعي مساعدة المبرمجين في كتابة الأكواد بشكل أسرع، واكتشاف الأخطاء وإصلاحها، وتقديم اقتراحات لتحسين جودة الكود وأمانه.",
  "لأخصائيي الأمن السيبراني": "تساعد أدوات الذكاء الاصطناعي في تحليل التهديدات الأمنية بشكل أسرع وأكثر دقة، وأتمتة الاستجابة للحوادث، والتنبؤ بالهجمات المحتملة قبل وقوعها.",
  "للمعلمين": "يمكن للمعلمين استخدام الذكاء الاصطناعي لتخصيص تجارب التعلم للطلاب، وإنشاء خطط الدروس والتقييمات، وأتمتة المهام الإدارية لتوفير المزيد من الوقت للتدريس.",
  "للباحثين": "يعزز الذكاء الاصطناعي قدرة الباحثين على تحليل البيانات الضخمة، ومراجعة الأدبيات العلمية بكفاءة، واكتشاف الأنماط والصلات التي قد يصعب رؤيتها.",
  "للأطباء": "يساهم الذكاء الاصطناعي في تحسين دقة التشخيص، وتخصيص خطط العلاج، وتحليل الصور الطبية، وأتمتة المهام الإدارية لتمكين الأطباء من التركيز على رعاية المرضى.",
  "للمحامين": "تساعد أدوات الذكاء الاصطناعي المحامين في تسريع عملية البحث القانوني، ومراجعة العقود، وتحليل كميات هائلة من المستندات، والتنبؤ بنتائج القضايا.",
  "للمهندسين المعماريين": "يستخدم المهندسون المعماريون الذكاء الاصطناعي في التصميم التوليدي، وتحسين استدامة المباني، وأتمتة إنشاء الرسومات، ومحاكاة أداء المباني في مراحل مبكرة.",
  "لمديري المشاريع": "يعمل الذكاء الاصطناعي على أتمتة جدولة المهام، وتخصيص الموارد، والتنبؤ بالمخاطر، وتحسين التواصل بين أعضاء الفريق، مما يضمن سير المشاريع بسلاسة وكفاءة.",
  "لأخصائيي الموارد البشرية": "يُستخدم الذكاء الاصطناعي في فحص السير الذاتية، وتحليل مشاعر الموظفين، وتخصيص برامج التدريب، وأتمتة الرد على استفسارات الموظفين الشائعة.",
  "للمحاسبين": "يمكن للمحاسبين الاستفادة من الذكاء الاصطناعي في أتمتة إدخال البيانات، وتصنيف المعاملات، واكتشاف الاحتيال، وإعداد التقارير المالية.",
  "للتمريض": "يساعد الذكاء الاصطناعي الممرضين في إدارة جداول العمل، ومراقبة المرضى، وتوثيق الرعاية، وتحسين سير العمل اليومي في المستشفيات.",
  "للمختبرات الطبية": "يُستخدم الذكاء الاصطناعي في تحليل العينات المخبرية، وتشخيص الأمراض بدقة عالية، وتحديد التشوهات في الأنسجة والصور الطبية.",
  "للصيدلة": "تساعد أدوات الذكاء الاصطناعي الصيادلة في كشف التفاعلات الدوائية، وإدارة الوصفات الطبية، وتحسين سلامة الأدوية.",
  "لأطباء الأسنان": "يُمكن للذكاء الاصطناعي مساعدة أطباء الأسنان في تحليل صور الأشعة، وتشخيص أمراض اللثة والأسنان، ومراقبة تقدم العلاجات.",
  "للمصورين": "أدوات الذكاء الاصطناعي تساعد المصورين في تحرير الصور، وتحسين الجودة، وتقليل الضوضاء، وإضافة تأثيرات إبداعية متقدمة.",
  "للمستثمرين والمحللين الماليين": "يساعد الذكاء الاصطناعي المستثمرين في تحليل الأسواق المالية، والتنبؤ بالاتجاهات، وتقديم إشارات تداول ذكية.",
  "للمترجمين ولغويين": "تُحدث أدوات الترجمة بالذكاء الاصطناعي ثورة في عمل المترجمين واللغويين من خلال ترجمات أكثر دقة وسرعة.",
  "للموسيقيين والملحنين": "يُمكن للذكاء الاصطناعي مساعدة الموسيقيين في إنشاء ألحان جديدة، وإتقان الصوت، وفصل الآلات الموسيقية.",
  "للصحفيين والكتاب": "يساعد الذكاء الاصطناعي الكتاب والصحفيين في تحسين الكتابة، وإعادة الصياغة، وإنشاء محتوى عالي الجودة بشكل أسرع.",
  "للعاملين في مجال التجارة الإلكترونية": "يُستخدم الذكاء الاصطناعي لتحسين تجربة التسوق، وزيادة المبيعات، وتقديم توصيات منتجات مخصصة.",
  "للمزارعين والعاملين في القطاع الزراعي": "يساعد الذكاء الاصطناعي المزارعين في رصد صحة المحاصيل، وإدارة الري الذكي، ومكافحة الأعشاب الضارة.",
  "للمعلمين اللغويين ومدرسي اللغات": "تُمكّن أدوات الذكاء الاصطناعي مدرسي اللغات من تقديم تجارب تعلم تفاعلية ومخصصة لكل طالب.",
  "للمسافرين ووكالات السفر": "يساعد الذكاء الاصطناعي المسافرين في التخطيط للرحلات، ومقارنة الأسعار، والعثور على أفضل العروض.",
  "للمصممين الداخليين ومهندسي الديكور": "يُمكن للذكاء الاصطناعي مساعدة مصممي الديكور في تصور التصاميم الداخلية وإنشاء نماذج ثلاثية الأبعاد.",
  "لعلماء البيئة والمتخصصين في الاستدامة": "يساعد الذكاء الاصطناعي علماء البيئة في تحليل بيانات المناخ، ورصد الغابات، ومراقبة التغيرات البيئية."
};