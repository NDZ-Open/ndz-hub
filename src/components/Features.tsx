import { Users, Building2, Heart, Play } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Campus Builders',
    description: 'Hands-on projects, startup sprints, technical workshops, and challenge-based learning led by student teams.',
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'University Chapters',
    description: 'A growing network of NDZ-aligned communities empowering students to innovate on their campuses.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Volunteer Network',
    description: 'Become part of NDZ\'s national volunteer force—support events, mentor younger students, and drive impact across Nigeria.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-[#12161E] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-[#04E998]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#04E998] to-[#00C27B] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <div className="relative rounded-2xl overflow-hidden border border-[#5C677A]/30 aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop" 
                alt="Students working" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#12161E]/40 flex items-center justify-center cursor-pointer backdrop-blur-[2px]">
                <div className="w-20 h-20 bg-[#04E998]/90 backdrop-blur-md rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(4,233,152,0.4)]">
                  <Play fill="#12161E" className="text-[#12161E] w-8 h-8" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block px-3 py-1 rounded-full border border-[#04E998]/30 bg-[#04E998]/10 text-[#04E998] text-xs font-bold tracking-wider uppercase mb-6">
              Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#EEEEED] mb-6 leading-tight">
              Innovation thrives where <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04E998] to-[#00C27B]">young builders</span> gather.
            </h2>
            <p className="text-[#AEB0AA] mb-8 leading-relaxed text-lg">
              NDZ Hub is the heartbeat of Nigeria’s emerging builder culture—uniting students, creators, founders, and problem-solvers across universities.
              <br /><br />
              Explore how NDZ Chapters drive real-world impact through hackathons, micro-projects, community challenges, and student-led initiatives.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 border border-[#5C677A] text-[#EEEEED] font-bold rounded-full hover:bg-[#5C677A]/10 hover:border-[#04E998]/50 transition-all">
                Join NDZ Hub
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1C1E28]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#5C677A]/20 hover:border-[#04E998]/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(4,233,152,0.1)]">
              <div className="mb-6 bg-[#04E998]/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-[#04E998] transition-colors duration-300">
                <div className="text-[#04E998] group-hover:text-[#12161E] transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#EEEEED] mb-3">{feature.title}</h3>
              <p className="text-[#AEB0AA] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
