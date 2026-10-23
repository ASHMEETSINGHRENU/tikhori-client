export const INITIAL_PRODUCTS = [
  {
    id: 'prod-1',
    slug: 'lal-mirch-masala',
    name: 'Lal Mirch Masala',
    hindiName: 'लाल मिर्च मसाला',
    subtitle: 'Vibrant Colour & Signature Pungency',
    category: 'Everyday Spices',
    price: 145,
    rating: 4.9,
    reviewsCount: 128,
    image: '/assets/products/product-1.png',
    badge: 'Flagship Best Seller',
    heatLevel: 'Fiery (3/3)',
    shortDescription: 'Add vibrant colour and a distinctive chilli flavour to your everyday dishes with Lal Mirch Powder, a kitchen essential for curries, gravies, marinades, and traditional Indian recipes.',
    about: 'Tikhori Lal Mirch Powder is sourced directly from heritage chilli-growing regions of India. Every chilli is carefully destemmed by hand, sun-cured naturally, and ground at controlled low temperatures to retain its essential capsaicin, deep scarlet hue, and unmistakable aroma without artificial coloring.',
    ingredients: ['Stemless Premium Red Chillies', 'Naturally Sun-Dried', 'Zero Added Color or Preservatives'],
    howToUse: 'Add 1/2 to 1 teaspoon during tempering (tadka) with cumin, or whisk directly into marinades and simmering gravies for a deep, authentic colour and balanced fiery kick.',
    storage: 'Store in an airtight ceramic or glass jar in a cool, dry pantry away from direct heat and sunlight.',
    weights: [
      { weight: '100g', price: 65, inStock: true },
      { weight: '250g', price: 145, inStock: true },
      { weight: '500g', price: 275, inStock: true },
      { weight: '1kg', price: 520, inStock: true }
    ],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'prod-2',
    slug: 'haldi-powder',
    name: 'Haldi Powder',
    hindiName: 'हल्दी पाउडर',
    subtitle: 'High Curcumin Golden Salem Turmeric',
    category: 'Everyday Spices',
    price: 120,
    rating: 5.0,
    reviewsCount: 96,
    image: '/assets/products/product-2.png',
    badge: 'High Curcumin 5%+',
    heatLevel: 'Gentle & Healing',
    shortDescription: 'Bring warmth, golden colour, and earthy flavour to your cooking with Haldi Powder. A versatile ingredient for dals, curries, vegetables, and countless traditional dishes.',
    about: 'Our Haldi Powder is crafted from selected high-grade turmeric rhizomes known for their potent natural curcumin concentration. Slow-milled to an ultra-fine velvet texture, it imparts a golden radiance and rich earthy sweetness to your kitchen preparations.',
    ingredients: [' Pure Salem Turmeric Rhizomes', 'Natural Essential Curcuminoids', 'Zero Fillers'],
    howToUse: 'Add 1/4 to 1/2 teaspoon into sauteed vegetables, warm golden milk (haldi doodh), comforting lentils, or morning wellness brews.',
    storage: 'Keep container tightly sealed in a dark, dry cupboard to preserve sensitive curcumin compounds from light degradation.',
    weights: [
      { weight: '100g', price: 55, inStock: true },
      { weight: '250g', price: 120, inStock: true },
      { weight: '500g', price: 230, inStock: true },
      { weight: '1kg', price: 440, inStock: true }
    ],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'prod-3',
    slug: 'dhaniya-powder',
    name: 'Dhaniya Powder',
    hindiName: 'धनिया पाउडर',
    subtitle: 'Cold-Milled Coriander with Citrus Aromas',
    category: 'Everyday Spices',
    price: 110,
    rating: 4.8,
    reviewsCount: 84,
    image: '/assets/products/product-3.png',
    badge: 'Aromatic Reserve',
    heatLevel: 'Mellow (1/3)',
    shortDescription: 'Enjoy the distinctive aroma and mellow, citrusy notes of Dhaniya Powder. A versatile spice that adds depth and balance to curries, gravies, and homemade masalas.',
    about: 'Sourced from the finest green coriander seed harvests, Tikhori Dhaniya is gently roasted before cold-grinding. This technique seals in the volatile linalool oils, releasing an invigorating lemon-pine freshness the moment it touches hot oil or simmering gravies.',
    ingredients: ['Handpicked Sun-Cured Coriander Seeds', 'Single-Origin Roasting'],
    howToUse: 'Combine with turmeric and red chilli in equal measures to create the foundational triad of authentic North and South Indian curries.',
    storage: 'Store sealed in a cool, moisture-free cabinet away from the steam of the cooking stove.',
    weights: [
      { weight: '100g', price: 50, inStock: true },
      { weight: '250g', price: 110, inStock: true },
      { weight: '500g', price: 210, inStock: true },
      { weight: '1kg', price: 400, inStock: true }
    ],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'prod-4',
    slug: 'jeera-powder',
    name: 'Jeera Powder',
    hindiName: 'जीरा पाउडर',
    subtitle: 'Slow-Roasted Earthy Cumin Essence',
    category: 'Signature Blends',
    price: 195,
    rating: 4.9,
    reviewsCount: 112,
    image: '/assets/products/product-4.png',
    badge: 'Slow Roasted',
    heatLevel: 'Earthy Warmth',
    shortDescription: 'Bring a warm, earthy aroma to your kitchen with Jeera Powder. Ideal for dals, chaats, raitas, curries, and recipes that call for a distinctive cumin flavour.',
    about: 'Toasted in small artisanal batches on cast-iron plates until deep smoky perfection, then coarsely ground to preserve maximum fragrance. An indispensable condiment that elevates everyday yogurt, chaat, and dal into a memorable dining experience.',
    ingredients: [' Whole Cumin Seeds (Cuminum cyminum)', 'Artisanal Pan-Roasted'],
    howToUse: 'Sprinkle as a finishing touch over fresh dahi, cucumber raita, street-style papdi chaat, roasted root vegetables, or whisk into butter-tempered tadka.',
    storage: 'Keep strictly sealed in an airtight tin to lock in its signature smoky essential oils.',
    weights: [
      { weight: '100g', price: 85, inStock: true },
      { weight: '250g', price: 195, inStock: true },
      { weight: '500g', price: 380, inStock: true },
      { weight: '1kg', price: 740, inStock: true }
    ],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'prod-5',
    slug: 'kaala-masala',
    name: 'Heritage Kaala Masala',
    hindiName: 'काला मसाला',
    subtitle: 'Maharashtrian 21-Spice Royal Blend',
    category: 'Regional Flavours',
    price: 190,
    rating: 5.0,
    reviewsCount: 73,
    image: '/assets/products/product-4.png',
    badge: 'Artisanal Heritage',
    heatLevel: 'Complex & Deep',
    shortDescription: 'A revered Maharashtrian culinary secret made with 21 slow-charred spices, dagad phool, and roasted coconut for unforgettable rustic curries.',
    about: 'Crafted following an age-old family recipe, whole spices including black cardamom, star anise, stone flower, and dry coconut are individually roasted over slow wood fires before grinding. Creates unmatched depth, velvety texture, and an iconic dark mahogany gravy.',
    ingredients: ['Coriander', 'Dry Coconut', 'Black Cardamom', 'Cumin', 'Sesame Seeds', 'Stone Flower (Dagad Phool)', 'Cinnamon', 'Cloves', 'Nutmeg'],
    howToUse: 'Use in traditional Usal, Misal, mutton rassa, egg curry, or stuffed brinjal (bharli vangi).',
    storage: 'Keep refrigerated or in a cool airtight jar to retain toasted coconut freshness.',
    weights: [
      { weight: '100g', price: 85, inStock: true },
      { weight: '250g', price: 190, inStock: true },
      { weight: '500g', price: 360, inStock: true }
    ],
    inStock: true,
    isFeatured: false
  },
  {
    id: 'prod-6',
    slug: 'royal-kitchen-combo-pack',
    name: 'Royal Heritage Spice Quartet',
    hindiName: 'शाही मसाला संग्रह',
    subtitle: 'All 4 Flagship Essentials in Luxury Gift Box',
    category: 'Combo Packs',
    price: 520,
    rating: 5.0,
    reviewsCount: 164,
    image: '/assets/banners/Gemini_Generated_Image_ssi9gpssi9gpssi9.png',
    badge: 'Best Value Bundle',
    heatLevel: 'Complete Culinary Range',
    shortDescription: 'The ultimate kitchen companion featuring 250g each of Lal Mirch, Haldi, Dhaniya, and Slow-Roasted Jeera in a bespoke collectible pantry box.',
    about: 'Everything you need to master Indian cuisine. Each spice is packaged in sealed multi-layer aroma-barrier pouches inside a luxury gold-foiled craft box. Ideal for passionate home chefs and festive gifting.',
    ingredients: ['Lal Mirch 250g', 'Haldi Powder 250g', 'Dhaniya Powder 250g', 'Roasted Jeera Powder 250g'],
    howToUse: 'Use daily to bring restaurant-quality aroma and authentic balance to all vegetarian and non-vegetarian dishes.',
    storage: 'Keep in original resealable pouches or pour into Tikhori glass jars.',
    weights: [
      { weight: '4 x 250g Box', price: 520, inStock: true }
    ],
    inStock: true,
    isFeatured: true
  }
];

