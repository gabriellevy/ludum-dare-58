import {useContext, useEffect, useRef, useState} from "react";
import {devant, fond, persoMarche} from "../donnees/images";
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";
import {calculerVitessePerso} from "../fonctions/Perso";

type FloatingText = {
    id: number;
    content: string;
    x: number;
    y: number;
};

interface DecorProps {
    messageFondu: string,
}

function Decor({messageFondu}: Readonly<DecorProps>) {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [characterPosition/*, setCharacterPosition*/] = useState<{ x: number; y: number }>({ x: 100, y: 170 });
    const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const textIdRef = useRef<number>(0);
    const { perso } = useContext(PersoContexte) as PersoContexteType;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const vitesseDefilement = calculerVitessePerso(perso)-3;

        const handleScroll = () => {
            // Mise à jour de la position pour simuler le défilement
            setScrollPosition((prev: number) => (prev + vitesseDefilement) % container.clientWidth);
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
    }, [perso]);

    useEffect(() => {
        const newText = {
            id: textIdRef.current++,
            content: messageFondu,
            x: characterPosition.x + 10,
            y: characterPosition.y - 70,
        };
        setFloatingTexts([...floatingTexts, newText]);
    }, [characterPosition.x, characterPosition.y, messageFondu]);

    useEffect(() => {
        if (floatingTexts.length > 0) {
            const timer = setTimeout(() => {
                setFloatingTexts((prev) => prev.slice(1)); // Supprime le premier texte après animation
            }, 1500); // Correspond à la durée de l'animation
            return () => clearTimeout(timer);
        }
    }, [floatingTexts]);

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
            {/* Texte flottant */}
            {floatingTexts.map((text) => (
                <div
                    key={text.id}
                    className="floating-text"
                    style={{
                        position: 'absolute',
                        left: text.x,
                        top: text.y,
                        color: '0x000000',
                        fontWeight: 'bold',
                        zIndex: 5,
                        animation: 'floatUpAndFade 2.5s ease-out forwards',
                    }}
                >
                    {text.content}
                </div>
            ))
            }
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
            <style>
                {
                    `@keyframes floatUpAndFade {
                    0% { transform: translateY(0); opacity: 1; }
                    100% { transform: translateY(-50px); opacity: 0; }
                    }`
                }
            </style>
        </div>
    );
}

export default Decor;
