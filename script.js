"use strict";

// Edit these values to add genuine contact details and portfolio links.
const SITE_CONFIG = {
  contactEmail: "",
  socialLinks: []
};

const ENGLISH_UI = {
  pageTitle: "A Mark of Achievement | Hind Abdulqawi",
  pageDescription: "Hind Abdulqawi — an artificial intelligence student and idea creator who believes knowledge can make a difference and every journey can leave a mark.",
  skipLink: "Skip to content",
  brandName: "A Mark of Achievement",
  brandHome: "A Mark of Achievement, home",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  mainNavigation: "Main navigation",
  navAbout: "About",
  navJourney: "Journey",
  navSkills: "Skills",
  navProjects: "Projects",
  navVision: "Vision",
  navContact: "Contact",
  switchToLight: "Switch to light mode",
  switchToDark: "Switch to dark mode",
  changeAppearance: "Change appearance",
  chooseLanguage: "Choose language",
  heroEyebrow: "A story of passion, learning, and impact",
  heroKicker: "Digital portfolio",
  heroName: "Hind Abdulqawi",
  heroRoleAi: "Artificial Intelligence Student",
  heroRoleIdeas: "Idea Creator",
  heroRoleImpact: "Seeking to make an impact",
  heroQuote: "“I seek not only my own success, but to make my presence meaningful, my knowledge useful, and my journey a lasting mark.”",
  heroJourneyButton: "Discover my journey",
  heroProjectsButton: "Explore my work",
  scrollToAbout: "Scroll to the next section",
  scrollCue: "Discover my story",
  aboutEyebrow: "01 — My story",
  aboutTitle: "Who am I?",
  aboutLead: "I believe every beautiful beginning has a story worth telling.",
  aboutBioStart: "I’m ",
  aboutName: "Hind Abdulqawi",
  aboutBioEnd: ", a mother and a student passionate about learning and growth. I have explored different learning paths and fields in search of the one that best reflects my interests and ambitions. In artificial intelligence, I found a space where critical thinking, creativity, and the future come together.",
  aboutBioTwo: "I believe learning has no age limit, and that responsibilities do not mean giving up on dreams; they can become an even stronger reason to pursue them.",
  aboutBioThree: "I aim to grow my technical and creative skills and use what I learn to develop ideas and projects that bring real value to others.",
  beliefValue: "A value I believe in",
  beliefTitle: "What I believe",
  beliefParagraph: "I believe it is never too late for a new beginning as long as there is a dream in the heart and a step within reach. Knowledge has no age, and learning does not end at any particular stage of life. We may grow older, yet new doors to discovery and growth remain open. The body may age, but hope does not; passion does not grow old, and dreams do not lose their light while the soul continues to reach for better.",
  beliefClosing: "Ambition has no age limit, and it is never too late to keep learning.",
  beliefSign: "— Hind Abdulqawi",
  journeyEyebrow: "02 — Milestones that shaped me",
  journeyTitleLead: "My learning ",
  journeyTitleFocus: "journey",
  journeyLead: "Small steps, many questions, and a passion that grows with every experience.",
  timelineButton1: "Details: Beginning a journey of self-discovery",
  timelineButton2: "Details: Moving between experiences and fields",
  timelineButton3: "Details: Discovering a passion for artificial intelligence",
  timelineButton4: "Details: Learning programming and web design",
  timelineButton5: "Details: Building digital projects",
  timelineButton6: "Details: Aiming for more impactful projects",
  timelineNumber1: "1",
  timelineNumber2: "2",
  timelineNumber3: "3",
  timelineNumber4: "4",
  timelineNumber5: "5",
  timelineNumber6: "6",
  timelineStage1: "Stage One",
  timelineStage2: "Stage Two",
  timelineStage3: "Stage Three",
  timelineStage4: "Stage Four",
  timelineStage5: "Stage Five",
  timelineStage6: "The story continues",
  timelineTitle1: "Beginning a journey of self-discovery",
  timelineText1: "Recognizing my interests, listening to my curiosity, and giving myself room to explore.",
  timelineTitle2: "Moving between experiences and fields",
  timelineText2: "Every experience gave me a new perspective and brought me closer to what feels right for me.",
  timelineTitle3: "Discovering my passion for artificial intelligence",
  timelineText3: "I found an inspiring blend of thinking, technology, and future possibilities in this field.",
  timelineTitle4: "Learning programming and web design",
  timelineText4: "I began learning how an idea can become a digital experience people can interact with.",
  timelineTitle5: "Building digital projects and growing my skills",
  timelineText5: "I learn by doing, turning curiosity into projects that become more refined over time.",
  timelineTitle6: "Aiming for more impactful and useful projects",
  timelineText6: "My next step: deeper knowledge, more useful ideas, and an impact that reaches people's lives.",
  skillsEyebrow: "03 — Skills I’m learning",
  skillsTitleLead: "My ",
  skillsTitleFocus: "growing skills",
  skillsLead: "A space to grow, one lesson and experience at a time.",
  skillsGallery: "Skills gallery",
  closeDetails: "Close details",
  currentLevel: "Current level:",
  skillLearnedHeading: "What I’m learning",
  skillToolsHeading: "Tools and technologies",
  skillProjectHeading: "Using it in projects",
  skillExampleHeading: "A practical example",
  skillNextHeading: "My next step",
  skillsMantra: "Every skill I learn is a new step toward a better version of myself.",
  projectsEyebrow: "04 — My creative space",
  projectsTitleLead: "Ideas brought to ",
  projectsTitleFocus: "life",
  projectsLead: "Projects shaped by imagination, learning, and the desire to create something meaningful.",
  visionEyebrow: "05 — My vision and mission",
  visionTitleLead: "Knowledge that serves, technology that ",
  visionTitleFocus: "inspires",
  visionQuote: "“I aspire to make knowledge a way to give, technology a bridge to solving problems, and artificial intelligence an opportunity to create solutions that benefit people and society.”",
  futureEyebrow: "06 — What comes next",
  futureTitleLead: "I’m still at the beginning of the ",
  futureTitleFocus: "story",
  futureTitleEnd: ".",
  futureLead: "The future is not a distant destination; it is the small steps I choose every day.",
  futureCta: "Let’s talk about an idea",
  futureGoal1: "Deepen my knowledge of artificial intelligence",
  futureGoal2: "Strengthen my programming skills",
  futureGoal3: "Build innovative digital projects",
  futureGoal4: "Take part in educational and community initiatives",
  futureGoal5: "Turn ideas into solutions with real impact",
  contactEyebrow: "07 — Let’s connect",
  contactTitleLead: "Every meaningful idea",
  contactTitleFocus: "begins with a conversation.",
  contactLead: "I welcome conversations, shared ideas, and opportunities to take part in initiatives that make a difference.",
  emailLabel: "Email",
  socialLinks: "Social links",
  formName: "Name",
  formNamePlaceholder: "What should I call you?",
  formEmail: "Email address",
  formEmailPlaceholder: "name@example.com",
  formMessage: "Your message",
  formMessagePlaceholder: "Tell me what’s on your mind...",
  formSubmit: "Prepare message",
  emailMissing: "Add your email address to SITE_CONFIG in script.js to enable direct contact.",
  messagePrepared: "Your message is ready in your email app.",
  messagePreparedMissing: "Your message is ready. Add your email address to SITE_CONFIG in script.js to set the recipient automatically.",
  footerTagline: "With passion, toward a brighter impact",
  backToTop: "Back to top ↑",
  copyright: "Hind Abdulqawi — All rights reserved"
};

