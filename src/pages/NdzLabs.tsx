import { motion } from 'framer-motion';
import { FlaskConical, Rocket, Brain, ArrowRight } from 'lucide-react';
import MeshBackground from '../components/MeshBackground';

export default function NdzLabs() {
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
              Innovation Engine
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#EEEEED] mb-6">
              NDZ <span className="text-[#04E998]">Labs</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#AEB0AA] max-w-2xl mx-auto leading-relaxed mb-10">
              The incubation center for groundbreaking student projects. Turn your ideas into reality.
            </p>
             <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfTWSMRpKKdp6sAQ2rOxw1qRSZchQ52cdBHo1TIVkMTHCWwzA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#04E998] text-[#12161E] font-bold rounded-full hover:bg-[#04E998]/90 transition-all inline-flex items-center gap-2 shadow-[0_0_20px_rgba(4,233,152,0.3)] hover:shadow-[0_0_30px_rgba(4,233,152,0.5)] transform hover:-translate-y-1"
            >
              Apply to Labs <ArrowRight size={20} />
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
                <FlaskConical className="text-[#04E998] group-hover:text-[#12161E] w-8 h-8 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#EEEEED] mb-4">Experimentation</h3>
              <p className="text-[#AEB0AA] leading-relaxed">
                 A safe space to test new technologies and methodologies without fear of failure.
              </p>
            </div>
             <div className="bg-[#1C1E28] p-8 rounded-3xl border border-[#5C677A]/20 hover:border-[#04E998]/50 transition-all group">
              <div className="bg-[#04E998]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#04E998] transition-colors">
                <Rocket className="text-[#04E998] group-hover:text-[#12161E] w-8 h-8 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#EEEEED] mb-4">Launchpad</h3>
              <p className="text-[#AEB0AA] leading-relaxed">
                Get the resources, mentorship, and visibility needed to launch your product to the world.
              </p>
            </div>
             <div className="bg-[#1C1E28] p-8 rounded-3xl border border-[#5C677A]/20 hover:border-[#04E998]/50 transition-all group">
              <div className="bg-[#04E998]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#04E998] transition-colors">
                <Brain className="text-[#04E998] group-hover:text-[#12161E] w-8 h-8 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#EEEEED] mb-4">Expert Mentorship</h3>
              <p className="text-[#AEB0AA] leading-relaxed">
                Connect with industry veterans who can guide you through technical and business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
