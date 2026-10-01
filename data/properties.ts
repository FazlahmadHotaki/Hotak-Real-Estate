// data/properties.ts

export type Language = "fa" | "ps" | "en";

export type Property = {
  id: string;

  title: Record<Language, string>;
  type: Record<Language, string>;
  purpose: Record<Language, string>;
  price: Record<Language, string>;
  location: Record<Language, string>;
  area: Record<Language, string>;
  description: Record<Language, string>;

  bedrooms?: number;
  bathrooms?: number;

  image: string;
  featured?: boolean;
};

export const properties: Property[] = [
  {
    id: "house-001",

    title: {
      fa: "خانه مدرن خانوادگی",
      ps: "عصري کورنۍ کور",
      en: "Modern Family House",
    },

    type: {
      fa: "خانه",
      ps: "کور",
      en: "House",
    },

    purpose: {
      fa: "فروش",
      ps: "خرڅلاو",
      en: "For Sale",
    },

    price: {
      fa: "۲,۵۰۰,۰۰۰ افغانی",
      ps: "۲,۵۰۰,۰۰۰ افغانۍ",
      en: "2,500,000 AFN",
    },

    location: {
      fa: "هرات، شهرک",
      ps: "هرات، شهرک",
      en: "Shahrak, Herat",
    },

    bedrooms: 4,

    bathrooms: 3,

    area: {
      fa: "۳۵۰ متر مربع",
      ps: "۳۵۰ مربع متر",
      en: "350 m²",
    },

    image: "/properties/house-1.jpg",

    featured: true,

    description: {
      fa: "خانه‌ای مناسب خانواده با اتاق‌های بزرگ، حویلی مناسب و موقعیت خوب در شهرک.",
      ps: "د کورنۍ لپاره مناسب کور، چې لویې خونې، مناسبه حویلي او په شهرک کې ښه موقعیت لري.",
      en: "A family-friendly house with spacious rooms, a suitable yard, and a great location in Shahrak.",
    },
  },

  {
    id: "house-002",

    title: {
      fa: "خانه دو منزله",
      ps: "دوه پوړیز کور",
      en: "Two-Story House",
    },

    type: {
      fa: "خانه",
      ps: "کور",
      en: "House",
    },

    purpose: {
      fa: "فروش",
      ps: "خرڅلاو",
      en: "For Sale",
    },

    price: {
      fa: "۳,۸۰۰,۰۰۰ افغانی",
      ps: "۳,۸۰۰,۰۰۰ افغانۍ",
      en: "3,800,000 AFN",
    },

    location: {
      fa: "هرات، جبرئیل",
      ps: "هرات، جبرئیل",
      en: "Jebrail, Herat",
    },

    bedrooms: 5,

    bathrooms: 3,

    area: {
      fa: "۴۵۰ متر مربع",
      ps: "۴۵۰ مربع متر",
      en: "450 m²",
    },

    image: "/properties/house-2.jpg",

    featured: true,

    description: {
      fa: "خانه دو منزله با فضای مناسب برای یک خانواده بزرگ و دسترسی آسان به امکانات شهری.",
      ps: "دوه پوړیز کور چې د یوې لویې کورنۍ لپاره مناسب ځای او ښاري اسانتیاوو ته اسانه لاسرسی لري.",
      en: "A two-story house with enough space for a large family and easy access to city facilities.",
    },
  },

  {
    id: "apartment-001",

    title: {
      fa: "آپارتمان نوساز",
      ps: "نوی اپارتمان",
      en: "New Apartment",
    },

    type: {
      fa: "آپارتمان",
      ps: "اپارتمان",
      en: "Apartment",
    },

    purpose: {
      fa: "فروش",
      ps: "خرڅلاو",
      en: "For Sale",
    },

    price: {
      fa: "۱,۸۰۰,۰۰۰ افغانی",
      ps: "۱,۸۰۰,۰۰۰ افغانۍ",
      en: "1,800,000 AFN",
    },

    location: {
      fa: "هرات، مرکز شهر",
      ps: "هرات، د ښار مرکز",
      en: "Central Herat",
    },

    bedrooms: 3,

    bathrooms: 2,

    area: {
      fa: "۱۸۰ متر مربع",
      ps: "۱۸۰ مربع متر",
      en: "180 m²",
    },

    image: "/properties/apartment-1.jpg",

    featured: true,

    description: {
      fa: "آپارتمان نوساز با طراحی مدرن و موقعیت مناسب در مرکز شهر.",
      ps: "نوی اپارتمان چې عصري ډیزاین او د ښار په مرکز کې مناسب موقعیت لري.",
      en: "A newly built apartment with a modern design and a convenient location in the city center.",
    },
  },

  {
    id: "land-001",

    title: {
      fa: "زمین مناسب ساخت و ساز",
      ps: "د ودانۍ جوړولو لپاره مناسبه ځمکه",
      en: "Land Suitable for Construction",
    },

    type: {
      fa: "زمین",
      ps: "ځمکه",
      en: "Land",
    },

    purpose: {
      fa: "فروش",
      ps: "خرڅلاو",
      en: "For Sale",
    },

    price: {
      fa: "۹۰۰,۰۰۰ افغانی",
      ps: "۹۰۰,۰۰۰ افغانۍ",
      en: "900,000 AFN",
    },

    location: {
      fa: "هرات، اطراف شهر",
      ps: "هرات، د ښار شاوخوا",
      en: "Outskirts of Herat",
    },

    area: {
      fa: "۵۰۰ متر مربع",
      ps: "۵۰۰ مربع متر",
      en: "500 m²",
    },

    image: "/properties/land-1.jpg",

    description: {
      fa: "زمین مناسب برای ساخت خانه یا سرمایه‌گذاری با موقعیت مناسب.",
      ps: "د کور جوړولو یا پانګونې لپاره مناسبه ځمکه چې ښه موقعیت لري.",
      en: "Suitable land for building a home or investment in a convenient location.",
    },
  },
];