import {ShoppingBag} from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="border border-secondary p-4 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 group">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded" />
      <h3 className="text-xl font-serif mb-2">{product.name}</h3>
      <p className="text-primary/70 mb-4">{product.price}</p>
      <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-accent transition flex items-center gap-2"><ShoppingBag className=" 
      w-5 h-5 text-inherit" /> Add to Cart</button>
    </div>
  )
}