const storedLanguage = localStorage.getItem("hind-language");
let currentLanguage = storedLanguage === "en" ? "en" : "ar";
let aboutTypewriterController = null;
let skillsMantraController = null;
let activeSkillIndex = null;

const skills = [
  {
    name: "أساسيات الذكاء الاصطناعي",
    icon: "✳",
    level: "قيد التعلّم",
    levelDetail: "أبني معرفتي بالمفاهيم الأساسية خطوةً خطوة، وما زلت في مرحلة التعلّم.",
    description: "مدخل لفهم كيف تستفيد الأنظمة الذكية من البيانات لاكتشاف الأنماط وتقديم نتائج مفيدة.",
    learned: "أتعرف على مفاهيم البيانات والنماذج والتدريب والتقييم، وأهمية جودة البيانات في النتائج.",
    tools: ["البيانات", "النماذج", "التدريب والتقييم"],
    project: "يمكن توظيف هذه الأساسيات مستقبلًا في تجارب تعليمية صغيرة تستكشف تصنيف البيانات أو الصور.",
    example: "مثال تدريبي مقترح: تنظيم صور زهور ضمن فئات، ثم استكشاف كيف يؤثر تنوع الصور في دقة التصنيف.",
    next: "التعمق في مبادئ تعلم الآلة، وتجربة أمثلة تعليمية بسيطة مع فهم حدود النتائج.",
    english: {
      name: "AI Fundamentals",
      level: "Currently learning",
      levelDetail: "I’m building my understanding of the core concepts step by step.",
      description: "An introduction to how intelligent systems use data to identify patterns and produce useful results.",
      learned: "I’m exploring data, models, training, and evaluation, as well as how data quality affects results.",
      tools: ["Data", "Models", "Training and evaluation"],
      project: "These foundations can support small learning projects that explore data or image classification.",
      example: "Suggested practice: group flower images into categories and explore how image variety affects classification accuracy.",
      next: "Explore machine-learning fundamentals and try simple learning examples while understanding their limitations."
    }
  },
  {
    name: "HTML",
    icon: "⌘",
    level: "قيد التعلّم",
    levelDetail: "أتعلم بناء هيكل صفحات الويب وتنظيم محتواها الدلالي.",
    description: "لغة ترميز تُنظّم محتوى صفحات الويب وتمنحه بنية واضحة يسهل على المتصفح قراءتها.",
    learned: "أتعرف على العناصر والعناوين والفقرات والروابط والنماذج، وأهمية استخدام العناصر بمعناها الصحيح.",
    tools: ["العناصر الدلالية", "العناوين والروابط", "النماذج وإمكانية الوصول"],
    project: "تساعد على بناء هيكل واضح لمواقع المشاريع، مثل صفحات التعريف أو المتاجر والمنصات التعليمية.",
    example: "مثال تطبيقي: إنشاء صفحة مشروع تضم عنوانًا ووصفًا وصورة ورابطًا للتواصل بعناصر HTML المناسبة.",
    next: "التوسع في تنظيم الصفحات، وتحسين الدلالات وإمكانية الوصول، وربط الهيكل بالتنسيق والتفاعل.",
    english: {
      name: "HTML",
      level: "Currently learning",
      levelDetail: "I’m learning to build web-page structure and organize its semantic content.",
      description: "A markup language that gives web pages a clear structure browsers can interpret.",
      learned: "I’m exploring elements, headings, paragraphs, links, and forms, and why semantic elements matter.",
      tools: ["Semantic elements", "Headings and links", "Forms and accessibility"],
      project: "HTML provides a clear foundation for project websites, from profile pages to shops and learning platforms.",
      example: "A possible exercise: build a project page with a title, description, image, and contact link using appropriate HTML elements.",
      next: "Improve page structure, semantics, and accessibility, then connect the markup to styling and interaction."
    }
  },
  {
    name: "تصميم واجهات الويب",
    icon: "▧",
    level: "قيد التعلّم",
    levelDetail: "أستكشف أسس تصميم واجهات واضحة ومريحة، وأطور حسّي البصري بالتجربة.",
    description: "تنسيق المعلومات والعناصر بصريًا لتكون الواجهة جذابة وسهلة الفهم والاستخدام.",
    learned: "أتعرف على التسلسل البصري، والتباين، والمساحات، وتناسق الألوان والخطوط، ومراعاة أحجام الشاشات.",
    tools: ["التسلسل البصري", "الألوان والخطوط", "التخطيط المتجاوب"],
    project: "يمكن تطبيقها في تخطيط صفحات المواقع وتسهيل الوصول إلى المعلومات والأزرار المهمة.",
    example: "مثال تطبيقي: تخطيط بطاقة مشروع تُظهر الصورة والعنوان والوصف والرابط بترتيب واضح على الهاتف والكمبيوتر.",
    next: "التدرّب على بناء نماذج أولية، وتقييم سهولة الاستخدام، وتحسين التصميم استنادًا إلى الملاحظة.",
    english: {
      name: "Web Interface Design",
      level: "Currently learning",
      levelDetail: "I’m exploring the foundations of clear, comfortable interfaces and developing my visual judgment through practice.",
      description: "Arranging information and visual elements to make an interface appealing and easy to understand and use.",
      learned: "I’m exploring visual hierarchy, contrast, spacing, color and type consistency, and layouts for different screen sizes.",
      tools: ["Visual hierarchy", "Color and typography", "Responsive layouts"],
      project: "These principles can shape website pages and make important information and actions easier to find.",
      example: "A possible exercise: design a project card that presents its image, title, description, and link clearly on phones and computers.",
      next: "Practice creating prototypes, evaluating usability, and refining designs based on observation."
    }
  },
  {
    name: "أساسيات CSS وJavaScript",
    icon: "⌁",
    level: "قيد التعلّم",
    levelDetail: "أتعلم أساسيات تنسيق الواجهات وإضافة تفاعلات بسيطة إليها.",
    description: "تمنح CSS صفحات الويب مظهرها وتخطيطها، وتضيف JavaScript سلوكًا وتفاعلًا للمستخدم.",
    learned: "أتعرف على تنسيق العناصر وتخطيطها، ومبادئ الاستجابة للشاشات، وأحداث JavaScript وتحديث محتوى الصفحة.",
    tools: ["الألوان والتخطيط", "Flexbox وGrid", "الأحداث وDOM"],
    project: "تُستخدم لتنسيق المواقع وإضافة تفاعلات مثل القوائم والبطاقات والنوافذ التفصيلية.",
    example: "مثال تطبيقي: تنسيق شبكة بطاقات تتكيف مع عرض الشاشة، وفتح تفاصيل البطاقة عند الضغط عليها.",
    next: "تعزيز الأساسيات بالممارسة، وتنظيم الشيفرة، وفهم التفاعل وإمكانية الوصول بصورة أفضل.",
    english: {
      name: "CSS & JavaScript Fundamentals",
      level: "Currently learning",
      levelDetail: "I’m learning the basics of styling interfaces and adding simple interactions.",
      description: "CSS shapes the appearance and layout of web pages, while JavaScript adds behavior and interaction.",
      learned: "I’m exploring styling and layout, responsive design principles, JavaScript events, and updating page content.",
      tools: ["Color and layout", "Flexbox and Grid", "DOM and events"],
      project: "They can style websites and power interactions such as menus, cards, and detail dialogs.",
      example: "A possible exercise: create a responsive card grid and open a card’s details when it is selected.",
      next: "Strengthen the foundations through practice, organize code clearly, and deepen my understanding of interaction and accessibility."
    }
  },
  {
    name: "التفكير الإبداعي وحل المشكلات",
    icon: "◇",
    level: "مهارة أطورها",
    levelDetail: "أطور هذه المهارة بالتجربة، وتقسيم التحديات إلى خطوات قابلة للفهم.",
    description: "طريقة منظمة لفهم التحدي وتوليد أفكار متعددة واختيار حلول قابلة للتجربة والتحسين.",
    learned: "أتدرب على تحديد المشكلة، وتقسيمها إلى أجزاء، ومقارنة الحلول، والتعلم من نتيجة كل تجربة.",
    tools: ["العصف الذهني", "تقسيم المهام", "التجربة والمراجعة"],
    project: "تساعد في تحويل فكرة المشروع إلى خطوات واضحة، واختيار ما يحقق قيمة للمستخدم أولًا.",
    example: "مثال تطبيقي: عند صعوبة العثور على مشروع، يمكن ترتيب البطاقات حسب الموضوع وإضافة وصف مختصر لكل بطاقة.",
    next: "مواصلة التدريب على اختبار الأفكار مبكرًا، وتقييم الحلول من منظور المستخدم.",
    english: {
      name: "Creative Thinking & Problem-Solving",
      level: "A skill I’m developing",
      levelDetail: "I’m developing this skill through practice and by breaking challenges into understandable steps.",
      description: "A structured way to understand a challenge, generate ideas, and choose solutions that can be tested and improved.",
      learned: "I’m practicing how to define a problem, break it into parts, compare possible solutions, and learn from each attempt.",
      tools: ["Brainstorming", "Breaking tasks down", "Testing and review"],
      project: "This approach helps turn a project idea into clear steps and prioritize what is useful to its audience.",
      example: "A possible exercise: make a project gallery easier to browse by grouping cards by topic and adding a short description.",
      next: "Keep testing ideas early and evaluating potential solutions from the user’s perspective."
    }
  },
  {
    name: "البحث والتعلم المستمر",
    icon: "⌕",
    level: "رحلة مستمرة",
    levelDetail: "أتعامل مع التعلم بوصفه مسارًا مستمرًا يتطور مع كل سؤال وتجربة.",
    description: "البحث عن المعرفة من مصادر مناسبة، وتنظيمها، ومراجعتها لتتحول إلى فهم قابل للتطبيق.",
    learned: "أمارس صياغة الأسئلة، والبحث عن مصادر، وتدوين ما أتعلمه، ثم العودة إليه عند الحاجة.",
    tools: ["صياغة الأسئلة", "مقارنة المصادر", "الملاحظات والتطبيق"],
    project: "يساعد البحث على فهم احتياجات المشروع، واختيار التقنيات المناسبة، والتحقق من المعلومات.",
    example: "مثال تطبيقي: مقارنة شرحين لمفهوم برمجي، وتجربة المثال، ثم تدوين الفروق والأسئلة المتبقية.",
    next: "تنمية مهارة تقييم موثوقية المصادر، وبناء عادة تعلم منتظمة ومشاركة المعرفة بوضوح.",
    english: {
      name: "Research & Continuous Learning",
      level: "An ongoing journey",
      levelDetail: "I see learning as an ongoing path shaped by every question and experience.",
      description: "Finding knowledge from suitable sources, organizing it, and revisiting it so it can be put into practice.",
      learned: "I practice asking focused questions, finding sources, taking notes, and returning to what I learn when needed.",
      tools: ["Focused questions", "Comparing sources", "Notes and practice"],
      project: "Research can help clarify a project’s needs, inform technology choices, and verify information.",
      example: "A possible exercise: compare two explanations of a programming concept, try an example, and note the differences and open questions.",
      next: "Improve how I assess source reliability, build a steady learning habit, and share what I learn clearly."
    }
  },
  {
    name: "استخدام أدوات الذكاء الاصطناعي",
    icon: "✧",
    level: "قيد التعلّم",
    levelDetail: "أستكشف استخدام الأدوات بوصفها مساعدة، مع مراجعة مخرجاتها والتحقق منها.",
    description: "الاستفادة من أدوات الذكاء الاصطناعي لدعم البحث والتعلم وتطوير الأفكار، مع بقاء التحقق والحكم للمستخدم.",
    learned: "أتعلم كتابة طلبات واضحة، ومراجعة الإجابات، ومقارنتها بمصادر موثوقة، والانتباه إلى الخصوصية.",
    tools: ["صياغة التعليمات", "مراجعة المخرجات", "التحقق من المصادر"],
    project: "يمكن استخدامها لدعم العصف الذهني أو فهم مفهوم تقني، ثم اختبار الاقتراحات ومراجعتها قبل اعتمادها.",
    example: "مثال تطبيقي: طلب شرح مبسط لخطأ في HTML، ثم مراجعة الحل وتجربته بدل نسخ الإجابة دون تحقق.",
    next: "التعلم المسؤول والفعّال، وتحسين طريقة صياغة الطلبات، وفهم حدود الأدوات ومتى لا ينبغي الاعتماد عليها.",
    english: {
      name: "Using AI Tools",
      level: "Currently learning",
      levelDetail: "I’m exploring these tools as assistants while reviewing and verifying their outputs.",
      description: "Using AI tools to support research, learning, and idea development while keeping verification and judgment with the user.",
      learned: "I’m learning to write clear prompts, review responses, compare them with reliable sources, and protect privacy.",
      tools: ["Clear prompting", "Reviewing outputs", "Source verification"],
      project: "They can support brainstorming or help explain a technical concept, with suggestions checked before use.",
      example: "A possible exercise: ask for a simpler explanation of an HTML error, then review and test the suggestion instead of copying it uncritically.",
      next: "Use AI responsibly, improve prompt writing, and understand the tools’ limits and when not to rely on them."
    }
  }
];

