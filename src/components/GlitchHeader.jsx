import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const GlitchHeader = ({ text = "sam harlow" }) => {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 200);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative inline-block text-6xl md:text-8xl font-black tracking-tighter select-none text-center">
            <motion.h1
                className="relative z-10 text-white mix-blend-difference"
                animate={{
                    x: isGlitching ? [-2, 2, -2, 0] : 0,
                    y: isGlitching ? [2, -2, 2, 0] : 0,
                }}
            >
                {text}
            </motion.h1>

            {/* Glitch Layers */}
            <motion.span
                className="absolute top-0 left-0 -z-10 w-full h-full text-[var(--color-accent)] opacity-70 mix-blend-screen"
                animate={{
                    x: isGlitching ? [-4, 4, -2, 0] : 0,
                    opacity: isGlitching ? [1, 0.5, 1] : 0,
                }}
            >
                {text}
            </motion.span>
            <motion.span
                className="absolute top-0 left-0 -z-10 w-full h-full text-[var(--color-accent-2)] opacity-70 mix-blend-screen"
                animate={{
                    x: isGlitching ? [4, -4, 2, 0] : 0,
                    opacity: isGlitching ? [1, 0.5, 1] : 0,
                }}
            >
                {text}
            </motion.span>
        </div>
    );
};

export default GlitchHeader;
