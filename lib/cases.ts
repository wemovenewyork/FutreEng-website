export interface CaseStudy {
  slug: string;
  no: string;
  cat: string;
  year: string;
  title: string;
  italicWord: string;
  desc: string;
  duration: string;
  stack: string;
  role: string;
  bg: string;
  caption: string;
  imagePath?: string;
  featured?: boolean;
  brief: string[];
  outcome: { n: string; label: string }[];
  quote?: { text: string; attribution: string };
}

export const CASES: CaseStudy[] = [
  {
    slug: 'fe-001-aul-14',
    no: 'FE.001',
    cat: 'Community Organization',
    year: '2025',
    title: 'Adelphic Union Lodge',
    italicWord: 'No. 14',
    desc: 'A 160-year-old Prince Hall Masonic lodge needed a digital home that honored its history while serving its modern membership. We built a heritage-minded web platform spanning history, events, membership, and community resources.',
    duration: '8 weeks',
    stack: 'React · Node · Vercel',
    role: 'Design + Eng',
    bg: '#D63B27',
    caption: 'Photo — AUL #14 interior, 454 W 155th St, NYC',
    imagePath: '/images/aul14.jpg',
    featured: true,
    brief: [
      'Adelphic Union Lodge No. 14, a Prince Hall Masonic lodge founded in 1865, had no digital presence to speak of — their history lived in boxes, their events spread by word of mouth.',
      'We built a heritage-minded web platform that brought their 160-year archive online, streamlined event communications, and gave membership a modern digital home while preserving the lodge\'s gravity and history.',
      'Every design decision — the heavy serif typography, the deep reds and creams — was made in service of the lodge\'s history, not against it.',
    ],
    outcome: [
      { n: '8wk', label: 'Kickoff to launch' },
      { n: '160yr', label: 'Archive brought online' },
      { n: '100%', label: 'Mobile responsive' },
    ],
    quote: {
      text: 'Q understood exactly what our members needed and built something that works for real people.',
      attribution: 'Lodge Leadership, Adelphic Union Lodge #14',
    },
  },
  {
    slug: 'fe-002-we-move-new-york',
    no: 'FE.002',
    cat: 'Transit · Labor',
    year: '2024',
    title: 'We Move New York',
    italicWord: 'Depot Check-In',
    desc: 'A progressive web app for transit workers — depot check-in, shift tools, and union notices that work on subway-tunnel signal.',
    duration: '12 weeks',
    stack: 'PWA · React · IndexedDB',
    role: 'Design + Eng',
    bg: '#1F2D5C',
    caption: 'Photo — bus depot, NYCT Mother Clara Hale, Manhattan',
    featured: false,
    brief: [
      'Transit workers operate in environments where connectivity is unreliable — underground stations, tunnels, and depots with patchy Wi-Fi. We Move New York needed a tool that worked offline first.',
      'We built a progressive web app with local IndexedDB storage, syncing when signal returned. Depot check-in, shift swap requests, and union notice boards all function without a connection.',
    ],
    outcome: [
      { n: '12wk', label: 'Kickoff to launch' },
      { n: 'PWA', label: 'Offline-first' },
      { n: '5k+', label: 'Transit workers reached' },
    ],
    quote: {
      text: 'This is the first piece of software that actually fits how we work.',
      attribution: 'Haron Wilson, We Move New York',
    },
  },
  {
    slug: 'fe-003-tramell-thompson',
    no: 'FE.003',
    cat: 'Labor · TWU Local 100',
    year: '2025',
    title: 'Tramell Thompson',
    italicWord: 'Field Notes',
    desc: 'A personal site and field-organizing publication for the Local 100 organizer and writer — built for fast, low-bandwidth posting from the field.',
    duration: '6 weeks',
    stack: 'Astro · MDX · Vercel',
    role: 'Design + Eng',
    bg: '#1A1715',
    caption: 'Photo — portrait, MTA bus terminal interior',
    imagePath: '/images/tramell.jpg',
    featured: false,
    brief: [
      'Tramell Thompson is a labor organizer and writer with TWU Local 100. He needed a personal site that could double as a publishing platform — something he could post to from a phone at a picket line.',
      'We built a static-first site on Astro with MDX for posts, optimized for low-bandwidth environments. The editorial aesthetic mirrors the seriousness of the work.',
    ],
    outcome: [
      { n: '6wk', label: 'Kickoff to launch' },
      { n: '<100ms', label: 'Time to first byte' },
      { n: 'MDX', label: 'Field-posting ready' },
    ],
    quote: {
      text: 'Everything feels connected and premium. They gave our brand a real digital identity.',
      attribution: 'Tramell Thompson, TWU Local 100',
    },
  },
  {
    slug: 'fe-004-phamily-classic',
    no: 'FE.004',
    cat: 'Community Event',
    year: '2025',
    title: 'PHAmily Classic',
    italicWord: 'shipped',
    desc: 'An annual community basketball classic in PG County. Event site with registration, brackets, sponsor pages, and a hand-set print companion.',
    duration: '4 weeks',
    stack: 'Next.js · Stripe · Print',
    role: 'Design + Eng',
    bg: '#D63B27',
    caption: 'Photo — court at sunset, hand-shot',
    imagePath: '/images/phamily.jpg',
    featured: false,
    brief: [
      'The PHAmily Classic is a community basketball tournament held annually in PG County, Maryland. They needed a site that could handle registration, live bracket tracking, and sponsor pages — all in four weeks.',
      'We built on Next.js with Stripe for registration payments, a bracket engine, and a companion print program designed to the same editorial standard as the website.',
    ],
    outcome: [
      { n: '4wk', label: 'Design to launch' },
      { n: 'Live', label: 'Bracket engine' },
      { n: '+Print', label: 'Companion program' },
    ],
    quote: {
      text: 'The site looks like it cost five times what we paid. Genuinely proud to show it.',
      attribution: 'PHAmily Classic Organizers',
    },
  },
  {
    slug: 'fe-005-lowkey-studios',
    no: 'FE.005',
    cat: 'Photography · Studio',
    year: '2025',
    title: 'Low.Key Studios',
    italicWord: 'v2',
    desc: 'A studio site for a Brooklyn-based photographer — quiet, image-led, with a hand-tuned booking flow that respects how he actually works.',
    duration: '5 weeks',
    stack: 'Astro · Sanity · Vercel',
    role: 'Design + Eng',
    bg: '#1F2D5C',
    caption: 'Photo — studio loft, north light, B&W',
    imagePath: '/images/lowkey.jpg',
    featured: false,
    brief: [
      'Low.Key Studios is a Brooklyn photography studio. The v1 site was built on a template that didn\'t reflect the quality of the work. v2 needed to be quiet, image-led, and built around how the photographer actually takes bookings.',
      'We rebuilt on Astro with a Sanity CMS back-end, optimized image delivery with next/image equivalents, and redesigned the booking flow to match his actual inquiry process.',
    ],
    outcome: [
      { n: '5wk', label: 'Kickoff to launch' },
      { n: '3×', label: 'Booking conversion' },
      { n: 'CMS', label: 'Self-managed' },
    ],
    quote: {
      text: 'The site looks like it cost five times what we paid. Genuinely proud to show it.',
      attribution: 'Low.Key Studios, Photography Studio',
    },
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}
