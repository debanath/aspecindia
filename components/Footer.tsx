import { GraduationCap, Mail, MapPin, MessageSquare, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#09090b] border-t border-gray-800 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 bg-white/10 border border-white/15 text-white rounded-md flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4 text-[#0066ff]" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                ASPEC
              </span>
            </div>
            <p className="text-xs text-gray-300 font-medium mb-3">
              After School Professional Education Center • Lanka
            </p>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              A computer learning institute offering accredited diploma certifications, practical computer lab training, 24/7 online study material access, and verifiable credentials.
            </p>
            <div className="text-xs text-gray-400 space-y-1">
              <div><span className="font-semibold text-gray-200">Inaugural Session:</span> Starting 2027</div>
              <div><span className="font-semibold text-gray-200">Center Hours:</span> Mon – Sat: 8:00 AM – 7:30 PM</div>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4 font-mono">
              Diploma Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  ADCA - Advance Diploma in Computer Applications
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  BCA - Bachelor of Computer Applications Curriculum
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  PGDCA - Post Graduate Diploma in Computer Applications
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  DCA - Diploma in Computer Applications
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  iCA - Industrial Computer Accounting (Tally Prime & GST)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Short-Term Technical Crash Courses & Bootcamps
                </a>
              </li>
            </ul>
          </div>

          {/* Student Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4 font-mono">
              Student Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#portal" className="hover:text-white transition-colors">
                  Student Login & Study Portal
                </a>
              </li>
              <li>
                <a href="#portal" className="hover:text-white transition-colors">
                  Online Fee Payment Portal
                </a>
              </li>
              <li>
                <a href="#verification" className="hover:text-white transition-colors">
                  Certificate Legitimacy Verification
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-white transition-colors">
                  2027 Admission Pre-Registration
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Curriculum Syllabus & Course Eligibility
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4 font-mono">
              Lanka Campus Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5 text-gray-300">
                <MapPin className="w-4 h-4 text-[#0066ff] shrink-0 mt-0.5" />
                <span>
                  LP Road, Near Bajaj Finance,<br />
                  Lanka, PIN: 782446, Assam
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-300">
                <Phone className="w-4 h-4 text-[#0066ff] shrink-0" />
                <a href="tel:+919101158043" className="hover:text-white transition-colors">
                  +91 91011 58043
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-300">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/919101158043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-emerald-400"
                >
                  WhatsApp: +91 91011 58043
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-300">
                <Mail className="w-4 h-4 text-[#0066ff] shrink-0" />
                <a href="mailto:contact@aspecindia.com" className="hover:text-white transition-colors">
                  contact@aspecindia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} ASPEC (After School Professional Education Center). All rights reserved.</p>
          <p className="text-gray-400">Inaugural Batch Starting 2027 • Lanka Center</p>
        </div>
      </div>
    </footer>
  );
}
