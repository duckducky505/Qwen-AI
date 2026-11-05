/* ============================================================
   AUREUS VOYAGES — Site content data
   ============================================================ */

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#tours', label: 'Tours' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export const HERO_SLIDES = [
  'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1900&q=80',
  'https://images.unsplash.com/photo-1476514525588-fa4bea4b7e0b?auto=format&fit=crop&w=1900&q=80',
  'https://images.unsplash.com/photo-1503220317375-aa704169b024?auto=format&fit=crop&w=1900&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1900&q=80',
];

export const HERO_STATS = [
  { count: 120, suffix: '+', label: 'Countries' },
  { count: 45, suffix: 'k', label: 'Happy Travelers' },
  { count: 18, suffix: 'yrs', label: 'Of Excellence' },
  { count: 98, suffix: '%', label: 'Satisfaction' },
];

export const SEARCH_DESTINATIONS = [
  'Santorini, Greece',
  'Kyoto, Japan',
  'Bali, Indonesia',
  'Swiss Alps',
  'Maldives',
  'Marrakech, Morocco',
  'Patagonia, Chile',
  'Amalfi Coast, Italy',
];

export const DESTINATIONS = [
  {
    name: 'Santorini', country: 'Greece', tours: 24, from: '$2,190', large: true,
    img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Kyoto', country: 'Japan', tours: 18, from: '$3,450',
    img: 'https://images.unsplash.com/photo-1493976045277-18572c6351ce?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bali', country: 'Indonesia', tours: 21, from: '$1,690',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Swiss Alps', country: 'Switzerland', tours: 15, from: '$2,980',
    img: 'https://images.unsplash.com/photo-1531572756c87-7a1d1de79304?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Maldives', country: 'Indian Ocean', tours: 12, from: '$4,200',
    img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Marrakech', country: 'Morocco', tours: 16, from: '$1,850',
    img: 'https://images.unsplash.com/photo-1597212618440-10df7b351cf3?auto=format&fit=crop&w=900&q=80',
  },
];

export const TOUR_TABS = [
  { filter: 'all', label: 'All' },
  { filter: 'beach', label: 'Beach & Islands' },
  { filter: 'adventure', label: 'Adventure' },
  { filter: 'culture', label: 'Culture' },
  { filter: 'safari', label: 'Safari & Wildlife' },
];

export const TOURS = [
  {
    cat: ['beach'], badge: 'Best Seller', badgeGold: false, price: '$4,200',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    rating: '★ 4.9', days: '7 Days', style: 'Private Villa', alt: 'Maldives Escape',
    title: 'Maldives Overwater Escape',
    desc: 'Sunset dolphin cruises, private reef dives, and butler service in an exclusive atoll resort.',
    guests: '👥 2 Guests',
  },
  {
    cat: ['culture'], badge: 'New', badgeGold: true, price: '$3,450',
    img: 'https://images.unsplash.com/photo-1526481285630-6e9d676bb6e8?auto=format&fit=crop&w=1000&q=80',
    rating: '★ 5.0', days: '10 Days', style: 'Guided', alt: 'Japan Heritage',
    title: 'Japan Heritage & Cherry Blossoms',
    desc: 'Tokyo, Kyoto & Nara with tea masters, private temple visits, and ryokan stays.',
    guests: '👥 Up to 8',
  },
  {
    cat: ['adventure'], badge: null, price: '$2,980',
    img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1000&q=80',
    rating: '★ 4.8', days: '8 Days', style: 'Small Group', alt: 'Alpine Expedition',
    title: 'Swiss Alps Grand Expedition',
    desc: 'Glacier trains, summit cableways, and chalet dining across Zermatt and St. Moritz.',
    guests: '👥 Up to 12',
  },
  {
    cat: ['safari'], badge: 'Best Seller', badgeGold: false, price: '$5,600',
    img: 'https://images.unsplash.com/photo-1516426122075-c668501adb0d?auto=format&fit=crop&w=1000&q=80',
    rating: '★ 4.9', days: '9 Days', style: 'Luxury Lodge', alt: 'Serengeti Safari',
    title: 'Serengeti Luxury Safari',
    desc: 'Hot-air balloon safaris over the great migration and tented suites under African skies.',
    guests: '👥 2–6 Guests',
  },
  {
    cat: ['culture', 'beach'], badge: null, price: '$2,190',
    img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80',
    rating: '★ 4.9', days: '6 Days', style: 'Yacht', alt: 'Greek Isles',
    title: 'Greek Isles Yacht Voyage',
    desc: 'Sail Santorini, Mykonos & Milos aboard a private catamaran with onboard chef.',
    guests: '👥 Up to 10',
  },
  {
    cat: ['adventure'], badge: 'Exclusive', badgeGold: true, price: '$4,850',
    img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b69?auto=format&fit=crop&w=1000&q=80',
    rating: '★ 4.8', days: '12 Days', style: 'Trekking', alt: 'Patagonia Trek',
    title: 'Patagonia Wilderness Trek',
    desc: 'Torres del Paine circuit with gourmet base camps and expert mountaineer guides.',
    guests: '👥 Up to 8',
  },
];

