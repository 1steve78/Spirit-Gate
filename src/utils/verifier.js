// Spirit Gate Verification System
// Combines answer correctness with behavior analysis for final verification

export const VerificationStatus = {
    PASSED: 'passed',
    FAILED: 'failed',
    SUSPICIOUS: 'suspicious'
};

// Thresholds for verification
const THRESHOLDS = {
    minBehaviorScore: 40, // Minimum behavior score to pass
    correctAnswerWeight: 0.6, // 60% weight for correct answers
    behaviorWeight: 0.4, // 40% weight for behavior
    passThreshold: 0.65 // Overall score needed to pass
};

/**
 * Verify a CAPTCHA session
 * @param {boolean} isCorrect - Whether the answer was correct
 * @param {object} behaviorAnalysis - Analysis from useBehaviorAnalysis hook
 * @returns {object} Verification result
 */
export const verifyCaptcha = (isCorrect, behaviorAnalysis) => {
    const { score: behaviorScore, responseTime, confidence } = behaviorAnalysis;

    // Calculate weighted score
    const answerScore = isCorrect ? 100 : 0;
    const weightedScore = (
        (answerScore * THRESHOLDS.correctAnswerWeight) +
        (behaviorScore * THRESHOLDS.behaviorWeight)
    );

    // Determine status
    let status;
    let message;

    if (!isCorrect) {
        status = VerificationStatus.FAILED;
        message = 'Incorrect answer. Please try again.';
    } else if (behaviorScore < THRESHOLDS.minBehaviorScore) {
        status = VerificationStatus.SUSPICIOUS;
        message = 'Verification needs additional confirmation.';
    } else if (weightedScore >= THRESHOLDS.passThreshold * 100) {
        status = VerificationStatus.PASSED;
        message = 'Verification successful! Welcome, Spirit.';
    } else {
        status = VerificationStatus.SUSPICIOUS;
        message = 'Please complete another challenge.';
    }

    return {
        status,
        message,
        details: {
            answerCorrect: isCorrect,
            behaviorScore: Math.round(behaviorScore),
            weightedScore: Math.round(weightedScore),
            responseTime,
            confidence,
            timestamp: new Date().toISOString()
        }
    };
};

/**
 * Generate a verification token (for demo purposes)
 * In production, this would be signed server-side
 */
export const generateToken = (verificationResult) => {
    if (verificationResult.status !== VerificationStatus.PASSED) {
        return null;
    }

    // Simple demo token (not cryptographically secure)
    const payload = {
        verified: true,
        timestamp: Date.now(),
        score: verificationResult.details.weightedScore
    };

    return btoa(JSON.stringify(payload));
};

/**
 * Format verification result for display
 */
export const formatResult = (verificationResult) => {
    const { status, details } = verificationResult;

    return {
        passed: status === VerificationStatus.PASSED,
        title: status === VerificationStatus.PASSED
            ? '✨ Access Granted'
            : status === VerificationStatus.SUSPICIOUS
                ? '🔍 Needs Review'
                : '❌ Access Denied',
        stats: [
            { label: 'Behavior Score', value: `${details.behaviorScore}/100` },
            { label: 'Response Time', value: `${details.responseTime}s` },
            { label: 'Confidence', value: details.confidence }
        ]
    };
};

export default { verifyCaptcha, generateToken, formatResult, VerificationStatus };
