import { Experiment } from '../types';
import { Beaker, Zap, Award, ArrowRight } from 'lucide-react';

interface ExperimentCardProps {
  experiment: Experiment;
  onStart: (experiment: Experiment) => void;
  isCompleted?: boolean;
}

export default function ExperimentCard({ experiment, onStart, isCompleted }: ExperimentCardProps) {
  const difficultyColors = {
    beginner: 'text-green-400 bg-green-400/10',
    intermediate: 'text-yellow-400 bg-yellow-400/10',
    advanced: 'text-red-400 bg-red-400/10',
  };

  return (
    <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#9a6bff]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#9a6bff]/20">
      {isCompleted && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 shadow-lg">
          <Award className="w-3 h-3" />
          <span>Completed</span>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="bg-[#9a6bff]/20 p-3 rounded-xl">
          {experiment.category === 'science' ? (
            <Beaker className="w-6 h-6 text-[#9a6bff]" />
          ) : (
            <Zap className="w-6 h-6 text-[#9a6bff]" />
          )}
        </div>

        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[experiment.difficulty]}`}>
          {experiment.difficulty}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{experiment.title}</h3>

      <p className="text-white/70 text-sm mb-4 line-clamp-2">
        {experiment.description}
      </p>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 text-[#9a6bff]">
          <Award className="w-4 h-4" />
          <span className="text-sm font-semibold">{experiment.xpReward} XP</span>
        </div>

        <span className="text-white/50 text-xs">{experiment.steps.length} Steps</span>
      </div>

      <button
        onClick={() => onStart(experiment)}
        className="w-full bg-gradient-to-r from-[#9a6bff] to-blue-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-[#9a6bff]/50 transition-all duration-300 group-hover:scale-105"
      >
        <span>{isCompleted ? 'Try Again' : 'Start Experiment'}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
