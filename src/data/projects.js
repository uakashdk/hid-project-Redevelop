const projects = [
  // 1: static first image (full width)
  {
    id: 1,
    title: "Moorish House",
    category: "Residential Architecture",
    slug: "moorish-house",
    image: "/Images/featured5.jpeg",
    location: "New Delhi",
    year: "2026",
    fullWidth: true,
    description: "A grand estate inspired by Moorish architectural motifs, classical arches, and expansive courtyards.",
    fullDescription: "Moorish House stands as an expression of classical elegance blended with modern luxury. Characterized by handcrafted arches, intricate stonework, and soaring ceiling heights, the estate harmonizes privacy with expansive interior-exterior connections.",
    technologies: ["Architecture", "Interior Design", "Landscape"],
    gallery: ["/Images/featured5.jpeg", "/Images/featured7.jpeg", "/Images/project2.png"]
  },

  // 2 & 3: two divided grid images
  {
    id: 2,
    title: "Estate Hyderabad",
    category: "Hospitality & Estate",
    slug: "estate-hyderabad",
    image: "/Images/featured7.jpeg",
    location: "Hyderabad",
    year: "2026",
    description: "A sprawling classical sanctuary combining regal columns and lush manicured gardens.",
    technologies: ["Architecture", "Lighting", "Landscape"],
    gallery: ["/Images/featured7.jpeg", "/Images/wa1.jpeg"]
  },
  {
    id: 3,
    title: "Landscape Design",
    category: "Landscape Architecture",
    slug: "landscape-design",
    image: "/Images/project2.png",
    location: "New Delhi",
    year: "2025",
    description: "Serene garden sanctuaries designed with natural water bodies and native flora.",
    technologies: ["Landscape", "Lighting"],
    gallery: ["/Images/project2.png", "/Images/wa2.jpeg"]
  },

  // 4: single image full width
  {
    id: 4,
    title: "The Residence Chattarpur",
    category: "Residential",
    slug: "the-residence-chattarpur",
    image: "/Images/wa1.jpeg",
    location: "New Delhi",
    year: "2025",
    fullWidth: true,
    description: "A modern urban villa balancing privacy, natural light, and quiet materiality.",
    technologies: ["Architecture", "Interior Design"],
    gallery: ["/Images/wa1.jpeg", "/Images/wa3.jpeg"]
  },

  // 5: single image full width
  {
    id: 5,
    title: "Lighting & Space",
    category: "Interior Lighting",
    slug: "lighting-and-space",
    image: "/Images/wa2.jpeg",
    location: "Gurugram",
    year: "2025",
    fullWidth: true,
    description: "Sculptural architectural illumination curated to accentuate material textures.",
    technologies: ["Lighting", "Interior Design"],
    gallery: ["/Images/wa2.jpeg", "/Images/wa8.jpeg"]
  },

  // 6 & 7: two divided grid images
  {
    id: 6,
    title: "Decor & Craftsmanship",
    category: "Interior Craft",
    slug: "decor-and-craftsmanship",
    image: "/Images/wa3.jpeg",
    location: "Mumbai",
    year: "2025",
    description: "Bespoke furnishings and tactile surfaces crafted for contemporary living.",
    technologies: ["Furniture", "Decor"],
    gallery: ["/Images/wa3.jpeg", "/Images/palm2.png"]
  },
  {
    id: 7,
    title: "Custom Furniture",
    category: "Furniture Design",
    slug: "custom-furniture",
    image: "/Images/wa8.jpeg",
    location: "Jaipur",
    year: "2024",
    description: "Tailor-made artisanal furniture pieces designed for luxury interiors.",
    technologies: ["Furniture Design", "Craftsmanship"],
    gallery: ["/Images/wa8.jpeg", "/Images/featured3.jpeg"]
  },

  // 8: single image full width
  {
    id: 8,
    title: "Art Curation Manor",
    category: "Art Curation",
    slug: "art-curation-manor",
    image: "/Images/palm2.png",
    location: "Goa",
    year: "2024",
    fullWidth: true,
    description: "Curated fine art installations integrated within modern architectural spaces.",
    technologies: ["Art Curation", "Interior Design"],
    gallery: ["/Images/palm2.png", "/Images/featured5.jpeg"]
  },

  // 9 & 10: two divided grid images
  {
    id: 9,
    title: "Turnkey Execution",
    category: "Turnkey Architecture",
    slug: "turnkey-execution",
    image: "/Images/featured3.jpeg",
    location: "Noida",
    year: "2024",
    description: "End-to-end design and execution delivering uncompromising precision.",
    technologies: ["Turnkey", "Architecture"],
    gallery: ["/Images/featured3.jpeg", "/Images/featured7.jpeg"]
  },
  {
    id: 10,
    title: "Iconic Villa",
    category: "Architecture",
    slug: "iconic-villa",
    image: "/Images/featured5.jpeg",
    location: "Chandigarh",
    year: "2024",
    description: "A modern classical villa featuring grand proportions and minimalist interiors.",
    technologies: ["Architecture", "Interior Design"],
    gallery: ["/Images/featured5.jpeg", "/Images/project2.png"]
  },

  // 11 & 12: two divided grid images
  {
    id: 11,
    title: "Interior Sanctuary",
    category: "Interior Design",
    slug: "interior-sanctuary",
    image: "/Images/featured7.jpeg",
    location: "New Delhi",
    year: "2024",
    description: "Refined living spaces wrapped in warm natural stone and oak.",
    technologies: ["Interior Design", "Lighting"],
    gallery: ["/Images/featured7.jpeg", "/Images/wa1.jpeg"]
  },
  {
    id: 12,
    title: "Pavilion Landscape",
    category: "Landscape",
    slug: "pavilion-landscape",
    image: "/Images/project2.png",
    location: "Bengaluru",
    year: "2024",
    description: "Open-air pavilions integrated seamlessly into surrounding natural landscape.",
    technologies: ["Landscape Architecture"],
    gallery: ["/Images/project2.png", "/Images/wa2.jpeg"]
  },

  // 13: single image full width
  {
    id: 13,
    title: "Smart Home Estate",
    category: "Automation & Design",
    slug: "smart-home-estate",
    image: "/Images/wa1.jpeg",
    location: "Gurugram",
    year: "2024",
    fullWidth: true,
    description: "Intelligent home automation discreetly concealed within timeless design.",
    technologies: ["Smart Home", "Interior Design"],
    gallery: ["/Images/wa1.jpeg", "/Images/wa3.jpeg"]
  },

  // 14 & 15: two divided grid images
  {
    id: 14,
    title: "Lighting Atelier",
    category: "Architectural Lighting",
    slug: "lighting-atelier",
    image: "/Images/wa2.jpeg",
    location: "Mumbai",
    year: "2023",
    description: "Atmospheric ambient lighting designed for high-end residential spaces.",
    technologies: ["Lighting Design"],
    gallery: ["/Images/wa2.jpeg", "/Images/wa8.jpeg"]
  },
  {
    id: 15,
    title: "Decor Atelier",
    category: "Decor",
    slug: "decor-atelier",
    image: "/Images/wa3.jpeg",
    location: "New Delhi",
    year: "2023",
    description: "Exquisite decorative details, custom textiles, and bespoke art objects.",
    technologies: ["Decor", "Interior Styling"],
    gallery: ["/Images/wa3.jpeg", "/Images/palm2.png"]
  },

  // 16: single image full width
  {
    id: 16,
    title: "Furniture Collection",
    category: "Bespoke Furniture",
    slug: "furniture-collection",
    image: "/Images/wa8.jpeg",
    location: "Hyderabad",
    year: "2023",
    fullWidth: true,
    description: "Limited edition furniture pieces shaped by geometric elegance and comfort.",
    technologies: ["Furniture Design"],
    gallery: ["/Images/wa8.jpeg", "/Images/featured3.jpeg"]
  },

  // 17 & 18: two divided grid images
  {
    id: 17,
    title: "Art Curation Villa",
    category: "Art & Architecture",
    slug: "art-curation-villa",
    image: "/Images/palm2.png",
    location: "Udaipur",
    year: "2023",
    description: "Harmonizing contemporary art collections with historic architectural structures.",
    technologies: ["Art Curation"],
    gallery: ["/Images/palm2.png", "/Images/featured5.jpeg"]
  },
  {
    id: 18,
    title: "Turnkey Penthouse",
    category: "Turnkey Interior",
    slug: "turnkey-penthouse",
    image: "/Images/featured3.jpeg",
    location: "Mumbai",
    year: "2023",
    description: "A luxury penthouse executed with meticulous craftsmanship from blueprint to handover.",
    technologies: ["Turnkey Execution"],
    gallery: ["/Images/featured3.jpeg", "/Images/featured7.jpeg"]
  },

  // 19: single image full width
  {
    id: 19,
    title: "Iconic Urban Manor",
    category: "Architecture",
    slug: "iconic-urban-manor",
    image: "/Images/featured5.jpeg",
    location: "New Delhi",
    year: "2023",
    fullWidth: true,
    description: "A dramatic urban villa featuring bronze facade elements and expansive glass overhangs.",
    technologies: ["Architecture", "Facade Design"],
    gallery: ["/Images/featured5.jpeg", "/Images/project2.png"]
  },

  // 20 & 21: two divided grid images
  {
    id: 20,
    title: "Modern Interior Lounge",
    category: "Interior Design",
    slug: "modern-interior-lounge",
    image: "/Images/featured7.jpeg",
    location: "Gurugram",
    year: "2023",
    description: "An intimate lounge space built around rich timber framing and soft ambient light.",
    technologies: ["Interior Design"],
    gallery: ["/Images/featured7.jpeg", "/Images/wa1.jpeg"]
  },
  {
    id: 21,
    title: "Garden Courtyard",
    category: "Landscape",
    slug: "garden-courtyard",
    image: "/Images/project2.png",
    location: "Jaipur",
    year: "2023",
    description: "Central open-air courtyard framed by classic stone porticos and reflective water bodies.",
    technologies: ["Landscape Architecture"],
    gallery: ["/Images/project2.png", "/Images/wa2.jpeg"]
  },

  // 22: single final image full width
  {
    id: 22,
    title: "Smart Penthouse",
    category: "Residential Architecture",
    slug: "smart-penthouse",
    image: "/Images/wa1.jpeg",
    location: "New Delhi",
    year: "2023",
    fullWidth: true,
    description: "A state-of-the-art intelligent residence offering panoramic skyward views.",
    technologies: ["Architecture", "Smart Home"],
    gallery: ["/Images/wa1.jpeg", "/Images/wa3.jpeg"]
  }
];

export default projects;