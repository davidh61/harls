import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoModal from './VideoModal';

const items = [
    { id: 1, type: 'video', title: 'Feel Like It | Belle Dame', src: 'https://placehold.co/600x400/111/FFF?text=FEEL+LIKE+IT+|+BELLE+DAME', videoSrc: 'https://vimeo.com/754906899' },
    { id: 2, type: 'photo', title: 'URBAN DECAY', src: 'https://placehold.co/400x600/111/FFF?text=PHOTO+COLLECTION+1' },
    { id: 3, type: 'video', title: 'Modern Act | One Sick Plan', src: 'https://placehold.co/600x400/111/FFF?text=MODERN+ACT+|+ONE+SICK+PLAN ', videoSrc: 'https://vimeo.com/830650950' },
    { id: 4, type: 'photo', title: 'CONCRETE', src: 'https://placehold.co/400x500/111/FFF?text=PHOTO+2' },
    { id: 5, type: 'video', title: 'The Dazed Minded | Live at Denmark Studios', src: 'https://placehold.co/600x400/111/FFF?text=THE+DAZED+MINDED\n+|+LIVE+AT+DENMARK+STUDIOS', videoSrc: 'https://vimeo.com/917658594' },
    { id: 6, type: 'photo', title: 'VOID', src: 'https://placehold.co/400x600/111/FFF?text=PHOTO+3' },
];

const MediaGrid = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const navigate = useNavigate();

    const handleItemClick = (item) => {
        if (item.type === 'video') {
            setSelectedVideo(item);
        } else {
            navigate(`/project/${item.id}`);
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative overflow-hidden border border-neutral-800 bg-neutral-900 cursor-pointer"
                        onClick={() => handleItemClick(item)}
                    >
                        <div className="aspect-video w-full overflow-hidden">
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale"
                            />
                        </div>

                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <h3 className="text-2xl font-bold tracking-widest text-white uppercase glitch-text">
                                {/* {item.title} */}
                            </h3>
                        </div>

                        <div className="absolute bottom-2 right-2 text-xs text-[var(--color-accent)] font-mono">
                            {item.type.toUpperCase()} // 00{item.id}
                        </div>
                    </motion.div>
                ))}
            </div>

            <VideoModal
                isOpen={!!selectedVideo}
                onClose={() => setSelectedVideo(null)}
                videoSrc={selectedVideo?.videoSrc}
                title={selectedVideo?.title}
            />
        </>
    );
};

export default MediaGrid;
