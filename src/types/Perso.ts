import {PhaseDExecution} from "./Mode";
import {Champignon, ChampignonEnum} from "./Champignon";

export type Perso = {
    // 0 (repus)
    // à 20 (mort de faim)
    // -1 par tick, +6 par champi (??)
    faim: number;
    distanceParcourue: number; // 0 à DISTANCE_COMPLETE
    vitesseExecution: number, // en secondes entre chaque événement
    mort?: boolean,
    victoire?: boolean,
    phaseDExecution: PhaseDExecution;
    debogue: boolean;
    forme: Forme;

    // caracs gameplay visibles
    vitesse: number; // nombre de distance parcourue par tick (vitesseExecution)
    niveau:number;
    champignons: ChampignonEnum[];
    // champignons ingérés qui font de l'effet pour un temps chronométré
    digestion: Champignon[];
};


export enum Forme {
    troll = "Troll",
    humain = "Human",
    escargot = "Snail",
    sanglier = "Boar",
}