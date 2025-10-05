import {GroupeEvts} from "../../types/Evt";
import {Perso} from "../../types/Perso";
import {NB_CYCLE_JOURNEE} from "../ReglagesJouabilite";

export const evts_environement: GroupeEvts = {
    evts: [
        {
            id: "evts_nuit",
            description: async (perso: Perso): Promise<string> => {
                perso.nuit = true;
                return "The night has fallen.";
            },
            conditions: (perso:Perso): boolean => (perso.cycle_passe % NB_CYCLE_JOURNEE) === 1,
        },
        {
            id: "evts_jour",
            description: async (perso: Perso): Promise<string> => {
                perso.nuit = false;
                return "The day dawns.";
            },
            conditions: (perso:Perso): boolean => (perso.cycle_passe % NB_CYCLE_JOURNEE) === (NB_CYCLE_JOURNEE/2 + 1),
        },
    ],
    probaParDefaut: 99999999999999999999999999999999999999999, // obligatoires
}