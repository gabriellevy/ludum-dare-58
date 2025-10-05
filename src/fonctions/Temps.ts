import {Forme, Perso} from "../types/Perso";
import {modifieFaim} from "./Faim";
import {DISTANCE_COMPLETE} from "../donnees/ReglagesJouabilite";
import {Champignon, ChampignonEnum} from "../types/Champignon";
import {calculerVitessePerso} from "./Perso";
import {compterNbDeChampisEnDigestion} from "./Champignons";

export function uneSecondePasse(perso:Perso) {
    // les champignons se digèrent :
    perso.digestion.forEach((champignon: Champignon) => {
        champignon.secondesDEffet -= 1;
    })
    perso.digestion = [
        ...perso.digestion.filter((champi: Champignon) => champi.secondesDEffet > 0)
    ]
}

export function leTempsPasse(perso: Perso): void {
    perso.cycle_passe += 1;
    const distanceQuiVaEetreParcourue = calculerVitessePerso(perso);
    // faim :
    if (perso.faim >= 20) {
        perso.mort = true;
        return;
    }
    let plusFaim = 1
        + compterNbDeChampisEnDigestion(perso, ChampignonEnum.Huge)
        + compterNbDeChampisEnDigestion(perso, ChampignonEnum.Poison);
    plusFaim = plusFaim + (perso.forme === Forme.sanglier ? 1 : 0);
    modifieFaim(perso, plusFaim);

    perso.distanceParcourue = perso.distanceParcourue + distanceQuiVaEetreParcourue;

    if (perso.distanceParcourue > DISTANCE_COMPLETE && !perso.mort) {
        perso.victoire = true;
    }
}