import {useEffect, useRef, useState} from "react";
import {devant, fond, persoMarche} from "../donnees/images";

function Decor() {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [characterPosition/*, setCharacterPosition*/] = useState<{ x: number; y: number }>({ x: 100, y: 170 });
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

        // Déplacement du personnage (exemple : vers la droite)
        /*const characterSpeed = 3;
        const moveCharacter = () => {
            setCharacterPosition((prev) => ({
                x: prev.x + characterSpeed,
                y: prev.y,
            }));
            requestAnimationFrame(moveCharacter);
        };
        requestAnimationFrame(moveCharacter);

        return () => {
            cancelAnimationFrame(animateBackground as unknown as number);
            cancelAnimationFrame(moveCharacter as unknown as number);
        };*/

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
                    zIndex: 0,
                    willChange: 'transform',
                }}
            />
            {/* Personnage (entre les couches) */}
            <img
                src={persoMarche}
                alt="Personnage qui marche"
                style={{
                    position: 'absolute',
                    left: characterPosition.x,
                    top: characterPosition.y,
                    width: '80px',
                    height: 'auto',
                    zIndex: 2,
                    transform: 'translateY(-50%)', // Centre verticalement
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
                    zIndex: 4,
                    willChange: 'transform',
                }}
            />
        </div>
    );
}

export default Decor;
