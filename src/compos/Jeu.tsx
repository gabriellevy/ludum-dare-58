import React, {useContext, useState} from "react";
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";
import {PhaseDExecution} from "../types/Mode";
import {Box, Button, Grid, Typography} from "@mui/material";
import Decor from "./Decor";
import BoucleEvts from "./BoucleEvts";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Boutons from "./Boutons";
import AffichagePerso from "./AffichagePerso";

const theme = createTheme({
    palette: {
        primary: {
            main: '#4caf50', // Vert pour le thème principal
        },
    },
});

export default function Jeu() {
    const [afficherMenu, setAfficherMenu] = useState(true);
    const { perso } = useContext(PersoContexte) as PersoContexteType;

    return (
        <ThemeProvider theme={theme}>
            {/*TODO menu*/}
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
                            <Typography
                                variant="h2"
                                component="h1"
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                Mushroom hunter
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                You are lost in a dark forest. Your only chance of survival is mushrooms. Lots of delicious and strange mushrooms.
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
                                }}
                                onClick={() => {
                                    setAfficherMenu(false);
                                }}
                            >
                                let’s pick mushrooms!
                            </Button>
                        </Box>

            ) : perso.phaseDExecution === PhaseDExecution.marche && (
                <Grid container spacing={3} sx={{ height: '100vh', width: '100vw' }}>
                    <Grid size={4}>
                        <AffichagePerso />
                    </Grid>
                    <Grid size={8}>
                        <Box
                            sx={{
                                backgroundColor: '#71f178', // Fond vert
                                maxHeight: '500px',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100vh', // Prend toute la hauteur de la fenêtre
                                overflow: 'hidden', // Désactive le scroll pour le parent
                            }}
                        >
                            <Decor/>
                            <Box sx={{
                                padding: 1,
                                flexGrow: 1, // Prend l'espace restant
                                overflow: 'auto', // Active le scroll uniquement ici
                            }}>
                                <Boutons/>
                            </Box>
                            <Box sx={{
                                padding: 1,
                                flexGrow: 1, // Prend l'espace restant
                                overflow: 'auto', // Active le scroll uniquement ici
                            }}>
                                <BoucleEvts/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            )}
        </ThemeProvider>
    );
}
