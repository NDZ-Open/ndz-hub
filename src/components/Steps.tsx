import { ClipboardList, Sprout, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Plan',
    description: 'Your team submits an activity roadmap: events, workshops, challenges, micro-projects.',
    icon: <ClipboardList className="w-6 h-6 text-[#04E998]" />,
  },
  {
    number: '02',
    title: 'Execute',
    description: 'NDZ supports your campus team with resources, frameworks, mentors, and toolkits.',
    icon: <Sprout className="w-6 h-6 text-[#04E998]" />,
  },
  {
    number: '03',
    title: 'Showcase',
    description: 'Share your outcomes. Get featured across NDZ Hub, social platforms, and partner networks.',
    icon: <CheckCircle2 className="w-6 h-6 text-[#04E998]" />,
  },
];

export default function Steps() {
  return (
    <section className="py-24 bg-[#12161E] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#04E998]/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 rounded-full border border-[#04E998]/30 bg-[#04E998]/10 text-[#04E998] text-xs font-bold tracking-wider uppercase mb-6">
            Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#EEEEED] mb-6">How NDZ Chapters Operate</h2>
          <p className="text-[#AEB0AA] text-lg leading-relaxed">
            A simple, structured approach to launching and running a successful innovation chapter on your campus.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#04E998]/30 to-transparent -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 bg-[#1C1E28] p-8 rounded-3xl border border-[#5C677A]/20 text-center hover:transform hover:-translate-y-2 transition-all duration-300 hover:border-[#04E998]/50 hover:shadow-[0_10px_30px_-10px_rgba(4,233,152,0.2)] group">
              <div className="w-16 h-16 mx-auto bg-[#12161E] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#04E998]/5 border border-[#5C677A]/30 group-hover:border-[#04E998]/50 transition-colors duration-300">
                {step.icon}
              </div>
              <div className="text-5xl font-bold text-[#5C677A]/10 mb-4 absolute top-4 right-6 select-none">{step.number}</div>
              <h3 className="text-xl font-bold text-[#EEEEED] mb-3 relative z-10">{step.title}</h3>
              <p className="text-[#AEB0AA] relative z-10 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
