export interface Artwork {
  id: string;
  title: string;
  category: 'landscape' | 'seascape' | 'cityscape' | 'still-life' | 'abstract';
  year: string;
  medium: string;
  size: string; // e.g., "120 x 90 cm"
  description: string;
  story: string; // A deeper conceptual story for the modal detail view
  image: string;
  price: string;
  available: boolean;
  featured: boolean;
  colors: string[]; // Swatches prominently featured in this painting (for integration with the Palette Explorer!)
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
