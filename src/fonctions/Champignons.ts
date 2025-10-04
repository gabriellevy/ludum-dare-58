import {Perso} from "../types/Perso";
import {Champignon, ChampignonEnum} from "../types/Champignon";


export function compterNbDeChampisEnDigestion(perso: Perso, champiEnum: ChampignonEnum): number {
    return perso.digestion
        .filter((champi:Champignon) => champi.nom === champiEnum)
        .length;
}