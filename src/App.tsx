
import './App.css'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa'
import vinayImage from './assets/vinay.jpg'
import { ExternalBrowserPrompt } from './components/ExternalBrowserPrompt'

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  gradient: string;
}

function App() {
  const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/nitianvinaypatel', icon: <FaGithub />, gradient: 'from-gray-700 to-gray-900' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/nitianvinaypatel', icon: <FaLinkedin />, gradient: 'from-blue-500 to-blue-700' },
    { name: 'Twitter', url: 'https://x.com/vinay_nitmz', icon: <FaTwitter />, gradient: 'from-sky-400 to-blue-500' },
    { name: 'Instagram', url: 'https://instagram.com/er.vinaypatel', icon: <FaInstagram />, gradient: 'from-pink-500 to-rose-600' },
    // { name: 'YouTube', url: 'https://youtube.com/@yourusername', icon: <FaYoutube />, gradient: 'from-red-500 to-red-700' },
    { name: 'Portfolio', url: 'https://vinay-patel.vercel.app/', icon: <FaGlobe />, gradient: 'from-purple-500 to-indigo-600' },
  ];

  return (
    <>
      <ExternalBrowserPrompt />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
        </div>

        <div className="w-full max-w-md relative z-10">
          {/* Profile Section */}
          <div className="text-center mb-10 animate-fade-in">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500 p-1 shadow-2xl animate-float">
                <img
                  src={vinayImage}
                  alt="Vinay Patel"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 flex items-center justify-center text-lg">
                ✨
              </div>
            </div>
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-3 animate-gradient">
              Vinay Patel
            </h1>
            <p className="text-gray-300 text-lg font-light tracking-wide">
              Software Engineer
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-white font-medium text-lg transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 shadow-xl hover:shadow-2xl hover:border-white/20 animate-slide-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                <div className="flex items-center justify-between relative z-10">
                  <span className="flex items-center gap-4">
                    <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </span>
                  <span className="text-2xl opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                </div>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-10 text-gray-400 text-sm font-light animate-fade-in-delayed">
            <p className="mb-2">Made with ❤️ by Vinay Patel</p>
            <p>© 2025 All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
