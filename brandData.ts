export interface BrandCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  heroImage: string;
  gallery: string[];
  videoThumbnail?: string;
  client?: string;
  year?: string;
}

export const brandData: Record<string, BrandCaseStudy> = {
  'stage-illusion': {
    id: 'stage-illusion',
    title: "The Prestige World Tour",
    subtitle: "A Symphony of Impossible Moments",
    category: "Stage Production",
    // Dramatic silhouette of magician in smoke
    heroImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&auto=format&fit=crop",
    description: "An immersive 90-minute theatrical experience that blends psychological illusion with grand scale visuals. Performed in over 20 countries, The Prestige challenges the audience's perception of reality through narrative-driven magic.",
    client: "Global Touring",
    year: "2023-2024",
    gallery: [
      "https://images.unsplash.com/photo-1514306191717-452ec28c7f91?q=80&w=1770&auto=format&fit=crop", // Stage lights
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1770&auto=format&fit=crop", // Music/Crowd
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop"  // Event Atmosphere
    ]
  },
  'corporate-elite': {
    id: 'corporate-elite',
    title: "Elite Corporate Experiences",
    subtitle: "Sophistication Meets Wonder",
    category: "VIP Events",
    // Luxury suit detail / cards / dark atmosphere
    heroImage: "https://images.unsplash.com/photo-1551505367-9d7a26f6dc92?q=80&w=1920&auto=format&fit=crop",
    description: "Tailored performances for the world's most exclusive brands. AZAM delivers bespoke close-up magic that reinforces brand messaging while providing unparalleled entertainment for high-net-worth guests.",
    client: "Various Fortune 500",
    year: "Ongoing",
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1769&auto=format&fit=crop", // Elegant Toast
      "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=1770&auto=format&fit=crop", // Abstract Lights
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1770&auto=format&fit=crop"  // Fashion/Event
    ]
  },
  'tv-broadcast': {
    id: 'tv-broadcast',
    title: "Television & Media",
    subtitle: "Magic for the Screen",
    category: "Broadcast",
    // Studio Camera / Behind scenes look
    heroImage: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=1768&auto=format&fit=crop",
    description: "From viral street magic specials to live talk show appearances, AZAM consults and performs for major networks, designing illusions that work flawlessly for both the live studio audience and the camera lens.",
    client: "BBC / Netflix / NBC",
    year: "2020-2024",
    gallery: [
      "https://images.unsplash.com/photo-1598550476439-cce12e3e4327?q=80&w=1770&auto=format&fit=crop", // Lens
      "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1770&auto=format&fit=crop", // Spotlight
      "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1770&auto=format&fit=crop"  // Dark Studio
    ]
  },
  'vogue': {
    id: 'vogue',
    title: "VOGUE Gala Dinner",
    subtitle: "The Fashion of Illusion",
    category: "Brand Partnership",
    // High Fashion / Dark
    heroImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1770&auto=format&fit=crop",
    description: "An exclusive evening where magic met high fashion. AZAM created a custom levitation piece involving the season's centerpiece collection.",
    client: "VOGUE",
    gallery: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1771&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1770&auto=format&fit=crop"
    ]
  },
  'rolex': {
    id: 'rolex',
    title: "Timeless Precision",
    subtitle: "Rolex Launch Event",
    category: "Product Reveal",
    // Watch / Detail / Dark
    heroImage: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1780&auto=format&fit=crop",
    description: "AZAM was commissioned to reveal the new Daytona model using a sleight of hand sequence that emphasized time, precision, and legacy.",
    client: "Rolex",
    gallery: [
      "https://images.unsplash.com/photo-1614164185128-e4899cae4bb1?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596522354195-e84e9c0a5d7e?q=80&w=1770&auto=format&fit=crop"
    ]
  },
  'tesla': {
    id: 'tesla',
    title: "Future Forward",
    subtitle: "Tesla Cyber Event",
    category: "Tech Launch",
    // Abstract Tech / Neon / Dark
    heroImage: "https://images.unsplash.com/photo-1535551951406-a19828b8a36d?q=80&w=1770&auto=format&fit=crop",
    description: "A futuristic performance integrating technology and magic to celebrate the launch of the new Cyber series.",
    client: "Tesla",
    gallery: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1770&auto=format&fit=crop"
    ]
  }
};