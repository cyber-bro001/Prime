import{useState} from 'react';

import ProductCard from '../components/ProductCard';

import valentino from '../assets/valentino.jpg';
import redDiamond from '../assets/red-diamond.jpg';
import chanceChanel from '../assets/chance-chanel.jpg';

const products = [
  {
    id: 1,
    name: "Valentino",
    price: "$90",
    category: "For men",
    image: valentino
  },
  {
    id: 2,
    name: "Red Diamond",
    price: "$140",
    category: "For women",
    image: redDiamond
  },
  {
    id: 3,
    name: "Chance Chanel",
    price: "$120",
    category: "For men",
    image: chanceChanel
  },
  {
    id: 4,
    name: "Classic Rose",
    price: "$80",
    category: "For women",
    image: valentino // Replace with real image later
  },
  {
    id: 5,
    name: "Mystic Oud",
    price: "$150",
    category: "For men",
    image: redDiamond // Replace with real image later
  },
  {
    id: 6,
    name: "Golden Amber",
    price: "$110",
    category: "For men",
    image: chanceChanel // Replace with real image later
  }
];

export default function ShopSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "For men", "For women", "Unisex"]; 
  
  const filteredProducts = 
  selectedCategory === "All"
  ? products 
  : products.filter(p => p.category === selectedCategory);
  
  return (
    <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      {/* Mini Hero */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif mb-4">Shop Our Collection</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Discover timeless scents crafted with elegance and passion. Find your signature fragrance today.
        </p>
      </div>
      
      
      {/*Filter Button*/}
      <div className="sticky top-0 bg-secondary/20 backdrop-blur py-4 flex items-center justify-center gap-4 flex-wrap mb-12">
        { categories.map(cat => 
        <button 
        key={cat}
        onClick={() =>
          setSelectedCategory(cat)}
        className={`px-4 py-2 rounded-full border ${
          selectedCategory === cat
         ? 'bg-black text-white'
         : 'bg-white text-black hover:bg-black hover:text-white'
        } transition duration-300`}
        >
          {cat}
        </button>
        )}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}