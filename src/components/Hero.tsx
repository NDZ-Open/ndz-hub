import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MeshBackground from './MeshBackground';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#12161E] overflow-hidden flex items-center justify-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#12161E] via-transparent to-[#12161E] z-0 pointer-events-none" />
      <MeshBackground />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-6xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#04E998]/30 bg-[#04E998]/10 text-[#04E998] text-sm font-medium mb-4 backdrop-blur-sm">
            Nation Development Zone
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-snug text-[#EEEEED] tracking-tight">
            Building Nigeria’s <span className="text-[#EEEEED]/90">Next Generation of</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04E998] to-[#00C27B]">Nation Builders</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#AEB0AA] font-medium max-w-2xl mx-auto leading-relaxed">
            Innovate. Build. Lead. Join the movement transforming the country through technology and leadership.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="px-8 py-4 bg-[#04E998] text-[#12161E] font-bold rounded-full hover:bg-[#04E998]/90 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(4,233,152,0.3)] hover:shadow-[0_0_30px_rgba(4,233,152,0.5)] transform hover:-translate-y-1">
              Join NDZ Hub <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-transparent border border-[#5C677A] text-[#EEEEED] font-medium rounded-full hover:bg-[#5C677A]/10 transition-all">
              Apply to Start a Chapter
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
