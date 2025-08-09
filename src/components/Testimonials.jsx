export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sophia L.',
      text: 'Prime fragrances are my daily luxury — subtle yet unforgettable.',
    },
    {
      name: 'James M.',
      text: 'The scent lasts all day and always gets compliments.',
    },
    {
      name: 'Emily R.',
      text: 'Elegant packaging, beautiful scents. I’m in love!',
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h3 className="text-2xl font-serif mb-12">What Our Customers Say</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="text-gray-700 mb-4">"{item.text}"</p>
            <h4 className="font-bold">{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}