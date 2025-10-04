import {useCallback, useContext} from 'react';
import {Avatar, Box, Button, Tooltip} from '@mui/material';
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";
import {Champignon, ChampignonEnum, champignons} from "../types/Champignon";

export default function Boutons() {
    const { perso, setPerso } = useContext(PersoContexte) as PersoContexteType;

    const activerChampi = useCallback((champi: Champignon, index:number) => {
        let persoTmp = perso;
        champi.effet(persoTmp);
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
                                onClick={() => activerChampi(champi, index)}
                            />
                        </Tooltip>
                    )}
                )
            }
        </Box>
    );
}
