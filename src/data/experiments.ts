import { Experiment } from '../types';

export const scienceExperiments: Experiment[] = [
  {
    id: 'volcano-reaction',
    title: 'Volcano Reaction',
    category: 'science',
    description: 'Create a chemical reaction that mimics a volcanic eruption using common household materials.',
    steps: [
      {
        id: 1,
        instruction: 'Place baking soda in the beaker',
        action: 'drag-baking-soda',
        visual: 'white-powder',
      },
      {
        id: 2,
        instruction: 'Add vinegar to the beaker',
        action: 'drag-vinegar',
        visual: 'liquid-pour',
      },
      {
        id: 3,
        instruction: 'Observe the reaction',
        action: 'observe',
        visual: 'bubbles-foam',
      },
    ],
    impact: 'Demonstrates acid-base reactions: NaHCO₃ + CH₃COOH → CO₂ + H₂O + NaCH₃COO. The carbon dioxide gas creates bubbles and foam, mimicking a volcanic eruption.',
    difficulty: 'beginner',
    xpReward: 50,
    badge: 'Volcano Master',
  },
  {
    id: 'electrolysis-water',
    title: 'Electrolysis of Water',
    category: 'science',
    description: 'Split water molecules into hydrogen and oxygen gas using electrical energy.',
    steps: [
      {
        id: 1,
        instruction: 'Fill the container with water',
        action: 'fill-water',
        visual: 'water-container',
      },
      {
        id: 2,
        instruction: 'Place two electrodes in the water',
        action: 'place-electrodes',
        visual: 'electrodes',
      },
      {
        id: 3,
        instruction: 'Connect the battery',
        action: 'connect-battery',
        visual: 'battery-connection',
      },
      {
        id: 4,
        instruction: 'Observe gas bubbles forming',
        action: 'observe',
        visual: 'gas-bubbles',
      },
    ],
    impact: 'Explains decomposition reactions and energy conversion: 2H₂O → 2H₂ + O₂. Hydrogen gas collects at the negative electrode, oxygen at the positive electrode.',
    difficulty: 'intermediate',
    xpReward: 75,
    badge: 'Energy Convert',
  },
  {
    id: 'color-change',
    title: 'Color Change Reaction',
    category: 'science',
    description: 'Explore pH indicators by observing color changes in chemical solutions.',
    steps: [
      {
        id: 1,
        instruction: 'Pour soap solution into beaker',
        action: 'pour-soap',
        visual: 'clear-liquid',
      },
      {
        id: 2,
        instruction: 'Add phenolphthalein indicator',
        action: 'add-indicator',
        visual: 'dropper',
      },
      {
        id: 3,
        instruction: 'Observe color change to pink',
        action: 'observe',
        visual: 'pink-solution',
      },
      {
        id: 4,
        instruction: 'Add acid to neutralize',
        action: 'add-acid',
        visual: 'clear-again',
      },
    ],
    impact: 'Teaches pH indicators: Phenolphthalein turns pink in basic solutions (pH > 8.2) and colorless in acidic solutions. This demonstrates acid-base chemistry.',
    difficulty: 'beginner',
    xpReward: 60,
    badge: 'pH Explorer',
  },
];

export const engineeringExperiments: Experiment[] = [
  {
    id: 'led-circuit',
    title: 'LED Battery Circuit',
    category: 'engineering',
    description: 'Build a simple electrical circuit to light up an LED bulb.',
    steps: [
      {
        id: 1,
        instruction: 'Place the coin battery on the workbench',
        action: 'place-battery',
        visual: 'battery',
      },
      {
        id: 2,
        instruction: 'Connect the positive wire to the LED',
        action: 'connect-positive',
        visual: 'wire-led',
      },
      {
        id: 3,
        instruction: 'Connect the negative wire to complete the circuit',
        action: 'connect-negative',
        visual: 'complete-circuit',
      },
      {
        id: 4,
        instruction: 'Watch the LED light up!',
        action: 'observe',
        visual: 'led-on',
      },
    ],
    impact: 'Shows how electric current flows through a circuit. The LED lights up when electrons flow from negative to positive terminal, demonstrating Ohm\'s Law: V = IR.',
    difficulty: 'beginner',
    xpReward: 50,
    badge: 'Circuit Builder',
  },
  {
    id: 'mini-motor',
    title: 'Mini Motor Fan',
    category: 'engineering',
    description: 'Create a working motor that demonstrates electromagnetic principles.',
    steps: [
      {
        id: 1,
        instruction: 'Place the DC motor on the workbench',
        action: 'place-motor',
        visual: 'motor',
      },
      {
        id: 2,
        instruction: 'Attach the fan blade to the motor shaft',
        action: 'attach-fan',
        visual: 'motor-with-fan',
      },
      {
        id: 3,
        instruction: 'Connect wires from battery to motor terminals',
        action: 'connect-wires',
        visual: 'wired-motor',
      },
      {
        id: 4,
        instruction: 'Watch the fan spin!',
        action: 'observe',
        visual: 'spinning-fan',
      },
    ],
    impact: 'Explains electromagnetism and energy conversion. Electrical energy converts to mechanical motion through electromagnetic induction in the motor coils.',
    difficulty: 'intermediate',
    xpReward: 75,
    badge: 'Motor Engineer',
  },
];

export const allExperiments = [...scienceExperiments, ...engineeringExperiments];