const projects = [
  {
    name: "حديقة الحكايات", type: "تجارة إلكترونية", description: "متجر إلكتروني للورود والنباتات والتحف، يحتفي بالتفاصيل الجميلة.", symbol: "❀", colors: ["#314b50", "#172b3b"], technologies: ["HTML", "CSS", "JavaScript"], image: "حديقة الحكايات.jpeg", url: "https://dreem1.hndbdalqwyalhashdy.workers.dev/",
    english: { name: "Storybook Garden", type: "E-commerce", description: "An online shop for flowers, plants, and decorative pieces, celebrating the beauty of thoughtful details." }
  },
  {
    name: "نلعب ونتعلم", type: "تعليم تفاعلي", description: "منصة تعليمية تفاعلية للأطفال تجعل التعلم أقرب إلى اللعب والاكتشاف.", symbol: "✿", colors: ["#745f74", "#343653"], technologies: ["HTML", "CSS", "JavaScript"], image: "نلعب ونتعلم.jpeg", url: "https://weplayandlearn.pages.dev/#home",
    english: { name: "Play and Learn", type: "Interactive learning", description: "An interactive learning platform for children that brings learning closer to play and discovery." }
  },
  {
    name: "نجوم السعادة", type: "تجربة رقمية", description: "تجربة تفاعلية تحمل رسائل إيجابية وتمنح اليوم لحظة من البهجة.", symbol: "✦", colors: ["#68709c", "#343456"], technologies: ["HTML", "CSS", "JavaScript"], image: "نجوم السعادة.jpeg", url: "https://myrose.hndbdalqwyalhashdy.workers.dev/",
    english: { name: "Stars of Happiness", type: "Digital experience", description: "An interactive experience with uplifting messages, bringing a moment of joy to the day." }
  },
  {
    name: "ركن السكينة", type: "هوية مقهى", description: "موقع مقهى يجمع بين القهوة والقراءة والهدوء في مساحة رقمية دافئة.", symbol: "☕", colors: ["#765c45", "#3b3330"], technologies: ["HTML", "CSS"], image: "ركن السكينة.jpg", url: "https://project7.hndbdalqwyalhashdy.workers.dev/",
    english: { name: "Quiet Corner", type: "Café identity", description: "A café website that brings together coffee, reading, and calm in a warm digital space." }
  }
];

