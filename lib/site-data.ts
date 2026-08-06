import {
  VitrifiedTiles,
  DoubleCharge,
  GvtPgvt,
  MarbleSlabs,
  Granito,
  WallTiles,
  Outdoor,
} from '@/lib/images';

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Catalogue', href: '#catalogue' },
  { label: 'Dealers', href: '#dealers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export type ProductCategory = {
  name: string;
  description: string;
  image: string;
  tag: string;
};

export const productCategories: ProductCategory[] = [
  {
    name: 'Vitrified Tiles',
    description:
      'High-strength, low-porosity tiles engineered for heavy-traffic floors with a flawless finish.',
    image: VitrifiedTiles,
    tag: 'Floor',
  },
  {
    name: 'Double Charge',
    description:
      'Two-layer vitrified tiles with a durable surface pattern that runs the full body of the tile.',
    image: DoubleCharge,
    tag: 'Heavy Duty',
  },
  {
    name: 'GVT / PGVT',
    description:
      'Glazed vitrified tiles with digital prints and a polished or matte finish for refined interiors.',
    image: GvtPgvt,
    tag: 'Premium',
  },
  {
    name: 'Marble Slabs',
    description:
      'Large-format marble-look slabs that bring the grandeur of natural stone to any space.',
    image: MarbleSlabs,
    tag: 'Slab',
  },
  {
    name: 'Granito Tiles',
    description:
      'Cement-based granito tiles with rich, through-body colour and timeless character.',
    image: Granito,
    tag: 'Heritage',
  },
  {
    name: 'Wall Tiles',
    description:
      'Decorative wall tiles in a range of finishes to elevate kitchens, baths, and feature walls.',
    image: WallTiles,
    tag: 'Wall',
  },
  {
    name: 'Outdoor Tiles',
    description:
      'Weather-resistant, anti-skid tiles built to perform across patios, driveways, and facades.',
    image: Outdoor,
    tag: 'Exterior',
  },
];

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 500, suffix: '+', label: 'Designs' },
  { value: 50, suffix: '+', label: 'Countries' },
  { value: 25, suffix: '+', label: 'Years of Craft' },
  { value: 8, suffix: '', label: 'Manufacturing Units' },
];

export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: 'shield',
    title: 'Quality Assurance',
    description:
      'Every batch is tested for flatness, water absorption, and modulus of rupture before it leaves the plant.',
  },
  {
    icon: 'microscope',
    title: 'Advanced Technology',
    description:
      'Italian presses, digital glazing lines, and automated kilns deliver consistency at industrial scale.',
  },
  {
    icon: 'leaf',
    title: 'Eco-Friendly',
    description:
      'Closed-loop water recycling, recycled raw materials, and low-emission kilns keep our footprint small.',
  },
  {
    icon: 'network',
    title: 'PAN India Dealer Network',
    description:
      'Over 1,200 dealers and 40 flagship showrooms bring VitrixStone to every corner of the country.',
  },
  {
    icon: 'award',
    title: 'Export Quality',
    description:
      'Certified to ISO 9001, CE, and IGBC standards, trusted by partners across 50+ countries.',
  },
  {
    icon: 'factory',
    title: 'Vertically Integrated',
    description:
      'From raw body preparation to digital printing and polishing, the entire process is under one roof.',
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  span?: boolean;
};

export const galleryItems: GalleryItem[] = [
  { src: VitrifiedTiles, alt: 'Polished vitrified floor in a sunlit lobby', category: 'Vitrified', span: true },
  { src: MarbleSlabs, alt: 'Veined marble slab feature wall', category: 'Marble' },
  { src: GvtPgvt, alt: 'GVT wall cladding with geometric print', category: 'GVT' },
  { src: Granito, alt: 'Inlaid granito tile pattern', category: 'Granito' },
  { src: DoubleCharge, alt: 'Double charge floor in a retail space', category: 'Vitrified' },
  { src: WallTiles, alt: 'Decorative bathroom wall tiles', category: 'Wall', span: true },
  { src: Outdoor, alt: 'Outdoor anti-skid tiles on a patio', category: 'Outdoor' },
  { src: MarbleSlabs, alt: 'Book-matched marble slab', category: 'Marble' },
];

