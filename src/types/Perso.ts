import {EvtProgramme} from "./Evt";
import {PhaseDExecution} from "./Mode";


export type Perso = {
    faim: number;
    distanceParcourue: number;
    evtsProgrammes: EvtProgramme[],
    vitesseExecution: number, // en millisecondes entre chaque événement
    mort?: boolean,
    phaseDExecution: PhaseDExecution;
};