const skillsGrid = document.querySelector("#skills-grid");
const projectsGrid = document.querySelector("#projects-grid");

function renderSkills() {
  skillsGrid.innerHTML = skills.map((skill, index) => `
    <article class="skill-card reveal" role="listitem">
      <button class="skill-card-trigger" type="button" data-skill-index="${index}" aria-haspopup="dialog">
        <span class="skill-card-top">
          <span class="skill-icon" aria-hidden="true">${skill.icon}</span>
          <span class="skill-card-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
        </span>
        <span class="skill-card-title">${localizedSkill(skill).name}</span>
        <span class="skill-level">${localizedSkill(skill).level}</span>
        <span class="skill-card-action"><span class="skill-card-action-label">${currentLanguage === "en" ? "View details" : "اكتشفي التفاصيل"}</span><span aria-hidden="true">↗</span></span>
      </button>
    </article>
  `).join("");
}

function localizedSkill(skill) {
  return currentLanguage === "en" ? skill.english : skill;
}

function updateSkillCards() {
  skillsGrid.querySelectorAll(".skill-card").forEach((card, index) => {
    const skill = localizedSkill(skills[index]);
    card.querySelector(".skill-card-title").textContent = skill.name;
    card.querySelector(".skill-level").textContent = skill.level;
    card.querySelector(".skill-card-action-label").textContent = currentLanguage === "en" ? "View details" : "اكتشفي التفاصيل";
  });
}

