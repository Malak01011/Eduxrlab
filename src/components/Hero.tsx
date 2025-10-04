import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onStartExperimenting: () => void;
}

export default function Hero({ onStartExperimenting }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f3c] via-[#1a1f5c] to-[#0a0f3c]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#9a6bff] rounded-full filter blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6 space-x-2">
          <Sparkles className="w-6 h-6 text-[#9a6bff] animate-pulse" />
          <span className="text-[#9a6bff] font-semibold tracking-wide uppercase text-sm">
            The Future of Learning
          </span>
          <Sparkles className="w-6 h-6 text-[#9a6bff] animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Step into the Future of Learning
        </h1>

        <p className="text-2xl md:text-3xl text-[#9a6bff] font-light mb-8">
          Experience Science with EduXR Lab
        </p>

        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
          Join interactive experiments in physics, chemistry, and engineering through a
          VR/AR-powered learning experience. Turn your classroom into an adventure lab
          where students experiment, discover, and learn.
        </p>

        <button
          onClick={onStartExperimenting}
          className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-[#9a6bff] to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl shadow-[#9a6bff]/50 hover:shadow-[#9a6bff]/80 transition-all duration-300 hover:scale-105"
        >
          <span>Start Experimenting</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { label: 'Interactive Experiments', value: '20+' },
            { label: 'Learning Modules', value: '50+' },
            { label: 'Students Engaged', value: '1000+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-[#9a6bff] mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#9a6bff] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
