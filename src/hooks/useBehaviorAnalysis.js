import { useState, useCallback, useRef, useEffect } from 'react';

// AI Behavior Analysis Hook
// Tracks user interaction patterns to distinguish humans from bots

export const useBehaviorAnalysis = () => {
    const [behaviorData, setBehaviorData] = useState({
        mouseMovements: [],
        clickEvents: [],
        hoverEvents: [],
        startTime: null,
        endTime: null,
        hesitations: 0,
        optionChanges: 0
    });

    const lastMousePos = useRef({ x: 0, y: 0 });
    const lastMoveTime = useRef(Date.now());
    const isTracking = useRef(false);

    // Start tracking session
    const startTracking = useCallback(() => {
        isTracking.current = true;
        setBehaviorData(prev => ({
            ...prev,
            startTime: Date.now(),
            mouseMovements: [],
            clickEvents: [],
            hoverEvents: [],
            hesitations: 0,
            optionChanges: 0
        }));
    }, []);

    // Stop tracking and calculate final score
    const stopTracking = useCallback(() => {
        isTracking.current = false;
        setBehaviorData(prev => ({
            ...prev,
            endTime: Date.now()
        }));
    }, []);

    // Track mouse movement
    const trackMouseMove = useCallback((e) => {
        if (!isTracking.current) return;

        const now = Date.now();
        const timeDelta = now - lastMoveTime.current;

        // Detect hesitation (pause > 500ms in mouse movement)
        if (timeDelta > 500 && timeDelta < 3000) {
            setBehaviorData(prev => ({
                ...prev,
                hesitations: prev.hesitations + 1
            }));
        }

        const movement = {
            x: e.clientX,
            y: e.clientY,
            timestamp: now,
            velocity: Math.sqrt(
                Math.pow(e.clientX - lastMousePos.current.x, 2) +
                Math.pow(e.clientY - lastMousePos.current.y, 2)
            ) / Math.max(timeDelta, 1)
        };

        lastMousePos.current = { x: e.clientX, y: e.clientY };
        lastMoveTime.current = now;

        setBehaviorData(prev => ({
            ...prev,
            mouseMovements: [...prev.mouseMovements.slice(-50), movement] // Keep last 50
        }));
    }, []);

    // Track click events
    const trackClick = useCallback((optionId) => {
        if (!isTracking.current) return;

        setBehaviorData(prev => ({
            ...prev,
            clickEvents: [...prev.clickEvents, {
                optionId,
                timestamp: Date.now()
            }]
        }));
    }, []);

    // Track option changes (changing selection)
    const trackOptionChange = useCallback(() => {
        if (!isTracking.current) return;

        setBehaviorData(prev => ({
            ...prev,
            optionChanges: prev.optionChanges + 1
        }));
    }, []);

    // Track hover events
    const trackHover = useCallback((optionId) => {
        if (!isTracking.current) return;

        setBehaviorData(prev => ({
            ...prev,
            hoverEvents: [...prev.hoverEvents, {
                optionId,
                timestamp: Date.now()
            }]
        }));
    }, []);

    // Calculate behavior score (0-100, higher = more human-like)
    const calculateScore = useCallback(() => {
        const data = behaviorData;

        if (!data.startTime || !data.endTime) return 50;

        let score = 50; // Base score

        // Response time analysis (humans typically take 2-15 seconds)
        const responseTime = (data.endTime - data.startTime) / 1000;
        if (responseTime >= 2 && responseTime <= 15) {
            score += 15; // Natural response time
        } else if (responseTime < 1) {
            score -= 20; // Too fast, likely bot
        } else if (responseTime > 30) {
            score -= 10; // Too slow, might be automated
        }

        // Mouse movement variance (humans have irregular movements)
        if (data.mouseMovements.length > 5) {
            const velocities = data.mouseMovements.map(m => m.velocity);
            const avgVelocity = velocities.reduce((a, b) => a + b, 0) / velocities.length;
            const variance = velocities.reduce((sum, v) => sum + Math.pow(v - avgVelocity, 2), 0) / velocities.length;

            if (variance > 0.5) {
                score += 15; // Human-like variance
            } else if (variance < 0.1) {
                score -= 15; // Too consistent, likely bot
            }
        }

        // Hesitation patterns (humans naturally hesitate)
        if (data.hesitations >= 1 && data.hesitations <= 5) {
            score += 10; // Natural hesitation
        }

        // Option changes (humans sometimes change their mind)
        if (data.optionChanges >= 1 && data.optionChanges <= 3) {
            score += 10; // Natural reconsideration
        } else if (data.optionChanges > 5) {
            score -= 10; // Too indecisive, might be brute forcing
        }

        // Hover behavior (humans explore options)
        if (data.hoverEvents.length >= 2) {
            score += 5;
        }

        return Math.max(0, Math.min(100, score));
    }, [behaviorData]);

    // Get detailed analysis
    const getAnalysis = useCallback(() => {
        const score = calculateScore();
        const responseTime = behaviorData.endTime && behaviorData.startTime
            ? ((behaviorData.endTime - behaviorData.startTime) / 1000).toFixed(2)
            : 0;

        return {
            score,
            responseTime: parseFloat(responseTime),
            mouseMovements: behaviorData.mouseMovements.length,
            hesitations: behaviorData.hesitations,
            optionChanges: behaviorData.optionChanges,
            isHumanLike: score >= 60,
            confidence: score >= 75 ? 'high' : score >= 50 ? 'medium' : 'low'
        };
    }, [behaviorData, calculateScore]);

    return {
        startTracking,
        stopTracking,
        trackMouseMove,
        trackClick,
        trackOptionChange,
        trackHover,
        calculateScore,
        getAnalysis,
        behaviorData
    };
};

export default useBehaviorAnalysis;
