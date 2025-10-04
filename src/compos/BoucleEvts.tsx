import {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {Evt, EvtExecute, filtrerEtPreparerEvts} from "../types/Evt";
import {Box, Button, Typography} from '@mui/material';
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";
import {leTempsPasse} from "../fonctions/Temps";
import {evts_base} from "../donnees/evts/evts_base";

let demarre:boolean = false; // le destin a été lancé et est en cours

export default function BoucleEvts() {
    const [evtsExecutes, setEvtsExecutes] = useState<EvtExecute[]>([]); // événements déjà exécutés
    const { perso, setPerso } = useContext(PersoContexte) as PersoContexteType;
    const [tempsRestant, setTempsRestant] = useState<number | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [perso.distanceParcourue]);

    const executerEvt = useCallback((evtExecute: Evt) => {
        const texte: Promise<string> = evtExecute.description(perso);
        texte.then((texte) => {
            const nouvEvt: EvtExecute = {
                id: evtExecute.id,
                texteFinal: texte, // l'exécution elle-même
            };

            if (perso.debogue) {
                console.log("Éxécution de " + nouvEvt.id);
            }

            setEvtsExecutes((prev: EvtExecute[]) => [
                ...prev,
                nouvEvt
            ]);

            setPerso({ ...perso });
        })
    }, [perso, setPerso]);

    const determinerEvtSuivant = useCallback(() => {
        leTempsPasse(perso, executerEvt);
        setPerso({
            ...perso,
        });

        // filtrer les evts non applicables
        const evtsApplicables: Evt[] = [
            ...filtrerEtPreparerEvts(evts_base, perso),
        ];

        if (evtsApplicables.length > 0) {
            // sélectionner un des evts en fonction de leur proba
            let completeProba: number = 0;
            evtsApplicables.forEach(evt => {
                if (evt.proba) {
                    completeProba += evt.proba;
                }
            })
            let randomProba: number = Math.random() * completeProba;
            evtsApplicables.every(evt => {
                if (evt.proba) {
                    randomProba -= evt.proba;
                    if (randomProba <= 0) {
                        executerEvt(evt);
                        return false;
                    }
                }
                return true
            })

            if (demarre) {
                if (perso.mort) {
                    const evt: Evt = {
                        id: "mort",
                        description: () =>  new Promise((resolve) => {
                            resolve("You are dead.");
                        }),
                    };
                    executerEvt(evt);
                } else {
                    // plus on avance dans le jeu plus ça va vite
                    setTempsRestant(perso.vitesseExecution - perso.niveau + 1);
                }
            }
        } else {
            demarre= false;
        }
    }, [executerEvt, perso, setPerso]);

    const passerAuSuivant = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setTempsRestant(null);
        determinerEvtSuivant();
    }, [determinerEvtSuivant]);

    useEffect(() => {
        if (tempsRestant !== null && tempsRestant > 0) {
            timeoutRef.current = setTimeout(() => {
                setTempsRestant((prev) => (prev !== null ? prev - 1 : null));
            }, 1000);
        } else if (tempsRestant === 0) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            setTimeout(determinerEvtSuivant, 0);
        }
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [tempsRestant, determinerEvtSuivant]);

    // démarrer la boucle d'événements
    useEffect(() => {
        if (!demarre) {
            demarre = true;
            const nouvEvt: EvtExecute = {
                id: "intro",
                texteFinal: "You are lost in the middle of the forest with nothing to eat ! Fortunately there are a lot of appetizing mushrooms everywhere !",
            };

            setEvtsExecutes((prev: EvtExecute[]) => [
                ...prev,
                nouvEvt
            ]);

            setTempsRestant(perso.vitesseExecution);
        }
    }, [determinerEvtSuivant, perso.vitesseExecution]);

    return (
        <Box
            sx={{
                backgroundColor: '#71f178', // Fond vert
                maxHeight: '250px',
            }}
        >
            {evtsExecutes.map((evt: EvtExecute, index: number) => (
                <Typography mb={2} align="left" key={"evt" + index + evt.id}>
                    <span dangerouslySetInnerHTML={{ __html: evt.texteFinal}} />
                </Typography>
            ))}
            {tempsRestant !== null && perso.debogue && tempsRestant > 0 && (
                <>
                        <Typography fontWeight="bold">
                            Prochain événement dans {tempsRestant} seconde{tempsRestant > 1 ? 's' : ''}...
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={passerAuSuivant}
                        >
                            Suivant
                        </Button>
                </>
            )}
            <div ref={messagesEndRef} />
        </Box>
    );
}