export const HERO_BANNERS = [
  {
    id: 1,
    image: '/assets/banners/Gemini_Generated_Image_ssi9gpssi9gpssi9.png',
    eyebrow: '100% PURE & UNCOMPROMISED',
    headline: 'Bring Home the Taste of Tradition',
    subtitle: 'Discover the rich flavours and aromas of Indian spices, thoughtfully crafted to bring every meal to life.',
    tag: 'Handpicked Harvest'
  },
  {
    id: 2,
    image: '/assets/banners/Gemini_Generated_Image_f7xarsf7xarsf7xa.png',
    eyebrow: 'ROOTED IN HERITAGE',
    headline: 'Spice Crafted Right for Every Kitchen',
    subtitle: 'Pure natural ingredients, stemless whole chillies, and traditional slow grinding techniques.',
    tag: 'Zero Additives'
  },
  {
    id: 3,
    image: '/assets/banners/Gemini_Generated_Image_cog7tmcog7tmcog7.png',
    eyebrow: 'ARTISANAL EXCELLENCE',
    headline: 'A World of Flavour in Every Spoon',
    subtitle: 'From everyday comforting dals to festive celebrations, spices that elevate your culinary memories.',
    tag: 'Sun-Cured Purity'
  },
  {
    id: 4,
    image: '/assets/banners/Gemini_Generated_Image_jjeurnjjeurnjjeu.png',
    eyebrow: 'GRASSROOTS WOMEN ENTERPRISES',
    headline: 'Every Spice Has a Story. Every Woman a Journey.',
    subtitle: 'Honouring the resilience, leadership, and knowledge of the women who nurture our food traditions.',
    tag: 'Community First'
  },
  {
    id: 5,
    image: '/assets/banners/Gemini_Generated_Image_6vejnf6vejnf6vej.png',
    eyebrow: 'UNRIVALED FRESHNESS',
    headline: 'Pure Flavours, Delivered to Your Doorstep',
    subtitle: 'Slow ground at controlled temperatures to preserve delicate essential oils and vibrant natural colors.',
    tag: 'Farm to Pantry'
  }
];

