export type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  images: string[];
  type: string;
  features: string[];
  description: string;
};

export const INVENTORY: Car[] = [
  {
    id: 9,
    make: "Porsche",
    model: "Cayenne S Edition",
    year: 2018,
    price: 13800000,
    mileage: 26000,
    images: [
      "https://i.postimg.cc/m2YyLDyz/2018-PORSCHE-CAYENNE-S-EDITION-HOT-NEW-ARRIVAL-A-true-performance-SUV-delivering-power-precis.jpg",
      "https://i.postimg.cc/MK7m6Tmj/2018-PORSCHE-CAYENNE-S-EDITION-HOT-NEW-ARRIVAL-A-true-performance-SUV-delivering-power-precis.jpg",
      "https://i.postimg.cc/jdH4x54f/2018-PORSCHE-CAYENNE-S-EDITION-HOT-NEW-ARRIVAL-A-true-performance-SUV-delivering-power-precis.jpg",
      "https://i.postimg.cc/qMsxJRxL/2018-PORSCHE-CAYENNE-S-EDITION-HOT-NEW-ARRIVAL-A-true-performance-SUV-delivering-power-precis.jpg",
      "https://i.postimg.cc/qMsxJRxw/2018-PORSCHE-CAYENNE-S-EDITION-HOT-NEW-ARRIVAL-A-true-performance-SUV-delivering-power-precis.jpg",
      "https://i.postimg.cc/8PRmp5mt/2018-PORSCHE-CAYENNE-S-EDITION-HOT-NEW-ARRIVAL-A-true-performance-SUV-delivering-power-precis.jpg",
      "https://i.postimg.cc/nc4GFzG3/2018-PORSCHE-CAYENNE-S-EDITION-HOT-NEW-ARRIVAL-A-true-performance-SUV-delivering-power-precis.jpg",
      "https://i.postimg.cc/7Y3nH6nd/2018-PORSCHE-CAYENNE-S-EDITION-HOT-NEW-ARRIVAL-A-true-performance-SUV-delivering-power-precis.jpg",
      "https://i.postimg.cc/vHrtYBtC/2018-PORSCHE-CAYENNE-S-EDITION-HOT-NEW-ARRIVAL-A-true-performance-SUV-delivering-power-precis.jpg",
      "https://i.postimg.cc/Dykc3sLQ/2018-PORSCHE-CAYENNE-S-EDITION-HOT-NEW-ARRIVAL-A-true-performance-SUV-delivering-power-precis.jpg"
    ],
    type: "SUV",
    features: ["Sport Chrono Package", "Sport Exhaust System", "Air Suspension", "Porsche Dynamic Light System"],
    description: "HOT NEW ARRIVAL. A true performance SUV delivering power, precision, and an unmistakable driving experience."
  },
  {
    id: 1,
    make: "Range Rover",
    model: "Vogue Autobiography",
    year: 2018,
    price: 12500000,
    mileage: 32000,
    images: [
      "https://i.postimg.cc/fbQYdhWX/2018-RANGE-ROVER-VOGUE-Home-of-Luxury-and-Class-Experience-luxury-comfort-and-commanding-perf.jpg",
      "https://i.postimg.cc/HL1bMCWX/2018-RANGE-ROVER-VOGUE-Home-of-Luxury-and-Class-Experience-luxury-comfort-and-commanding-perf.jpg",
      "https://i.postimg.cc/bvf1njYQ/2018-RANGE-ROVER-VOGUE-Home-of-Luxury-and-Class-Experience-luxury-comfort-and-commanding-perf.jpg",
      "https://i.postimg.cc/nLfqmtV4/2018-RANGE-ROVER-VOGUE-Home-of-Luxury-and-Class-Experience-luxury-comfort-and-commanding-perf.jpg",
      "https://i.postimg.cc/wBYDNdxc/2018-RANGE-ROVER-VOGUE-Home-of-Luxury-and-Class-Experience-luxury-comfort-and-commanding-perf.jpg",
      "https://i.postimg.cc/W4c0ZPpw/2018-RANGE-ROVER-VOGUE-Home-of-Luxury-and-Class-Experience-luxury-comfort-and-commanding-perf.jpg",
      "https://i.postimg.cc/yNC0Rz6P/2018-RANGE-ROVER-VOGUE-Home-of-Luxury-and-Class-Experience-luxury-comfort-and-commanding-perf.jpg",
      "https://i.postimg.cc/KYhtTycf/2018-RANGE-ROVER-VOGUE-Home-of-Luxury-and-Class-Experience-luxury-comfort-and-commanding-perf.jpg",
      "https://i.postimg.cc/W4c0ZPpX/2018-RANGE-ROVER-VOGUE-Home-of-Luxury-and-Class-Experience-luxury-comfort-and-commanding-perf.jpg",
      "https://i.postimg.cc/43RpcT4W/2018-RANGE-ROVER-VOGUE-Home-of-Luxury-and-Class-Experience-luxury-comfort-and-commanding-perf.jpg"
    ],
    type: "SUV",
    features: ["Meridian Signature Sound", "Executive Class Rear Seats", "Shadow Exterior Pack", "Head-Up Display"],
    description: "Experience luxury comfort and commanding performance in this immaculate Range Rover Vogue. An absolute icon of prestige."
  },
  {
    id: 2,
    make: "Ford",
    model: "Ranger Raptor",
    year: 2019,
    price: 8500000,
    mileage: 18000,
    images: [
      "https://i.postimg.cc/2y94Lb37/Fresh-Import-2019-FORD-RANGER-RAPTOR-Home-of-Luxury-and-Class-Now-available-the-Ranger-Rap.jpg",
      "https://i.postimg.cc/5yKwQYj3/Fresh-Import-2019-FORD-RANGER-RAPTOR-Home-of-Luxury-and-Class-Now-available-the-Ranger-Rap.jpg",
      "https://i.postimg.cc/mZm35qj0/Fresh-Import-2019-FORD-RANGER-RAPTOR-Home-of-Luxury-and-Class-Now-available-the-Ranger-Rap.jpg",
      "https://i.postimg.cc/RCg1D8Gr/Fresh-Import-2019-FORD-RANGER-RAPTOR-Home-of-Luxury-and-Class-Now-available-the-Ranger-Rap.jpg",
      "https://i.postimg.cc/8kZd03wQ/Fresh-Import-2019-FORD-RANGER-RAPTOR-Home-of-Luxury-and-Class-Now-available-the-Ranger-Rap.jpg",
      "https://i.postimg.cc/zDxwcMp5/Fresh-Import-2019-FORD-RANGER-RAPTOR-Home-of-Luxury-and-Class-Now-available-the-Ranger-Rap.jpg",
      "https://i.postimg.cc/FFTbBqGh/Fresh-Import-2019-FORD-RANGER-RAPTOR-Home-of-Luxury-and-Class-Now-available-the-Ranger-Rap.jpg",
      "https://i.postimg.cc/9XLPnS1X/Fresh-Import-2019-FORD-RANGER-RAPTOR-Home-of-Luxury-and-Class-Now-available-the-Ranger-Rap.jpg",
      "https://i.postimg.cc/SQgLv5VN/Fresh-Import-2019-FORD-RANGER-RAPTOR-Home-of-Luxury-and-Class-Now-available-the-Ranger-Rap.jpg"
    ],
    type: "SUV",
    features: ["Fox Racing Suspension", "Baja Drive Mode", "Alcantara Sports Seats", "Underbody Protection"],
    description: "A commanding presence. Built to dominate every terrain while ensuring the utmost cabin comfort."
  },
  {
    id: 3,
    make: "Volvo",
    model: "XC60 B5 AWD",
    year: 2020,
    price: 6800000,
    mileage: 22000,
    images: [
      "https://i.postimg.cc/g0y8qBrB/FRESH-NEW-ARRIVAL-2020-VOLVO-XC60-B5-AWD-Home-of-Luxury-and-Class-Luxury-performance-and-Sc.jpg",
      "https://i.postimg.cc/XvKdcDXP/FRESH-NEW-ARRIVAL-2020-VOLVO-XC60-B5-AWD-Home-of-Luxury-and-Class-Luxury-performance-and-Sc.jpg",
      "https://i.postimg.cc/DzQLdYmD/FRESH-NEW-ARRIVAL-2020-VOLVO-XC60-B5-AWD-Home-of-Luxury-and-Class-Luxury-performance-and-Sc.jpg",
      "https://i.postimg.cc/43vVbFnj/FRESH-NEW-ARRIVAL-2020-VOLVO-XC60-B5-AWD-Home-of-Luxury-and-Class-Luxury-performance-and-Sc.jpg",
      "https://i.postimg.cc/Bv5Hcwtr/FRESH-NEW-ARRIVAL-2020-VOLVO-XC60-B5-AWD-Home-of-Luxury-and-Class-Luxury-performance-and-Sc.jpg",
      "https://i.postimg.cc/Bv5HcwXW/FRESH-NEW-ARRIVAL-2020-VOLVO-XC60-B5-AWD-Home-of-Luxury-and-Class-Luxury-performance-and-Sc.jpg",
      "https://i.postimg.cc/6QVnL1yx/FRESH-NEW-ARRIVAL-2020-VOLVO-XC60-B5-AWD-Home-of-Luxury-and-Class-Luxury-performance-and-Sc.jpg",
      "https://i.postimg.cc/R01KQbN4/FRESH-NEW-ARRIVAL-2020-VOLVO-XC60-B5-AWD-Home-of-Luxury-and-Class-Luxury-performance-and-Sc.jpg",
      "https://i.postimg.cc/tgdWtmY9/FRESH-NEW-ARRIVAL-2020-VOLVO-XC60-B5-AWD-Home-of-Luxury-and-Class-Luxury-performance-and-Sc.jpg"
    ],
    type: "SUV",
    features: ["Pilot Assist", "Bowers & Wilkins Audio", "Orrefors Crystal Shifter", "Panoramic Roof"],
    description: "Luxury, performance, and unmatched Scandinavian engineering. The perfect balanced premium SUV."
  },
  {
    id: 4,
    make: "Mercedes-Benz",
    model: "G63 AMG Edition",
    year: 2022,
    price: 38000000,
    mileage: 8500,
    images: [
      "https://i.postimg.cc/bNb5fp5V/2019-MERCEDES-BENZ-G-WAGON-G350d-FRESH-IMPORT-Experience-unmatched-luxury-power-and-presenc.jpg",
      "https://i.postimg.cc/SxhvyH0d/2019-MERCEDES-BENZ-G-WAGON-G350d-FRESH-IMPORT-Experience-unmatched-luxury-power-and-presenc.jpg",
      "https://i.postimg.cc/YCHspTcX/2019-MERCEDES-BENZ-G-WAGON-G350d-FRESH-IMPORT-Experience-unmatched-luxury-power-and-presenc.jpg",
      "https://i.postimg.cc/x1240Br4/2019-MERCEDES-BENZ-G-WAGON-G350d-FRESH-IMPORT-Experience-unmatched-luxury-power-and-presenc.jpg",
      "https://i.postimg.cc/fRNrw14F/2019-MERCEDES-BENZ-G-WAGON-G350d-FRESH-IMPORT-Experience-unmatched-luxury-power-and-presenc.jpg",
      "https://i.postimg.cc/3xTcKzMV/2019-MERCEDES-BENZ-G-WAGON-G350d-FRESH-IMPORT-Experience-unmatched-luxury-power-and-presenc.jpg",
      "https://i.postimg.cc/h4NYYf2X/2019-MERCEDES-BENZ-G-WAGON-G350d-FRESH-IMPORT-Experience-unmatched-luxury-power-and-presenc.jpg",
      "https://i.postimg.cc/nVNWWC37/2019-MERCEDES-BENZ-G-WAGON-G350d-FRESH-IMPORT-Experience-unmatched-luxury-power-and-presenc.jpg",
      "https://i.postimg.cc/qBWFFz1y/2019-MERCEDES-BENZ-G-WAGON-G350d-FRESH-IMPORT-Experience-unmatched-luxury-power-and-presenc.jpg",
      "https://i.postimg.cc/zXWQY8Qv/2019-MERCEDES-BENZ-G-WAGON-G350d-FRESH-IMPORT-Experience-unmatched-luxury-power-and-presenc.jpg"
    ],
    type: "SUV",
    features: ["AMG Night Package", "Carbon Fiber Trim", "Burmester Surround Sound", "Exclusive Nappa Leather"],
    description: "Pure presence, pure power. The ultimate luxury off-roader that commands absolute respect on the road."
  },
  {
    id: 5,
    make: "Mercedes-Benz",
    model: "S500 4MATIC AMG Line",
    year: 2023,
    price: 25000000,
    mileage: 4200,
    images: [
      "https://i.postimg.cc/bJcTTtz9/Mercedes-Benz-S-500-4MATIC-AMG-Line-Flagship-Luxury-Intelligent-Power-Absolute-Presence-The-20.jpg",
      "https://i.postimg.cc/XJS88CVg/Mercedes-Benz-S-500-4MATIC-AMG-Line-Flagship-Luxury-Intelligent-Power-Absolute-Presence-The-20.jpg",
      "https://i.postimg.cc/768VV2xV/Mercedes-Benz-S-500-4MATIC-AMG-Line-Flagship-Luxury-Intelligent-Power-Absolute-Presence-The-20.jpg",
      "https://i.postimg.cc/vBFzzVQh/Mercedes-Benz-S-500-4MATIC-AMG-Line-Flagship-Luxury-Intelligent-Power-Absolute-Presence-The-20.jpg",
      "https://i.postimg.cc/pTbZZF2c/Mercedes-Benz-S-500-4MATIC-AMG-Line-Flagship-Luxury-Intelligent-Power-Absolute-Presence-The-20.jpg",
      "https://i.postimg.cc/63J00v91/Mercedes-Benz-S-500-4MATIC-AMG-Line-Flagship-Luxury-Intelligent-Power-Absolute-Presence-The-20.jpg",
      "https://i.postimg.cc/9M5pp7Wn/Mercedes-Benz-S-500-4MATIC-AMG-Line-Flagship-Luxury-Intelligent-Power-Absolute-Presence-The-20.jpg",
      "https://i.postimg.cc/xCDRRz0Z/Mercedes-Benz-S-500-4MATIC-AMG-Line-Flagship-Luxury-Intelligent-Power-Absolute-Presence-The-20.jpg"
    ],
    type: "Sedan",
    features: ["AMG Line", "Burmester Surround Sound", "Exclusive Nappa Leather", "Active Ambient Lighting"],
    description: "Flagship Luxury. Intelligent Power. Absolute Presence. The unparalleled Mercedes-Benz S500."
  },
  {
    id: 6,
    make: "BMW",
    model: "X6 xDrive35d M Sport",
    year: 2020,
    price: 16500000,
    mileage: 18000,
    images: [
      "https://i.postimg.cc/d1wsr5ys/BMW-X6-x-Drive35d-M-Sport-YOM-2020-Engine-3000CC-Twin-Power-Turbo-Diesel-Colour-Manhattan-G.jpg",
      "https://i.postimg.cc/8541HLhq/BMW-X6-x-Drive35d-M-Sport-YOM-2020-Engine-3000CC-Twin-Power-Turbo-Diesel-Colour-Manhattan-G.jpg",
      "https://i.postimg.cc/26Gzwn4s/BMW-X6-x-Drive35d-M-Sport-YOM-2020-Engine-3000CC-Twin-Power-Turbo-Diesel-Colour-Manhattan-G.jpg",
      "https://i.postimg.cc/mDjbw7Yx/BMW-X6-x-Drive35d-M-Sport-YOM-2020-Engine-3000CC-Twin-Power-Turbo-Diesel-Colour-Manhattan-G.jpg",
      "https://i.postimg.cc/3R1KB2XQ/BMW-X6-x-Drive35d-M-Sport-YOM-2020-Engine-3000CC-Twin-Power-Turbo-Diesel-Colour-Manhattan-G.jpg",
      "https://i.postimg.cc/8541HLRV/BMW-X6-x-Drive35d-M-Sport-YOM-2020-Engine-3000CC-Twin-Power-Turbo-Diesel-Colour-Manhattan-G.jpg",
      "https://i.postimg.cc/cH0xwF82/BMW-X6-x-Drive35d-M-Sport-YOM-2020-Engine-3000CC-Twin-Power-Turbo-Diesel-Colour-Manhattan-G.jpg",
      "https://i.postimg.cc/SskSCgzw/BMW-X6-x-Drive35d-M-Sport-YOM-2020-Engine-3000CC-Twin-Power-Turbo-Diesel-Colour-Manhattan-G.jpg",
      "https://i.postimg.cc/JnMrZpBf/BMW-X6-x-Drive35d-M-Sport-YOM-2020-Engine-3000CC-Twin-Power-Turbo-Diesel-Colour-Manhattan-G.jpg",
      "https://i.postimg.cc/rmMVxfr6/BMW-X6-x-Drive35d-M-Sport-YOM-2020-Engine-3000CC-Twin-Power-Turbo-Diesel-Colour-Manhattan-G.jpg"
    ],
    type: "SUV",
    features: ["M Sport Package", "Twin Power Turbo Diesel", "Panoramic Sunroof", "Harman Kardon Audio"],
    description: "The BMW X6 xDrive35d M Sport combines powerful 3000cc Twin Power Turbo Diesel performance with striking coupe-like styling in an elegant Manhattan finish."
  },
  {
    id: 7,
    make: "Mercedes-Benz",
    model: "GLE 450 4MATIC",
    year: 2019,
    price: 13500000,
    mileage: 28000,
    images: [
      "https://i.postimg.cc/4Ng3gNdX/2019-Mercedes-Benz-GLE-450-4MATIC-WITH-EQ-BOOST-DEAL-OF-THE-WEEK-EXECUTIVE-PERFORMANCE-SUV.jpg",
      "https://i.postimg.cc/J4LhL4n1/2019-Mercedes-Benz-GLE-450-4MATIC-WITH-EQ-BOOST-DEAL-OF-THE-WEEK-EXECUTIVE-PERFORMANCE-SUV.jpg",
      "https://i.postimg.cc/DyTzTyZv/2019-Mercedes-Benz-GLE-450-4MATIC-WITH-EQ-BOOST-DEAL-OF-THE-WEEK-EXECUTIVE-PERFORMANCE-SUV.jpg",
      "https://i.postimg.cc/CLgKgL1M/2019-Mercedes-Benz-GLE-450-4MATIC-WITH-EQ-BOOST-DEAL-OF-THE-WEEK-EXECUTIVE-PERFORMANCE-SUV.jpg",
      "https://i.postimg.cc/Kv2Y2vzY/2019-Mercedes-Benz-GLE-450-4MATIC-WITH-EQ-BOOST-DEAL-OF-THE-WEEK-EXECUTIVE-PERFORMANCE-SUV.jpg",
      "https://i.postimg.cc/tCjgjCTJ/2019-Mercedes-Benz-GLE-450-4MATIC-WITH-EQ-BOOST-DEAL-OF-THE-WEEK-EXECUTIVE-PERFORMANCE-SUV.jpg",
      "https://i.postimg.cc/tCjgjCTs/2019-Mercedes-Benz-GLE-450-4MATIC-WITH-EQ-BOOST-DEAL-OF-THE-WEEK-EXECUTIVE-PERFORMANCE-SUV.jpg",
      "https://i.postimg.cc/xT2d2TCk/2019-Mercedes-Benz-GLE-450-4MATIC-WITH-EQ-BOOST-DEAL-OF-THE-WEEK-EXECUTIVE-PERFORMANCE-SUV.jpg",
      "https://i.postimg.cc/CLsxLTBh/2019-Mercedes-Benz-GLE-450-4MATIC-WITH-EQ-BOOST-DEAL-OF-THE-WEEK-EXECUTIVE-PERFORMANCE-SUV.jpg"
    ],
    type: "SUV",
    features: ["EQ Boost", "Executive Performance", "4MATIC All-Wheel Drive", "Premium Interior"],
    description: "EXECUTIVE PERFORMANCE SUV. The 2019 Mercedes-Benz GLE 450 4MATIC with EQ Boost offers refined power, commanding road presence, and unparalleled interior luxury. Deal of the week."
  },
  {
    id: 8,
    make: "Lexus",
    model: "LX600 Ultra Luxury",
    year: 2023,
    price: 36000000,
    mileage: 6500,
    images: [
      "https://i.postimg.cc/Hkb4LL04/2023-LEXUS-LX600-ULTRA-LUXURY-THE-SUMMIT-OF-SOPHISTICATION-Every-detail-of-this-Graphite-Blac.jpg",
      "https://i.postimg.cc/sg5922P4/2023-LEXUS-LX600-ULTRA-LUXURY-THE-SUMMIT-OF-SOPHISTICATION-Every-detail-of-this-Graphite-Blac.jpg",
      "https://i.postimg.cc/mg7Nrr3S/2023-LEXUS-LX600-ULTRA-LUXURY-THE-SUMMIT-OF-SOPHISTICATION-Every-detail-of-this-Graphite-Blac.jpg",
      "https://i.postimg.cc/0y7dNNGc/2023-LEXUS-LX600-ULTRA-LUXURY-THE-SUMMIT-OF-SOPHISTICATION-Every-detail-of-this-Graphite-Blac.jpg",
      "https://i.postimg.cc/dVGm00RW/2023-LEXUS-LX600-ULTRA-LUXURY-THE-SUMMIT-OF-SOPHISTICATION-Every-detail-of-this-Graphite-Blac.jpg",
      "https://i.postimg.cc/nhqYLLKR/2023-LEXUS-LX600-ULTRA-LUXURY-THE-SUMMIT-OF-SOPHISTICATION-Every-detail-of-this-Graphite-Blac.jpg",
      "https://i.postimg.cc/L8jBssk0/2023-LEXUS-LX600-ULTRA-LUXURY-THE-SUMMIT-OF-SOPHISTICATION-Every-detail-of-this-Graphite-Blac.jpg",
      "https://i.postimg.cc/FH0gKKbB/2023-LEXUS-LX600-ULTRA-LUXURY-THE-SUMMIT-OF-SOPHISTICATION-Every-detail-of-this-Graphite-Blac.jpg",
      "https://i.postimg.cc/P51zqqb9/2023-LEXUS-LX600-ULTRA-LUXURY-THE-SUMMIT-OF-SOPHISTICATION-Every-detail-of-this-Graphite-Blac.jpg",
      "https://i.postimg.cc/pLKYddQ3/2023-LEXUS-LX600-ULTRA-LUXURY-THE-SUMMIT-OF-SOPHISTICATION-Every-detail-of-this-Graphite-Blac.jpg"
    ],
    type: "SUV",
    features: ["VIP Rear Lounge Seating", "Mark Levinson Reference Audio", "Dual Rear Seat Entertainment", "Adaptive Variable Suspension"],
    description: "THE SUMMIT OF SOPHISTICATION. Every detail of this Graphite Black Lexus LX600 Ultra Luxury is crafted for unprecedented comfort and commanding exclusivity."
  }
];
