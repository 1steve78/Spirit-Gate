import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpiritGate from '../components/SpiritGate';
import './Landing.css';

const features = [
    {
        icon: '🎴',
        title: 'Anime-Inspired Challenges',
        description: 'Solve symbolic puzzles based on popular anime series and cultural motifs.'
    },
    {
        icon: '🧠',
        title: 'AI Behavior Analysis',
        description: 'Smart detection of bot-like patterns through mouse movement and timing analysis.'
    },
    {
        icon: '🎮',
        title: 'Game-Like Experience',
        description: 'Engaging animations and feedback that make verification feel like playing a game.'
    },
    {
        icon: '🔒',
        title: 'Strong Bot Resistance',
        description: 'Cultural knowledge + behavior analysis creates a multi-layer defense system.'
    },
    {
        icon: '⚡',
        title: 'Lightweight & Fast',
        description: 'Frontend-focused architecture with no heavy dependencies or server requirements.'
    },
    {
        icon: '🎌',
        title: 'For Anime Fans',
        description: 'Designed to be enjoyable for real users while frustrating for automated attacks.'
    }
];

const Landing = () => {
    const [showCaptcha, setShowCaptcha] = useState(false);
    const [verificationResult, setVerificationResult] = useState(null);

    const handleVerify = (result) => {
        setVerificationResult(result);
    };

    const handleCloseCaptcha = () => {
        setShowCaptcha(false);
    };

    return (
        <div className="landing">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <div className="hero-orb orb-purple" />
                    <div className="hero-orb orb-pink" />
                    <div className="hero-orb orb-cyan" />
                    <div className="hero-grid" />
                </div>

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="badge-icon">🛡️</span>
                        <span>Next-Gen CAPTCHA</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="gradient-text">Spirit Gate</span>
                        <br />
                        AI-Powered Anime CAPTCHA
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Protect your applications with anime-themed challenges that combine
                        cultural knowledge and AI behavior analysis. Fun for humans,
                        impossible for bots.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.button
                            className="btn-primary"
                            onClick={() => setShowCaptcha(true)}
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(139, 92, 246, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>🌀</span> Try Demo
                        </motion.button>
                        <motion.a
                            href="#features"
                            className="btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                        </motion.a>
                    </motion.div>

                    {verificationResult && (
                        <motion.div
                            className="verification-badge"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            {verificationResult.status === 'passed' ? (
                                <>✨ Verified as Human!</>
                            ) : (
                                <>🔄 Try Again</>
                            )}
                        </motion.div>
                    )}
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <div className="visual-card">
                        <div className="visual-header">
                            <div className="visual-dots">
                                <span></span><span></span><span></span>
                            </div>
                            <span className="visual-title">spirit-gate.js</span>
                        </div>
                        <div className="visual-code">
                            <pre>
                                {`import { SpiritGate } from 'spirit-gate';

<SpiritGate
  onVerify={(result) => {
    if (result.passed) {
      // User verified! ✨
      allowAccess();
    }
  }}
  theme="dark"
  difficulty="medium"
/>`}
                            </pre>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section id="features" className="features">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>✨ Key Features</h2>
                    <p>Everything you need for next-gen bot protection</p>
                </motion.div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="feature-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)' }}
                        >
                            <span className="feature-icon">{feature.icon}</span>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works">
                <motion.img
                    src="/rena_san_1.png"
                    alt="Rena San Guide"
                    className="how-it-works-mascot"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                />
                <div className="how-it-works-content">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>🔮 How It Works</h2>
                        <p>Three layers of protection in one seamless experience</p>
                    </motion.div>

                    <div className="steps">
                        <motion.div
                            className="step"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h3>Anime Knowledge Challenge</h3>
                                <p>Users answer questions about anime symbols, characters, and cultural references that require human intuition.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="step"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h3>Behavior Analysis</h3>
                                <p>AI tracks mouse movements, response timing, and interaction patterns to detect bot-like behavior.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="step"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h3>Combined Verification</h3>
                                <p>Both signals are weighted to make a final decision, allowing humans through while blocking automated attacks.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <motion.div
                    className="cta-content"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2>Ready to Protect Your App?</h2>
                    <p>Try Spirit Gate now and see the difference</p>
                    <motion.button
                        className="btn-primary btn-large"
                        onClick={() => setShowCaptcha(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>🌀</span> Launch Demo
                    </motion.button>
                </motion.div>
                <motion.img
                    src="/rena_san_2.png"
                    alt="Rena San Mascot"
                    className="cta-mascot"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                />
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="footer-logo">🛡️</span>
                        <span className="footer-name">Spirit Gate</span>
                    </div>
                    <p className="footer-text">
                        Built with React, Framer Motion & 💜 for anime fans everywhere.
                    </p>
                    <div className="footer-links">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="#features">Features</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); setShowCaptcha(true); }}>Demo</a>
                    </div>
                </div>
            </footer>

            {/* CAPTCHA Modal */}
            <AnimatePresence>
                {showCaptcha && (
                    <SpiritGate
                        onVerify={handleVerify}
                        onClose={handleCloseCaptcha}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Landing;
