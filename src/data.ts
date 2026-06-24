import { Artwork, Exhibition, PaletteColor, Award } from './types';

export const ARTWORKS: Artwork[] = [
  {
    id: 'autumn-forest',
    title: 'Whispers of the Gilded Birch',
    category: 'landscape',
    year: '2026',
    medium: 'Oil on Canvas (Heavy Impasto)',
    size: '120 x 90 cm',
    description: 'An ethereal study of golden autumn sunlight filtering through a birch grove, rendered with thick palette knife strokes that capture the tactile depth of peeling bark and fluttering leaves.',
    story: 'This piece was painted over a period of three weeks in late autumn. I was fascinated by the rhythm of the white birch trunks against the fiery canopy. Using heavy impasto with a palette knife allowed me to sculpt the tree bark on the canvas itself, bridging the gap between flat visual representation and three-dimensional natural textures. The sunlight filtering through is a physical element here, carved with Titanium White and Cadmium Orange.',
    image: '/src/assets/images/autumn_forest_1782318199839.jpg',
    price: '€4,800',
    available: true,
    featured: true,
    colors: ['cadmium-orange', 'raw-sienna', 'viridian-green', 'titanium-white']
  },
  {
    id: 'sea-cliff',
    title: 'The Ingress of Ocean Swell',
    category: 'seascape',
    year: '2026',
    medium: 'Oil and Beeswax on Canvas',
    size: '140 x 100 cm',
    description: 'A dramatic depiction of coastal cliffs during a tempestuous sunset, exploring the collision of turquoise waves against ancient rocks with rich texture and expressive motion.',
    story: 'Captured on the rugged western cliffs of Ireland. The sea was an intense mixture of deep Prussian blue and luminous turquoise. By mixing natural beeswax with my oils, I achieved a translucent quality in the crashing surf that mimics the churning froth of the ocean. It represents the eternal duel between the fluid, temporal movement of water and the stoic, permanent resilience of stone.',
    image: '/src/assets/images/sea_cliff_1782318218612.jpg',
    price: '€6,200',
    available: true,
    featured: true,
    colors: ['prussian-blue', 'titanium-white', 'raw-sienna']
  },
  {
    id: 'city-rain',
    title: 'Neon Echoes on Wet Asphalt',
    category: 'cityscape',
    year: '2025',
    medium: 'Oil on Linen Panel',
    size: '90 x 120 cm',
    description: 'A moody, semi-abstract representation of a rain-slicked metropolis at midnight, where neon storefronts bleed vibrant yellow and red light reflections onto the dark, damp road.',
    story: 'Walking through Berlin during a warm summer rain shower inspired this atmospheric piece. The city at night dissolves into abstract shapes, light reflections, and shadows. The wet asphalt acts as a giant mirror, reflecting the chaotic, electric energy of human civilization. I wanted the brush strokes to feel fluid, almost dripping, capturing the sensation of rain blurring one’s vision.',
    image: '/src/assets/images/city_rain_1782318233879.jpg',
    price: '€5,400',
    available: false,
    featured: true,
    colors: ['prussian-blue', 'cadmium-orange', 'titanium-white']
  },
  {
    id: 'still-life-pear',
    title: 'Solitude of the Green Pear',
    category: 'still-life',
    year: '2026',
    medium: 'Oil on Gessoed Board',
    size: '40 x 40 cm',
    description: 'A quiet, minimalist still life employing high-contrast chiaroscuro lighting to reveal the elegant, organic geometry and subtle gradients of a single green pear.',
    story: 'Influenced by the Spanish masters of still life (Bodegón), this painting is a celebration of simplicity. In an age of sensory overload, focusing on a single, humble subject becomes a form of meditation. The pear sits in a dramatic beam of side light, its form sculpted out of the surrounding darkness. The background is a series of layered dark glazes, giving it an infinite, velvet-like depth.',
    image: '/src/assets/images/still_life_pear_1782318248414.jpg',
    price: '€1,900',
    available: true,
    featured: false,
    colors: ['raw-sienna', 'titanium-white', 'cadmium-orange']
  }
];

