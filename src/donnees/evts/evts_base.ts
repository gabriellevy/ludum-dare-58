import {GroupeEvts} from "../../types/Evt";
import {Perso} from "../../types/Perso";
import {Champignon, ChampignonEnum, champignons} from "../../types/Champignon";
import {getRandomEnumValue} from "../../fonctions/aleatoire";
import {compterNbDeChampisEnDigestion} from "../../fonctions/Champignons";

export const evts_base: GroupeEvts = {
    evts: [
        {
            id: "evts_trouve champignon",
            description: async (perso: Perso): Promise<string> => {
                const champignonTrouve: Champignon = champignons[getRandomEnumValue(ChampignonEnum)];
                let num:number = 1 + compterNbDeChampisEnDigestion(perso, ChampignonEnum.AgaricusBisporus);
                for (let i = 0; i < num; i++) {
                    perso.champignons.push(champignonTrouve.nom);
                }
                return "You found " + num + " " + champignonTrouve.nom + ".";
            },
            conditions: (): boolean => true,
        },
    ],
    probaParDefaut: 1,
}
