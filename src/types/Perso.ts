import {EvtProgramme} from "./Evt";
import {PhaseDExecution} from "./Mode";

export type Perso = {
    faim: number;
    distanceParcourue: number; // 0 à 10000 ?
    evtsProgrammes: EvtProgramme[],
    vitesseExecution: number, // en secondes entre chaque événement
    mort?: boolean,
    phaseDExecution: PhaseDExecution;
    debogue: boolean;

    // caracs gameplay visibles
    vitesse: number; // nombre de distance parcourue par tick (vitesseExecution)
    niveau:number;
};
