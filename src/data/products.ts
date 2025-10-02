export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'pens' | 'paper' | 'notebooks' | 'office-supplies';
  featured?: boolean;
  discount?: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Gel Pen Set',
    description: 'Smooth writing gel pens in 12 vibrant colors. Perfect for note-taking and creative work.',
    price: 24.99,
    image: '/placeholder.svg',
    category: 'pens',
    featured: true,
  },
  {
    id: '2',
    name: 'A4 Premium Paper (500 Sheets)',
    description: 'High-quality white A4 paper, 80gsm. Ideal for printing and copying.',
    price: 12.99,
    image: '/placeholder.svg',
    category: 'paper',
  },
  {
    id: '3',
    name: 'Leather Notebook',
    description: 'Elegant leather-bound notebook with 200 pages of premium paper.',
    price: 39.99,
    image: '/placeholder.svg',
    category: 'notebooks',
    featured: true,
    discount: 15,
  },
  {
    id: '4',
    name: 'Ballpoint Pen Pack',
    description: 'Classic blue and black ballpoint pens. Pack of 20.',
    price: 9.99,
    image: '/placeholder.svg',
    category: 'pens',
  },
  {
    id: '5',
    name: 'Spiral Notebook Set',
    description: 'Set of 5 spiral notebooks with lined pages. Perfect for students.',
    price: 19.99,
    image: '/placeholder.svg',
    category: 'notebooks',
  },
  {
    id: '6',
    name: 'Desk Organizer',
    description: 'Multi-compartment desk organizer to keep your workspace tidy.',
    price: 29.99,
    image: '/placeholder.svg',
    category: 'office-supplies',
  },
  {
    id: '7',
    name: 'Colored Marker Set',
    description: '24 bright colored markers with dual tips for versatile use.',
    price: 16.99,
    image: '/placeholder.svg',
    category: 'pens',
    featured: true,
  },
  {
    id: '8',
    name: 'Sticky Notes Pack',
    description: 'Colorful sticky notes in various sizes. Pack of 12.',
    price: 8.99,
    image: '/placeholder.svg',
    category: 'office-supplies',
  },
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'pens', name: 'Pens & Markers' },
  { id: 'paper', name: 'Paper' },
  { id: 'notebooks', name: 'Notebooks' },
  { id: 'office-supplies', name: 'Office Supplies' },
];
