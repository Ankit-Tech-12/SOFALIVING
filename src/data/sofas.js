import {
  Trees,
  Armchair,
  Droplets,
  Hammer,
} from "lucide-react";

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

//sofaCustomiser
export const colorOptions = {
  Beige: "#D8C3A5",
  Grey: "#858585",
  Blue: "#526F91",
  Green: "#657B61",
  Charcoal: "#393939",
  Terracotta: "#B96B50",
};

export const modelDescriptions = {
  Luna: "Curved Boucle",
  Urban: "Mid-Century Clean",
  Cloud: "Deep Sectional",
};

export const fabricDescriptions = {
  Linen: "Breathable, tactile, organic weave",
  Velvet: "Plush depth and soft texture",
  Leatherette: "Scratch-resistant and easy to clean",
};

export const configurationDescriptions = {
  "2 Seater": "Compact",
  "3 Seater": "Signature",
  "L Shape": "With Chaise",
};

//featured sofa
export const sofaDetails = {
  Luna: {
    title: "The Luna Curved",
    label: "Curved Artistry",
    description:
      "Organic curved silhouette enveloped in soft, tactile boucle. Ideal for fluid, conversational open-plan spaces.",
    features: [
      "Curved Silhouette",
      "High-Traffic Boucle",
      "Soft Density",
    ],
  },

  Urban: {
    title: "The Urban Mid-Century",
    label: "Modern Classic",
    description:
      "Clean geometric profiles, button-tufted backrests, and tapered walnut legs. Tailored for urban architectural spaces.",
    features: [
      "Mid-Century Clean Lines",
      "Solid Walnut Trim",
      "Firm Ergonomic Support",
    ],
  },

  Cloud: {
    title: "The Cloud Sectional",
    label: "Deep Sanctuary",
    description:
      "Generous deep-seated sectional lounge featuring modular ottoman configuration and dual-layer microfibre down.",
    features: [
      "L-Shape Modular",
      'Deep Lounge 42"',
      "Stain-Resistant Linen",
    ],
  },
};

//craftsmanship
export const craftsmanshipFeatures = [
  {
    id: 1,
    icon: Trees,
    title: "Kiln-Dried Hardwood",
    description:
      "0% moisture seasoned Teak and Sal wood with reinforced mortise-and-tenon corner joints. Termite-proofed for lasting structural peace of mind.",
    footer: "Grade A Solid Timber",
  },
  {
    id: 2,
    icon: Armchair,
    title: "38-Density Cold Foam",
    description:
      "Multi-layer cold-cure memory foam cores supported by S-spring suspension bands. Maintains rebound resilience and anatomical contour for 15+ years.",
    footer: "High Rebound Rating",
  },
  {
    id: 3,
    icon: Droplets,
    title: "50k Martindale Rubs",
    description:
      "Pet-friendly weaves tested against heavy abrasion and accidental spills. Oleophobic treatments resist coffee, wine, and daily family wear.",
    footer: "Hydrophobic Nanocoat",
  },
  {
    id: 4,
    icon: Hammer,
    title: "Direct from Factory",
    description:
      "Direct atelier-to-residence model skips middlemen markups. You invest purely in authentic timber, foam grade, and generational craft.",
    footer: "Zero Distributor Margin",
  },
];

export const statistics = [
  { value: "26", label: "Years of Craftsmanship" },
  { value: "42k+", label: "Happy Homes" },
  { value: "10-Yr", label: "Quality Assurance" },
  { value: "4.9★", label: "Customer Rating" },
];