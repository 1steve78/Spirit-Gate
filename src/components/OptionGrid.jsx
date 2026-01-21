import { motion, AnimatePresence } from 'framer-motion';
import './OptionGrid.css';

const OptionGrid = ({
    options,
    selectedId,
    onSelect,
    onHover,
    disabled = false
}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 300, damping: 20 }
        }
    };

    return (
        <motion.div
            className="option-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <AnimatePresence>
                {options.map((option) => (
                    <motion.button
                        key={option.id}
                        className={`option-card ${selectedId === option.id ? 'selected' : ''}`}
                        variants={itemVariants}
                        whileHover={{
                            scale: disabled ? 1 : 1.05,
                            boxShadow: disabled ? undefined : '0 10px 40px rgba(139, 92, 246, 0.3)'
                        }}
                        whileTap={{ scale: disabled ? 1 : 0.95 }}
                        onClick={() => !disabled && onSelect(option.id)}
                        onMouseEnter={() => onHover && onHover(option.id)}
                        disabled={disabled}
                        layout
                    >
                        <motion.span
                            className="option-emoji"
                            animate={selectedId === option.id ? {
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, -10, 0]
                            } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            {option.emoji}
                        </motion.span>
                        <span className="option-label">{option.label}</span>

                        {selectedId === option.id && (
                            <motion.div
                                className="selection-ring"
                                layoutId="selection"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />
                        )}
                    </motion.button>
                ))}
            </AnimatePresence>
        </motion.div>
    );
};

export default OptionGrid;
