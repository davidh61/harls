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