export const PALETTE_COLORS: PaletteColor[] = [
  {
    id: 'prussian-blue',
    name: 'Prussian Blue',
    hex: '#102E4A',
    symbolicMeaning: 'Depth, melancholy, and oceanic shadows. Elena uses this color as the foundation for night skies, deep water, and the dark architectural forms of cities.',
    quote: 'Prussian Blue is the color of memories. It holds the shadow of every wave and the weight of night on its shoulders.',
    associatedArtworks: ['sea-cliff', 'city-rain']
  },
  {
    id: 'cadmium-orange',
    name: 'Cadmium Orange',
    hex: '#E06D3B',
    symbolicMeaning: 'Vitality, warm light piercing through darkness, and electric energy. It acts as the emotional spark in both natural landscapes and urban reflections.',
    quote: 'A spark of Cadmium Orange is a whisper of fire in a silent canvas. It creates a sudden, electric vibration of life.',
    associatedArtworks: ['autumn-forest', 'city-rain', 'still-life-pear']
  },
  {
    id: 'raw-sienna',
    name: 'Raw Sienna',
    hex: '#D1A153',
    symbolicMeaning: 'The connection to earth, ancient soil, and the warm, grounded glow of stone and light. It provides organic warmth and anchors high-contrast lighting.',
    quote: 'Raw Sienna ties the sky to the soil. It is the color of ancient dust illuminated by a low, golden-hour sun.',
    associatedArtworks: ['autumn-forest', 'still-life-pear']
  },
  {
    id: 'viridian-green',
    name: 'Viridian Green',
    hex: '#1E5E4E',
    symbolicMeaning: 'The breathing vitality of botanical life. It captures the moist, fresh dampness of moss, forest foliage, and deep mountain shadows.',
    quote: 'Viridian contains the breathing lung of the forest. It carries the rich, damp aroma of organic soil after rain.',
    associatedArtworks: ['autumn-forest']
  },
  {
    id: 'titanium-white',
    name: 'Titanium White',
    hex: '#F7F4EB',
    symbolicMeaning: 'Luminosity, pure light, and open air. It is used in impasto ridges to physically catch gallery spotlights, creating real shadows on the painted surface.',
    quote: 'White is not the absence of color; it is the collision of all colors reflecting back at us. It is where the canvas breathes.',
    associatedArtworks: ['autumn-forest', 'sea-cliff', 'city-rain', 'still-life-pear']
  }
];

export const EXHIBITIONS: Exhibition[] = [
  {
    id: 'exh-1',
    title: 'The Texture of Light',
    gallery: 'Galleria d’Arte Moderna',
    city: 'Milan, Italy',
    year: '2026',
    date: 'Oct 12 – Nov 30, 2026',
    status: 'upcoming',
    description: 'A solo retrospective showcasing Elena’s newest landscape and ocean studies, focusing on the sensory relationship between paint texture, light refraction, and physical environment.'
  },
  {
    id: 'exh-2',
    title: 'Atmospheric Mirrors',
    gallery: 'Galerie de l’Est',
    city: 'Paris, France',
    year: '2026',
    date: 'Mar 05 – Apr 20, 2026',
    status: 'current',
    description: 'An exhibition exploring urban nightscapes, wet asphalt reflections, and the emotional resonance of rain. Featuring her highly acclaimed Berlin and Paris series.'
  },
  {
    id: 'exh-3',
    title: 'Chiaroscuro & Solitude',
    gallery: 'The Somerset Fine Art Gallery',
    city: 'London, UK',
    year: '2025',
    date: 'Sep 10 – Oct 15, 2025',
    status: 'past',
    description: 'A curated showcase of minimalist still life paintings and intimate interior portraits, drawing comparisons to Dutch golden age light masters.'
  },
  {
    id: 'exh-4',
    title: 'Crashing and Stillness',
    gallery: 'Chelsea Art Collective',
    city: 'New York, USA',
    year: '2024',
    date: 'May 02 – Jun 15, 2024',
    status: 'past',
    description: 'Elenas inaugural US solo show, focusing on the dramatic juxtaposition of restless coastal seascapes and calm, monumental cliffs.'
  }
];

export const AWARDS: Award[] = [
  {
    year: '2025',
    title: 'Lorenzo il Magnifico Gold Medal (Painting)',
    event: 'Florence Biennale, Italy'
  },
  {
    year: '2024',
    title: 'Artist of the Future Award',
    event: 'Contemporary Art Review, London'
  },
  {
    year: '2023',
    title: 'First Prize in Landscape Studies',
    event: 'National Oil Painters Guild'
  }
];

export const ARTIST_BIOGRAPHY = {
  name: 'Elena Rostova',
  title: 'Contemporary Painter',
  birthplace: 'Prague, Czech Republic',
  studio: '/src/assets/images/artist_studio_1782318266342.jpg',
  statement: `My paintings explore the borderland between reality and abstract emotional memory. I do not paint places or objects as they exist in sterile space; instead, I paint the tactile residue they leave on our senses. 

Through thick impasto palette knife marks, translucent oil glazes, and physical layers of paint and beeswax, I seek to turn light into something you can touch. Each painting is an archaeological excavation of a single sensory moment—the cold spray of seawater against a cliff, the sudden warmth of a neon reflection on a wet Berlin street, or the quiet, meditative solitude of a piece of fruit sitting in a shaft of morning light.`,
  methods: [
    {
      title: 'Heavy Impasto Layering',
      description: 'Using steel palette knives to sculpt heavy layers of oil paint, creating raw textures that rise off the canvas and cast physical shadows under room lighting.'
    },
    {
      title: 'Beeswax Glazing',
      description: 'Blending pure pharmaceutical beeswax with fine oil pigments to achieve a deep, satiny, translucent quality that captures and holds light inside the canvas layers.'
    },
    {
      title: 'Plein Air Exploration',
      description: 'Creating rapid watercolor and charcoal studies directly on-site in nature or on city streets to capture immediate light and atmospheric moods, before rendering them on large-scale canvases in the studio.'
    }
  ]
};
