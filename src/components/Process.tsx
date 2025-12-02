


const services = [
  {
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop',
    title: 'Campus Builders Program',
    subtitle: 'Student-led execution teams',
  },
  {
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=2670&auto=format&fit=crop',
    title: 'NDZ Labs',
    subtitle: 'Innovation pods & prototypes',
  },
  {
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2574&auto=format&fit=crop',
    title: 'Creative Studios',
    subtitle: 'Design, content & podcasting',
  },
];

export default function Process() {
  return (
    <section id="programs" className="py-24 bg-[#12161E] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#04E998]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 rounded-full border border-[#04E998]/30 bg-[#04E998]/10 text-[#04E998] text-xs font-bold tracking-wider uppercase mb-6">
            Our Programs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#EEEEED] mb-6">Smart, Sustainable & <span className="text-[#04E998]">Student-Led</span> Impact</h2>
          <p className="text-[#AEB0AA] text-lg leading-relaxed">
            NDZ empowers students to build practical solutions, run community experiments, and execute campus-based initiatives that promote leadership, creativity, and nation-building.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl border border-[#5C677A]/20 hover:border-[#04E998]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-[#12161E] via-[#12161E]/20 to-transparent z-10" />
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-1 bg-[#04E998] mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                <h3 className="text-2xl font-bold text-[#EEEEED] mb-2">{service.title}</h3>
                <p className="text-[#AEB0AA] text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {service.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
