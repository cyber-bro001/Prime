import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <ProductGrid />
        <Testimonials />
      </main>
    </div>
  )
}