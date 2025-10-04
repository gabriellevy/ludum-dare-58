import {useContext} from 'react';
import {Avatar, Box, Button, Tooltip} from '@mui/material';
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";
import {Champignon, ChampignonEnum, champignons} from "../types/Champignon";

export default function Boutons() {
    const { perso, setPerso } = useContext(PersoContexte) as PersoContexteType;

    return (
        <Box
            sx={{
                backgroundColor: '#39b540', // Fond vert
                maxHeight: '200px',
            }}
        >
            {
                perso.champignons.map((champiEnum:ChampignonEnum) => {
                    const champi: Champignon = champignons[champiEnum];
                    return (<Tooltip title={champi.nom}>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<Avatar src={champi.imageSrc} />}
                            />
                        </Tooltip>
                    )}
                )
            }
        </Box>
    );
}
