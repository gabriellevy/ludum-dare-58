import {GroupeEvts} from "../../types/Evt";
import {Perso} from "../../types/Perso";
import {Champignon, ChampignonEnum, champignons} from "../../types/Champignon";
import {getRandomEnumValue} from "../../fonctions/aleatoire";

export const evts_base: GroupeEvts = {
    evts: [
        {
            id: "evts_trouve champignon",
            description: async (perso: Perso): Promise<string> => {
                const champignon: Champignon = champignons[getRandomEnumValue(ChampignonEnum)];
                perso.champignons.push(champignon.nom);
                return "You found a " + champignon.nom + ".";
            },
            conditions: (): boolean => true,
        },
    ],
    probaParDefaut: 1,
}
