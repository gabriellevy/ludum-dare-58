import React, {useCallback, useContext} from 'react';
import {Box, IconButton, Tooltip} from '@mui/material';
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";
import {Champignon, ChampignonEnum, champignons} from "../types/Champignon";
import {modifieFaim} from "../fonctions/Faim";
import { useSound } from 'react-sounds';
import prend1 from '../donnees/sons/prend1.mp3';
import grandit from '../donnees/sons/grandit.mp3';
import {compterNbDeChampisEnDigestion} from "../fonctions/Champignons";

interface BoutonsProps {
    setMessageFondu: any;
}

export default function Boutons({setMessageFondu}:Readonly<BoutonsProps>) {
    const { perso, setPerso } = useContext(PersoContexte) as PersoContexteType;
    const { play } = useSound(prend1);
    const { play:play_grandit } = useSound(grandit);

    const consommerChampi = useCallback((champi: Champignon, index:number) => {
        let persoTmp = perso;
        switch (champi.nom) {
            case ChampignonEnum.Huge:
                play_grandit();
                break;
            default:
                play();
                break;
        }
        champi.effet(persoTmp);
        setMessageFondu(champi.description);
        // réduit la faim :
        modifieFaim(perso, - 3);
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
    }, [perso, play, play_grandit, setMessageFondu, setPerso]);

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
                        <Tooltip title={compterNbDeChampisEnDigestion(perso, ChampignonEnum.Intuition_Escargot) > 0 ? champi.description : ''}>
                            <IconButton
                                color="primary"
                                size="small"
                                onClick={() => consommerChampi(champi, index)}
                                >
                                    <Box
                                        component="img"
                                        sx={{
                                            padding: '3px',
                                            height: 50,
                                            width: 50,
                                        }}
                                        alt={champi.nom}
                                        src={champi.imageSrc}
                                    />
                            </IconButton>
                        </Tooltip>
                    )}
                )
            }
        </Box>
    );
}