function updateSkillDialog() {
  if (activeSkillIndex === null) return;
  const skill = localizedSkill(skills[activeSkillIndex]);
  document.querySelector("#skill-dialog-icon").textContent = skills[activeSkillIndex].icon;
  document.querySelector("#skill-dialog-title").textContent = skill.name;
  document.querySelector("#skill-dialog-level").textContent = skill.level;
  document.querySelector("#skill-dialog-level-detail").textContent = skill.levelDetail;
  document.querySelector("#skill-dialog-summary").textContent = skill.description;
  document.querySelector("#skill-dialog-learned").textContent = skill.learned;
  document.querySelector("#skill-dialog-project").textContent = skill.project;
  document.querySelector("#skill-dialog-example").textContent = skill.example;
  document.querySelector("#skill-dialog-next").textContent = skill.next;
  const tools = document.querySelector("#skill-dialog-tools");
  tools.replaceChildren(...skill.tools.map((tool) => {
    const item = document.createElement("li");
    item.textContent = tool;
    return item;
  }));
}

function setupSkillsExperience() {
  const skillDialog = document.querySelector("#skill-dialog");
  const closeButton = skillDialog.querySelector(".skill-dialog-close");
  let activeCard = null;

  skillsGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest(".skill-card-trigger");
    if (!trigger || !skillsGrid.contains(trigger)) return;

    const skill = skills[Number(trigger.dataset.skillIndex)];
    if (!skill) throw new Error("تعذر العثور على تفاصيل المهارة المحددة.");

    activeCard = trigger.closest(".skill-card");
    activeSkillIndex = Number(trigger.dataset.skillIndex);
    activeCard.classList.add("is-selected");
    updateSkillDialog();
    const cardBounds = activeCard.getBoundingClientRect();
    skillDialog.style.setProperty("--skill-origin-x", `${cardBounds.left + cardBounds.width / 2 - window.innerWidth / 2}px`);
    skillDialog.style.setProperty("--skill-origin-y", `${cardBounds.top + cardBounds.height / 2 - window.innerHeight / 2}px`);
    skillDialog.showModal();
  });

  closeButton.addEventListener("click", () => skillDialog.close());
  skillDialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      skillDialog.close();
    }
  });
  skillDialog.addEventListener("click", (event) => {
    if (event.target === skillDialog) skillDialog.close();
  });
  skillDialog.addEventListener("close", () => {
    if (activeCard) activeCard.classList.remove("is-selected");
    activeCard = null;
    activeSkillIndex = null;
    skillDialog.style.removeProperty("--skill-origin-x");
    skillDialog.style.removeProperty("--skill-origin-y");
  });

  skillsMantraController = setupSkillsMantra();
}

