import {Box} from '@mui/material';
import {useContext} from "react";
import Jauge from "./Jauge";
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";
import {Champignon} from "../types/Champignon";

export default function AffichagePerso() {

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
            Hunger :
            <Jauge value={perso.faim} />
            {
                perso.digestion.map((champi: Champignon) => {
                    return (
                        <Box>
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
                            {
                                champi.description
                            }
                            ({
                                champi.secondesDEffet
                            } s)
                        </Box>
                )
                })
            }
        </Box>
    );
}
