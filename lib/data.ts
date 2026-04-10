export interface Service {
  id: string
  title: string
  description: string
  image: string
  features: string[]
  packages: Package[]
}

export interface Package {
  name: string
  price: string
  features: string[]
  popular?: boolean
}

export interface PortfolioItem {
  id: string
  title: string
  category: 'photo' | 'video'
  thumbnail: string
  fullSize: string
}

export const services: Service[] = [
  {
    id: 'wedding-booking',
    title: 'Wedding Booking',
    description: 'Capture your special day with our professional wedding photography and videography services. From intimate ceremonies to grand celebrations.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    features: ['Full Day Coverage', 'Professional Editing', 'HD Video', 'Drone Shots', 'Same Day Edit'],
    packages: [
      {
        name: 'Basic',
        price: '10,000',
        features: ['4 Hours Coverage', '100 Edited Photos', 'Online Gallery', '1 Photographer']
      },
      {
        name: 'Standard',
        price: '20,000',
        features: ['8 Hours Coverage', '300 Edited Photos', 'Online Gallery', '2 Photographers', 'Pre-Wedding Shoot', 'HD Video'],
        popular: true
      },
      {
        name: 'Premium',
        price: '75,000',
        features: ['Full Day Coverage', '500+ Edited Photos', 'Online Gallery', '3 Photographers', 'Pre-Wedding Shoot', '4K Video', 'Drone Coverage', 'Same Day Edit', 'Premium Album']
      }
    ]
  },
  {
    id: 'photo-shooting',
    title: 'Photo Shooting',
    description: 'Professional photography for portraits, family sessions, corporate headshots, and more. We bring your vision to life.',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80',
    features: ['Portrait Sessions', 'Family Photography', 'Corporate Headshots', 'Product Photography', 'Fashion Shoots'],
    packages: [
      {
        name: 'Basic',
        price: '5,000',
        features: ['1 Hour Session', '20 Edited Photos', 'Online Gallery', '1 Location']
      },
      {
        name: 'Standard',
        price: '10,000',
        features: ['2 Hour Session', '50 Edited Photos', 'Online Gallery', '2 Locations', 'Outfit Changes'],
        popular: true
      },
      {
        name: 'Premium',
        price: '18,000',
        features: ['4 Hour Session', '100 Edited Photos', 'Online Gallery', 'Multiple Locations', 'Unlimited Outfits', 'Professional Retouching', 'Printed Photos']
      }
    ]
  },
  {
    id: 'party-event-booking',
    title: 'Party/Event Booking',
    description: 'From birthday parties to corporate events, we capture every moment of your celebration with style and creativity.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
    features: ['Birthday Parties', 'Corporate Events', 'Anniversary Celebrations', 'Baby Showers', 'Graduation Parties'],
    packages: [
      {
        name: 'Basic',
        price: '8,000',
        features: ['3 Hours Coverage', '75 Edited Photos', 'Online Gallery', '1 Photographer']
      },
      {
        name: 'Standard',
        price: '15,000',
        features: ['5 Hours Coverage', '150 Edited Photos', 'Online Gallery', '2 Photographers', 'Video Highlights'],
        popular: true
      },
      {
        name: 'Premium',
        price: '25,000',
        features: ['Full Event Coverage', '300+ Edited Photos', 'Online Gallery', '2 Photographers', 'Full Video', 'Drone Coverage', 'Same Day Edit']
      }
    ]
  },
  {
    id: 'bulero-booking',
    title: 'Bulero Booking',
    description: 'Premium car service for weddings, events, and special occasions. Travel in style with our decorated vehicles.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    features: ['Decorated Vehicles', 'Professional Drivers', 'Wedding Transport', 'Event Pickup', 'Airport Transfers'],
    packages: [
      {
        name: 'Basic',
        price: '3,000',
        features: ['4 Hours Service', 'Decorated Vehicle', 'Professional Driver', 'Local Travel']
      },
      {
        name: 'Standard',
        price: '5,500',
        features: ['8 Hours Service', 'Premium Decoration', 'Professional Driver', 'Extended Travel', 'Refreshments'],
        popular: true
      },
      {
        name: 'Premium',
        price: '10,000',
        features: ['Full Day Service', 'Luxury Decoration', 'Professional Driver', 'Unlimited Travel', 'Premium Refreshments', 'Multiple Vehicles', 'Red Carpet Setup']
      }
    ]
  },
  {
    id: 'album-services',
    title: 'Album Services',
    description: 'Beautiful photo albums crafted with premium materials. Preserve your memories in stunning printed form.',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
    features: ['Premium Paper', 'Custom Designs', 'Leather Binding', 'Multiple Sizes', 'Fast Delivery'],
    packages: [
      {
        name: 'Basic',
        price: '4,000',
        features: ['20 Pages', '8x10 Size', 'Standard Cover', '30 Photos', 'Basic Layout']
      },
      {
        name: 'Standard',
        price: '8,000',
        features: ['40 Pages', '12x12 Size', 'Leather Cover', '60 Photos', 'Custom Layout', 'Photo Box'],
        popular: true
      },
      {
        name: 'Premium',
        price: '15,000',
        features: ['60 Pages', '14x14 Size', 'Premium Leather', '100+ Photos', 'Designer Layout', 'Velvet Box', 'Extra Copies', 'Digital Album']
      }
    ]
  },
  {
    id: 'banner-card-designing',
    title: 'Banner/Card Designing',
    description: 'Creative design services for wedding cards, banners, invitations, and promotional materials.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    features: ['Wedding Cards', 'Event Banners', 'Invitations', 'Flex Printing', 'Business Cards'],
    packages: [
      {
        name: 'Basic',
        price: '1,500',
        features: ['1 Design', '2 Revisions', 'Print Ready Files', 'Standard Templates']
      },
      {
        name: 'Standard',
        price: '3,500',
        features: ['3 Designs', '5 Revisions', 'Print Ready Files', 'Custom Design', 'Social Media Versions'],
        popular: true
      },
      {
        name: 'Premium',
        price: '7,000',
        features: ['Unlimited Designs', 'Unlimited Revisions', 'Print Ready Files', 'Fully Custom', 'All Formats', 'Printing Included', 'Rush Delivery']
      }
    ]
  }
]

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Romantic Wedding Ceremony',
    category: 'photo',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80',
    fullSize: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80'
  },
  {
    id: '2',
    title: 'Elegant Portrait Session',
    category: 'photo',
    thumbnail: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
    fullSize: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80'
  },
  {
    id: '3',
    title: 'Birthday Celebration',
    category: 'photo',
    thumbnail: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80',
    fullSize: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80'
  },
  {
    id: '4',
    title: 'Family Portrait',
    category: 'photo',
    thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&q=80',
    fullSize: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80'
  },
  {
    id: '5',
    title: 'Corporate Event',
    category: 'photo',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
    fullSize: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80'
  },
  {
    id: '6',
    title: 'Bridal Photoshoot',
    category: 'photo',
    thumbnail: 'https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=400&q=80',
    fullSize: 'https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=1200&q=80'
  },
  {
    id: '7',
    title: 'Wedding Highlights',
    category: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&q=80',
    fullSize: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80'
  },
  {
    id: '8',
    title: 'Event Recap',
    category: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80',
    fullSize: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80'
  },
  {
    id: '9',
    title: 'Couple Story',
    category: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=400&q=80',
    fullSize: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=1200&q=80'
  },
  {
    id: '10',
    title: 'Reception Moments',
    category: 'photo',
    thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80',
    fullSize: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80'
  },
  {
    id: '11',
    title: 'Candid Moments',
    category: 'photo',
    thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&q=80',
    fullSize: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80'
  },
  {
    id: '12',
    title: 'Drone Coverage',
    category: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
    fullSize: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80'
  }
]

export interface Inquiry {
  id: string
  name: string
  phone: string
  service: string
  message: string
  createdAt: string
  contacted: boolean
}
