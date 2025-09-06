import { Product } from '@/contexts/CartContext';

// Import product images (using existing images as placeholders)
import beige_coat from '@/assets/products/beige-coat.jpg';
import black_dress from '@/assets/products/black-dress.jpg';
import black_jacket from '@/assets/products/black-jacket.jpg';
import blue_jeans from '@/assets/products/blue-jeans.jpg';
import cream_sweater from '@/assets/products/cream-sweater.jpg';
import navy_blazer from '@/assets/products/navy-blazer.jpg';
import silk_scarf from '@/assets/products/silk-scarf.jpg';
import white_blouse from '@/assets/products/white-blouse.jpg';
import white_shirt from '@/assets/products/white-shirt.jpg';
import white_sneakers from '@/assets/products/white-sneakers.jpg';

const products: Product[] = [
  {
    id: '1',
    name: '✨ Amber Embroidery 2Pc ✨',
    price: 2799,
    image: beige_coat,
    description: 'Premium Linen fabric with elegant embroidery work. Shirt Length: 45". Perfect for casual and semi-formal occasions.',
    category: '2PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  },
  {
    id: '2',
    name: 'JUNA EMBROIDERY 3PC (🌟 PREMIUM COLLECTION ☀)',
    price: 3699,
    image: black_dress,
    description: 'Pure Cotton Lawn (Brand Fabric) with embroidery work. Includes Emb Shirt + Emb Trouser + Emb Dupatta. Shirt Length: 37", Trouser Length: 37-38".',
    category: '3PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  },
  {
    id: '3',
    name: 'WARDA EMB LONG LENGTH – PREMIUM COLLECTION ☀',
    price: 2599,
    image: black_jacket,
    description: 'Summer Linen Embroidery (Brand Fabric). Includes Emb Shirt + Emb Plazo. Shirt Length: 45-46", Trouser Length: 38-39".',
    category: '2PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  },
  {
    id: '4',
    name: 'HORIYAA Lawn 3Pc 🌸',
    price: 3700,
    image: blue_jeans,
    description: 'Luxury Premium Lawn Cotton. Includes Emb Shirt + Plain Trouser + Shafoon Digital Dupatta. Shirt Length: 42-43", Trouser Length: 38+".',
    category: '3PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  },
  {
    id: '5',
    name: 'BLUEPRET 2Pc ✨',
    price: 2600,
    image: cream_sweater,
    description: 'Premium Arabic Lawn with Embroidery Work. Includes Emb Shirt + Plain Trouser. Shirt Length: 44-45", Plazoo Length: 38+".',
    category: '2PC Sets',
    sizes: ['Small', 'Medium', 'Large']
  },
  {
    id: '6',
    name: 'JHANGIR POCKET EMB LONG LENGTH (Double Pocket) 2Pc ✨',
    price: 2599,
    image: navy_blazer,
    description: 'Premium Summer Linen Embroidery (Brand Fabric). Includes Pocket Emb Shirt + Emb Trouser. Shirt Length: 45-46", Trouser Length: 38-39".',
    category: '2PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  },
  {
    id: '7',
    name: 'WHITE VIOLET EMB 2Pc ✨',
    price: 3199,
    image: silk_scarf,
    description: 'Pure Lawn (Brand Fabric) - Summer Collection. Includes Emb Shirt + Emb Plazo. Shirt Length: 45-46", Plazo Length: 37-38".',
    category: '2PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  },
  {
    id: '8',
    name: 'NAZNEEN EMBROIDERY 3Pc 🌸',
    price: 3899,
    image: white_blouse,
    description: 'Pure Lawn (Brand Fabric) - Summer Collection. Includes Emb Shirt + Plain Trouser + Chiffon Embroidered Dupatta. Shirt Length: 45-46", Trouser Length: 38-39".',
    category: '3PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  },
  {
    id: '9',
    name: 'LINA EMBROIDERY 2Pc ✨',
    price: 2700,
    image: white_shirt,
    description: 'Luxury Premium Pure Lawn Cotton. Includes Emb Shirt + Plain Trouser. Farshi Shalwar, Length 39+".',
    category: '2PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  },
  {
    id: '10',
    name: 'HORIYAA 2Pc ✨',
    price: 3099,
    image: white_sneakers,
    description: 'Luxury Premium Lawn Cotton. Includes Emb Shirt + Plain Trouser. Trouser Length: 38+".',
    category: '2PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  },
  {
    id: '11',
    name: 'ZAFA 2Pc Co-Ord Set ✨',
    price: 2700,
    image: beige_coat,
    description: 'Luxury Premium Lawn Cotton. Includes Emb Shirt + Emb Trouser. Trouser Length: 38+".',
    category: '2PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  },
  {
    id: '12',
    name: 'SITARA 3Pc ✨',
    price: 3050,
    image: black_dress,
    description: 'Luxury Premium Lawn Cotton. Includes Emb Shirt + Plain Trouser + Shaffon Dupatta. Trouser Length: 38+".',
    category: '3PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  },
  {
    id: '13',
    name: 'GRACE 2Pc ✨',
    price: 2599,
    image: black_jacket,
    description: 'Stone Linen fabric. Includes Emb Shirt + Plain Trouser. Shirt Length: 45", Trouser Length: 39".',
    category: '2PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  },
  {
    id: '14',
    name: 'FARSHI WHITE SHALWAR 3Pc ✨',
    price: 2400,
    image: blue_jeans,
    description: 'Chamki Silk with Soft Arganza Dupatta. Ready to Wear 3Pc Article. Shirt Length: 36", Shalwar Length: 39/40", Sleeves: 22".',
    category: '3PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  },
  {
    id: '15',
    name: 'MINSHA 2Pc ✨',
    price: 2899,
    image: cream_sweater,
    description: 'Luxury Premium Lawn Cotton. Includes Emb Shirt with Seq Bazo Work + Farshi Shalwar. Farshi Shalwar Length: 39+".',
    category: '2PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  },
  {
    id: '16',
    name: 'KALAMKAR GREEN 2Pc ✨',
    price: 2599,
    image: navy_blazer,
    description: 'Premium Dhank fabric. Includes Emb Shirt + Plain Trouser. Trouser Length: 39-40".',
    category: '2PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  },
  {
    id: '17',
    name: 'MALVIN 2Pc Co-Ord Set 🌸',
    price: 2499,
    image: silk_scarf,
    description: 'Premium Linen with Elegant Embroidery. Includes Emb Shirt + Straight Fit Trouser. Shirt Length: 42", Classic Straight Fit.',
    category: '2PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  },
  {
    id: '18',
    name: 'DAINA 2Pc Co-Ord Set ✨',
    price: 2700,
    image: white_blouse,
    description: 'Luxury Premium Pure Lawn Cotton. Includes Emb Shirt + Plain Trouser. Farshi Shalwar Length: 39+".',
    category: '2PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  },
  {
    id: '19',
    name: 'WESTERN BLACK EMBROIDERY 2Pc ✨',
    price: 2600,
    image: white_shirt,
    description: 'Cotton fabric. Includes Emb Shirt + Plain Trouser. Shirt Length: 38", Trouser Length: 38".',
    category: '2PC Sets',
    sizes: ['Small', 'Medium', 'Large']
  },
  {
    id: '20',
    name: 'MEHAR 3PC 3Pc ✨',
    price: 3299,
    image: white_sneakers,
    description: 'Luxury Premium Poly Lawn. 3Pc Digital Co-Ord Set includes Digital Shirt + Digital Shalwar + Monar Dupatta. Farshi Shalwar Length: 39+".',
    category: '3PC Sets',
    sizes: ['Small', 'Medium', 'Large', 'XL']
  }
];

// Export all products and featured products
export const allProducts = products;
export const featuredProducts = products.slice(0, 6);