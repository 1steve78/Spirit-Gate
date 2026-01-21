// Spirit Gate - Anime CAPTCHA Challenges
// Each challenge tests anime cultural knowledge with varying difficulty

export const challenges = [
  // Symbol Matching Challenges
  {
    id: 1,
    type: 'symbol_match',
    question: 'Which symbol represents the Hidden Leaf Village?',
    options: [
      { id: 'a', emoji: '🍃', label: 'Leaf Spiral' },
      { id: 'b', emoji: '🌀', label: 'Whirlpool' },
      { id: 'c', emoji: '⚡', label: 'Lightning' },
      { id: 'd', emoji: '🔥', label: 'Flame' }
    ],
    correctId: 'a',
    difficulty: 'easy',
    anime: 'Naruto',
    hint: 'Think of Konoha'
  },
  {
    id: 2,
    type: 'symbol_match',
    question: 'Which symbol is associated with the Survey Corps?',
    options: [
      { id: 'a', emoji: '🦅', label: 'Wings of Freedom' },
      { id: 'b', emoji: '🛡️', label: 'Shield' },
      { id: 'c', emoji: '⚔️', label: 'Crossed Swords' },
      { id: 'd', emoji: '🏰', label: 'Castle' }
    ],
    correctId: 'a',
    difficulty: 'easy',
    anime: 'Attack on Titan',
    hint: 'They venture beyond the walls'
  },
  {
    id: 3,
    type: 'character_trait',
    question: 'Which power is NOT a Devil Fruit ability?',
    options: [
      { id: 'a', emoji: '🔥', label: 'Fire Control' },
      { id: 'b', emoji: '🧲', label: 'Magnetism' },
      { id: 'c', emoji: '⚡', label: 'Haki' },
      { id: 'd', emoji: '💎', label: 'Diamond Body' }
    ],
    correctId: 'c',
    difficulty: 'medium',
    anime: 'One Piece',
    hint: 'This power comes from within'
  },
  {
    id: 4,
    type: 'artifact_recognition',
    question: 'The Death Note requires what to work?',
    options: [
      { id: 'a', emoji: '👤', label: 'Face + Name' },
      { id: 'b', emoji: '📍', label: 'Location' },
      { id: 'c', emoji: '🩸', label: 'Blood' },
      { id: 'd', emoji: '📸', label: 'Photo Only' }
    ],
    correctId: 'a',
    difficulty: 'easy',
    anime: 'Death Note',
    hint: 'You need to know who they are'
  },
  {
    id: 5,
    type: 'scene_context',
    question: 'In which anime do characters use "Breathing Styles"?',
    options: [
      { id: 'a', emoji: '👺', label: 'Demon Slayer' },
      { id: 'b', emoji: '👊', label: 'Jujutsu Kaisen' },
      { id: 'c', emoji: '🦸', label: 'My Hero Academia' },
      { id: 'd', emoji: '⛓️', label: 'Chainsaw Man' }
    ],
    correctId: 'a',
    difficulty: 'easy',
    anime: 'Demon Slayer',
    hint: 'Water, Flame, Thunder...'
  },
  {
    id: 6,
    type: 'character_trait',
    question: 'What is the name of Gojo Satoru\'s signature technique?',
    options: [
      { id: 'a', emoji: '♾️', label: 'Infinity' },
      { id: 'b', emoji: '🌀', label: 'Rasengan' },
      { id: 'c', emoji: '👁️', label: 'Sharingan' },
      { id: 'd', emoji: '💀', label: 'Death Ball' }
    ],
    correctId: 'a',
    difficulty: 'medium',
    anime: 'Jujutsu Kaisen',
    hint: 'Nothing can touch him'
  },
  {
    id: 7,
    type: 'symbol_match',
    question: 'Which guild mark belongs to Fairy Tail?',
    options: [
      { id: 'a', emoji: '🧚', label: 'Fairy Wings' },
      { id: 'b', emoji: '🐉', label: 'Dragon' },
      { id: 'c', emoji: '🦁', label: 'Lion' },
      { id: 'd', emoji: '🐍', label: 'Serpent' }
    ],
    correctId: 'a',
    difficulty: 'easy',
    anime: 'Fairy Tail',
    hint: 'It\'s in the name'
  },
  {
    id: 8,
    type: 'artifact_recognition',
    question: 'What do the Dragon Balls grant when all 7 are collected?',
    options: [
      { id: 'a', emoji: '🌟', label: 'One Wish' },
      { id: 'b', emoji: '💪', label: 'Ultimate Power' },
      { id: 'c', emoji: '👑', label: 'Immortality' },
      { id: 'd', emoji: '🌍', label: 'World Rule' }
    ],
    correctId: 'a',
    difficulty: 'easy',
    anime: 'Dragon Ball',
    hint: 'Shenron appears'
  },
  {
    id: 9,
    type: 'scene_context',
    question: 'Which anime features the "Domain Expansion" technique?',
    options: [
      { id: 'a', emoji: '👊', label: 'Jujutsu Kaisen' },
      { id: 'b', emoji: '🍥', label: 'Naruto' },
      { id: 'c', emoji: '🏴‍☠️', label: 'One Piece' },
      { id: 'd', emoji: '💎', label: 'JoJo\'s Bizarre Adventure' }
    ],
    correctId: 'a',
    difficulty: 'medium',
    anime: 'Jujutsu Kaisen',
    hint: 'Cursed technique guaranteed hit'
  },
  {
    id: 10,
    type: 'character_trait',
    question: 'What color is Super Saiyan hair?',
    options: [
      { id: 'a', emoji: '💛', label: 'Golden Yellow' },
      { id: 'b', emoji: '🔴', label: 'Red' },
      { id: 'c', emoji: '💙', label: 'Blue' },
      { id: 'd', emoji: '💚', label: 'Green' }
    ],
    correctId: 'a',
    difficulty: 'easy',
    anime: 'Dragon Ball Z',
    hint: 'Goku\'s first transformation'
  },
  {
    id: 11,
    type: 'artifact_recognition',
    question: 'What material is the Elric brothers\' failed transmutation circle drawn in?',
    options: [
      { id: 'a', emoji: '🩸', label: 'Blood' },
      { id: 'b', emoji: '�ite', label: 'Chalk' },
      { id: 'c', emoji: '✨', label: 'Gold Dust' },
      { id: 'd', emoji: '💧', label: 'Water' }
    ],
    correctId: 'a',
    difficulty: 'hard',
    anime: 'Fullmetal Alchemist',
    hint: 'A desperate sacrifice'
  },
  {
    id: 12,
    type: 'scene_context',
    question: 'In which anime do characters compete in "Hunter Exams"?',
    options: [
      { id: 'a', emoji: '🎯', label: 'Hunter x Hunter' },
      { id: 'b', emoji: '🍥', label: 'Naruto' },
      { id: 'c', emoji: '🦸', label: 'My Hero Academia' },
      { id: 'd', emoji: '⚔️', label: 'Bleach' }
    ],
    correctId: 'a',
    difficulty: 'easy',
    anime: 'Hunter x Hunter',
    hint: 'Gon and Killua'
  }
];

// Get random challenges for a session
export const getRandomChallenges = (count = 3) => {
  const shuffled = [...challenges].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Get a single random challenge
export const getRandomChallenge = () => {
  return challenges[Math.floor(Math.random() * challenges.length)];
};

export default challenges;
