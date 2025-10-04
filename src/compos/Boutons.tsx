import {useCallback, useContext} from 'react';
import {Box, Button} from '@mui/material';
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";
import {Champignon, ChampignonEnum, champignons} from "../types/Champignon";
import {modifieFaim} from "../fonctions/Faim";

export default function Boutons() {
    const { perso, setPerso } = useContext(PersoContexte) as PersoContexteType;

    const consommerChampi = useCallback((champi: Champignon, index:number) => {
        let persoTmp = perso;
        champi.effet(persoTmp);
        // réduit la faim :
        modifieFaim(perso, - 4);
        persoTmp.champignons = [
            ...perso.champignons.slice(0, index),
            ...perso.champignons.slice(index+1, perso.champignons.length-1)
        ];

        setPerso({
            ...persoTmp,
        });
    }, [perso, setPerso]);

    return (
        <Box
            sx={{
                maxHeight: '200px',
            }}
        >
            {
                perso.champignons.map((champiEnum:ChampignonEnum, index:number) => {
                    const champi: Champignon = champignons[champiEnum];
                    return (
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={
                                    <Box
                                        component="img"
                                        sx={{
                                            maxHeight: 60,
                                            maxWidth: 60,
                                        }}
                                        alt={champi.nom}
                                        src={champi.imageSrc}
                                    />
                            }
                                onClick={() => consommerChampi(champi, index)}
                            />
                    )}
                )
            }
        </Box>
    );
}
