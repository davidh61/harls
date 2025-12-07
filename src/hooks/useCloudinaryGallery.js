import { useState, useEffect } from 'react';

export const useCloudinaryGallery = (cloudName, tag) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!tag) return;

        const fetchImages = async () => {
            try {
                // Note: This requires the "Resource list" option to be enabled in Cloudinary
                // Settings > Security > Restricted media types > Uncheck "Resource list"
                const response = await fetch(`https://res.cloudinary.com/${cloudName}/image/list/${tag}.json`);

                if (!response.ok) {
                    if (response.status === 404) {
                        console.warn(`Cloudinary: No images found for tag '${tag}' or 'Resource list' not enabled.`);
                    }
                    throw new Error(`Failed to fetch images: ${response.statusText}`);
                }

                const data = await response.json();

                // Sort by creation date if needed, or keep default order
                // Cloudinary returns resources sorted by public_id by default usually
                const urls = data.resources.map(resource =>
                    `https://res.cloudinary.com/${cloudName}/image/upload/v${resource.version}/${resource.public_id}.${resource.format}`
                );

                setImages(urls);
                setLoading(false);
            } catch (err) {
                console.error("Cloudinary Error:", err);
                setError(err);
                setLoading(false);
            }
        };

        fetchImages();
    }, [cloudName, tag]);

    return { images, loading, error };
};
