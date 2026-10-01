export type Property = {
  id: string;
  title: string;
  type: "خانه" | "آپارتمان" | "زمین" | "دوکان";
  purpose: "فروش" | "کرایه";
  price: string;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  area: string;
  image: string;
  description: string;
  featured?: boolean;
};

export const properties: Property[] = [
  {
    id: "house-001",
    title: "خانه مدرن خانوادگی",
    type: "خانه",
    purpose: "فروش",
    price: "۲,۵۰۰,۰۰۰ افغانی",
    location: "هرات، شهرک",
    bedrooms: 4,
    bathrooms: 3,
    area: "۳۵۰ متر مربع",
    image: "/properties/house-1.jpg",
    featured: true,
    description:
      "خانه‌ای مناسب خانواده با اتاق‌های بزرگ، حویلی مناسب و موقعیت خوب در شهرک.",
  },
  {
    id: "house-002",
    title: "خانه دو منزله",
    type: "خانه",
    purpose: "فروش",
    price: "۳,۸۰۰,۰۰۰ افغانی",
    location: "هرات، جبرئیل",
    bedrooms: 5,
    bathrooms: 3,
    area: "۴۵۰ متر مربع",
    image: "/properties/house-2.jpg",
    featured: true,
    description:
      "خانه دو منزله با فضای مناسب برای یک خانواده بزرگ و دسترسی آسان به امکانات شهری.",
  },
  {
    id: "apartment-001",
    title: "آپارتمان نوساز",
    type: "آپارتمان",
    purpose: "فروش",
    price: "۱,۸۰۰,۰۰۰ افغانی",
    location: "هرات، مرکز شهر",
    bedrooms: 3,
    bathrooms: 2,
    area: "۱۸۰ متر مربع",
    image: "/properties/apartment-1.jpg",
    featured: true,
    description:
      "آپارتمان نوساز با طراحی مدرن و موقعیت مناسب در مرکز شهر.",
  },
  {
    id: "land-001",
    title: "زمین مناسب ساخت و ساز",
    type: "زمین",
    purpose: "فروش",
    price: "۹۰۰,۰۰۰ افغانی",
    location: "هرات، اطراف شهر",
    area: "۵۰۰ متر مربع",
    image: "/properties/land-1.jpg",
    description:
      "زمین مناسب برای ساخت خانه یا سرمایه‌گذاری با موقعیت مناسب.",
  },
];