export const INITIAL_STOCKISTS = [
  {
    id: 'st-1',
    name: 'Saraswati Gourmet Grocers',
    address: 'Shop 14, Heritage Square, Greater Kailash 1',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110048',
    phone: '+91 98112 34567',
    timings: '9:00 AM - 9:30 PM',
    status: 'Active'
  },
  {
    id: 'st-2',
    name: 'Patanjali & Natural Organics Hub',
    address: '42, Bandra West Main Market, Turner Road',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050',
    phone: '+91 98200 98765',
    timings: '10:00 AM - 10:00 PM',
    status: 'Active'
  },
  {
    id: 'st-3',
    name: 'Annapurna Spice Emporium',
    address: '108, 100 Feet Road, Indiranagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560038',
    phone: '+91 98450 11223',
    timings: '9:30 AM - 9:00 PM',
    status: 'Active'
  },
  {
    id: 'st-4',
    name: 'Maharashtra Masala Bhandar',
    address: '56, FC Road, Deccan Gymkhana',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411004',
    phone: '+91 98501 44556',
    timings: '9:00 AM - 9:30 PM',
    status: 'Active'
  },
  {
    id: 'st-5',
    name: 'Shree Krishna Provison Store',
    address: 'Shop 7, Navrangpura Commerce Complex',
    city: 'Ahmedabad',
    state: 'Gujarat',
    pincode: '380009',
    phone: '+91 98250 33445',
    timings: '8:30 AM - 9:00 PM',
    status: 'Active'
  },
  {
    id: 'st-6',
    name: 'Jaipur Heritage Spice Court',
    address: '22, Johari Bazaar, Pink City',
    city: 'Jaipur',
    state: 'Rajasthan',
    pincode: '302003',
    phone: '+91 94140 77889',
    timings: '10:00 AM - 8:30 PM',
    status: 'Active'
  }
];

