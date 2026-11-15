export const sofas = [
  {
    id: 1,
    name: "Luna",
    tag: "BEST SELLER",
    description: "Elegant comfort for modern living spaces.",
    price: 42999,
    colors: ["Beige", "Grey", "Blue", "Green"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
  },
  {
    id: 2,
    name: "Urban",
    tag: "MODERN CLASSIC",
    description: "Contemporary design with timeless appeal.",
    price: 54999,
    colors: ["Beige", "Grey", "Charcoal", "Terracotta"],
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800",
  },
  {
    id: 3,
    name: "Cloud",
    tag: "PREMIUM COMFORT",
    description: "Experience ultimate comfort and relaxation.",
    price: 64999,
    colors: ["Beige", "Blue", "Green", "Charcoal"],
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800",
  },
];

export const fabrics = [
  { name: "Linen", price: 0 },
  { name: "Velvet", price: 5000 },
  { name: "Leatherette", price: 8000 },
];

export const configurations = [
  { name: "2 Seater", price: -7000 },
  { name: "3 Seater", price: 0 },
  { name: "L Shape", price: 18000 },
];

export const defaultSelection = {
  model: "Luna",
  color: "Beige",
  fabric: "Linen",
  configuration: "3 Seater",
};
