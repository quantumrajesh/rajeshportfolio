// Portfolio data for Rajesh Choudhary - Digital Marketing Strategist
// Update this file to modify the portfolio content

export const personalInfo = {
  name: "Rajesh Choudhary",
  role: "Digital Marketing Strategist",
  headline: "Digital Marketing Strategist | Performance Marketing & AI-Driven Campaigns",
  tagline: "Driving measurable growth through data-driven digital marketing strategies and cutting-edge AI tools",
  location: "Jaipur, Rajasthan",
  email: "rach101201@gmail.com",
  phone: "+91 70141 68237",
  linkedin: "linkedin.com/in/rach101",
  resumeUrl: "#", // Update with actual resume URL
};

export const skills = [
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

export const projects = [
  {
    id: 1,
    title: "Stone Art Brand Domination",
    description: "Comprehensive digital marketing strategy for luxury stone art business resulting in exponential growth and market leadership.",
    challenge: "Low brand awareness and limited online presence in competitive luxury market",
    strategy: "Multi-channel approach combining SEO, social media, and targeted advertising with premium visual content",
    results: "150% engagement boost, 5X increase in qualified leads, established market leadership in Jaipur",
    keyMetrics: ["150% Engagement Increase", "5X Lead Generation", "Market Leadership"],
    skillsUsed: ["Social Media Marketing", "SEO", "Content Creation", "Google Ads"],
    imageUrl: "/api/placeholder/400/300", // Placeholder image
  },
  {
    id: 2,
    title: "Local SEO Success Story",
    description: "Complete local SEO transformation that made client the top performer in Jaipur market across multiple search categories.",
    challenge: "Poor local visibility and ranking below competitors for key terms",
    strategy: "Technical SEO optimization, local citation building, and strategic content creation",
    results: "Achieved #1 ranking for primary keywords, 300% increase in local traffic",
    keyMetrics: ["#1 Local Rankings", "300% Traffic Increase", "Top Market Position"],
    skillsUsed: ["SEO & Keyword Research", "Google Analytics", "Content Creation"],
    imageUrl: "/api/placeholder/400/300", // Placeholder image
  },
  {
    id: 3,
    title: "AI-Driven Content Campaigns",
    description: "Revolutionary short-form video strategy using AI tools to create viral content that significantly boosted brand engagement.",
    challenge: "Declining organic reach and engagement on social media platforms",
    strategy: "AI-powered content creation using MidJourney and Runway for viral short-form videos",
    results: "Multiple viral videos, 400% increase in organic reach, 5K+ new followers",
    keyMetrics: ["400% Organic Reach", "Multiple Viral Videos", "5K+ New Followers"],
    skillsUsed: ["AI Tools (MidJourney, Runway, Veo)", "Video Marketing", "Social Media Marketing"],
    imageUrl: "/api/placeholder/400/300", // Placeholder image
  },
];

export const certifications = [
  {
    name: "Google Ads Certification",
    issuer: "Google Skillshop",
    date: "2024",
    credentialId: "Google_Ads_Certified", // Update with actual ID
    url: "#", // Update with credential URL
  },
  {
    name: "Meta Ads Certification",
    issuer: "Meta Blueprint",
    date: "2024",
    credentialId: "Meta_Blueprint_Certified", // Update with actual ID
    url: "#", // Update with credential URL
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

// Social links
export const socialLinks = [
  {
    name: "LinkedIn",
    url: `https://${personalInfo.linkedin}`,
    icon: "linkedin",
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
