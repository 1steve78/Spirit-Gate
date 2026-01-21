<div align="center">

# 🛡️ Spirit Gate

### AI-Powered Anime CAPTCHA System

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Railway](https://img.shields.io/badge/Deploy-Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app/)

**Protect your applications with anime-themed challenges that combine cultural knowledge and AI behavior analysis.**

*Fun for humans. Impossible for bots.* 🎌

[Live Demo](#demo) • [Features](#features) • [Installation](#installation) • [Usage](#usage) • [How It Works](#how-it-works)

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎴 **Anime-Inspired Challenges** | Symbolic puzzles based on popular anime series and Japanese cultural motifs |
| 🧠 **AI Behavior Analysis** | Smart detection of bot-like patterns through mouse movement and timing analysis |
| 🎮 **Game-Like Experience** | Engaging animations and feedback that make verification feel like playing a game |
| 🔒 **Multi-Layer Defense** | Cultural knowledge + behavior analysis creates strong bot resistance |
| ⚡ **Lightweight & Fast** | Frontend-focused architecture with no heavy dependencies |
| 🌙 **Beautiful Dark UI** | Stunning glassmorphism design with smooth Framer Motion animations |

---

## 🚀 Demo

<div align="center">

### Try the live demo and prove your anime spirit!

The CAPTCHA presents anime knowledge challenges while analyzing your interaction patterns in real-time.

</div>

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/spirit-gate.git

# Navigate to directory
cd spirit-gate

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🔧 Usage

### Basic Integration

```jsx
import { SpiritGate } from 'spirit-gate';

function App() {
  return (
    <SpiritGate
      onVerify={(result) => {
        if (result.passed) {
          // User verified! ✨
          console.log('Human detected:', result);
        }
      }}
      onClose={() => console.log('CAPTCHA closed')}
    />
  );
}
```

### Verification Result Object

```javascript
{
  status: 'passed' | 'failed',
  passed: true | false,
  knowledgeScore: 0.0 - 1.0,    // Anime knowledge check
  behaviorScore: 0.0 - 1.0,     // AI behavior analysis
  combinedScore: 0.0 - 1.0,     // Weighted final score
  message: 'Verification message'
}
```

---

## 🔮 How It Works

Spirit Gate uses a **three-layer verification system**:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  1️⃣  ANIME KNOWLEDGE CHALLENGE                              │
│      User answers questions about anime symbols,            │
│      characters, and cultural references                    │
│                                                             │
│                          ⬇️                                  │
│                                                             │
│  2️⃣  BEHAVIOR ANALYSIS                                      │
│      AI tracks mouse movements, response timing,            │
│      and interaction patterns                               │
│                                                             │
│                          ⬇️                                  │
│                                                             │
│  3️⃣  COMBINED VERIFICATION                                  │
│      Both signals are weighted to make a final              │
│      decision on human vs bot                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Behavior Metrics Analyzed

- **Mouse Movement Patterns** - Natural vs programmatic movement detection
- **Response Timing** - Time taken to answer (too fast = suspicious)
- **Option Hover Patterns** - Natural exploration vs direct targeting
- **Click Velocity** - Speed of selection changes
- **Movement Entropy** - Randomness and organic flow of cursor

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Components & State Management |
| **Framer Motion** | Smooth Animations & Transitions |
| **Vite 7** | Fast Development & Build Tool |
| **React Router** | SPA Navigation |
| **Railway** | Deployment Platform |

---

## 📁 Project Structure

```
spirit-gate/
├── src/
│   ├── components/
│   │   ├── SpiritGate.jsx     # Main CAPTCHA component
│   │   ├── SpiritGate.css     # CAPTCHA styling
│   │   ├── OptionGrid.jsx     # Answer options grid
│   │   └── OptionGrid.css     # Grid styling
│   ├── hooks/
│   │   └── useBehaviorAnalysis.js  # AI behavior tracking
│   ├── utils/
│   │   └── verifier.js        # Verification logic
│   ├── data/
│   │   └── challenges.js      # Anime challenge questions
│   ├── pages/
│   │   ├── Landing.jsx        # Landing page
│   │   └── Landing.css        # Landing styling
│   ├── App.jsx                # Root component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── public/
├── index.html
├── vite.config.js
├── railway.json               # Railway deployment config
└── package.json
```

---

## 🚢 Deployment

### Deploy to Railway

1. Connect your GitHub repository to Railway
2. Railway will auto-detect the Vite configuration
3. Build command: `npm run build`
4. Start command: `npx serve dist`

Or use the CLI:

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

### Built with 💜 and React for anime fans everywhere

**Spirit Gate** — *Protecting the web, one anime challenge at a time* ⛩️

</div>
