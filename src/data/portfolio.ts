// Portfolio data for Rajesh Choudhary - Digital Marketing Strategist
// Update this file to modify the portfolio content

export const personalInfo = {
  name: "Rajesh Choudhary",
  role: "Digital Marketing Strategist & Full-Stack Developer",
  headline: "Hi, I'm Rajesh — a Digital Marketing Strategist & Full-Stack Developer helping brands grow through creativity and code.",
  tagline: "As a digital marketer who codes, I bring a unique perspective to every project. My development skills allow me to build custom analytics dashboards, automate marketing workflows, and create high-performance web experiences that convert.",
  location: "Jaipur, Rajasthan",
  email: "rach101201@gmail.com",
  phone: "+91 70141 68237",
  linkedin: "linkedin.com/in/rach101",
  github: "github.com/quantumrajesh",
  resumeUrl: "#", // Update with actual resume URL
};

export const marketingSkills = [
  "Social Media Marketing",
  "SEO & Keyword Research",
  "Google Ads & Meta Ads (Certified)",
  "Content Creation (Canva, Figma)",
  "AI Tools (MidJourney, Runway, Veo)",
  "Video Marketing (Reels, Shorts)",
  "Google Analytics",
  "Performance Marketing",
  "Data Analysis",
  "Email Marketing",
];

export const techStack = {
  frontend: [
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "JavaScript", icon: "JS" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Shadcn UI", icon: "🎭" },
  ],
  animation: [
    { name: "Framer Motion", icon: "🎬" },
    { name: "GSAP", icon: "✨" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "Django", icon: "🐍" },
    { name: "Python", icon: "🐍" },
  ],
  database: [
    { name: "MongoDB", icon: "🍃" },
  ],
  tools: [
    { name: "GitHub", icon: "🐙" },
    { name: "Postman", icon: "📮" },
    { name: "Docker", icon: "🐳" },
    { name: "Figma", icon: "🎨" },
  ],
  other: [
    { name: "Java", icon: "☕" },
  ],
};

// Legacy export for backward compatibility
export const skills = marketingSkills;