function setupSkillsMantra() {
  const mantra = document.querySelector("#skills-mantra");
  const text = document.querySelector("#skills-mantra-text");
  const cursor = mantra.querySelector(".skills-mantra-cursor");
  let timer = 0;
  let observer = null;
  const fullText = () => currentLanguage === "en" ? ENGLISH_UI.skillsMantra : mantra.dataset.i18nAriaLabelAr;

  const showCompleteText = () => {
    window.clearTimeout(timer);
    text.textContent = fullText();
    mantra.setAttribute("aria-label", fullText());
    cursor.classList.add("is-complete");
  };
  const start = () => {
    window.clearTimeout(timer);
    const characters = splitGraphemes(fullText());
    let index = 0;
    text.textContent = "";
    mantra.setAttribute("aria-label", fullText());
    cursor.classList.remove("is-complete");
    const typeNextCharacter = () => {
      if (index >= characters.length) {
        cursor.classList.add("is-complete");
        return;
      }

      const character = characters[index];
      text.textContent += character;
      index += 1;
      const delay = /[،؛.!؟…]/u.test(character) ? 150 : /^\s$/u.test(character) ? 28 : 52;
      timer = window.setTimeout(typeNextCharacter, delay);
    };
    typeNextCharacter();
  };

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
    observer = new IntersectionObserver((entries, currentObserver) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        start();
        currentObserver.disconnect();
        observer = null;
      }
    }, { threshold: 0.35 });
    observer.observe(mantra);
  } else if (!("IntersectionObserver" in window) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    start();
  } else {
    showCompleteText();
  }

  return {
    update() {
      const bounds = mantra.getBoundingClientRect();
      const isVisible = bounds.bottom > 0 && bounds.top < window.innerHeight;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !isVisible) {
        showCompleteText();
        return;
      }
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      start();
    }
  };
}

function renderProjects() {
  projectsGrid.innerHTML = projects.map((project, index) => {
    const copy = localizedProject(project);
    const artStyle = project.image
      ? ` style="background-image:linear-gradient(0deg,rgba(12,18,31,.18),rgba(12,18,31,.18)),url('${project.image.replace(/['"()\\]/g, "")}')"`
      : ` style="--art-a:${project.colors[0]};--art-b:${project.colors[1]}"`;
    const link = project.url
      ? `<a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer"><span>${currentLanguage === "en" ? "Explore project" : "استكشف المشروع"}</span><span aria-hidden="true">↗</span></a>`
      : `<span class="project-link disabled" aria-label="${currentLanguage === "en" ? "No project link is available yet" : "لا يتوفر رابط للمشروع بعد"}">${currentLanguage === "en" ? "Coming soon" : "الرابط قريباً"}</span>`;
    return `
      <article class="project-card reveal" data-project-index="${index}">
        <div class="project-art${project.image ? " has-image" : ""}"${artStyle} role="img" aria-label="${currentLanguage === "en" ? `Visual for the ${copy.name} project` : `مساحة بصرية لمشروع ${copy.name}`}">
          <span class="art-symbol" aria-hidden="true">${project.symbol}</span>
        </div>
        <div class="project-body">
          <span class="project-type">${copy.type}</span>
          <h3>${copy.name}</h3>
          <p>${copy.description}</p>
          <div class="project-tags" aria-label="${currentLanguage === "en" ? "Technologies used" : "التقنيات المستخدمة"}">${project.technologies.map((technology) => `<span>${technology}</span>`).join("")}</div>
          ${link}
        </div>
      </article>
    `;
  }).join("");
}

function localizedProject(project) {
  return currentLanguage === "en" ? project.english : project;
}

