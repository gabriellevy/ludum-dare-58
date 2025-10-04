import {useCallback, useContext} from 'react';
import {Avatar, Box, Button, Tooltip} from '@mui/material';
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";
import {Champignon, ChampignonEnum, champignons} from "../types/Champignon";
import {modifieFaim} from "../fonctions/Faim";

export default function Boutons() {
    const { perso, setPerso } = useContext(PersoContexte) as PersoContexteType;

    const consommerChampi = useCallback((champi: Champignon, index:number) => {
        let persoTmp = perso;
        champi.effet(persoTmp);
        // réduit la faim :
        modifieFaim(perso, - 5);
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
                backgroundColor: '#39b540', // Fond vert
                maxHeight: '200px',
            }}
        >
            {
                perso.champignons.map((champiEnum:ChampignonEnum, index:number) => {
                    const champi: Champignon = champignons[champiEnum];
                    return (<Tooltip title={champi.nom}>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<Avatar src={champi.imageSrc} />}
                                onClick={() => consommerChampi(champi, index)}
                            />
                        </Tooltip>
                    )}
                )
            }
        </Box>
    );
}