export const experience = [
  {
    title: "Digital Marketing Strategist",
    company: "Freelance",
    period: "2025 - Present",
    location: "Jaipur, Rajasthan",
    achievements: [
      "Led campaigns with 150% engagement increase across multiple clients",
      "Grew social following by 5K+ organically through strategic content planning",
      "Implemented AI-driven content strategies resulting in viral campaigns",
      "Optimized ad spend efficiency by 40% through advanced targeting techniques",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    company: "Shree Ram & Company",
    period: "Jan 2023 - Jan 2025",
    location: "Jaipur, Rajasthan",
    achievements: [
      "Improved local visibility through comprehensive SEO strategy",
      "Managed Meta and Google Ads campaigns with 200%+ ROAS",
      "Developed and executed social media campaigns across multiple platforms",
      "Created data-driven content strategies that increased brand awareness by 60%",
    ],
  },
  {
    title: "Marketing Head",
    company: "Royal Arts Palace",
    period: "Jan 2022 - Mar 2025",
    location: "Jaipur, Rajasthan",
    achievements: [
      "Led comprehensive social media and email marketing campaigns",
      "Established brand presence across digital channels from ground up",
      "Coordinated with creative teams for content production and brand consistency",
      "Implemented customer retention strategies through targeted email sequences",
    ],
  },
];

export const marketingProjects = [
  {
    id: 1,
    type: "marketing",
    title: "Stone Art Carving — #1 in Jaipur",
    company: "Stone Art Carving",
    duration: "Jan 2023 – Dec 2024",
    description: "Transformed a small stone carving workshop into Jaipur's #1 premium stone and marble art brand through comprehensive digital marketing and web development.",
    challenge: "Needed to scale from a small workshop to a premium brand with no established digital identity or performance marketing presence. Target audience (interior designers, luxury home clients) was hard to reach organically.",
    strategy: "Multi-platform social and ad strategy (Meta + Google Ads), brand visuals showcasing craftsmanship, optimized Google Maps presence, influencer campaigns, and video storytelling.",
    results: "Achieved #1 ranking in Jaipur for stone art searches with 5.0⭐ rating (34+ reviews), attracted high-end B2B clients nationwide, and established market dominance.",
    keyMetrics: ["#1 Ranking in Jaipur", "5.0⭐ (34 Reviews)", "300% Lead Growth", "Nationwide Reach"],
    skillsUsed: ["Meta Ads", "Google Ads", "SEO", "Google My Business", "Content Creation", "Video Marketing"],
    ranking: "#1",
    rating: "5.0",
    reviews: "34+",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: 2,
    type: "marketing",
    title: "Shree Ram & Company — #2 in Jaipur",
    company: "Shree Ram & Company (Vijeta Stone)",
    duration: "Jan 2023 – Jan 2025",
    description: "Built complete digital presence for luxury stone carving company, combining strategic marketing campaigns with custom web development to achieve #2 ranking in Jaipur.",
    challenge: "Outdated online presence with no website or clear brand identity. Limited local reach despite strong craftsmanship. Needed to attract premium clients in architecture and interior design.",
    strategy: "Designed and ran Meta Ads and Google Ads targeting high-intent audiences, managed social media growth campaigns, optimized Google My Business, and developed modern website with SEO focus.",
    results: "Ranked #2 in Jaipur, achieved 4.9⭐ rating (52+ reviews), 3× increase in lead generation within 3 months, attracted major clients including Malabar Jewellers and top architectural firms.",
    keyMetrics: ["#2 Ranking in Jaipur", "4.9⭐ (52 Reviews)", "3× Lead Generation", "150% Engagement Boost"],
    skillsUsed: ["Meta Ads", "Google Ads", "SEO", "Social Media Marketing", "Google My Business", "Analytics"],
    ranking: "#2",
    rating: "4.9",
    reviews: "52+",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: 3,
    type: "marketing",
    title: "AI-Driven Content Campaigns",
    description: "Revolutionary short-form video strategy using AI tools to create viral content that significantly boosted brand engagement across multiple platforms.",
    challenge: "Declining organic reach and engagement on social media platforms with traditional content strategies failing to capture audience attention.",
    strategy: "AI-powered content creation using MidJourney and Runway for viral short-form videos, strategic posting schedules, and community engagement tactics.",
    results: "Multiple viral videos, 400% increase in organic reach, 5K+ new followers, and established brand as industry thought leader.",
    keyMetrics: ["400% Organic Reach", "Multiple Viral Videos", "5K+ New Followers", "Industry Leadership"],
    skillsUsed: ["AI Tools (MidJourney, Runway, Veo)", "Video Marketing", "Social Media Marketing", "Content Strategy"],
    imageUrl: "/api/placeholder/400/300",
  },
];

export const developmentProjects = [
  {
    id: 4,
    type: "development",
    title: "Stone Art Carving — Portfolio Website",
    company: "Stone Art Carving",
    duration: "Jan 2023 – Dec 2024",
    description: "Designed and built a modern portfolio website featuring categorized product sections, inquiry system, and optimized for SEO to showcase luxury stone and marble art.",
    challenge: "No digital presence to showcase premium craftsmanship. Needed a fast, SEO-optimized site that converts visitors into leads.",
    strategy: "Built with Next.js for optimal performance and SEO, integrated inquiry forms with Node.js backend, implemented analytics tracking, and optimized for mobile conversions.",
    results: "Improved page load speed by 60%, achieved top Google rankings, integrated lead tracking system, and established strong online brand presence.",
    keyMetrics: ["60% Faster Load Speed", "Top SEO Rankings", "Lead Tracking System", "Mobile Optimized"],
    skillsUsed: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "SEO"],
    imageUrl: "/api/placeholder/400/300",
    githubUrl: "https://github.com/quantumrajesh",
    liveUrl: "#",
  },
  {
    id: 5,
    type: "development",
    title: "Shree Ram & Company — Official Website",
    company: "Shree Ram & Company (Vijeta Stone)",
    duration: "Jan 2023 – Jan 2025",
    description: "Developed official website with focus on performance, SEO, and brand storytelling. Built inquiry forms with backend APIs and integrated analytics for lead tracking.",
    challenge: "Company had no website despite strong craftsmanship. Needed professional online presence to attract premium architecture and interior design clients.",
    strategy: "Designed and developed using React.js, Next.js, and Tailwind CSS. Implemented inquiry forms with backend APIs, optimized for mobile conversions, and integrated Google Analytics.",
    results: "Unified brand identity across web and social, improved page load speed, enabled automated lead tracking, and attracted major clients including Malabar Jewellers.",
    keyMetrics: ["Professional Web Presence", "Fast Performance", "Automated Lead System", "Major Client Acquisition"],
    skillsUsed: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Google Analytics"],
    imageUrl: "/api/placeholder/400/300",
    githubUrl: "https://github.com/quantumrajesh",
    liveUrl: "#",
  },
  {
    id: 6,
    type: "development",
    title: "Marketing Analytics Dashboard",
    description: "Custom-built analytics dashboard for tracking multi-channel marketing performance with real-time data visualization and automated reporting.",
    challenge: "Manual data collection from multiple platforms was time-consuming and error-prone, making it difficult to make quick marketing decisions.",
    strategy: "Built a full-stack dashboard using React, Node.js, and MongoDB with API integrations for Google Analytics, Meta Ads, and Google Ads for unified reporting.",
    results: "Reduced reporting time by 80%, improved data accuracy, enabled real-time decision making, and provided actionable insights across all campaigns.",
    keyMetrics: ["80% Time Saved", "Real-time Insights", "Multi-platform Integration", "Automated Reporting"],
    skillsUsed: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "API Integration"],
    imageUrl: "/api/placeholder/400/300",
    githubUrl: "https://github.com/quantumrajesh",
    liveUrl: "#",
  },
];

