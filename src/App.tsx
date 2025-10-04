import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ScienceLab from './components/ScienceLab';
import EngineeringLab from './components/EngineeringLab';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useUserProgress } from './hooks/useUserProgress';
import { allExperiments } from './data/experiments';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { completedExperiments, totalXP, isLoading, completeExperiment } = useUserProgress();

  const handleCompleteExperiment = (experimentId: string, xp: number) => {
    const experiment = allExperiments.find(exp => exp.id === experimentId);
    completeExperiment(experimentId, xp, experiment?.badge);
  };

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartExperimenting = () => {
    handleNavigate('science');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0f3c] via-[#1a1f5c] to-[#0a0f3c] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#9a6bff] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading EduXR Lab...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0f3c]">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <div id="home">
        <Hero onStartExperimenting={handleStartExperimenting} />
      </div>

      <div id="science">
        <ScienceLab
          completedExperiments={completedExperiments}
          onCompleteExperiment={handleCompleteExperiment}
        />
      </div>

      <div id="engineering">
        <EngineeringLab
          completedExperiments={completedExperiments}
          onCompleteExperiment={handleCompleteExperiment}
        />
      </div>

      <div id="dashboard">
        <Dashboard
          completedExperiments={completedExperiments}
          totalXP={totalXP}
        />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
