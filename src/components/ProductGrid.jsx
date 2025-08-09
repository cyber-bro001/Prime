import ProductCard from './ProductCard';

import chanceChanel from '../assets/chance-chanel.jpg';
import redDiamond from '../assets/red-diamond.jpg';
import valentino from '../assets/valentino.jpg';

const products = [
  {
    id: 1,
    name: "Valentino",
    price: "$90",
    image: valentino
  },
  {
    id: 2,
    name: "Red Diamond",
    price: "$140",
    image: redDiamond
  },
  {
    id: 2,
    name: "Red Diamond",
    price: "$140",
    image: redDiamond
  },
  {
    id: 3,
    name: "Chance Chanel",
    price: "$120",
    image: chanceChanel
  }
];

export default function ProductGrid() {
  return (
    <>
      <div className="mt-20 text-center">
    <h2 className="text-3xl font-serif">Featured Fragrances</h2>
        <p className="mt-3 text-primary/70">Explore our top collections of signature fragrance.</p>
      </div>
    <section className="py-10 px-6 max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
    </>
  )
}