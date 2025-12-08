import { ArrowRight, Users, Heart, Rocket } from 'lucide-react';

const opportunities = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Start a Chapter',
    description: 'Build a student community of innovators on your campus.',
    action: 'Apply Now',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSetAZlO0iqNB-c46vQSJI2QlHDTbJTiqFeTig0mCHADH_Df3Q/viewform',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Become a Volunteer',
    description: 'Support NDZ events, coach teams, manage communities, and grow with us.',
    action: 'Join Us',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfTWSMRpKKdp6sAQ2rOxw1qRSZchQ52cdBHo1TIVkMTHCWwzA/viewform',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Lead a Project',
    description: 'Propose initiatives, form a team, and execute with NDZ backing.',
    action: 'Start Project',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfTWSMRpKKdp6sAQ2rOxw1qRSZchQ52cdBHo1TIVkMTHCWwzA/viewform',
  },
];

export default function Join() {
  return (
    <section id="join" className="py-24 bg-[#12161E] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-[#04E998]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 rounded-full border border-[#04E998]/30 bg-[#04E998]/10 text-[#04E998] text-xs font-bold tracking-wider uppercase mb-6">
            Get Involved
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#EEEEED] mb-6">Join the <span className="text-[#04E998]">NDZ Movement</span></h2>
          <p className="text-[#AEB0AA] text-lg leading-relaxed">
            Whether you want to lead, build, or support, there's a place for you in our ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((item, index) => (
            <div key={index} className="bg-[#1C1E28]/80 backdrop-blur-sm rounded-3xl p-10 hover:shadow-[0_10px_40px_-10px_rgba(4,233,152,0.15)] transition-all duration-300 border border-[#5C677A]/20 hover:border-[#04E998]/50 group hover:-translate-y-2">
              <div className="bg-[#04E998]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#04E998] transition-colors duration-300">
                <div className="text-[#04E998] group-hover:text-[#12161E] transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#EEEEED] mb-4">{item.title}</h3>
              <p className="text-[#AEB0AA] mb-8 leading-relaxed">{item.description}</p>
              
              <a 
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-transparent border border-[#5C677A] text-[#EEEEED] font-bold rounded-xl hover:bg-[#04E998] hover:border-[#04E998] hover:text-[#12161E] transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
              >
                {item.action} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
