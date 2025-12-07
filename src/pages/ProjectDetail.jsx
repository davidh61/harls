import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useCloudinaryGallery } from '../hooks/useCloudinaryGallery';

import { getProject } from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const projectData = getProject(id);

    const { images: cloudImages, loading } = useCloudinaryGallery('dxmcgwo5g', projectData.cloudinaryTag);

    const project = {
        ...projectData,
        images: cloudImages.length > 0 ? cloudImages : []
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

            {loading && (
                <div className="flex justify-center items-center h-64 font-mono text-neutral-500 animate-pulse">
                    LOADING_ASSETS...
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4 }}
                        className={`relative overflow-hidden ${(index % 4 === 0 || index % 4 === 3) ? 'md:col-span-2' : ''}`}
                    >
                        <img
                            src={img}
                            alt={`Detail ${index + 1}`}
                            className="w-full h-auto"
                            loading={index < 4 ? "eager" : "lazy"}
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
