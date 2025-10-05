import {Forme, Perso} from "../types/Perso";
import {compterNbDeChampisEnDigestion} from "./Champignons";
import {ChampignonEnum} from "../types/Champignon";

export function calculerVitessePerso(perso:Perso): number {
    let vitesse: number = perso.vitesse;
    vitesse += compterNbDeChampisEnDigestion(perso, ChampignonEnum.Huge) * 3;
    vitesse -= compterNbDeChampisEnDigestion(perso, ChampignonEnum.Poison) * 2;

    if (vitesse < 1) vitesse = 0;


    if (perso.forme === Forme.escargot) {
        vitesse = 1;
    }

    // confus ??
    const confus:boolean = compterNbDeChampisEnDigestion(perso, ChampignonEnum.Confused_Boar) % 2 === 1;
    if (confus) {
        vitesse = -vitesse;
    }

    return vitesse;
}

// cad nb de secondes avant prochain evt
export function calculerVitesseExecution(perso:Perso): number {
    // plus on avance dans le jeu plus ça va vite
    let vitesse: number = perso.vitesseExecution - perso.niveau + 1;
    vitesse -= compterNbDeChampisEnDigestion(perso, ChampignonEnum.Overexcited);
    if (vitesse < 1)
        vitesse = 1;
    return vitesse;
}