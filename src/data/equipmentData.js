export const equipmentData = [
  {
    id: 1,
    name: "Bulldozer",
    category: "Heavy Machinery",
    description: "Powerful bulldozer for earthmoving and construction projects",
    specifications: {
      weight: "25000 kg",
      dimensions: "8.5m x 3.2m x 3.1m",
      power: "300 HP",
      capacity: "15 tons"
    },
    features: [
      "High-performance engine",
      "Advanced hydraulic system",
      "Operator comfort cabin"
    ],
    imageUrl: "/assets/bulldozer.jpg"
  },
  {
    id: 2,
    name: "Crawler Tractor",
    category: "Heavy Machinery",
    description: "Versatile crawler tractor for various construction applications",
    specifications: {
      weight: "18000 kg",
      dimensions: "7.2m x 2.8m x 2.9m",
      power: "250 HP",
      capacity: "12 tons"
    },
    features: [
      "All-terrain capability",
      "Fuel efficient engine",
      "Easy maintenance"
    ],
    imageUrl: "/assets/crawler-tractor-1.jpeg"
  },
  {
    id: 3,
    name: "Red Excavator",
    category: "Construction Equipment",
    description: "Heavy-duty excavator for digging and material handling",
    specifications: {
      weight: "22000 kg",
      dimensions: "9.1m x 2.9m x 3.2m",
      power: "280 HP",
      capacity: "18 tons"
    },
    features: [
      "360-degree rotation",
      "Precision hydraulics",
      "Comfortable operator cabin"
    ],
    imageUrl: "/assets/red-excavator.jpg"
  },
  {
    id: 4,
    name: "Wheel Loader",
    category: "Construction Equipment",
    description: "Efficient wheel loader for material handling and loading operations",
    specifications: {
      weight: "16000 kg",
      dimensions: "8.0m x 2.7m x 3.4m",
      power: "220 HP",
      capacity: "10 tons"
    },
    features: [
      "Quick attachment system",
      "High lifting capacity",
      "Excellent visibility"
    ],
    imageUrl: "/assets/wheel-loader.jpeg"
  },
  {
    id: 5,
    name: "Wheeled Excavator",
    category: "Specialized Tools",
    description: "Mobile wheeled excavator for urban construction projects",
    specifications: {
      weight: "14000 kg",
      dimensions: "7.8m x 2.5m x 3.0m",
      power: "180 HP",
      capacity: "8 tons"
    },
    features: [
      "Road mobility",
      "Compact design",
      "Versatile attachments"
    ],
    imageUrl: "/assets/wheeled-excavator-2.jpeg"
  }
];

export const categories = [
  "Heavy Machinery",
  "Construction Equipment",
  "Specialized Tools"
  // Add more categories based on the DOCX content
];

export const getEquipmentByCategory = (category) => {
  return equipmentData.filter(equipment => equipment.category === category);
};

export const getEquipmentById = (id) => {
  return equipmentData.find(equipment => equipment.id === id);
};