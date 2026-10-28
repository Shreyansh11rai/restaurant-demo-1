export const content = {
  brand: {
    name: "Taste Spoon",
    tagline: "The taste of varanasi.",
    logo: "/images/brand-mark.svg",
    cuisine: "Contemporary Indian",
    established: "Est. 2018",
  },
  contact: {
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    whatsappGreeting: "Hello, I'd like to book a table.",
    email: "hello@saffronandstone.example",
    address: "Phoolpur, Pindra, Varanasi, Uttar Pradesh Pin:221206",
    city: "Varanasi, Uttar Pradesh",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Indiranagar%2C+Bengaluru&output=embed",
    mapLink: "https://maps.google.com/?q=Indiranagar%2C+Bengaluru",
    hours: [
      { days: "Monday - Friday", time: "12:00 PM - 10:30 PM" },
      { days: "Saturday - Sunday", time: "12:00 PM - 11:00 PM" },
    ],
  },
  social: {
    facebook: "https://instagram.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://instagram.com/",
    x: "https://instagram.com/",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Our story", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  ui: {
    book: "Book a table",
    bookWhatsApp: "WhatsApp",
    viewMenu: "Explore the menu",
    readStory: "Read our story",
    viewGallery: "View the gallery",
    call: "Call us",
    directions: "Get directions",
    hours: "Opening hours",
    address: "Find us",
    email: "Email",
    reserve: "Make a reservation",
    reservationIntro: "Tell us a little about your visit.",
    name: "Your name",
    date: "Date",
    time: "Time",
    guests: "Guests",
    note: "Anything we should know?",
    sendReservation: "Send reservation request",
    close: "Close",
    previous: "Previous image",
    next: "Next image",
    menuDownloads: "Take the menu with you",
    viewMenuPage: "View menu page",
    allRights: "All rights reserved.",
    followUs: "Follow along",
    navigation: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    seeMenu: "See the full menu",
    exploreDishes: "A few house favourites",
    aboutHeading: "Rooted in warmth, made for sharing",
    galleryHeading: "A taste of the table",
    testimonialsHeading: "A word from the table",
    testimonialsIntro:
      "These sample testimonials are placeholders. Replace them with approved guest feedback before publishing.",
    contactHeading: "Come on in",
    menuHeading: "Made to be passed around",
    backToTop: "Back to top",
    selectCategory: "Choose a menu category",
    mapTitle: "Map showing our restaurant location",
    galleryImage: "Gallery photograph",
    veg: "Vegetarian",
    nonVeg: "Non-vegetarian",
    notePrices: "Prices include applicable taxes.",
    addNote: "Add a note",
    chooseTime: "Choose a time",
    messageFallback: "I'd like to make a reservation.",
    closeDialog: "Close image viewer",
    images: "Images",
    pdf: "PDF",
  },
  hero: {
    eyebrow: "The neighbourhood table",
    headline: "A little spice.\nA lot of soul.",
    subtext:
      "Seasonal ingredients, familiar flavours and a warm seat waiting for you.",
    image: "/images/restaurant-interior.webp",
    slides: [
      "/images/restaurant-interior.webp",
      "/images/dish-table.webp",
      "/images/dish-plated.webp",
    ],
    primaryCta: { label: "Explore the menu", href: "/menu" },
    secondaryCta: { label: "Book on WhatsApp", action: "whatsapp" },
  },
  signature: [
    {
      name: "Charred paneer tikka",
      description: "Smoky paneer, green chutney and a squeeze of lime.",
      price: "₹420",
      image: "/images/dish-curry.webp",
      veg: true,
    },
    {
      name: "Slow-cooked dal",
      description: "Black lentils simmered overnight with warming spices.",
      price: "₹390",
      image: "/images/dish-bowl.webp",
      veg: true,
    },
    {
      name: "Tandoori cauliflower",
      description: "Market cauliflower, toasted sesame and mint yoghurt.",
      price: "₹340",
      image: "/images/dish-plated.webp",
      veg: true,
    },
  ],
  about: {
    title: "Rooted in warmth, made for sharing",
    story: [
      "Saffron & Stone began with a simple idea: the best meals are the ones that bring everyone a little closer. Our kitchen finds inspiration in India's many food traditions and the produce that changes with every season.",
      "We cook slowly, source thoughtfully and always leave room at the table. Come for a familiar favourite, stay for something new.",
    ],
    image: "/images/restaurant-interior.webp",
    quote: "Good food tastes even better when there is enough to share.",
    highlights: [
      {
        title: "Season-led",
        text: "Fresh produce guides what comes out of our kitchen.",
      },
      {
        title: "Made by hand",
        text: "House-ground spices and patient cooking, every day.",
      },
      {
        title: "Room for all",
        text: "A welcoming table for long lunches and easy evenings.",
      },
    ],
    stats: [
      { value: "2018", label: "Our first table" },
      { value: "12+", label: "Local growers" },
      { value: "100%", label: "Made with care" },
    ],
  },
  menu: {
    note: "Prices include applicable taxes.",
    categories: [
      {
        name: "To begin",
        items: [
          {
            name: "Charred paneer tikka",
            description: "Green chutney, lime",
            price: "₹420",
            veg: true,
            tags: ["House favourite"],
          },
          {
            name: "Tandoori cauliflower",
            description: "Mint yoghurt, toasted sesame",
            price: "₹340",
            veg: true,
            tags: [],
          },
          {
            name: "Crisp okra",
            description: "Amchur, curry leaf",
            price: "₹310",
            veg: true,
            tags: [],
          },
        ],
      },
      {
        name: "From the kitchen",
        items: [
          {
            name: "Slow-cooked dal",
            description: "Black lentils, cultured butter",
            price: "₹390",
            veg: true,
            tags: ["Slow cooked"],
          },
          {
            name: "Paneer makhani",
            description: "Tomato, fenugreek, cream",
            price: "₹460",
            veg: true,
            tags: [],
          },
          {
            name: "Seasonal vegetable curry",
            description: "Today's market vegetables",
            price: "₹380",
            veg: true,
            tags: [],
          },
        ],
      },
      {
        name: "Something sweet",
        items: [
          {
            name: "Cardamom kulfi",
            description: "Pistachio, rose",
            price: "₹220",
            veg: true,
            tags: [],
          },
          {
            name: "Warm jaggery cake",
            description: "Vanilla cream, sesame brittle",
            price: "₹260",
            veg: true,
            tags: [],
          },
        ],
      },
    ],
    files: [
      {
        label: "Download the menu",
        file: "/menu/menu.pdf",
        type: "pdf" as const,
      },
      {
        label: "Menu page one",
        file: "/menu/menu-1.svg",
        type: "image" as const,
      },
      {
        label: "Menu page two",
        file: "/menu/menu-2.svg",
        type: "image" as const,
      },
    ],
  },
  gallery: [
    {
      src: "/images/dish-curry.webp",
      alt: "A warmly spiced curry served with fresh herbs",
      category: "food",
    },
    {
      src: "/images/restaurant-interior.webp",
      alt: "A welcoming restaurant dining room",
      category: "space",
    },
    {
      src: "/images/dish-bowl.webp",
      alt: "A colorful bowl of fresh seasonal ingredients",
      category: "food",
    },
    {
      src: "/images/dish-plated.webp",
      alt: "A carefully plated restaurant dish",
      category: "food",
    },
    {
      src: "/images/dish-table.webp",
      alt: "A table set with a variety of freshly prepared dishes",
      category: "food",
    },
  ],
  testimonials: [
    {
      quote: "Sample testimonial",
      name: "Sample guest",
      detail: "Add visit detail",
    },
    {
      quote: "Sample testimonial",
      name: "Sample guest",
      detail: "Add visit detail",
    },
    {
      quote: "Sample testimonial",
      name: "Sample guest",
      detail: "Add visit detail",
    },
  ],
  seo: {
    siteUrl: "https://saffronandstone.example",
    pages: {
      home: {
        title: "Saffron & Stone | A table for every story",
        description:
          "Seasonal Indian cooking, familiar flavours and a warm neighbourhood welcome in Bengaluru.",
      },
      menu: {
        title: "Menu | Saffron & Stone",
        description:
          "Explore our seasonal menu of Indian favourites, made for sharing.",
      },
      gallery: {
        title: "Gallery | Saffron & Stone",
        description:
          "A little look inside the Saffron & Stone table and kitchen.",
      },
      about: {
        title: "Our story | Saffron & Stone",
        description:
          "Meet the people, produce and idea behind Saffron & Stone.",
      },
      testimonials: {
        title: "Guest stories | Saffron & Stone",
        description:
          "Read what guests have to say about their time at Saffron & Stone.",
      },
      contact: {
        title: "Visit us | Saffron & Stone",
        description:
          "Find Saffron & Stone in Bengaluru or send a table reservation request.",
      },
    },
    ogImage: "/images/restaurant-interior.webp",
  },
  footer: {
    copyright: "Saffron & Stone",
    extraLinks: [],
  },
};
