import {Box, Button, Typography} from "@mui/material";

interface GameOverOverlayProps {
    onRestart: () => void;
    victoire?: boolean;
    mort?: boolean;
}

export function GameOverOverlay ({ onRestart, mort }: GameOverOverlayProps) {

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
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        mb: 2, // Marge en bas pour espacer le titre du texte
                    }}
                >
                {mort ? "You starved to death in the dark forest..." : "You managed to leave the forest !"}
                    {!mort && (

                        <Typography
                            component="ul" // Utilisation d'une liste HTML
                            sx={{
                                color: '#1a4d2e', // Vert très foncé
                                pl: 2, // Padding à gauche pour les puces
                                m: 0, // Suppression des marges par défaut
                            }}
                        >

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
