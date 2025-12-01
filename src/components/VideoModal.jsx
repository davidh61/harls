import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const VideoModal = ({ isOpen, onClose, videoSrc, title }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-5xl aspect-video bg-black border border-neutral-800 shadow-2xl shadow-[var(--color-accent)]/20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute -top-10 right-0 text-white font-mono hover:text-[var(--color-accent)] transition-colors"
                        >
                            [CLOSE_X]
                        </button>

                        {/* Video Placeholder (Replace with iframe or video tag) */}
                        {/* Video Player */}
                        <div className="w-full h-full bg-black">
                            {videoSrc && videoSrc.includes('vimeo.com') ? (
                                <iframe
                                    src={`https://player.vimeo.com/video/${videoSrc.split('/').pop()}?autoplay=1&title=0&byline=0&portrait=0`}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title={title}
                                ></iframe>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-neutral-500 font-mono">
                                    VIDEO SOURCE NOT FOUND
                                </div>
                            )}
                        </div>

                        {/* Decorative UI Elements */}
                        {/* Decorative UI Elements */}
                        <GlitchRecIndicator />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const GlitchRecIndicator = () => {
    const [time, setTime] = useState('00:00:00:00');

    useEffect(() => {
        const interval = setInterval(() => {
            // Randomly glitch the time
            if (Math.random() > 0.7) {
                const randomTime = Math.floor(Math.random() * 99999999).toString().padStart(8, '0');
                setTime(`${randomTime.slice(0, 2)}:${randomTime.slice(2, 4)}:${randomTime.slice(4, 6)}:${randomTime.slice(6, 8)}`);
            } else {
                // Normal increment (simulated)
                const now = new Date();
                setTime(now.toTimeString().split(' ')[0] + ':' + Math.floor(now.getMilliseconds() / 10).toString().padStart(2, '0'));
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute bottom-4 left-4 text-[10px] font-mono text-[var(--color-accent)] flex items-center gap-2">
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
            >
                ●
            </motion.span>
            REC <span className="w-24 inline-block">{time}</span>
        </div>
    );
};

export default VideoModal;
