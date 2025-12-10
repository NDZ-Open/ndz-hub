import { ArrowUpRight } from 'lucide-react';
import hackathonsImg from '../assets/Hackathons.jpg';
import publicLecturesImg from '../assets/Public Lectures.jpg';
import communityProjectsImg from '../assets/Community Projects.jpg';
import campusBuildersImg from '../assets/Campus Builders.jpg';

const projects = [
  {
    image: hackathonsImg,
    title: 'Hackathons',
    category: 'Innovation',
  },
  {
    image: publicLecturesImg,
    title: 'Public Lectures',
    category: 'Education',
  },
  {
    image: communityProjectsImg,
    title: 'Community Projects',
    category: 'Impact',
  },
  {
    image: campusBuildersImg,
    title: 'Tech Workshops',
    category: 'Skills',
  },
];

export default function Gallery() {
  return (
    <section id="community" className="py-24 bg-[#12161E] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="inline-block px-3 py-1 rounded-full border border-[#04E998]/30 bg-[#04E998]/10 text-[#04E998] text-xs font-bold tracking-wider uppercase mb-6">
              Discover
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#EEEEED] leading-tight">Explore Recent <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04E998] to-[#00C27B]">Campus Activities</span></h2>
          </div>
          <a 
            href="https://luma.com/user/ndz"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-[#EEEEED] font-bold hover:text-[#04E998] transition-colors group"
          >
            View All Activities <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer border border-[#5C677A]/20 hover:border-[#04E998]/50 transition-all duration-500">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12161E] via-[#12161E]/40 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="w-8 h-1 bg-[#04E998] mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <span className="text-[#04E998] text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold text-[#EEEEED] group-hover:text-[#04E998] transition-colors duration-300">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
            <a 
              href="https://luma.com/user/ndz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#EEEEED] font-bold hover:text-[#04E998] transition-colors"
            >
                View All Activities <ArrowUpRight size={20} />
            </a>
        </div>
      </div>
    </section>
  );
}
