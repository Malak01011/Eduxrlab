import { useState } from 'react';
import { scienceExperiments } from '../data/experiments';
import { Experiment } from '../types';
import ExperimentCard from './ExperimentCard';
import ExperimentModal from './ExperimentModal';
import { Beaker } from 'lucide-react';

interface ScienceLabProps {
  completedExperiments: string[];
  onCompleteExperiment: (experimentId: string, xp: number) => void;
}

export default function ScienceLab({ completedExperiments, onCompleteExperiment }: ScienceLabProps) {
  const [selectedExperiment, setSelectedExperiment] = useState<Experiment | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0f3c] via-[#1a1f5c] to-[#0a0f3c] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#9a6bff]/20 rounded-2xl mb-4">
            <Beaker className="w-8 h-8 text-[#9a6bff]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Science Laboratory
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore chemistry through interactive experiments. Mix compounds, observe reactions, and understand the science behind everyday phenomena.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scienceExperiments.map((experiment) => (
            <ExperimentCard
              key={experiment.id}
              experiment={experiment}
              onStart={setSelectedExperiment}
              isCompleted={completedExperiments.includes(experiment.id)}
            />
          ))}
        </div>
      </div>

      {selectedExperiment && (
        <ExperimentModal
          experiment={selectedExperiment}
          onClose={() => setSelectedExperiment(null)}
          onComplete={onCompleteExperiment}
        />
      )}
    </section>
  );
}
