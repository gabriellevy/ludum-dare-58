import {Perso} from "../types/Perso";

export const MAX_FAIM:number = 20;
export function modifieFaim(perso:Perso, faim:number) {
    perso.faim += faim;
    if (perso.faim < 0) perso.faim = 0;
    else if (perso.faim > MAX_FAIM) {
        perso.faim = MAX_FAIM;
    }
}