import {Perso} from "../types/Perso";
import {compterNbDeChampisEnDigestion} from "./Champignons";
import {ChampignonEnum} from "../types/Champignon";

export function calculerVitessePerso(perso:Perso): number {
    let vitesse: number = perso.vitesse;
    vitesse += compterNbDeChampisEnDigestion(perso, ChampignonEnum.AmanitaMuscaria) * 3;
    return vitesse;
}