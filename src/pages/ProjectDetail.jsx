import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const ProjectDetail = () => {
    const { id } = useParams();

    // Mock data - in a real app this would come from a prop or store
    const project = {
        title: "URBAN DECAY",
        description: "A photographic exploration of abandoned spaces and the reclamation of nature.",
        images: [
            "https://placehold.co/800x600/111/FFF?text=DETAIL+1",
            "https://placehold.co/600x800/222/FFF?text=DETAIL+2",
            "https://placehold.co/800x800/333/FFF?text=DETAIL+3",
            "https://placehold.co/800x600/444/FFF?text=DETAIL+4",
        ]
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen w-full bg-neutral-950 text-white p-4 md:p-10">
            <nav className="fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference flex justify-between items-center">
                <Link to="/" className="font-mono text-sm hover:text-[var(--color-accent)] transition-colors">
                    ← BACK
                </Link>
                <span className="font-mono text-sm">PROJECT // 00{id}</span>
            </nav>

            <header className="mt-20 mb-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-8xl font-black uppercase tracking-tighter mb-4"
                >
                    {project.title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="font-mono text-neutral-400 max-w-xl"
                >
                    {project.description}
                </motion.p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative overflow-hidden ${index % 3 === 0 ? 'md:col-span-2' : ''}`}
                    >
                        <img
                            src={img}
                            alt={`Detail ${index + 1}`}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                ))}
            </div>

            <footer className="mt-20 py-10 border-t border-neutral-900 flex justify-between items-center font-mono text-xs text-neutral-600">
                <span>NEXT PROJECT →</span>
                <span>SCROLL_TOP</span>
            </footer>
        </div>
    );
};

export default ProjectDetail;
