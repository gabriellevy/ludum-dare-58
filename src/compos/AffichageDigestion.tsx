import {Box} from '@mui/material';
import {useContext} from "react";
import Jauge from "./Jauge";
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";
import {Champignon} from "../types/Champignon";

export default function AffichageDigestion() {

    const { perso } = useContext(PersoContexte) as PersoContexteType;

    return (
        <Box
            sx={{
                backgroundColor: '#71f178', // Fond vert
                display: 'flex',
                flexDirection: 'column',
                height: '100vh', // Prend toute la hauteur de la fenêtre
                overflow: 'hidden', // Désactive le scroll pour le parent
            }}
        >
            <Box
                sx={{
                    fontSize: 16,
                    mb: 1,
                    padding: 1,
                }}>
                Hunger :
                <Jauge value={perso.faim} />
            </Box>
            {
                perso.digestion.map((champi: Champignon) => {
                    return (
                        <Box
                            sx={{
                            display: 'flex',
                            fontSize: 12,
                            backgroundColor: '#97836c',
                            mb: 1,
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
                            <Box>
                            {
                                champi.description
                            }
                            <br/>
                            ({
                                champi.secondesDEffet
                            } s)
                            </Box>
                        </Box>
                )
                })
            }
        </Box>
    );
}