// Combined projects for main portfolio display
export const projects = [...marketingProjects, ...developmentProjects];

export const certifications = [
  {
    name: "Fundamentals of Digital Marketing",
    issuer: "Google Digital Garage",
    date: "2023",
    description: "Covers SEO, analytics, display, and business strategy fundamentals.",
    credentialId: "GDG-2023-DM-847592",
    url: "https://learndigital.withgoogle.com/digitalgarage/validate-certificate-code",
  },
  {
    name: "Facebook & Instagram Ads Certification",
    issuer: "Meta Blueprint",
    date: "2024",
    description: "Expertise in campaign setup, optimization, A/B testing, and performance scaling.",
    credentialId: "META-BP-2024-FB-IG-934821",
    url: "https://www.facebookblueprint.com/student/catalog",
  },
  {
    name: "Google Ads & Analytics Certification",
    issuer: "Google Skillshop",
    date: "2024",
    description: "Includes Search, Display, Video, and Measurement certifications.",
    credentialId: "GSKILL-2024-ADS-ANLYTCS-562847",
    url: "https://skillshop.exceedlms.com/student/catalog",
  },
  {
    name: "Inbound & Content Marketing Certification",
    issuer: "HubSpot Academy",
    date: "2023",
    description: "Focused on inbound strategy, content creation, and lead nurturing.",
    credentialId: "HSPOT-2023-INBOUND-728394",
    url: "https://academy.hubspot.com/certificates",
  },
  {
    name: "SEO Fundamentals Certification",
    issuer: "SEMrush Academy",
    date: "2023",
    description: "Covers keyword research, technical SEO, and on/off-page optimization.",
    credentialId: "SEMRUSH-2023-SEO-FUND-419283",
    url: "https://www.semrush.com/academy/certificates",
  },
  {
    name: "Digital Marketing Specialization",
    issuer: "Coursera - University of Illinois",
    date: "2022",
    description: "Includes marketing analytics, SEO, social media, and digital strategy.",
    credentialId: "COURSERA-UIUC-2022-DM-SPEC-837465",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate",
  },
];