export const galleryFilters = ['All', 'Vitrified', 'Marble', 'GVT', 'Granito', 'Wall', 'Outdoor'];

export type ProcessStep = { step: string; title: string; description: string };

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Body Preparation',
    description:
      'Carefully selected clays, feldspar, and quartz are ball-milled and spray-dried into uniform granules.',
  },
  {
    step: '02',
    title: 'Pressing',
    description:
      'Hydraulic presses compact the powder at over 5,000 tonnes into flat, dense green tiles.',
  },
  {
    step: '03',
    title: 'Digital Glazing',
    description:
      'High-resolution inkjet printers apply designs onto the surface, layering glazes for depth and detail.',
  },
  {
    step: '04',
    title: 'Firing',
    description:
      'Tiles travel through a 120-metre kiln at up to 1220°C, vitrifying the body into a dense, durable surface.',
  },
  {
    step: '05',
    title: 'Polishing & QC',
    description:
      'Polishing lines bring out the shine, followed by automated and manual quality checks on every tile.',
  },
];

export type Certification = { name: string; icon: string };

export const certifications: Certification[] = [
  { name: 'ISO 9001:2015', icon: 'shield' },
  { name: 'CE Certified', icon: 'award' },
  { name: 'IGBC Green Pro', icon: 'leaf' },
  { name: 'BIS Approved', icon: 'badge-check' },
];

export type DealerRegion = { region: string; states: string[]; dealers: number };

export const dealerRegions: DealerRegion[] = [
  { region: 'North', states: ['Delhi NCR', 'Punjab', 'Haryana', 'UP', 'Rajasthan'], dealers: 280 },
  { region: 'West', states: ['Maharashtra', 'Gujarat', 'Goa'], dealers: 310 },
  { region: 'South', states: ['Karnataka', 'Tamil Nadu', 'Telangana', 'Kerala'], dealers: 340 },
  { region: 'East', states: ['West Bengal', 'Odisha', 'Bihar', 'Jharkhand'], dealers: 170 },
  { region: 'Central', states: ['MP', 'Chhattisgarh'], dealers: 120 },
  { region: 'North-East', states: ['Assam', 'Meghalaya', 'Manipur'], dealers: 60 },
];

export type Testimonial = { quote: string; name: string; role: string; initials: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      'VitrixStone has been our sole tile partner for nine years. The consistency across batches is unmatched — we have never had a project rejected for shade variation.',
    name: 'Rajiv Menon',
    role: 'Principal Architect, Meridian Studio',
    initials: 'RM',
  },
  {
    quote:
      'Their granito line gave our heritage hotel the exact warmth we were after. The through-body colour means even after years of footfall, it still looks new.',
    name: 'Sara Okafor',
    role: 'Interior Designer, Atelier Nord',
    initials: 'SO',
  },
  {
    quote:
      'We import VitrixStone into three Gulf markets. Lead times are reliable, documentation is clean, and the export team understands container logistics.',
    name: 'Khalid Rahman',
    role: 'Procurement Head, Gulf Build Supply',
    initials: 'KR',
  },
  {
    quote:
      'From the dealer portal to on-site delivery, the whole network is professional. Our showroom turnaround on special orders dropped from weeks to days.',
    name: 'Anjali Deshpande',
    role: 'Owner, Deshpande Tiles & Sanitary',
    initials: 'AD',
  },
];

export const company = {
  name: 'StoneCraft Marble & Tiles',
  tagline: 'Crafting Surfaces, Building Trust',
  address: '125 Industrial Estate, Sector 18, Jaipur, Rajasthan - 302018',
  phone: '+91 9876543210',
  email: 'connect@vitrixstone.example',
  hours: 'Mon–Sat, 9:00 AM – 6:30 PM IST',
};
