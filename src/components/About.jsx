import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="min-h-screen w-full py-20 px-4 md:px-10 flex items-center justify-center relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--color-accent)] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="space-y-2">
                        <span className="font-mono text-[var(--color-accent)] text-sm tracking-widest">/// WHO_IS_SAM</span>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                            Visual <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Alchemist</span>
                        </h2>
                    </div>

                    <div className="space-y-6 text-neutral-400 text-lg leading-relaxed max-w-xl">
                        <p>
                            I've spent the last few years creating social content for some of the biggest sporting organisations in the UK, including the England FA, FA Cup, WSL, ECB, Team GB, and West Ham. I've also edited music videos for a range of artists and bands across multiple genres.
                        </p>
                        <p>
                            More recently, I’ve ventured into photography, focusing on live events, shooting gigs, and documenting the energy, atmosphere, and emotion of performance.
                        </p>
                    </div>

                    {/* Skills / Tech Stack */}
                    <div className="pt-8 border-t border-neutral-800">
                        <h3 className="font-mono text-sm text-white mb-4 uppercase tracking-widest">Toolkit</h3>
                        <div className="flex flex-wrap gap-3">
                            {['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Photography', 'Sound Design'].map((skill, i) => (
                                <span key={i} className="px-3 py-1 border border-neutral-800 text-xs font-mono text-neutral-500 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[600px] w-full hidden md:block"
                >
                    <div className="absolute inset-0 border border-neutral-800 p-2">
                        <div className="w-full h-full bg-neutral-900 relative overflow-hidden group">
                            {/* Placeholder for Sam's portrait */}
                            <img
                                src="https://res.cloudinary.com/dxmcgwo5g/image/upload/v1765203299/WhatsApp_Image_2025-12-08_at_14.04.07_hmup8q.jpg"
                                alt="Sam Harlow"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />

                            {/* Overlay UI elements */}
                            <div className="absolute top-4 left-4 w-2 h-2 bg-[var(--color-accent)]"></div>
                            <div className="absolute top-4 right-4 w-2 h-2 bg-[var(--color-accent)]"></div>
                            <div className="absolute bottom-4 left-4 w-2 h-2 bg-[var(--color-accent)]"></div>
                            <div className="absolute bottom-4 right-4 w-2 h-2 bg-[var(--color-accent)]"></div>

                            <div className="absolute bottom-8 left-0 w-full text-center">
                                <span className="font-mono text-xs bg-black text-white px-2 py-1">IMG_8942.RAW</span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative offset border */}
                    <div className="absolute -inset-4 border border-neutral-800 -z-10"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
