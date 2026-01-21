import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OptionGrid from './OptionGrid';
import { useBehaviorAnalysis } from '../hooks/useBehaviorAnalysis';
import { verifyCaptcha, formatResult } from '../utils/verifier';
import { getRandomChallenge } from '../data/challenges';
import './SpiritGate.css';

const SpiritGate = ({ onVerify, onClose }) => {
    const [challenge, setChallenge] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [previousSelection, setPreviousSelection] = useState(null);
    const [phase, setPhase] = useState('intro'); // intro, challenge, result
    const [result, setResult] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        startTracking,
        stopTracking,
        trackMouseMove,
        trackClick,
        trackOptionChange,
        trackHover,
        getAnalysis
    } = useBehaviorAnalysis();

    // Load a random challenge
    const loadChallenge = useCallback(() => {
        setChallenge(getRandomChallenge());
        setSelectedId(null);
        setPreviousSelection(null);
        setPhase('challenge');
        startTracking();
    }, [startTracking]);

    // Start challenge after intro
    useEffect(() => {
        if (phase === 'intro') {
            const timer = setTimeout(() => {
                loadChallenge();
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [phase, loadChallenge]);

    // Track mouse movements on document
    useEffect(() => {
        if (phase === 'challenge') {
            const handleMouseMove = (e) => trackMouseMove(e);
            document.addEventListener('mousemove', handleMouseMove);
            return () => document.removeEventListener('mousemove', handleMouseMove);
        }
    }, [phase, trackMouseMove]);

    // Handle option selection
    const handleSelect = (optionId) => {
        if (previousSelection && previousSelection !== optionId) {
            trackOptionChange();
        }
        setPreviousSelection(selectedId);
        setSelectedId(optionId);
        trackClick(optionId);
    };

    // Handle option hover
    const handleHover = (optionId) => {
        trackHover(optionId);
    };

    // Submit answer
    const handleSubmit = async () => {
        if (!selectedId || isSubmitting) return;

        setIsSubmitting(true);
        stopTracking();

        // Small delay for dramatic effect
        await new Promise(resolve => setTimeout(resolve, 500));

        const isCorrect = selectedId === challenge.correctId;
        const behaviorAnalysis = getAnalysis();
        const verificationResult = verifyCaptcha(isCorrect, behaviorAnalysis);

        setResult({
            ...verificationResult,
            formatted: formatResult(verificationResult)
        });
        setPhase('result');
        setIsSubmitting(false);

        // Notify parent if provided
        if (onVerify) {
            onVerify(verificationResult);
        }
    };

    // Retry with new challenge
    const handleRetry = () => {
        setResult(null);
        loadChallenge();
    };

    return (
        <motion.div
            className="spirit-gate-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="spirit-gate-container"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
                {/* Animated Background */}
                <div className="gate-background">
                    <div className="gate-orb orb-1" />
                    <div className="gate-orb orb-2" />
                    <div className="gate-orb orb-3" />
                </div>

                {/* Close Button */}
                {onClose && (
                    <button className="gate-close" onClick={onClose} aria-label="Close">
                        ✕
                    </button>
                )}

                <AnimatePresence mode="wait">
                    {/* Intro Phase */}
                    {phase === 'intro' && (
                        <motion.div
                            key="intro"
                            className="gate-phase intro-phase"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <motion.div
                                className="gate-logo"
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                                    scale: { duration: 2, repeat: Infinity }
                                }}
                            >
                                🌀
                            </motion.div>
                            <h2>Spirit Gate</h2>
                            <p>Proving your anime spirit...</p>
                            <div className="loading-bar">
                                <motion.div
                                    className="loading-fill"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1.8, ease: 'easeInOut' }}
                                />
                            </div>
                        </motion.div>
                    )}

                    {/* Challenge Phase */}
                    {phase === 'challenge' && challenge && (
                        <motion.div
                            key="challenge"
                            className="gate-phase challenge-phase"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="challenge-header">
                                <span className="challenge-type">{challenge.type.replace('_', ' ')}</span>
                                <span className="challenge-anime">{challenge.anime}</span>
                            </div>

                            <h3 className="challenge-question">{challenge.question}</h3>

                            <OptionGrid
                                options={challenge.options}
                                selectedId={selectedId}
                                onSelect={handleSelect}
                                onHover={handleHover}
                                disabled={isSubmitting}
                            />

                            <motion.button
                                className={`submit-btn ${!selectedId ? 'disabled' : ''}`}
                                onClick={handleSubmit}
                                disabled={!selectedId || isSubmitting}
                                whileHover={selectedId ? { scale: 1.05 } : {}}
                                whileTap={selectedId ? { scale: 0.95 } : {}}
                            >
                                {isSubmitting ? (
                                    <motion.span
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                    >
                                        ⟳
                                    </motion.span>
                                ) : (
                                    'Verify Spirit'
                                )}
                            </motion.button>

                            <p className="hint-text">💡 Hint: {challenge.hint}</p>
                        </motion.div>
                    )}

                    {/* Result Phase */}
                    {phase === 'result' && result && (
                        <motion.div
                            key="result"
                            className="gate-phase result-phase"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className={`result-icon ${result.formatted.passed ? 'success' : 'failure'}`}
                                initial={{ scale: 0 }}
                                animate={{
                                    scale: 1,
                                    rotate: result.formatted.passed ? [0, 10, -10, 0] : [0, -5, 5, 0]
                                }}
                                transition={{ type: 'spring', stiffness: 200 }}
                            >
                                {result.formatted.passed ? '✨' : '🔒'}
                            </motion.div>

                            <h2>{result.formatted.title}</h2>
                            <p className="result-message">{result.message}</p>

                            <div className="result-stats">
                                {result.formatted.stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        className="stat-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <span className="stat-label">{stat.label}</span>
                                        <span className="stat-value">{stat.value}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="result-actions">
                                {!result.formatted.passed && (
                                    <motion.button
                                        className="retry-btn"
                                        onClick={handleRetry}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Try Again
                                    </motion.button>
                                )}
                                {result.formatted.passed && onClose && (
                                    <motion.button
                                        className="continue-btn"
                                        onClick={onClose}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Continue
                                    </motion.button>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Decorative Elements */}
                <div className="gate-decoration top-left">⛩️</div>
                <div className="gate-decoration top-right">🌸</div>
                <div className="gate-decoration bottom-left">🎴</div>
                <div className="gate-decoration bottom-right">✴️</div>
            </motion.div>
        </motion.div>
    );
};

export default SpiritGate;
