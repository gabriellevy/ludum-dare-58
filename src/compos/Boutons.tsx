import React, {useCallback, useContext} from 'react';
import {Box, Button, Tooltip} from '@mui/material';
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";
import {Champignon, ChampignonEnum, champignons} from "../types/Champignon";
import {modifieFaim} from "../fonctions/Faim";
import { useSound } from 'react-sounds';
import prend1 from '../donnees/sons/prend1.mp3';
import {compterNbDeChampisEnDigestion} from "../fonctions/Champignons";

interface BoutonsProps {
    setMessageFondu: any;
}

export default function Boutons({setMessageFondu}:Readonly<BoutonsProps>) {
    const { perso, setPerso } = useContext(PersoContexte) as PersoContexteType;
    const { play } = useSound(prend1);

    const consommerChampi = useCallback((champi: Champignon, index:number) => {
        let persoTmp = perso;
        play();
        champi.effet(persoTmp);
        setMessageFondu(champi.description);
        // réduit la faim :
        modifieFaim(perso, - 4);
        persoTmp.digestion.push({
            ...champi
        });
        persoTmp.champignons = [
            ...perso.champignons.slice(0, index),
            ...perso.champignons.slice(index+1, perso.champignons.length)
        ];

        setPerso({
            ...persoTmp,
        });
    }, [perso, play, setMessageFondu, setPerso]);

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
                        <Tooltip title={compterNbDeChampisEnDigestion(perso, ChampignonEnum.CantharellusCibarius) > 0 ? champi.description : ''}>
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
                        </Tooltip>
                    )}
                )
            }
        </Box>
    );
}