function updateProjectsLanguage() {
  projectsGrid.querySelectorAll(".project-card").forEach((card, index) => {
    const project = projects[index];
    const copy = localizedProject(project);
    card.querySelector(".project-type").textContent = copy.type;
    card.querySelector("h3").textContent = copy.name;
    card.querySelector(".project-body > p").textContent = copy.description;
    card.querySelector(".project-art").setAttribute("aria-label", currentLanguage === "en"
      ? `Visual for the ${copy.name} project`
      : `مساحة بصرية لمشروع ${copy.name}`);
    card.querySelector(".project-tags").setAttribute("aria-label", currentLanguage === "en" ? "Technologies used" : "التقنيات المستخدمة");
    const link = card.querySelector(".project-link");
    if (link.classList.contains("disabled")) {
      link.textContent = currentLanguage === "en" ? "Coming soon" : "الرابط قريباً";
      link.setAttribute("aria-label", currentLanguage === "en" ? "No project link is available yet" : "لا يتوفر رابط للمشروع بعد");
    } else {
      link.querySelector("span").textContent = currentLanguage === "en" ? "Explore project" : "استكشف المشروع";
    }
  });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  const aboutCopy = document.querySelector(".about-copy");
  aboutTypewriterController = prepareAboutTypewriter(aboutCopy);
  const startAboutTypewriter = aboutTypewriterController ? () => aboutTypewriterController.start() : null;
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => {
      if (item === aboutCopy && startAboutTypewriter) startAboutTypewriter();
      item.classList.add("is-visible");
    });
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === aboutCopy) {
          entry.target.classList.remove("is-visible");
          void entry.target.offsetWidth;
          if (startAboutTypewriter) startAboutTypewriter();
        }
        entry.target.classList.add("is-visible");
        if (entry.target !== aboutCopy) currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function prepareAboutTypewriter(container) {
  if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;

  const paragraphs = Array.from(container.querySelectorAll("p"));
  const cursor = document.createElement("span");
  cursor.className = "about-typewriter-cursor";
  cursor.setAttribute("aria-hidden", "true");
  let timer = 0;
  let run = 0;
  let textNodes = [];

  const rebuild = () => {
    window.clearTimeout(timer);
    cursor.remove();
    textNodes = [];
    paragraphs.forEach((paragraph) => {
      let layout = Array.from(paragraph.children).find((child) => child.classList.contains("about-typewriter-layout"));
      if (!layout) {
        layout = document.createElement("span");
        layout.className = "about-typewriter-layout";
        layout.setAttribute("aria-hidden", "true");
        while (paragraph.firstChild) layout.append(paragraph.firstChild);
      }

      const visual = layout.cloneNode(true);
      visual.className = "about-typewriter-visual";
      visual.setAttribute("aria-hidden", "true");
      const accessible = layout.cloneNode(true);
      accessible.className = "about-typewriter-accessible";
      accessible.removeAttribute("aria-hidden");

      const walker = document.createTreeWalker(visual, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const node = walker.currentNode;
        const characters = splitGraphemes(node.textContent);
        if (characters.length) {
          node.textContent = "";
          textNodes.push({ node, characters });
        }
      }
      paragraph.replaceChildren(layout, visual, accessible);
    });
    container.classList.add("has-typewriter");
    cursor.classList.remove("is-complete");
  };

  const showCompleteText = () => {
    window.clearTimeout(timer);
    textNodes.forEach(({ node, characters }) => { node.textContent = characters.join(""); });
    const lastNode = textNodes[textNodes.length - 1];
    if (lastNode) lastNode.node.parentNode.insertBefore(cursor, lastNode.node.nextSibling);
    cursor.classList.add("is-complete");
  };

  const start = () => {
    run += 1;
    const currentRun = run;
    window.clearTimeout(timer);
    cursor.remove();
    textNodes.forEach(({ node }) => { node.textContent = ""; });
    cursor.classList.remove("is-complete");

    let nodeIndex = 0;
    let characterIndex = 0;
    const typeNextCharacter = () => {
      if (currentRun !== run) return;
      while (nodeIndex < textNodes.length && characterIndex >= textNodes[nodeIndex].characters.length) {
        nodeIndex += 1;
        characterIndex = 0;
      }
      if (nodeIndex >= textNodes.length) {
        cursor.classList.add("is-complete");
        return;
      }

      const { node, characters } = textNodes[nodeIndex];
      const character = characters[characterIndex];
      node.textContent += character;
      node.parentNode.insertBefore(cursor, node.nextSibling);
      characterIndex += 1;

      const delay = /[،؛.!؟…]/u.test(character) ? 140 : /^\s$/u.test(character) ? 16 : 24;
      timer = window.setTimeout(typeNextCharacter, delay);
    };

    typeNextCharacter();
  };

  rebuild();
  return {
    start,
    update() {
      rebuild();
      const bounds = container.getBoundingClientRect();
      if (bounds.bottom > 0 && bounds.top < window.innerHeight) start();
      else showCompleteText();
    }
  };
}

function splitGraphemes(text) {
  if (typeof Intl.Segmenter === "function") {
    return Array.from(new Intl.Segmenter("ar", { granularity: "grapheme" }).segment(text), ({ segment }) => segment);
  }
  return Array.from(text).reduce((graphemes, character) => {
    if (/[\u064B-\u065F\u0670\u06D6-\u06ED]/.test(character) && graphemes.length) {
      graphemes[graphemes.length - 1] += character;
    } else {
      graphemes.push(character);
    }
    return graphemes;
  }, []);
}

function englishText(key) {
  const value = ENGLISH_UI[key];
  if (typeof value !== "string") throw new Error(`Missing English translation: ${key}`);
  return value;
}

function applyLanguage(language, persist = true) {
  if (language !== "ar" && language !== "en") throw new RangeError(`Unsupported language: ${language}`);
  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = language === "en" ? englishText("pageTitle") : "بصمة إنجاز | هند عبدالقوي";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (aboutTypewriterController && element.closest(".about-copy") && !element.closest(".about-typewriter-layout")) return;
    if (element.dataset.i18nAr === undefined) element.dataset.i18nAr = element.textContent;
    element.textContent = language === "en" ? englishText(element.dataset.i18n) : element.dataset.i18nAr;
  });

  const translatedAttributes = [
    ["data-i18n-aria-label", "aria-label", "i18nAriaLabel"],
    ["data-i18n-placeholder", "placeholder", "i18nPlaceholder"],
    ["data-i18n-title", "title", "i18nTitle"],
    ["data-i18n-content", "content", "i18nContent"]
  ];
  translatedAttributes.forEach(([selector, attribute, datasetKey]) => {
    document.querySelectorAll(`[${selector}]`).forEach((element) => {
      const arabicKey = `${datasetKey}Ar`;
      if (element.dataset[arabicKey] === undefined) {
        element.dataset[arabicKey] = element.getAttribute(attribute) || "";
      }
      const key = element.getAttribute(selector);
      element.setAttribute(attribute, language === "en" ? englishText(key) : element.dataset[arabicKey]);
    });
  });

  document.querySelector('meta[name="description"]').content = language === "en"
    ? englishText("pageDescription")
    : document.querySelector('meta[name="description"]').dataset.i18nContentAr;
  document.querySelectorAll(".language-switch [data-language]").forEach((button) => {
    const selected = button.dataset.language === language;
    button.setAttribute("aria-pressed", String(selected));
    button.setAttribute("aria-label", button.dataset.language === "ar"
      ? (language === "en" ? "Arabic" : "العربية")
      : "English");
  });

  updateSkillCards();
  updateProjectsLanguage();
  updateSkillDialog();
  if (aboutTypewriterController) aboutTypewriterController.update();
  if (skillsMantraController) skillsMantraController.update();
  syncThemeLabel();
  syncNavigationLabels();
  updateContactLanguage();
  if (persist) localStorage.setItem("hind-language", language);
}

