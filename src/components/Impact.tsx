import { Building2, Users, Rocket, FlaskConical } from 'lucide-react';

const benefits = [
  {
    icon: <Users className="w-6 h-6" />,
    title: '10K+ Student Builders Across Nigeria',
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: '25+ Active University Chapters',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: '300+ Community Projects Launched',
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: '50+ Startup Experiments in Progress',
  },
];

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-[#12161E] text-[#EEEEED] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#04E998]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full border border-[#04E998]/30 bg-[#04E998]/10 text-[#04E998] text-xs font-bold tracking-wider uppercase mb-6">
              Our Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              We Build Scalable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04E998] to-[#00C27B]">Campuses of Innovation</span>
            </h2>
            <p className="text-[#EEEEED]/80 mb-8 leading-relaxed text-lg">
              NDZ Hub is driving a national movement of student-led innovation, empowering the next generation of Nigerian leaders to build, create, and solve problems in their communities.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-6 bg-[#1C1E28]/50 p-6 rounded-2xl border border-[#5C677A]/20 hover:border-[#04E998]/50 transition-all duration-300 group">
                  <div className="bg-[#04E998]/10 p-4 rounded-xl group-hover:bg-[#04E998] transition-colors duration-300">
                    <div className="text-[#04E998] group-hover:text-[#12161E] transition-colors duration-300">
                      {benefit.icon}
                    </div>
                  </div>
                  <span className="font-bold text-lg text-[#EEEEED]">{benefit.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-[#04E998]/20 rounded-3xl blur-xl" />
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2670&auto=format&fit=crop" 
              alt="Impact" 
              className="relative rounded-3xl w-full shadow-2xl border border-[#5C677A]/20"
            />
            <div className="absolute -bottom-8 -right-8 bg-[#1C1E28] p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#5C677A]/30 hidden md:block">
              <p className="text-5xl font-bold text-[#04E998] mb-1">10k+</p>
              <p className="font-medium text-[#AEB0AA]">Student Builders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
