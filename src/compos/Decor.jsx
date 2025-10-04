import {useEffect, useRef, useState} from "react";
import fond from '../images/fond.jpg';
import devant from '../images/devant.png';

function Decor() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
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
                height: '100vh',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            fsdfds
            {/*<img src={logo} alt="logo" /> Couche 1 : Décor lointain (défile lentement) */}
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
            {/* Couche 2 : Décor proche (défile plus vite) */}
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
