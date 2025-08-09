export default function BrandTimeline() {
  const milestones = [
    {
      year: '2018',
      title: 'Founded',
      description: 'Prime was born with a vision to craft timeless, elegant fragrances.',
    },
    {
      year: '2019',
      title: 'First Collection',
      description: 'Launched our debut collection of three signature scents.',
    },
    {
      year: '2021',
      title: 'Global Reach',
      description: 'Expanded to over 20 countries, sharing our scents worldwide.',
    },
    {
      year: '2024 - 2025',
      title: 'Sustainability',
      description: 'Committed to eco-friendly packaging and responsibly sourced ingredients.',
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h3 className="text-2xl font-serif mb-12 text-center">Our Journey</h3>
      <div className="border-l-2 border-accent pl-4">
        {milestones.map((item, index) => (
          <div key={index} className="mb-8 relative">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent"></div>
            <div className="ml-4">
            <h4 className="text-xl font-bold">{item.year}</h4>
            <h5 className="text-lg font-serif mb-1">{item.title}</h5>
            <p className="text-gray-600">{item.description}</p>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}