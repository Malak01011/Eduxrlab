import { useState } from 'react';
import { Experiment } from '../types';
import { X, CheckCircle, Sparkles } from 'lucide-react';

interface ExperimentModalProps {
  experiment: Experiment;
  onClose: () => void;
  onComplete: (experimentId: string, xp: number) => void;
}

export default function ExperimentModal({ experiment, onClose, onComplete }: ExperimentModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNextStep = () => {
    if (currentStep < experiment.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      onComplete(experiment.id, experiment.xpReward);
    }
  };

  const step = experiment.steps[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-[#0a0f3c] to-[#1a1f5c] border border-[#9a6bff]/30 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {!isCompleted ? (
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">{experiment.title}</h2>
              <p className="text-white/70">{experiment.description}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/70">Progress</span>
                <span className="text-sm text-[#9a6bff] font-semibold">
                  Step {currentStep + 1} of {experiment.steps.length}
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#9a6bff] to-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentStep + 1) / experiment.steps.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-6 min-h-[300px] flex flex-col items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-[#9a6bff]/20 to-blue-500/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <Sparkles className="w-24 h-24 text-[#9a6bff]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {step.instruction}
              </h3>

              <p className="text-white/70 text-center max-w-md">
                {currentStep === 0 && "Let's begin the experiment! Follow each step carefully."}
                {currentStep > 0 && currentStep < experiment.steps.length - 1 && "Great progress! Continue to the next step."}
                {currentStep === experiment.steps.length - 1 && "Final step! Complete this to finish the experiment."}
              </p>
            </div>

            <button
              onClick={handleNextStep}
              className="w-full bg-gradient-to-r from-[#9a6bff] to-blue-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-[#9a6bff]/50 transition-all duration-300 hover:scale-105"
            >
              {currentStep === experiment.steps.length - 1 ? 'Complete Experiment' : 'Next Step'}
            </button>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle className="w-16 h-16 text-white" />
              </div>

              <h2 className="text-4xl font-bold text-white mb-4">Experiment Completed!</h2>

              {experiment.badge && (
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#9a6bff] to-blue-500 text-white px-6 py-3 rounded-full mb-6">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-semibold">Badge Earned: {experiment.badge}</span>
                </div>
              )}

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold text-[#9a6bff] mb-3">What You Learned</h3>
                <p className="text-white/80 leading-relaxed">{experiment.impact}</p>
              </div>

              <div className="text-[#9a6bff] text-2xl font-bold mb-6">
                +{experiment.xpReward} XP Earned!
              </div>
            </div>

            <button
              onClick={onClose}
              className="bg-gradient-to-r from-[#9a6bff] to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-[#9a6bff]/50 transition-all duration-300 hover:scale-105"
            >
              Back to Labs
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