export const SPICE_CLUB_PERKS = [
  {
    title: 'Chef-Curated Recipes',
    desc: 'Exclusive monthly seasonal recipe cards with regional spice pairings.',
    icon: 'BookOpen'
  },
  {
    title: 'Early Harvest Access',
    desc: 'Reserve limited first-press winter harvests and single-origin releases before public launch.',
    icon: 'Sparkles'
  },
  {
    title: 'Secret Member Discounts',
    desc: 'Enjoy flat 15% off recurring orders plus complimentary sample jars with every parcel.',
    icon: 'Gift'
  },
  {
    title: 'Cooking Masterclasses',
    desc: 'Live virtual workshops with heritage chefs on the science of Indian tadka.',
    icon: 'Video'
  }
];

export const INITIAL_ORDERS = [
  {
    id: 'TK-84920',
    customer: {
      name: 'Priyanka Sharma',
      email: 'priyanka.s@gmail.com',
      phone: '+91 98210 55432',
      address: 'Flat 402, Oakwood Heights, Powai',
      city: 'Mumbai',
      pincode: '400076'
    },
    items: [
      { id: 'prod-1', name: 'Lal Mirch Masala', weight: '250g', price: 145, quantity: 2 },
      { id: 'prod-2', name: 'Haldi Powder', weight: '250g', price: 120, quantity: 1 }
    ],
    subtotal: 410,
    shipping: 0,
    total: 410,
    status: 'Delivered',
    paymentMethod: 'UPI',
    date: '2026-10-20'
  },
  {
    id: 'TK-84921',
    customer: {
      name: 'Rohan Mehra',
      email: 'rohan.mehra@outlook.com',
      phone: '+91 99881 22334',
      address: 'Villa 12, Palm Meadows, Whitefield',
      city: 'Bengaluru',
      pincode: '560066'
    },
    items: [
      { id: 'prod-6', name: 'Royal Heritage Spice Quartet', weight: '4 x 250g Box', price: 520, quantity: 1 }
    ],
    subtotal: 520,
    shipping: 0,
    total: 520,
    status: 'Processing',
    paymentMethod: 'Credit Card',
    date: '2026-10-21'
  },
  {
    id: 'TK-84922',
    customer: {
      name: 'Ananya Deshmukh',
      email: 'ananya.d@gmail.com',
      phone: '+91 97654 33221',
      address: 'Rowhouse 9, Model Colony, Shivajinagar',
      city: 'Pune',
      pincode: '411016'
    },
    items: [
      { id: 'prod-4', name: 'Jeera Powder', weight: '250g', price: 195, quantity: 1 },
      { id: 'prod-3', name: 'Dhaniya Powder', weight: '250g', price: 110, quantity: 1 }
    ],
    subtotal: 305,
    shipping: 50,
    total: 355,
    status: 'Pending',
    paymentMethod: 'Cash on Delivery',
    date: '2026-10-22'
  }
];
