import React, {useCallback, useContext, useEffect, useState} from "react";
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";
import {Box, Button, Grid, Typography} from "@mui/material";
import Decor from "./Decor";
import BoucleEvts from "./BoucleEvts";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Boutons from "./Boutons";
import AffichageDigestion from "./AffichageDigestion";
import Progression from "./Progression";
import {GameOverOverlay} from "./GameOverOverlay";
import {initPerso} from "../App";
import {useSound} from "react-sounds";
import musique_nuit from '../donnees/sons/musique_nuit.mp3';
import musique_jour from '../donnees/sons/musique_jour.mp3';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4caf50', // Vert pour le thème principal
        },
    },
});

export default function Jeu() {
    const [afficherMenu, setAfficherMenu] = useState(true);
    const [messageFondu, setMessageFondu] = useState<string>('');
    const { perso, setPerso } = useContext(PersoContexte) as PersoContexteType;
    const { play:play_musique_nuit, stop:stop_musique_nuit} = useSound(musique_nuit);
    const { play:play_musique_jour, stop:stop_musique_jour } = useSound(musique_jour);

    const onRestart = useCallback(() => {
        console.log("Mathieu onRestart initPerso : ", initPerso);
        setPerso({
            ...initPerso,
            champignons: [],
            digestion: [],
        })
    }, [setPerso]);
    if (perso.nuit === undefined) {
        perso.nuit = false;
    }

    useEffect(() => {
        if (!perso.mort && !perso.victoire) {
            if (perso.nuit) {
                stop_musique_jour();
                play_musique_nuit();
            } else {
                stop_musique_nuit();
                play_musique_jour();
            }
        }
    }, [perso.mort, perso.nuit, perso.victoire/*, play_musique_jour, play_musique_nuit, stop_musique_jour, stop_musique_nuit*/]);

    return (
        <ThemeProvider theme={theme}>
            {afficherMenu ? (
                        <Box
                            sx={{
                                height: '100vh',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#2e7d32', // Fond vert
                                flexDirection: 'column',
                                gap: 4,
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
                                    Forest of the magic mushrooms
                                </Typography>
                                <Typography
                                    component="ul" // Utilisation d'une liste HTML
                                    sx={{
                                        color: '#1a4d2e', // Vert très foncé
                                        pl: 2, // Padding à gauche pour les puces
                                        m: 0, // Suppression des marges par défaut
                                    }}
                                >
                                    <Typography component="li" sx={{ mb: 1 }}>
                                        You are lost in a magic forest. Your only chance of survival is mushrooms. Lots of delicious and strange mushrooms.
                                    </Typography>
                                    <Typography component="li" sx={{ mb: 1 }}>
                                        you will automatically pick mushrooms along the way
                                    </Typography>
                                    <Typography component="li" sx={{ mb: 1 }}>
                                        click on the mushrooms buttons in order to feed and trigger an effect (maybe)
                                    </Typography>
                                    <Typography component="li" sx={{ mb: 1 }}>
                                        get out of the forest (without starving)
                                    </Typography>
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    sx={{
                                        backgroundColor: '#ff9800',
                                        color: 'white',
                                        fontSize: '1.2rem',
                                        padding: '12px 36px',
                                        '&:hover': {
                                            backgroundColor: '#e68a00',
                                        },
                                        mt: 2, // Marge en haut pour espacer le bouton
                                    }}
                                    onClick={() => {
                                        setAfficherMenu(false);
                                    }}
                                >
                                    let’s pick mushrooms!
                                </Button>
                            </Box>

                        </Box>

            ) : (
                <Grid container sx={{ height: 600, width: 800 }}>
                    <Grid size={4}>
                        <AffichageDigestion />
                    </Grid>
                    <Grid size={8}>
                        <Box
                            sx={{
                                backgroundColor: '#317a3a', // Fond vert
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100vh', // Prend toute la hauteur de la fenêtre
                                overflow: 'hidden', // Désactive le scroll pour le parent
                            }}
                        >
                            <Decor messageFondu={messageFondu}/>
                            <Progression/>
                            <Box sx={{
                                padding: 1,
                                flexGrow: 1, // Prend l'espace restant
                                overflow: 'auto', // Active le scroll uniquement ici
                            }}>
                                <Boutons setMessageFondu={setMessageFondu}/>
                            </Box>
                            <Box sx={{
                                padding: 1,
                                flexGrow: 1, // Prend l'espace restant
                                overflow: 'auto', // Active le scroll uniquement ici
                                backgroundColor: '#71f178',
                                maxHeight: '250px',
                                borderRadius: '4px', // Optionnel : coins arrondis
                            }}>
                                <BoucleEvts/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            )}
            {(perso.mort || perso.victoire) && <GameOverOverlay onRestart={onRestart} mort={perso.mort ?? false}/>}
        </ThemeProvider>
    );
}
