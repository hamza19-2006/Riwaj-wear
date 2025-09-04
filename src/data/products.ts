import { Product } from '@/contexts/CartContext';

// Import product images
import whiteBlouse from '@/assets/products/white-blouse.jpg';
import blackJacket from '@/assets/products/black-jacket.jpg';
import beigeCoat from '@/assets/products/beige-coat.jpg';
import blueJeans from '@/assets/products/blue-jeans.jpg';
import blackDress from '@/assets/products/black-dress.jpg';
import creamSweater from '@/assets/products/cream-sweater.jpg';
import navyBlazer from '@/assets/products/navy-blazer.jpg';
import whiteSneakers from '@/assets/products/white-sneakers.jpg';
import silkScarf from '@/assets/products/silk-scarf.jpg';
import whiteShirt from '@/assets/products/white-shirt.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White Cotton Blouse',
    price: 89.99,
    image: whiteBlouse,
    description: 'Timeless white cotton blouse crafted from premium organic cotton. Features elegant button details and a relaxed fit perfect for both casual and professional settings.',
    category: 'Tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Premium Black Leather Jacket',
    price: 299.99,
    image: blackJacket,
    description: 'Luxurious black leather jacket made from genuine Italian leather. Features asymmetric zip closure and quilted shoulder details for a modern edge.',
    category: 'Outerwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '3',
    name: 'Elegant Beige Wool Coat',
    price: 199.99,
    image: beigeCoat,
    description: 'Sophisticated wool coat in timeless beige. Double-breasted design with premium wool blend fabric perfect for transitional weather.',
    category: 'Outerwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '4',
    name: 'Classic Blue Denim Jeans',
    price: 79.99,
    image: blueJeans,
    description: 'High-quality denim jeans in classic blue wash. Comfortable stretch fabric with timeless straight-leg silhouette.',
    category: 'Bottoms',
    sizes: ['26', '27', '28', '29', '30', '31', '32']
  },
  {
    id: '5',
    name: 'Elegant Black Midi Dress',
    price: 149.99,
    image: blackDress,
    description: 'Sophisticated midi dress in premium black fabric. Features flattering A-line silhouette and three-quarter sleeves.',
    category: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '6',
    name: 'Cozy Cream Knit Sweater',
    price: 119.99,
    image: creamSweater,
    description: 'Luxuriously soft knit sweater in warm cream. Made from premium merino wool blend for ultimate comfort and warmth.',
    category: 'Knitwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '7',
    name: 'Navy Blue Tailored Blazer',
    price: 189.99,
    image: navyBlazer,
    description: 'Perfectly tailored blazer in classic navy blue. Features structured shoulders and clean lines for a polished professional look.',
    category: 'Blazers',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '8',
    name: 'Premium White Leather Sneakers',
    price: 129.99,
    image: whiteSneakers,
    description: 'Minimalist white sneakers crafted from premium leather. Features clean design and comfortable cushioning for all-day wear.',
    category: 'Shoes',
    sizes: ['36', '37', '38', '39', '40', '41', '42']
  },
  {
    id: '9',
    name: 'Luxury Silk Scarf',
    price: 69.99,
    image: silkScarf,
    description: 'Elegant silk scarf with geometric pattern. Made from 100% mulberry silk with hand-rolled edges for a luxurious finish.',
    category: 'Accessories',
    sizes: ['One Size']
  },
  {
    id: '10',
    name: 'Crisp White Button Shirt',
    price: 79.99,
    image: whiteShirt,
    description: 'Professional white button shirt in premium cotton. Features french cuffs and classic collar for a timeless business look.',
    category: 'Shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  }
];

