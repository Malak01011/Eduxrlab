import { Beaker, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f3c] border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <Beaker className="w-6 h-6 text-[#9a6bff]" />
            <span className="text-xl font-bold text-white">EduXR Lab</span>
          </div>

          <div className="flex items-center space-x-2 text-white/70">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
            <span>by Malak Mahmoud & Mariam Waled</span>
          </div>

          <p className="text-white/50 text-sm text-center">
            Transforming education through immersive VR/AR experiences
          </p>

          <div className="text-white/40 text-sm">
            © 2025 EduXR Lab. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
