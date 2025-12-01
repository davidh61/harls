import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const GlitchHeader = ({ text = "sam harlow" }) => {
    const [isGlitching, setIsGlitching] = useState(false);
    const [glitchKeyframes, setGlitchKeyframes] = useState({
        x: [0], y: [0], skewX: [0],
        c1x: [0], c1y: [0],
        c2x: [0], c2y: [0]
    });

    useEffect(() => {
        let timeoutId;

        const triggerGlitch = () => {
            const intensity = 50; // Base intensity

            // Helper to generate random keyframe arrays
            const getKeyframes = (count, max) =>
                [0, ...Array.from({ length: count }, () => (Math.random() - 0.5) * max * 2), 0];

            setGlitchKeyframes({
                x: getKeyframes(5, intensity),
                y: getKeyframes(5, intensity),
                skewX: getKeyframes(4, 15),
                c1x: getKeyframes(5, intensity * 1.5),
                c1y: getKeyframes(5, intensity * 1.5),
                c2x: getKeyframes(5, intensity * 1.5),
                c2y: getKeyframes(5, intensity * 1.5),
            });

            setIsGlitching(true);

            setTimeout(() => {
                setIsGlitching(false);
                // Random delay between 0.5s and 3s for the next glitch
                timeoutId = setTimeout(triggerGlitch, Math.random() * 2500 + 500);
            }, 200);
        };

        // Start the loop
        timeoutId = setTimeout(triggerGlitch, 2000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="relative inline-block text-6xl md:text-8xl font-black tracking-tighter select-none text-center">
            <motion.h1
                className="relative z-10 text-white mix-blend-difference"
                animate={{
                    x: isGlitching ? glitchKeyframes.x : 0,
                    y: isGlitching ? glitchKeyframes.y : 0,
                    skewX: isGlitching ? glitchKeyframes.skewX : 0,
                }}
                transition={{ duration: 0.2, ease: "linear" }}
            >
                {text}
            </motion.h1>

            {/* Glitch Layers */}
            <motion.span
                className="absolute top-0 left-0 -z-10 w-full h-full text-[var(--color-accent)] opacity-70 mix-blend-screen"
                animate={{
                    x: isGlitching ? glitchKeyframes.c1x : 0,
                    y: isGlitching ? glitchKeyframes.c1y : 0,
                    opacity: isGlitching ? [1, 0.8, 0.4, 1] : 0,
                }}
                transition={{ duration: 0.2, ease: "linear" }}
            >
                {text}
            </motion.span>
            <motion.span
                className="absolute top-0 left-0 -z-10 w-full h-full text-[var(--color-accent-2)] opacity-70 mix-blend-screen"
                animate={{
                    x: isGlitching ? glitchKeyframes.c2x : 0,
                    y: isGlitching ? glitchKeyframes.c2y : 0,
                    opacity: isGlitching ? [1, 0.8, 0.4, 1] : 0,
                }}
                transition={{ duration: 0.2, ease: "linear" }}
            >
                {text}
            </motion.span>
        </div>
    );
};

export default GlitchHeader;
