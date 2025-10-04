import {useEffect, useRef, useState} from "react";
import {devant, fond} from "../donnees/images";

function Decor() {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const speed = 2; // Vitesse de défilement

        const handleScroll = () => {
            // Mise à jour de la position pour simuler le défilement
            setScrollPosition((prev: number) => (prev + speed) % container.clientWidth);
        };

        const interval = setInterval(handleScroll, 30); // Rafraîchit toutes les 30ms

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                width: '100vw',
                height: '250px',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            fsdfds
            <div
                style={{
                    position: 'absolute',
                    width: '200%',
                    height: '100%',
                    backgroundImage: `url(${fond})`,
                    backgroundRepeat: 'repeat-x',
                    left: -scrollPosition * 0.3, // Effet de parallaxe
                    top: 0,
                    willChange: 'transform',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '200%',
                    height: '100%',
                    backgroundImage: `url(${devant})`,
                    backgroundRepeat: 'repeat-x',
                    left: -scrollPosition * 0.7, // Effet de parallaxe
                    top: 0,
                    willChange: 'transform',
                }}
            />
        </div>
    );
}

export default Decor;
