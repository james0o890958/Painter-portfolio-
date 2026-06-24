export interface Artwork {
  id: string;
  title: string;
  category: 'landscape' | 'seascape' | 'cityscape' | 'still-life' | 'abstract';
  collectionCategory: string; // e.g. "Human Experience", "Spiritual Symbolism", etc.
  year: string;
  medium: string;
  size: string; // e.g., "120 x 90 cm"
  dimensions?: string; // duplicate for strict model conformance
  description: string;
  story: string; // legacy support
  storyBehindPainting: string; // rich curatorial narrative
  artistReflection: string; // intimate artist thoughts
  symbolAnalysis: string; // analysis of recurring motifs
  relatedWorks: string[]; // related artwork titles or IDs
  inspirationNotes: string; // initial sparks, music, draft conditions
  colorPaletteInfo: string; // pigment breakdown
  exhibitionHistory: string[]; // exhibition timeline
  image: string;
  price: string;
  available: boolean;
  featured: boolean;
  colors: string[]; // Swatches prominently featured
  roomSimulatorCompatible?: boolean; // explicit compatibility flag
}

export interface Exhibition {
  id: string;
  title: string;
  gallery: string;
  city: string;
  year: string;
  date: string;
  status: 'past' | 'current' | 'upcoming';
  description: string;
}

export interface PaletteColor {
  id: string;
  name: string;
  hex: string;
  symbolicMeaning: string;
  quote: string;
  associatedArtworks: string[]; // IDs of paintings heavily featuring this color
}

export interface Award {
  year: string;
  title: string;
  event: string;
}
