import {Box, Button, Typography} from "@mui/material";
import {Forme} from "../types/Perso";
import React, {useContext} from "react";
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";

interface GameOverOverlayProps {
    onRestart: () => void;
    victoire?: boolean;
    mort?: boolean;
}

export function GameOverOverlay ({ onRestart, mort }: GameOverOverlayProps) {
    const { perso } = useContext(PersoContexte) as PersoContexteType;

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fond noir semi-transparent
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundRepeat: 'repeat-x',
                backgroundSize: 'cover', // ou 'contain' selon l'effet souhaité
                backgroundPosition: 'center',
                zIndex: 1000,
                color: 'white',
            }}
        >
            <Box
                sx={{
                    height: '60vh',
                    width: '80vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#76fb7d',
                    borderRadius: '16px', // Arrondi des bords
                    padding: '24px', // Ajout de padding
                    flexDirection: 'column',
                    boxSizing: 'border-box', // Pour que le padding soit inclus dans la largeur/hauteur
                }}
            >
                <Typography
                    variant="h3" // Réduction de la taille du titre
                    component="h1"
                    sx={{
                        color: '#1a4d2e', // Vert très foncé
                        fontWeight: 'bold',
                        textAlign: 'center', // Centrage du titre
                        mb: 2, // Marge en bas pour espacer le titre du texte
                    }}
                >
                {mort ? "You starved to death in the dark forest..." : "You managed to leave the forest !"}
                    {!mort && (
                        <Typography
                            sx={{
                                color: '#1a4d2e', // Vert très foncé
                                m: 2, // Suppression des marges par défaut
                            }}
                        >
                            {
                                perso.forme === Forme.lynx ? (
                                    <Typography sx={{ mb: 1 }}>
                                        And you are a lynx now. How cool is that ?
                                    </Typography>
                                ) : perso.forme === Forme.sanglier ? (
                                        <Typography sx={{ mb: 1 }}>
                                            On the other hand, you will have to get used to living in the city as a wild boar.
                                        </Typography>
                                    ) : perso.forme === Forme.escargot ? (
                                            <Typography sx={{ mb: 1 }}>
                                                And you are a snail now. How cool is that ?
                                            </Typography>
                                        ) : null
                            }
                        </Typography>
                    )}
            </Typography>
            <Button
                variant="contained"
                color="error"
                size="large"
                onClick={onRestart}
            >
                Restart
            </Button>
        </Box>
        </Box>
    );
}
