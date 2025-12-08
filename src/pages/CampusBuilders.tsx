import { motion } from 'framer-motion';
import { Hammer, Briefcase, Trophy, ArrowRight } from 'lucide-react';
import MeshBackground from '../components/MeshBackground';

export default function CampusBuilders() {
  return (
    <div className="bg-[#12161E] min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <MeshBackground />
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#04E998]/30 bg-[#04E998]/10 text-[#04E998] text-sm font-medium mb-6">
              Skill Development
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#EEEEED] mb-6">
              Campus <span className="text-[#04E998]">Builders</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#AEB0AA] max-w-2xl mx-auto leading-relaxed mb-10">
              Equipping the next generation of builders with hands-on skills and real-world experience.
            </p>
             <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfTWSMRpKKdp6sAQ2rOxw1qRSZchQ52cdBHo1TIVkMTHCWwzA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#04E998] text-[#12161E] font-bold rounded-full hover:bg-[#04E998]/90 transition-all inline-flex items-center gap-2 shadow-[0_0_20px_rgba(4,233,152,0.3)] hover:shadow-[0_0_30px_rgba(4,233,152,0.5)] transform hover:-translate-y-1"
            >
              Start Building <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1C1E28] p-8 rounded-3xl border border-[#5C677A]/20 hover:border-[#04E998]/50 transition-all group">
              <div className="bg-[#04E998]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#04E998] transition-colors">
                <Hammer className="text-[#04E998] group-hover:text-[#12161E] w-8 h-8 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#EEEEED] mb-4">Hands-on Workshops</h3>
              <p className="text-[#AEB0AA] leading-relaxed">
                Learn by doing. Our workshops focus on practical skills that you can apply immediately.
              </p>
            </div>
             <div className="bg-[#1C1E28] p-8 rounded-3xl border border-[#5C677A]/20 hover:border-[#04E998]/50 transition-all group">
              <div className="bg-[#04E998]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#04E998] transition-colors">
                <Briefcase className="text-[#04E998] group-hover:text-[#12161E] w-8 h-8 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#EEEEED] mb-4">Career Readiness</h3>
              <p className="text-[#AEB0AA] leading-relaxed">
                Prepare for the workforce with resume reviews, mock interviews, and career guidance.
              </p>
            </div>
             <div className="bg-[#1C1E28] p-8 rounded-3xl border border-[#5C677A]/20 hover:border-[#04E998]/50 transition-all group">
              <div className="bg-[#04E998]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#04E998] transition-colors">
                <Trophy className="text-[#04E998] group-hover:text-[#12161E] w-8 h-8 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#EEEEED] mb-4">Challenges & Competitions</h3>
              <p className="text-[#AEB0AA] leading-relaxed">
                Test your skills in friendly competitions and earn recognition for your achievements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
