/*
  # EduXR Lab User Progress Tracking

  1. New Tables
    - `user_progress`
      - `id` (uuid, primary key) - Unique identifier for progress record
      - `user_id` (text) - Anonymous user identifier (browser-based)
      - `experiment_id` (text) - ID of completed experiment
      - `completed` (boolean) - Completion status
      - `completed_at` (timestamptz) - Timestamp of completion
      - `xp_earned` (integer) - Experience points earned
      - `created_at` (timestamptz) - Record creation timestamp

    - `user_stats`
      - `id` (uuid, primary key) - Unique identifier
      - `user_id` (text, unique) - Anonymous user identifier
      - `total_xp` (integer) - Total accumulated experience points
      - `experiments_completed` (integer) - Count of completed experiments
      - `level` (integer) - Current user level
      - `badges_earned` (text array) - List of earned badge names
      - `updated_at` (timestamptz) - Last update timestamp
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on both tables
    - Allow public read/write access since this is an educational demo without authentication
    - Users identified by browser-generated UUID stored in localStorage
*/

-- Create user_progress table
CREATE TABLE IF NOT EXISTS user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  experiment_id text NOT NULL,
  completed boolean DEFAULT true,
  completed_at timestamptz DEFAULT now(),
  xp_earned integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, experiment_id)
);

-- Create user_stats table
CREATE TABLE IF NOT EXISTS user_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text UNIQUE NOT NULL,
  total_xp integer DEFAULT 0,
  experiments_completed integer DEFAULT 0,
  level integer DEFAULT 1,
  badges_earned text[] DEFAULT '{}',
  updated_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (educational demo)
CREATE POLICY "Allow public read access to user_progress"
  ON user_progress
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert to user_progress"
  ON user_progress
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public update to user_progress"
  ON user_progress
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public read access to user_stats"
  ON user_stats
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert to user_stats"
  ON user_stats
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public update to user_stats"
  ON user_stats
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_experiment_id ON user_progress(experiment_id);
CREATE INDEX IF NOT EXISTS idx_user_stats_user_id ON user_stats(user_id);
