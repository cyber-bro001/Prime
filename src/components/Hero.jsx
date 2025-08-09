import heroImage from '../assets/prime-scent.jpg'

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center bg-secondary relative">
      <img src={heroImage} alt="Hero image " className="h-full" />
      
      <div className="absolute bg-primary/50 h-full w-full"></div>
      
      <div className="absolute px-6 pt-4 pb-6 z-20">
      <h2 className="text-5xl font-serif mb-4 text-secondary">Unveil Your Signature Scent</h2>
      <p className="max-w-xl mb-8 text-lg text-secondary/75 font-normal">Discover timeless fragrances that define elegance, crafted for every moment that matters.</p>
      <a href="#" className="px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-primary transition">Shop Now</a>
      </div>
    </section>
  )
}