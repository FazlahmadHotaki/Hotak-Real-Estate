// data/translations.ts

export type Language = "fa" | "ps" | "en";

type Translation = {
  nav: {
    home: string;
    properties: string;
    about: string;
    contact: string;
  };

  propertyMap: {
    label: string;
    title: string;
    description: string;
    coordinates: string;
    latitude: string;
    longitude: string;
    mapTitle: string;
    propertyLocation: string;
    getDirections: string;
    latitudeLabel: string;
    longitudeLabel: string;
    mapType: string;
    satelliteImagery: string;
    coordinatePageLink: string;
  };

  location: {
    label: string;
    title: string;
    description: string;
    coordinates: string;
    latitude: string;
    longitude: string;
    mapTitle: string;
    propertyLocation: string;
    getDirections: string;
    latitudeLabel: string;
    longitudeLabel: string;
    mapType: string;
    satelliteImagery: string;
  };

  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    description: string;
    viewProperties: string;
    contact: string;
    location: string;
  };

  search: {
    title: string;
    description: string;
    purpose: string;
    selectPurpose: string;
    sale: string;
    rent: string;
    type: string;
    selectType: string;
    house: string;
    apartment: string;
    land: string;
    shop: string;
    location: string;
    search: string;
  };

  featured: {
    label: string;
    title: string;
    description: string;
    viewAll: string;
  };

  property: {
    bedrooms: string;
    bathrooms: string;
    area: string;
    sale: string;
    rent: string;
    details: string;
    description: string;
    call: string;
    back: string;
  };

  services: {
    label: string;
    title: string;

    buying: {
      title: string;
      description: string;
    };

    selling: {
      title: string;
      description: string;
    };

    renting: {
      title: string;
      description: string;
    };

    consulting: {
      title: string;
      description: string;
    };
  };

  about: {
    label: string;
    title: string;
    highlight: string;
    description: string;
    points: string[];
  };

  contact: {
    label: string;
    title: string;
    notFoundTitle: string;
    notFoundDescription: string;
    description: string;
    phone: string;
    whatsapp: string;
    whatsappText: string;
    telegram: string;
    telegramText: string;
    address: string;
    addressValue: string;
    readyTitle: string;
    readyDescription: string;
    viewProperties: string;
  };

  footer: {
    description: string;
    quickLinks: string;
    rights: string;
  };

  pages: {
    properties: {
      label: string;
      title: string;
      description: string;
    };

    about: {
      title: string;
      description: string;
    };

    contact: {
      title: string;
      description: string;
    };
  };
};

