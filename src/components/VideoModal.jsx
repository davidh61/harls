import { motion, AnimatePresence } from 'framer-motion';

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
                        <div className="w-full h-full flex items-center justify-center bg-neutral-900 text-neutral-500 font-mono">
                            {/* Simulating a video player */}
                            <div className="text-center">
                                <p className="mb-4 text-xl text-white tracking-widest">PLAYING: {title}</p>
                                <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mx-auto hover:scale-110 transition-transform cursor-pointer">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative UI Elements */}
                        <div className="absolute bottom-4 left-4 text-[10px] font-mono text-[var(--color-accent)]">
                            REC ● 00:00:00:00
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default VideoModal;