export const SERVICES = [
  { icon: '✈️', title: 'Bespoke Itineraries', desc: 'No two journeys alike. Our designers build each trip around your pace, palate, and passions.' },
  { icon: '🏨', title: 'Hand-Picked Stays', desc: 'Palaces, riads, overwater villas — every property personally vetted by our travel curators.' },
  { icon: '🗝️', title: 'Private Access', desc: "After-hours museums, closed-door tastings, and experiences money alone can't buy." },
  { icon: '🛡️', title: '24/7 Concierge', desc: 'A dedicated journey specialist on call around the clock, wherever in the world you are.' },
  { icon: '🍽️', title: 'Culinary Journeys', desc: 'Michelin tables, market feasts, and cooking classes with legendary local chefs.' },
  { icon: '💎', title: 'Seamless Logistics', desc: 'Private transfers, fast-track visas, and lounge access — travel without friction.' },
];

export const ABOUT_POINTS = [
  'ATOL & ABTA bonded, fully licensed agency',
  'Award-winning "Luxury Tour Operator" 2021–2025',
  'Carbon-offset journeys with local community partners',
  'Best-price guarantee with flexible cancellation',
];

export const TESTIMONIALS = [
  {
    quote: "From the private hot-air balloon over the Serengeti to champagne sundowners on Lake Naivasha — not a single detail was left to chance. Simply the finest travel company we've ever used.",
    name: 'Eleanor & James Whitmore', trip: 'Serengeti Luxury Safari',
  },
  {
    quote: "They arranged after-hours access to the Forbidden City for our family. My kids still talk about it two years later. Aureus doesn't plan trips — they choreograph magic.",
    name: 'Mei-Ling Chen', trip: 'China Imperial Circuit',
  },
  {
    quote: 'Our honeymoon in the Maldives was flawless from first call to final transfer. The overwater villa surprise they staged at sunset? We cried. Ten out of ten, would remarry here.',
    name: 'Sofia & Daniel Reyes', trip: 'Maldives Overwater Escape',
  },
];

export const CONTACT_REGIONS = [
  'Europe', 'Asia', 'Africa & Safari', 'Americas', 'Oceania', 'Middle East', 'Surprise Me',
];

export const FOOTER_COLS = [
  {
    title: 'Explore',
    links: [
      { label: 'Destinations', href: '#destinations' },
      { label: 'Signature Tours', href: '#tours' },
      { label: 'Private Journeys', href: '#services' },
      { label: 'Honeymoons', href: '#' },
      { label: 'Family Travel', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Booking Terms', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Travel Advice', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Visa Assistance', href: '#' },
    ],
  },
];
