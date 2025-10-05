import {Box, Typography} from '@mui/material';
import {useContext} from "react";
import Jauge from "./Jauge";
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";
import {Champignon} from "../types/Champignon";

export default function AffichageDigestion() {

    const { perso } = useContext(PersoContexte) as PersoContexteType;

    return (
        <Box
            sx={{
                backgroundColor: '#1e4521', // Fond vert
                display: 'flex',
                flexDirection: 'column',
                height: '100vh', // Prend toute la hauteur de la fenêtre
                overflow: 'hidden', // Désactive le scroll pour le parent
                mb: 1,
                width: '100%', // Prend toute la largeur disponible
                borderRadius: '16px', // Arrondi des bords
                margin: '-5px',
            }}
        >
            <Box
                sx={{
                    fontSize: 16,
                    mb: 1,
                    padding: 1,
                }}>

                <Typography
                    component="h4"
                    sx={{
                        color: '#bef4d6', // Vert très foncé
                        fontWeight: 'bold',
                        textAlign: 'center', // Centrage du titre
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    Hunger :
                </Typography>
                <Jauge value={perso.faim} />
            </Box>
            {
                perso.digestion.map((champi: Champignon) => {
                    return (
                        <Box
                            sx={{
                                display: 'flex',
                                backgroundColor: '#97836c',
                                mb: 1,
                                width: '95%',
                                flexWrap: 'wrap',
                                wordBreak: 'break-word',
                                alignItems: 'center', // Pour aligner verticalement les éléments
                                padding: '8px', // Ajoute un peu d'espace interne
                                borderRadius: '4px', // Optionnel : coins arrondis
                         }}>
                            <Box
                                component="img"
                                sx={{
                                    padding: '3px',
                                    height: 40,
                                    width: 40,
                                }}
                                alt={champi.nom}
                                src={champi.imageSrc}
                            />
                            <Typography sx={{
                                fontSize: 12,
                                wordBreak: 'break-word', width: 'calc(100% - 40px - 8px)'
                            }}>
                            {
                                champi.description
                            }
                            <br/>
                            ({
                                champi.secondesDEffet
                            } s)
                            </Typography>
                        </Box>
                )
                })
            }
        </Box>
    );
}
