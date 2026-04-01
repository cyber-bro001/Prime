import heroImage from '../assets/prime-scent.jpg'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center">
      {/* Hero image */}
      <img 
        src={heroImage} 
        alt="Hero image" 
        className="absolute inset-0 w-full h-full object-cover" 
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/50"></div>

      {/* Text content */}
      <div className="relative z-20 px-6">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-secondary">
          Unveil Your Signature Scent
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-lg text-secondary/95 font-normal">
          Discover timeless fragrances that define elegance, crafted for every moment that matters.
        </p>
        <a 
          href="#" 
          className="px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-primary transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  )
}
