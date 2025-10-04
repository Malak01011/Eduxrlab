export interface Experiment {
  id: string;
  title: string;
  category: 'science' | 'engineering';
  description: string;
  steps: ExperimentStep[];
  impact: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  xpReward: number;
  badge?: string;
}

export interface ExperimentStep {
  id: number;
  instruction: string;
  action?: string;
  visual?: string;
}

export interface UserProgress {
  id: string;
  user_id: string;
  experiment_id: string;
  completed: boolean;
  completed_at?: string;
  xp_earned: number;
  created_at: string;
}

export interface UserStats {
  total_xp: number;
  experiments_completed: number;
  badges_earned: string[];
  level: number;
}