// Generate additional products to reach 50+ items
const additionalProducts: Omit<Product, 'image'>[] = [
  { id: '11', name: 'Charcoal Wool Trousers', price: 139.99, description: 'Tailored wool trousers in sophisticated charcoal.', category: 'Bottoms', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '12', name: 'Burgundy Silk Blouse', price: 119.99, description: 'Luxurious silk blouse in rich burgundy.', category: 'Tops', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '13', name: 'Camel Cashmere Sweater', price: 229.99, description: 'Premium cashmere sweater in warm camel tone.', category: 'Knitwear', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '14', name: 'Black Ankle Boots', price: 179.99, description: 'Stylish ankle boots in genuine black leather.', category: 'Shoes', sizes: ['36', '37', '38', '39', '40', '41', '42'] },
  { id: '15', name: 'Olive Green Utility Jacket', price: 159.99, description: 'Modern utility jacket in trendy olive green.', category: 'Outerwear', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '16', name: 'Cream Pleated Skirt', price: 89.99, description: 'Elegant pleated skirt in soft cream.', category: 'Bottoms', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '17', name: 'Rose Gold Minimalist Watch', price: 249.99, description: 'Elegant minimalist watch with rose gold finish.', category: 'Accessories', sizes: ['One Size'] },
  { id: '18', name: 'Dusty Pink Cardigan', price: 99.99, description: 'Soft cardigan in beautiful dusty pink.', category: 'Knitwear', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '19', name: 'Grey Wool Coat', price: 199.99, description: 'Classic wool coat in sophisticated grey.', category: 'Outerwear', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '20', name: 'White Cotton T-Shirt', price: 39.99, description: 'Essential white t-shirt in premium cotton.', category: 'Tops', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '21', name: 'Black Leather Handbag', price: 189.99, description: 'Classic leather handbag in timeless black.', category: 'Accessories', sizes: ['One Size'] },
  { id: '22', name: 'Navy Striped Sweater', price: 89.99, description: 'Classic striped sweater in navy and white.', category: 'Knitwear', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '23', name: 'Beige Trench Coat', price: 249.99, description: 'Iconic trench coat in classic beige.', category: 'Outerwear', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '24', name: 'White Linen Pants', price: 79.99, description: 'Comfortable linen pants perfect for summer.', category: 'Bottoms', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '25', name: 'Black Turtleneck', price: 69.99, description: 'Essential black turtleneck in soft fabric.', category: 'Tops', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '26', name: 'Emerald Green Silk Dress', price: 189.99, description: 'Stunning silk dress in emerald green.', category: 'Dresses', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '27', name: 'Tan Leather Loafers', price: 149.99, description: 'Comfortable leather loafers in tan.', category: 'Shoes', sizes: ['36', '37', '38', '39', '40', '41', '42'] },
  { id: '28', name: 'Pearl Statement Necklace', price: 129.99, description: 'Elegant pearl necklace for special occasions.', category: 'Accessories', sizes: ['One Size'] },
  { id: '29', name: 'Lavender Cashmere Scarf', price: 89.99, description: 'Luxurious cashmere scarf in soft lavender.', category: 'Accessories', sizes: ['One Size'] },
  { id: '30', name: 'Charcoal Pencil Skirt', price: 79.99, description: 'Professional pencil skirt in charcoal grey.', category: 'Bottoms', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '31', name: 'Ivory Silk Camisole', price: 69.99, description: 'Delicate silk camisole in ivory.', category: 'Tops', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '32', name: 'Cognac Leather Belt', price: 59.99, description: 'Classic leather belt in rich cognac.', category: 'Accessories', sizes: ['S', 'M', 'L', 'XL'] },
  { id: '33', name: 'Rust Orange Midi Dress', price: 139.99, description: 'Bohemian midi dress in warm rust orange.', category: 'Dresses', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '34', name: 'Forest Green Wool Sweater', price: 119.99, description: 'Cozy wool sweater in deep forest green.', category: 'Knitwear', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '35', name: 'Nude Patent Heels', price: 139.99, description: 'Classic patent leather heels in nude.', category: 'Shoes', sizes: ['36', '37', '38', '39', '40', '41', '42'] },
  { id: '36', name: 'Camel Hair Coat', price: 299.99, description: 'Luxurious camel hair coat for winter.', category: 'Outerwear', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '37', name: 'Blush Pink Blouse', price: 89.99, description: 'Romantic blouse in soft blush pink.', category: 'Tops', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '38', name: 'Gold Hoop Earrings', price: 79.99, description: 'Classic gold hoop earrings.', category: 'Accessories', sizes: ['One Size'] },
  { id: '39', name: 'Denim Jacket', price: 99.99, description: 'Vintage-style denim jacket in blue wash.', category: 'Outerwear', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '40', name: 'Khaki Wide-Leg Pants', price: 89.99, description: 'Trendy wide-leg pants in khaki.', category: 'Bottoms', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '41', name: 'Cream Wool Vest', price: 109.99, description: 'Sleeveless wool vest in cream.', category: 'Tops', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '42', name: 'Black Combat Boots', price: 159.99, description: 'Edgy combat boots in black leather.', category: 'Shoes', sizes: ['36', '37', '38', '39', '40', '41', '42'] },
  { id: '43', name: 'Plaid Wool Scarf', price: 69.99, description: 'Classic plaid scarf in wool blend.', category: 'Accessories', sizes: ['One Size'] },
  { id: '44', name: 'Coral Wrap Dress', price: 129.99, description: 'Flattering wrap dress in coral.', category: 'Dresses', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '45', name: 'Grey Merino Wool Sweater', price: 139.99, description: 'Premium merino wool sweater in grey.', category: 'Knitwear', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '46', name: 'Brown Leather Ankle Boots', price: 169.99, description: 'Stylish ankle boots in brown leather.', category: 'Shoes', sizes: ['36', '37', '38', '39', '40', '41', '42'] },
  { id: '47', name: 'Silver Chain Bracelet', price: 59.99, description: 'Delicate silver chain bracelet.', category: 'Accessories', sizes: ['One Size'] },
  { id: '48', name: 'Mustard Yellow Cardigan', price: 99.99, description: 'Vibrant cardigan in mustard yellow.', category: 'Knitwear', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '49', name: 'Navy Pinstripe Blazer', price: 179.99, description: 'Professional pinstripe blazer in navy.', category: 'Blazers', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '50', name: 'Burgundy Velvet Dress', price: 159.99, description: 'Luxurious velvet dress in burgundy.', category: 'Dresses', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '51', name: 'White Leather Sneakers', price: 119.99, description: 'Clean white leather sneakers.', category: 'Shoes', sizes: ['36', '37', '38', '39', '40', '41', '42'] },
  { id: '52', name: 'Taupe Suede Jacket', price: 199.99, description: 'Soft suede jacket in taupe.', category: 'Outerwear', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '53', name: 'Rose Gold Watch', price: 229.99, description: 'Elegant watch with rose gold details.', category: 'Accessories', sizes: ['One Size'] },
  { id: '54', name: 'Sage Green Linen Shirt', price: 79.99, description: 'Relaxed linen shirt in sage green.', category: 'Shirts', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: '55', name: 'Black Wide-Brim Hat', price: 89.99, description: 'Chic wide-brim hat in black felt.', category: 'Accessories', sizes: ['One Size'] }
];

// Add placeholder images for additional products
export const allProducts: Product[] = [
  ...products,
  ...additionalProducts.map(product => ({
    ...product,
    image: products[Math.floor(Math.random() * products.length)].image // Use random existing image as placeholder
  }))
];

export const featuredProducts = products.slice(0, 6);