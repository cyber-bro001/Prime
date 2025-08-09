import aboutImage from '../assets/about-image.jpg';

export default function AboutSection() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto flex flex-col-reverse md:flex-row-reverse items-center gap-12">
      <div className="flex-1">
        <img
          src={aboutImage}
          alt="About Prime"
          className="w-full h-96 object-cover rounded-2xl shadow"
        />
      </div>
      
      <div className="flex-1">
        <h2 className="text-3xl font-serif mb-4">Our Story</h2>
        <p className="text-lg text-gray-600 mb-6">
          At Prime, we craft timeless fragrances that evoke elegance and emotion.
          Each scent is designed to leave a lasting impression — subtle, yet unforgettable.
        </p>
        <p className="text-lg text-gray-600">
          Inspired by classic perfumery and modern minimalism, our perfumes are made for
          those who appreciate the art of subtle luxury.
        </p>
      </div>
    </section>
  );
}