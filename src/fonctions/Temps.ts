import {Evt, EvtProgramme} from "../types/Evt";
import {Perso} from "../types/Perso";
import {modifieFaim} from "./Faim";


export function leTempsPasse(perso: Perso, executerEvt: (evtExecute: Evt, dateDejaAffichee: boolean)=>void): boolean {
    // TODO jauger ça : vitesse etc
    const distanceQuiVaEetreParcourue = perso.vitesse;
    let distanceParcourue: number;
    // faim :
    modifieFaim(perso, 1);

    let evtProgrammeExecute: boolean = false;
    // vérifier toutes les dates au cas où un evt "forcé" devrait avoir lieu ici avant
    for (distanceParcourue= 0 ; distanceParcourue <= distanceQuiVaEetreParcourue ; ++distanceParcourue) {
        perso.distanceParcourue = perso.distanceParcourue + 1;
        perso.evtsProgrammes.forEach((evtProgramme: EvtProgramme)=>{
            if (evtProgramme.distance === perso.distanceParcourue) {
                executerEvt(evtProgramme.evt, evtProgrammeExecute);
                // TODO: ? nettoyage des evts exécutés ?? suppression de ceux dont la date est dépassée ?
                evtProgrammeExecute = true;
            }
        })
        if (evtProgrammeExecute) {
            // interrompt le défilement des jours
            break;
        }
    }
    return evtProgrammeExecute;
}