function setupLanguageSwitcher() {
  document.querySelectorAll(".language-switch [data-language]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });
}

function syncThemeLabel() {
  const button = document.querySelector(".theme-toggle");
  if (!button) return;
  const isLight = document.documentElement.dataset.theme === "light";
  const key = isLight ? "switchToDark" : "switchToLight";
  button.setAttribute("aria-label", currentLanguage === "en" ? englishText(key) : (isLight ? "التبديل إلى الوضع الليلي" : "التبديل إلى الوضع النهاري"));
  button.title = currentLanguage === "en" ? englishText("changeAppearance") : "تغيير المظهر";
}

function syncNavigationLabels() {
  const toggle = document.querySelector(".menu-toggle");
  if (!toggle) return;
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  const key = isOpen ? "closeMenu" : "openMenu";
  toggle.setAttribute("aria-label", currentLanguage === "en" ? englishText(key) : (isOpen ? "إغلاق القائمة" : "فتح القائمة"));
}

function setupTheme() {
  const button = document.querySelector(".theme-toggle");
  const savedTheme = localStorage.getItem("hind-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.dataset.theme = savedTheme;
  }
  const updateLabel = () => {
    const isLight = document.documentElement.dataset.theme === "light";
    syncThemeLabel();
    document.querySelector('meta[name="theme-color"]').content = isLight ? "#f5f2eb" : "#101a30";
  };
  updateLabel();
  button.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("hind-theme", nextTheme);
    updateLabel();
  });
}

function setupNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    syncNavigationLabels();
  };
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    syncNavigationLabels();
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 16), { passive: true });
}

function setupTimeline() {
  document.querySelectorAll(".timeline-marker").forEach((marker) => {
    marker.addEventListener("click", () => {
      const item = marker.closest(".timeline-item");
      const willExpand = item.classList.contains("is-collapsed");
      item.classList.toggle("is-collapsed", !willExpand);
      marker.setAttribute("aria-expanded", String(willExpand));
    });
  });
}

function contactFeedback(key) {
  const arabicMessages = {
    emailMissing: "أضيفي بريدك الإلكتروني في SITE_CONFIG داخل ملف script.js لتفعيل التواصل المباشر.",
    messagePrepared: "تم تجهيز الرسالة في تطبيق البريد الإلكتروني.",
    messagePreparedMissing: "تم تجهيز الرسالة. أضيفي بريدك في SITE_CONFIG داخل script.js ليظهر عنوانك تلقائياً للمراسلة."
  };
  const feedback = document.querySelector("#form-feedback");
  feedback.dataset.translationKey = key;
  feedback.textContent = currentLanguage === "en" ? englishText(key) : arabicMessages[key];
}

function updateContactLanguage() {
  const emailLabel = document.querySelector("#email-label");
  if (!emailLabel) return;
  emailLabel.textContent = SITE_CONFIG.contactEmail.trim()
    || (currentLanguage === "en" ? englishText("emailLabel") : "البريد الإلكتروني");

  const feedback = document.querySelector("#form-feedback");
  if (feedback && feedback.dataset.translationKey) contactFeedback(feedback.dataset.translationKey);

  const socials = document.querySelector("#social-links");
  if (!socials) return;
  const links = SITE_CONFIG.socialLinks.filter((link) => link.label && /^https:\/\/\S+$/i.test(link.url));
  socials.replaceChildren(...links.map((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.textContent = currentLanguage === "en" ? (link.labelEn || link.label) : (link.labelAr || link.label);
    return anchor;
  }));
}

function setupContact() {
  const emailLink = document.querySelector("#email-link");
  if (SITE_CONFIG.contactEmail) {
    const email = SITE_CONFIG.contactEmail.trim();
    emailLink.href = `mailto:${encodeURIComponent(email)}`;
  } else {
    emailLink.addEventListener("click", (event) => {
      event.preventDefault();
      contactFeedback("emailMissing");
    });
  }
  updateContactLanguage();

  document.querySelector("#contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get("name")).trim();
    const senderEmail = String(data.get("email")).trim();
    const message = String(data.get("message")).trim();
    const subject = encodeURIComponent(currentLanguage === "en" ? `Message from ${name}` : `رسالة من ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${senderEmail}`);
    const recipient = SITE_CONFIG.contactEmail.trim();
    window.location.href = `mailto:${encodeURIComponent(recipient)}?subject=${subject}&body=${body}`;
    contactFeedback(recipient ? "messagePrepared" : "messagePreparedMissing");
  });
}

function setupParticles() {
  const container = document.querySelector(".particles");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  for (let index = 0; index < 19; index += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = `${5 + Math.random() * 90}%`;
    particle.style.top = `${35 + Math.random() * 55}%`;
    particle.style.setProperty("--duration", `${8 + Math.random() * 9}s`);
    particle.style.setProperty("--delay", `${-Math.random() * 14}s`);
    container.append(particle);
  }
}

applyLanguage(currentLanguage, false);
renderSkills();
renderProjects();
setupSkillsExperience();
setupReveal();
setupTheme();
setupNavigation();
setupLanguageSwitcher();
setupTimeline();
setupContact();
setupParticles();
document.querySelector("#current-year").textContent = String(new Date().getFullYear());
