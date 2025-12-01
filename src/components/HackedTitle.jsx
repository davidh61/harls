import { useEffect } from 'react';

const HackedTitle = () => {
    useEffect(() => {
        const originalTitle = "sam harlow";
        const glitchChars = "¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ";
        let interval;
        let timeout;

        const glitch = () => {
            // 30% chance to start a glitch sequence
            if (Math.random() > 0.7) {
                const duration = Math.random() * 1000 + 500; // Glitch for 0.5-1.5s
                const startTime = Date.now();

                const runGlitchFrame = () => {
                    if (Date.now() - startTime > duration) {
                        document.title = originalTitle;
                        return;
                    }

                    let newTitle = "";
                    for (let i = 0; i < originalTitle.length; i++) {
                        // 40% chance of char being glitched
                        if (Math.random() > 0.6) {
                            newTitle += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                        } else {
                            newTitle += originalTitle[i];
                        }
                    }
                    document.title = newTitle;

                    // Schedule next frame
                    timeout = setTimeout(runGlitchFrame, 50);
                };

                runGlitchFrame();
            }
        };

        // Check for glitch trigger every 2 seconds
        interval = setInterval(glitch, 2000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
            document.title = originalTitle;
        };
    }, []);

    return null;
};

export default HackedTitle;
