import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const USER_ID_KEY = 'eduxr_user_id';

function getUserId(): string {
  let userId = localStorage.getItem(USER_ID_KEY);
  if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem(USER_ID_KEY, userId);
  }
  return userId;
}

export function useUserProgress() {
  const [completedExperiments, setCompletedExperiments] = useState<string[]>([]);
  const [totalXP, setTotalXP] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const userId = getUserId();

  useEffect(() => {
    loadUserProgress();
  }, []);

  async function loadUserProgress() {
    try {
      const { data: progress } = await supabase
        .from('user_progress')
        .select('experiment_id, xp_earned')
        .eq('user_id', userId)
        .eq('completed', true);

      if (progress) {
        setCompletedExperiments(progress.map(p => p.experiment_id));
        const xp = progress.reduce((sum, p) => sum + (p.xp_earned || 0), 0);
        setTotalXP(xp);
      }

      const { data: stats } = await supabase
        .from('user_stats')
        .select('total_xp')
        .eq('user_id', userId)
        .maybeSingle();

      if (stats) {
        setTotalXP(stats.total_xp);
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function completeExperiment(experimentId: string, xpReward: number, badge?: string) {
    try {
      const { error: progressError } = await supabase
        .from('user_progress')
        .upsert({
          user_id: userId,
          experiment_id: experimentId,
          completed: true,
          completed_at: new Date().toISOString(),
          xp_earned: xpReward,
        }, {
          onConflict: 'user_id,experiment_id'
        });

      if (progressError) {
        console.error('Error saving progress:', progressError);
        return;
      }

      const newTotalXP = totalXP + xpReward;
      const newCompletedExperiments = [...new Set([...completedExperiments, experimentId])];

      const { data: existingStats } = await supabase
        .from('user_stats')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      const badges = existingStats?.badges_earned || [];
      if (badge && !badges.includes(badge)) {
        badges.push(badge);
      }

      await supabase
        .from('user_stats')
        .upsert({
          user_id: userId,
          total_xp: newTotalXP,
          experiments_completed: newCompletedExperiments.length,
          level: Math.floor(newTotalXP / 100) + 1,
          badges_earned: badges,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'user_id'
        });

      setCompletedExperiments(newCompletedExperiments);
      setTotalXP(newTotalXP);
    } catch (error) {
      console.error('Error completing experiment:', error);
    }
  }

  return {
    completedExperiments,
    totalXP,
    isLoading,
    completeExperiment,
  };
}
