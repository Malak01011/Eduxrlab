import { Trophy, Award, Zap, Target, Star, TrendingUp } from 'lucide-react';
import { allExperiments } from '../data/experiments';

interface DashboardProps {
  completedExperiments: string[];
  totalXP: number;
}

export default function Dashboard({ completedExperiments, totalXP }: DashboardProps) {
  const level = Math.floor(totalXP / 100) + 1;
  const xpForNextLevel = level * 100;
  const xpProgress = (totalXP % 100) / 100;

  const completedCount = completedExperiments.length;
  const totalExperiments = allExperiments.length;
  const completionRate = (completedCount / totalExperiments) * 100;

  const earnedBadges = allExperiments
    .filter(exp => completedExperiments.includes(exp.id) && exp.badge)
    .map(exp => exp.badge);

  const stats = [
    { label: 'Total XP', value: totalXP, icon: Zap, color: 'from-[#9a6bff] to-blue-500' },
    { label: 'Level', value: level, icon: Star, color: 'from-yellow-400 to-orange-500' },
    { label: 'Experiments', value: `${completedCount}/${totalExperiments}`, icon: Target, color: 'from-green-400 to-emerald-500' },
    { label: 'Completion', value: `${Math.round(completionRate)}%`, icon: TrendingUp, color: 'from-pink-400 to-purple-500' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0f3c] via-[#1a1f5c] to-[#0a0f3c] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#9a6bff]/20 rounded-2xl mb-4">
            <Trophy className="w-8 h-8 text-[#9a6bff]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Learning Dashboard
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Track your progress, celebrate achievements, and continue your journey to mastery.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Level {level}</h3>
              <p className="text-white/70">
                {xpForNextLevel - totalXP} XP to Level {level + 1}
              </p>
            </div>

            <div className="text-right">
              <div className="text-3xl font-bold text-[#9a6bff]">{totalXP} XP</div>
              <div className="text-white/70 text-sm">Total Experience</div>
            </div>
          </div>

          <div className="w-full bg-white/10 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-[#9a6bff] to-blue-500 h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
              style={{ width: `${xpProgress * 100}%` }}
            >
              {xpProgress > 0.1 && (
                <span className="text-xs font-semibold text-white">
                  {Math.round(xpProgress * 100)}%
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {earnedBadges.length > 0 && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Award className="w-6 h-6 text-[#9a6bff]" />
              <h3 className="text-2xl font-bold text-white">Earned Badges</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {earnedBadges.map((badge, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#9a6bff]/20 to-blue-500/20 border border-[#9a6bff]/30 rounded-xl p-4 flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-semibold">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {completedCount === 0 && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center">
            <Trophy className="w-16 h-16 text-[#9a6bff]/50 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Start Your Journey</h3>
            <p className="text-white/70 mb-6">
              Complete experiments to earn XP, unlock badges, and level up your skills!
            </p>
          </div>
        )}

        {completedCount === totalExperiments && (
          <div className="bg-gradient-to-r from-[#9a6bff] to-blue-500 rounded-3xl p-12 text-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <Trophy className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Master Achievement!</h3>
            <p className="text-white/90 text-lg">
              You've completed all experiments! You're a true EduXR Lab champion!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
