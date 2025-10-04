import {Evt, EvtProgramme} from "../types/Evt";
import {Perso} from "../types/Perso";
import {modifieFaim} from "./Faim";
import {DISTANCE_COMPLETE} from "../donnees/ReglagesJouabilite";
import {Champignon, ChampignonEnum} from "../types/Champignon";
import {calculerVitessePerso} from "./Deplacement";
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

export function leTempsPasse(perso: Perso, executerEvt: (evtExecute: Evt, dateDejaAffichee: boolean)=>void): void {
    const distanceQuiVaEetreParcourue = calculerVitessePerso(perso);
    let distanceParcourue: number;
    // faim :
    if (perso.faim >= 20) {
        perso.mort = true;
        return;
    }
    // TODO : un peu violent comme effet non ?
    const plusFaim = 1 + compterNbDeChampisEnDigestion(perso, ChampignonEnum.AmanitaMuscaria);
    modifieFaim(perso, plusFaim);

    let evtProgrammeExecute: boolean = false;
    // vérifier toutes les dates au cas où un evt "forcé" devrait avoir lieu ici avant
    for (distanceParcourue= 0 ; distanceParcourue <= distanceQuiVaEetreParcourue ; ++distanceParcourue) {
        perso.distanceParcourue = perso.distanceParcourue + 1;
        perso.evtsProgrammes.forEach((evtProgramme: EvtProgramme)=>{
            if (evtProgramme.distance === perso.distanceParcourue) {
                executerEvt(evtProgramme.evt, evtProgrammeExecute);
                evtProgrammeExecute = true;
            }
        })
        if (evtProgrammeExecute) {
            // interrompt le défilement des jours
            break;
        }
    }

    if (perso.distanceParcourue > DISTANCE_COMPLETE && !perso.mort) {
        perso.victoire = true;
    }
}