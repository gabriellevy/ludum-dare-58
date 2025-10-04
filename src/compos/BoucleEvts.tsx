import {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {Evt, EvtExecute, filtrerEtPreparerEvts} from "../types/Evt";
import {Button, Grid, Typography} from '@mui/material';
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";
import {leTempsPasse} from "../fonctions/Temps";
import {evts_base} from "../donnees/evts/evts_base";

let demarre:boolean = false; // le destin a été lancé et est en cours

export default function BoucleEvts() {
    const [evtsExecutes, setEvtsExecutes] = useState<EvtExecute[]>([]); // événements déjà exécutés
    const [plusDEvts, setPlusDEvts] = useState(false); // true si il n'y a plus aucun evt exécutable
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

    const executerEvt = useCallback((evtExecute: Evt, dateDejaAffichee: boolean) => {
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
        const dateDejaAffichee: boolean = leTempsPasse(perso, executerEvt);
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
                        executerEvt(evt, dateDejaAffichee);
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
                            resolve("Vous êtes mort.");
                        }),
                    };
                    executerEvt(evt, true);
                } else {
                    setTempsRestant(perso.vitesseExecution);
                }
            }
        } else {
            setPlusDEvts(true);
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
        <>
            {evtsExecutes.map((evt: EvtExecute, index: number) => (
                <Grid container spacing={2} key={index} sx={{ mb: 2 }} columns={12}>
                    <Grid size={12} order={{ xs: index % 2 === 0 ? 2 : 1, md: index % 2 === 0 ? 2 : 1 }}>
                        <Typography mb={2} align="left">
                            <span dangerouslySetInnerHTML={{ __html: evt.texteFinal}} />
                        </Typography>
                    </Grid>
                </Grid>
            ))}
            {tempsRestant !== null && tempsRestant > 0 && (
                <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                    <Grid>
                        <Typography fontWeight="bold">
                            Prochain événement dans {tempsRestant} seconde{tempsRestant > 1 ? 's' : ''}...
                        </Typography>
                    </Grid>
                    <Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={passerAuSuivant}
                        >
                            Suivant
                        </Button>
                    </Grid>
                    {
                        /*
                        À FAIRE : boutons dynamiques par champignons
                        <Grid>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    augmenterCompetence(perso, TypeCompetence.intuition, 30)
                                }}
                            >
                                tmp bidon
                            </Button>
                        </Grid>
                         */
                    }
                </Grid>
            )}
            <div ref={messagesEndRef} />
            {plusDEvts && (
                <Typography mb={2} fontWeight="bold">
                    Plus d'événements à exécuter !!!! Faut en ajouter mon vieux !!
                </Typography>
            )}
        </>
    );
}
