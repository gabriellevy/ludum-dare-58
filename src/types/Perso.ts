import {EvtProgramme} from "./Evt";
import {PhaseDExecution} from "./Mode";
import {ChampignonEnum} from "./Champignon";

export type Perso = {
    // 0 (repus)
    // à 20 (mort de faim)
    // -1 par tick, +6 par champi (??)
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
    champignons: ChampignonEnum[];
};
