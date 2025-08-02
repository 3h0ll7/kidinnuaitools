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
  { name: "Indy", url: "https://indy.com/", logo: "https://logo.clearbit.com/indy.com", description: "منصة متكاملة للمستقلين تتضمن أدوات فواتير ومحاسبة ذكية.", category: "للمحاسبين", pricing: "مدفوع", arabic_support: "لا" }
];

export const categoryIntros = {
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
  "لأخصائيي الموارد البشرية": "يُستخدم الذكاء الاصطناعي في فحص السير الذاتية، وتحليل مشاعر الموظفين، وتخصيص برامج التدريب، وأتمتة الرد على استفسارات الموظفين الشائعة، مما يحسن من كفاءة عمليات الموارد البشرية.",
  "للمحاسبين": "يمكن للمحاسبين الاستفادة من الذكاء الاصطناعي في أتمتة إدخال البيانات، وتصنيف المعاملات، واكتشاف الاحتيال، وإعداد التقارير المالية، وتحليل البيانات للتنبؤ بالاتجاهات المالية."
};