export const stats = [
  { label: "Engagement Increase", value: "150%", icon: "trending-up" },
  { label: "Organic Followers Growth", value: "5K+", icon: "users" },
  { label: "Campaigns Managed", value: "50+", icon: "target" },
  { label: "Client Satisfaction", value: "100%", icon: "heart" },
];

// Testimonials (placeholder for future implementation)
export const testimonials = [
  {
    name: "Client Name",
    position: "CEO, Company Name",
    content: "Rajesh transformed our digital presence completely. His strategic approach and use of AI tools helped us achieve results we never thought possible.",
    rating: 5,
  },
  // Add more testimonials as needed
];

// Mode-Specific About Content
export const modeAboutContent = {
  marketing: {
    title: "Digital Marketing Strategist",
    subtitle: "Founder of GrowBoost Digital",
    story: "I'm a results-driven digital marketing strategist with a proven track record of transforming brands through data-driven campaigns and AI-powered content strategies. As the founder of GrowBoost Digital, I've helped businesses achieve 150%+ engagement increases and 5X lead generation growth. My expertise spans SEO, performance marketing, social media strategy, and cutting-edge AI tools like MidJourney and Runway. I don't just run campaigns—I build scalable marketing systems that deliver measurable ROI.",
    cta: "Let's Build Your Next Campaign",
    approach: [
      "Data-driven strategy development",
      "AI-powered content creation",
      "Performance optimization & analytics",
      "Brand storytelling that converts"
    ]
  },
  development: {
    title: "Full-Stack Developer",
    subtitle: "Building High-Performance Web Experiences",
    story: "I'm a full-stack developer passionate about creating elegant, scalable web applications that solve real problems. With expertise in React, Next.js, Django, and modern JavaScript, I build everything from custom analytics dashboards to full-featured e-commerce platforms. My code is clean, maintainable, and performance-optimized. I believe great development is about more than just making things work—it's about creating experiences that users love and businesses can scale.",
    cta: "Let's Build Your Next App",
    approach: [
      "Modern tech stack (React, Next.js, TypeScript)",
      "Performance-first architecture",
      "Clean, maintainable code",
      "User-centric design thinking"
    ]
  },
  both: {
    title: "Creative Technologist",
    subtitle: "Where Marketing Strategy Meets Code",
    story: "As a digital marketer who codes, I bring a unique perspective to every project. My development skills allow me to build custom analytics dashboards, automate marketing workflows, and create high-performance web experiences that convert. Whether I'm optimizing ad campaigns or architecting full-stack applications, I focus on data-driven results and seamless user experiences. This rare combination of marketing insight and technical execution means I don't just understand what needs to be built—I can build it myself.",
    cta: "Let's Transform Your Digital Presence",
    approach: [
      "Unified marketing & technical strategy",
      "Custom tools for marketing automation",
      "Data-driven decision making",
      "End-to-end project ownership"
    ]
  }
};

