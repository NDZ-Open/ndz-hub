import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D1016] text-[#EEEEED] pt-24 pb-12 border-t border-[#5C677A]/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="NDZ Hub" className="h-10 w-auto" />
            </div>
            <p className="text-[#AEB0AA] leading-relaxed">
              Nigeria’s university-wide innovation movement. Empowering students to build, learn, and lead real projects with real impact.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1C1E28] border border-[#5C677A]/20 flex items-center justify-center hover:bg-[#04E998] hover:text-[#12161E] hover:border-[#04E998] transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1C1E28] border border-[#5C677A]/20 flex items-center justify-center hover:bg-[#04E998] hover:text-[#12161E] hover:border-[#04E998] transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1C1E28] border border-[#5C677A]/20 flex items-center justify-center hover:bg-[#04E998] hover:text-[#12161E] hover:border-[#04E998] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1C1E28] border border-[#5C677A]/20 flex items-center justify-center hover:bg-[#04E998] hover:text-[#12161E] hover:border-[#04E998] transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-[#EEEEED]">Programs</h3>
            <ul className="space-y-4 text-[#AEB0AA]">
              <li><Link to="/chapters" className="hover:text-[#04E998] transition-colors">NDZ Chapters</Link></li>
              <li><Link to="/labs" className="hover:text-[#04E998] transition-colors">NDZ Labs</Link></li>
              <li><Link to="/builders" className="hover:text-[#04E998] transition-colors">Campus Builders</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-[#EEEEED]">Community</h3>
            <ul className="space-y-4 text-[#AEB0AA]">
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfTWSMRpKKdp6sAQ2rOxw1qRSZchQ52cdBHo1TIVkMTHCWwzA/viewform" target="_blank" rel="noopener noreferrer" className="hover:text-[#04E998] transition-colors">Join as a Volunteer</a></li>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdgmU3Ojt2zwan125k4aRVSoa5e9FW4mp3GCjWcww5UqwPziQ/viewform?usp=send_form" target="_blank" rel="noopener noreferrer" className="hover:text-[#04E998] transition-colors">Become a Partner</a></li>
              <li><a href="https://ndz.ng/t/hiring" target="_blank" rel="noopener noreferrer" className="hover:text-[#04E998] transition-colors">Campus Opportunities</a></li>
              <li><a href="https://luma.com/user/ndz" target="_blank" rel="noopener noreferrer" className="hover:text-[#04E998] transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-[#EEEEED]">Quick Links</h3>
            <ul className="space-y-4 text-[#AEB0AA]">
              <li><a href="https://ndz.ng" target="_blank" rel="noopener noreferrer" className="hover:text-[#04E998] transition-colors">NDZ Forum</a></li>
              <li><a href="https://journal.ndz.ng" target="_blank" rel="noopener noreferrer" className="hover:text-[#04E998] transition-colors">NDZ Journal</a></li>
              <li><a href="https://wiki.ndz.ng" target="_blank" rel="noopener noreferrer" className="hover:text-[#04E998] transition-colors">NDZ Wiki</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#5C677A]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#5C677A] text-sm">
            © {new Date().getFullYear()} NDZ Hub. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-[#5C677A]">
            <a href="#" className="hover:text-[#04E998] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#04E998] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