export const translations: Record<Language, Translation> = {
  // =====================================================
  // FARSI
  // =====================================================

  fa: {
    nav: {
      home: "خانه",
      properties: "املاک",
      about: "درباره ما",
      contact: "تماس با ما",
    },

    propertyMap: {
      label: "ملک",
      title: "موقعیت ملک",
      description:
        "موقعیت ملک را در تصاویر ماهواره‌ای مشاهده کنید.",
      coordinates: "کوردینات",
      latitude: "عرض جغرافیایی",
      longitude: "طول جغرافیایی",
      mapTitle: "نقشه ماهواره‌ای ملک",
      propertyLocation: "موقعیت ملک",
      getDirections: "دریافت مسیر",
      latitudeLabel: "عرض جغرافیایی",
      longitudeLabel: "طول جغرافیایی",
      mapType: "نوع نقشه",
      satelliteImagery: "تصاویر ماهواره‌ای",

      // NEW
      coordinatePageLink: "مشاهده نقشه کوردینات",
    },

    location: {
      label: "موقعیت ما",
      title: "موقعیت دفتر ما",
      description:
        "موقعیت ملکیت ما را از طریق تصاویر ماهواره‌ای مشاهده کرده و مناطق اطراف آن را بررسی کنید.",
      coordinates: "کوردینات ملکیت",
      latitude: "۳۴°۱۹'۲۴.۱\" شمالی",
      longitude: "۶۲°۱۰'۲۷.۹\" شرقی",
      mapTitle: "نقشه ماهواره‌ای موقعیت ملکیت",
      propertyLocation: "موقعیت ملکیت",
      getDirections: "دریافت مسیر",
      latitudeLabel: "عرض جغرافیایی",
      longitudeLabel: "طول جغرافیایی",
      mapType: "نوع نقشه",
      satelliteImagery: "تصاویر ماهواره‌ای",
    },

    hero: {
      badge: "اعتماد در معاملات املاک",
      title1: "خانه‌ای که",
      title2: "می‌خواهید،",
      title3: "از اینجا آغاز می‌شود.",
      description:
        "دفتر رهنمای معاملات ملا داد محمد هوتک؛ همراه شما در خرید، فروش، رهن و کرایه خانه، زمین و املاک.",
      viewProperties: "مشاهده املاک",
      contact: "تماس با ما",
      location: "هرات، افغانستان",
    },

    search: {
      title: "ملک مورد نظر خود را پیدا کنید",
      description:
        "نوع ملک و موقعیت مورد نظر خود را انتخاب کنید.",
      purpose: "نوع معامله",
      selectPurpose: "انتخاب نوع معامله",
      sale: "فروش",
      rent: "کرایه",
      type: "نوع ملک",
      selectType: "انتخاب نوع ملک",
      house: "خانه",
      apartment: "آپارتمان",
      land: "زمین",
      shop: "دوکان",
      location: "موقعیت، محله...",
      search: "جستجو",
    },

    featured: {
      label: "املاک منتخب",
      title: "ملک مناسب خود را پیدا کنید",
      description:
        "خانه‌ها، آپارتمان‌ها، زمین‌ها و املاک موجود برای فروش و کرایه.",
      viewAll: "مشاهده همه املاک",
    },

    property: {
      bedrooms: "اتاق خواب",
      bathrooms: "حمام",
      area: "متر مربع",
      sale: "فروش",
      rent: "کرایه",
      details: "جزئیات",
      description: "توضیحات ملک",
      call: "تماس برای این ملک",
      back: "بازگشت به املاک",
    },

    services: {
      label: "خدمات ما",
      title: "همراه شما در تمام مراحل",

      buying: {
        title: "خرید ملک",
        description:
          "پیدا کردن خانه و ملک مناسب بر اساس نیاز و بودجه شما.",
      },

      selling: {
        title: "فروش ملک",
        description:
          "کمک به شما برای فروش آسان و مطمئن خانه و زمین.",
      },

      renting: {
        title: "رهن و کرایه",
        description:
          "رهن و کرایه خانه، آپارتمان و املاک تجاری.",
      },

      consulting: {
        title: "مشاوره معاملات",
        description:
          "راهنمایی در مراحل مختلف خرید، فروش و معاملات املاک.",
      },
    },

    about: {
      label: "درباره ما",
      title: "معاملات املاک،",
      highlight: "با اعتماد بیشتر",
      description:
        "دفتر رهنمای معاملات ملا داد محمد هوتک در زمینه خرید، فروش، رهن و کرایه خانه، زمین و املاک فعالیت می‌کند. هدف ما ارائه خدمات ساده، شفاف و قابل اعتماد برای مشتریان است.",

      points: [
        "مشاوره در خرید و فروش املاک",
        "معرفی املاک مناسب با نیاز مشتری",
        "رهن و کرایه خانه و املاک",
        "راهنمایی در روند معاملات",
      ],
    },

    contact: {
      label: "تماس با ما",
      title: "با ما در تماس باشید",

      notFoundTitle:
        "ملک مورد نظر خود را پیدا نکردید؟",

      notFoundDescription:
        "با ما تماس بگیرید تا در پیدا کردن ملک مناسب کمک کنیم.",

      description:
        "برای خرید، فروش، رهن یا کرایه خانه و زمین با دفتر رهنمای معاملات ملا داد محمد هوتک تماس بگیرید.",

      phone: "تماس تلفنی",

      whatsapp: "واتساپ",

      whatsappText:
        "پیام در واتساپ",

      telegram: "تلگرام",

      telegramText:
        "پیام در تلگرام",

      address: "آدرس دفتر",

      addressValue:
        "هرات، افغانستان",

      readyTitle:
        "آماده کمک به شما هستیم",

      readyDescription:
        "اگر قصد خرید یا فروش خانه، زمین، آپارتمان یا ملک تجاری را دارید، با ما تماس بگیرید.",

      viewProperties:
        "مشاهده املاک",
    },

    footer: {
      description:
        "دفتر رهنمای معاملات ملا داد محمد هوتک",

      quickLinks:
        "لینک‌های سریع",

      rights:
        "تمام حقوق محفوظ است.",
    },

    pages: {
      properties: {
        label: "املاک",
        title: "همه املاک",
        description:
          "خانه، آپارتمان، زمین و املاک موجود برای فروش و کرایه.",
      },

      about: {
        title: "درباره دفتر ما",
        description:
          "ما در زمینه خرید، فروش، رهن و کرایه املاک فعالیت می‌کنیم و تلاش داریم خدمات قابل اعتماد و شفاف به مشتریان ارائه کنیم.",
      },

      contact: {
        title: "تماس با ما",
        description:
          "برای دریافت اطلاعات بیشتر درباره املاک و خدمات ما با دفتر تماس بگیرید.",
      },
    },
  },

  // =====================================================
  // PASHTO
  // =====================================================

  ps: {
    nav: {
      home: "کور",
      properties: "ملکیتونه",
      about: "زموږ په اړه",
      contact: "اړیکه",
    },

    propertyMap: {
      label: "ملکیت",
      title: "د ملکیت موقعیت",
      description:
        "د سپوږمکۍ په انځورونو کې د ملکیت موقعیت وګورئ.",
      coordinates: "کوردینات",
      latitude: "عرض البلد",
      longitude: "طول البلد",
      mapTitle: "د ملکیت سپوږمکۍ نقشه",
      propertyLocation: "د ملکیت موقعیت",
      getDirections: "لارښوونې ترلاسه کړئ",
      latitudeLabel: "عرض البلد",
      longitudeLabel: "طول البلد",
      mapType: "د نقشې ډول",
      satelliteImagery: "سپوږمکۍ انځورونه",

      // NEW
      coordinatePageLink: "د کوردینات نقشې لیدل",
    },

    location: {
      label: "زموږ موقعیت",
      title: "زموږ د دفتر موقعیت",
      description:
        "د سپوږمکۍ انځورونو له لارې زموږ د ملکیت موقعیت وګورئ او شاوخوا سیمه وڅېړئ.",
      coordinates: "د ملکیت کوردینات",
      latitude: "۳۴°۱۹'۲۴.۱\" شمالي",
      longitude: "۶۲°۱۰'۲۷.۹\" ختیځ",
      mapTitle: "د ملکیت د موقعیت سپوږمکۍ نقشه",
      propertyLocation: "د ملکیت موقعیت",
      getDirections: "لارښوونې ترلاسه کړئ",
      latitudeLabel: "عرض البلد",
      longitudeLabel: "طول البلد",
      mapType: "د نقشې ډول",
      satelliteImagery: "د سپوږمکۍ انځورونه",
    },

    hero: {
      badge: "د املاکو په معاملو کې باور",
      title1: "هغه کور چې",
      title2: "تاسو یې غواړئ،",
      title3: "له همدې ځایه پیلېږي.",
      description:
        "د ملا داد محمد هوتک د معاملاتو لارښود دفتر؛ د کور، ځمکې او نورو ملکیتونو په اخیستلو، خرڅولو او کرایه کې ستاسو ملګری.",
      viewProperties: "ملکیتونه وګورئ",
      contact: "اړیکه",
      location: "هرات، افغانستان",
    },

    search: {
      title: "خپل مناسب ملکیت پیدا کړئ",
      description:
        "د ملکیت ډول او موقعیت انتخاب کړئ.",
      purpose: "د معاملې ډول",
      selectPurpose:
        "د معاملې ډول انتخاب کړئ",
      sale: "خرڅلاو",
      rent: "کرایه",
      type: "د ملکیت ډول",
      selectType:
        "د ملکیت ډول انتخاب کړئ",
      house: "کور",
      apartment: "اپارتمان",
      land: "ځمکه",
      shop: "دوکان",
      location: "موقعیت، سیمه...",
      search: "لټون",
    },

    featured: {
      label: "غوره ملکیتونه",
      title: "خپل مناسب ملکیت پیدا کړئ",
      description:
        "د خرڅلاو او کرایې لپاره کورونه، اپارتمانونه، ځمکې او نور ملکیتونه.",
      viewAll:
        "ټول ملکیتونه وګورئ",
    },

    property: {
      bedrooms: "د خوب خونې",
      bathrooms: "تشنابونه",
      area: "مربع متر",
      sale: "خرڅلاو",
      rent: "کرایه",
      details: "جزئیات",
      description: "د ملکیت معلومات",
      call: "د دې ملکیت لپاره اړیکه",
      back: "ملکیتونو ته بېرته",
    },

    services: {
      label: "زموږ خدمتونه",
      title:
        "د معاملې په ټولو پړاوونو کې ستاسو ملګري",

      buying: {
        title: "د ملکیت اخیستل",
        description:
          "ستاسو د اړتیا او بودیجې مطابق د مناسب کور پیدا کول.",
      },

      selling: {
        title: "د ملکیت خرڅول",
        description:
          "ستاسو د کور او ځمکې په اسانه او باوري خرڅولو کې مرسته.",
      },

      renting: {
        title: "رهن او کرایه",
        description:
          "د کور، اپارتمان او تجارتي ملکیتونو رهن او کرایه.",
      },

      consulting: {
        title: "د معاملاتو مشوره",
        description:
          "د ملکیتونو د اخیستلو، خرڅولو او معاملو په ټولو پړاوونو کې لارښوونه.",
      },
    },

    about: {
      label: "زموږ په اړه",
      title: "د املاکو معاملات،",
      highlight: "په ډېر باور سره",

      description:
        "د ملا داد محمد هوتک د معاملاتو لارښود دفتر د کورونو، ځمکو او نورو ملکیتونو د اخیستلو، خرڅولو، رهن او کرایې په برخه کې فعالیت کوي. زموږ هدف مشتریانو ته ساده، روښانه او باوري خدمات وړاندې کول دي.",

      points: [
        "د ملکیتونو د اخیستلو او خرڅولو مشوره",
        "د مشتری اړتیا سره مناسب ملکیتونه",
        "د کورونو او ملکیتونو رهن او کرایه",
        "د معاملاتو په پروسه کې لارښوونه",
      ],
    },

    contact: {
      label: "اړیکه",
      title: "له موږ سره اړیکه ونیسئ",

      notFoundTitle:
        "خپل مناسب ملکیت مو پیدا نه کړ؟",

      notFoundDescription:
        "له موږ سره اړیکه ونیسئ، موږ به ستاسو د مناسب ملکیت په پیدا کولو کې مرسته وکړو.",

      description:
        "د کور، ځمکې او نورو ملکیتونو د اخیستلو، خرڅولو، رهن او کرایې لپاره له موږ سره اړیکه ونیسئ.",

      phone: "ټیلیفوني اړیکه",

      whatsapp: "واټساپ",

      whatsappText:
        "په واټساپ کې پیغام",

      telegram: "ټیلیګرام",

      telegramText:
        "په ټیلیګرام کې پیغام",

      address: "د دفتر پته",

      addressValue:
        "هرات، افغانستان",

      readyTitle:
        "موږ ستاسو مرستې ته چمتو یو",

      readyDescription:
        "که تاسو د کور، ځمکې، اپارتمان یا تجارتي ملکیت د اخیستلو یا خرڅولو اراده لرئ، له موږ سره اړیکه ونیسئ.",

      viewProperties:
        "ملکیتونه وګورئ",
    },

    footer: {
      description:
        "د ملا داد محمد هوتک د معاملاتو لارښود دفتر",

      quickLinks:
        "چټک لینکونه",

      rights:
        "ټول حقوق خوندي دي.",
    },

    pages: {
      properties: {
        label: "ملکیتونه",
        title: "ټول ملکیتونه",
        description:
          "د خرڅلاو او کرایې لپاره کورونه، اپارتمانونه، ځمکې او نور ملکیتونه.",
      },

      about: {
        title: "زموږ د دفتر په اړه",
        description:
          "موږ د کورونو، ځمکو او نورو ملکیتونو د اخیستلو، خرڅولو، رهن او کرایې په برخه کې فعالیت کوو او هڅه کوو خپلو مشتریانو ته باوري او روښانه خدمات وړاندې کړو.",
      },

      contact: {
        title: "اړیکه",
        description:
          "د ملکیتونو او زموږ د خدماتو په اړه د نورو معلوماتو لپاره له دفتر سره اړیکه ونیسئ.",
      },
    },
  },

  // =====================================================
  // ENGLISH
  // =====================================================

  en: {
    nav: {
      home: "Home",
      properties: "Properties",
      about: "About Us",
      contact: "Contact",
    },

    propertyMap: {
      label: "Property",
      title: "Property Location",
      description:
        "View the property location on satellite imagery.",
      coordinates: "Coordinates",
      latitude: "Latitude",
      longitude: "Longitude",
      mapTitle: "Property Satellite Map",
      propertyLocation: "Property Location",
      getDirections: "Get Directions",
      latitudeLabel: "Latitude",
      longitudeLabel: "Longitude",
      mapType: "Map Type",
      satelliteImagery: "Satellite Imagery",

      // NEW
      coordinatePageLink: "Open Coordinate Map",
    },

    location: {
      label: "Find Us",
      title: "Our Location",
      description:
        "Discover our property location through satellite imagery and explore the surrounding area.",
      coordinates: "Property Coordinates",
      latitude: "34°19'24.1\" N",
      longitude: "62°10'27.9\" E",
      mapTitle:
        "Real Estate Property Satellite Map",
      propertyLocation:
        "Property Location",
      getDirections:
        "Get Directions",
      latitudeLabel: "Latitude",
      longitudeLabel: "Longitude",
      mapType: "Map Type",
      satelliteImagery:
        "Satellite Imagery",
    },

    hero: {
      badge: "Trusted Real Estate Services",
      title1: "The home",
      title2: "you want,",
      title3: "starts here.",
      description:
        "Mulla Dad Mohammad Hotak Real Estate — helping you buy, sell, rent, and lease homes, land, apartments, and properties.",
      viewProperties:
        "View Properties",
      contact: "Contact Us",
      location:
        "Herat, Afghanistan",
    },

    search: {
      title: "Find your ideal property",
      description:
        "Choose the property type and location you are looking for.",
      purpose: "Purpose",
      selectPurpose:
        "Select purpose",
      sale: "For Sale",
      rent: "For Rent",
      type: "Property Type",
      selectType:
        "Select property type",
      house: "House",
      apartment: "Apartment",
      land: "Land",
      shop: "Shop",
      location:
        "Location, neighborhood...",
      search: "Search",
    },

    featured: {
      label: "Featured Properties",
      title: "Find the right property",
      description:
        "Homes, apartments, land, and other properties available for sale and rent.",
      viewAll:
        "View All Properties",
    },

    property: {
      bedrooms: "Bedrooms",
      bathrooms: "Bathrooms",
      area: "m²",
      sale: "For Sale",
      rent: "For Rent",
      details: "Details",
      description:
        "Property Description",
      call:
        "Call About This Property",
      back:
        "Back to Properties",
    },

    services: {
      label: "Our Services",
      title:
        "With you through every step",

      buying: {
        title: "Buy Property",
        description:
          "Find a home or property that matches your needs and budget.",
      },

      selling: {
        title: "Sell Property",
        description:
          "Get help selling your home or land with confidence.",
      },

      renting: {
        title: "Rent & Lease",
        description:
          "Homes, apartments, and commercial properties for rent.",
      },

      consulting: {
        title:
          "Real Estate Consulting",
        description:
          "Guidance throughout the buying, selling, and property transaction process.",
      },
    },

    about: {
      label: "About Us",
      title:
        "Real estate transactions,",
      highlight:
        "with greater confidence",

      description:
        "Mulla Dad Mohammad Hotak Real Estate provides services for buying, selling, renting, and leasing homes, land, apartments, and other properties. Our goal is to provide simple, transparent, and reliable services.",

      points: [
        "Buying and selling property consultation",
        "Properties matched to customer needs",
        "Home and property rental services",
        "Guidance throughout property transactions",
      ],
    },

    contact: {
      label: "Contact Us",
      title: "Get in touch with us",

      notFoundTitle:
        "Didn't find the property you were looking for?",

      notFoundDescription:
        "Contact us and we will help you find the right property.",

      description:
        "Contact Mulla Dad Mohammad Hotak Real Estate for buying, selling, renting, and leasing homes, land, apartments, and properties.",

      phone: "Phone Call",

      whatsapp: "WhatsApp",

      whatsappText:
        "Message us on WhatsApp",

      telegram: "Telegram",

      telegramText:
        "Message us on Telegram",

      address: "Office Address",

      addressValue:
        "Herat, Afghanistan",

      readyTitle:
        "We are ready to help",

      readyDescription:
        "If you are looking to buy or sell a house, land, apartment, or commercial property, get in touch with us.",

      viewProperties:
        "View Properties",
    },

    footer: {
      description:
        "Mulla Dad Mohammad Hotak Real Estate",

      quickLinks:
        "Quick Links",

      rights:
        "All rights reserved.",
    },

    pages: {
      properties: {
        label: "Properties",
        title: "All Properties",
        description:
          "Homes, apartments, land, and other properties available for sale and rent.",
      },

      about: {
        title: "About Our Office",
        description:
          "We provide real estate services for buying, selling, renting, and leasing properties, with a focus on reliable and transparent service.",
      },

      contact: {
        title: "Contact Us",
        description:
          "Contact our office for more information about our properties and services.",
      },
    },
  },
};