// Enhanced Dual Expertise Content
export const expertiseContent = {
  marketing: {
    heading: "Digital Marketing Expertise",
    subtext: "Helping brands grow through strategy, content, and performance marketing.",
    paragraph: "I specialize in building brand presence through creativity and analytics — crafting viral campaigns, managing ad performance, and turning communities into loyal audiences.",
    focusAreas: [
      {
        category: "Social Media Strategy",
        skills: ["Instagram", "LinkedIn", "YouTube", "Community Building"]
      },
      {
        category: "Performance Marketing",
        skills: ["Google Ads", "Meta Ads", "Analytics", "ROI Optimization"]
      },
      {
        category: "Content & Campaign Design",
        skills: ["Reels", "Shorts", "UGC", "Canva", "Figma"]
      },
      {
        category: "SEO & Growth",
        skills: ["Keyword Research", "SEO Optimization", "Influencer Marketing"]
      },
      {
        category: "AI Tools for Marketing",
        skills: ["Veo", "Runway", "Gemini", "MidJourney", "ChatGPT"]
      }
    ],
    color: "from-orange-500 to-purple-600",
    accentColor: "#f97316"
  },
  development: {
    heading: "Full Stack Development Expertise",
    subtext: "Building fast, scalable, and visually appealing web applications.",
    paragraph: "As a full-stack developer, I create functional and elegant web experiences — from backend logic to pixel-perfect UI, blending performance with great design.",
    focusAreas: [
      {
        category: "Frontend",
        skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn"]
      },
      {
        category: "Animation & Motion",
        skills: ["Framer Motion", "GSAP", "CSS Animations"]
      },
      {
        category: "Backend",
        skills: ["Node.js", "Express.js", "Django", "Python", "MongoDB"]
      },
      {
        category: "Tools & DevOps",
        skills: ["GitHub", "Docker", "Postman", "Java"]
      },
      {
        category: "Design",
        skills: ["Figma", "UI/UX", "Responsive Design"]
      }
    ],
    color: "from-blue-500 to-teal-600",
    accentColor: "#3b82f6"
  },
  both: {
    heading: "Where Marketing Meets Code",
    subtext: "Combining creativity and technology to build digital experiences that convert.",
    paragraph: "I bridge the gap between marketing and technology — using code to supercharge strategy, automate analytics, and craft experiences that turn attention into measurable results.",
    focusAreas: [
      {
        category: "Marketing Automation",
        skills: ["AI-driven Analytics", "Custom Dashboards", "Automated Reporting"]
      },
      {
        category: "Conversion Optimization",
        skills: ["Interactive Landing Pages", "A/B Testing", "Performance Tracking"]
      },
      {
        category: "Marketing Tools",
        skills: ["React Dashboards", "Next.js Apps", "Real-time Data Integration"]
      },
      {
        category: "Growth Engineering",
        skills: ["SEO-optimized Code", "Analytics Integration", "Campaign Tools"]
      },
      {
        category: "Full-Stack Marketing",
        skills: ["UI/UX for Conversions", "Data Visualization", "API Integration"]
      }
    ],
    color: "from-indigo-500 to-violet-600",
    accentColor: "#6366f1"
  }
};

// Dual Expertise Cards (keeping for backward compatibility)
export const expertiseCards = [
  {
    id: "marketing",
    title: "Digital Marketing",
    tagline: "Strategy Meets Data",
    description: "Driving measurable growth through data-driven campaigns, SEO optimization, and AI-powered content strategies. Specialized in performance marketing with proven 150%+ engagement increases.",
    highlights: [
      "150% Engagement Increase",
      "5K+ Organic Growth",
      "AI-Powered Campaigns",
      "Multi-Channel Strategy"
    ],
    color: "from-orange-500 to-purple-600"
  },
  {
    id: "development",
    title: "Full-Stack Development",
    tagline: "Code Meets Creativity",
    description: "Building high-performance web applications with modern tech stacks. From custom analytics dashboards to e-commerce platforms, I create solutions that scale and convert.",
    highlights: [
      "React & Next.js Expert",
      "Full-Stack Solutions",
      "Performance Optimized",
      "Modern UI/UX"
    ],
    color: "from-blue-500 to-teal-600"
  }
];

// Social links
export const socialLinks = [
  {
    name: "LinkedIn",
    url: `https://${personalInfo.linkedin}`,
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: `https://${personalInfo.github}`,
    icon: "github",
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: "mail",
  },
  {
    name: "Phone",
    url: `tel:${personalInfo.phone}`,
    icon: "phone",
  },
];
