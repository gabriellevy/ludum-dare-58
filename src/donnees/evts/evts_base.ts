import {GroupeEvts} from "../../types/Evt";
import {Perso} from "../../types/Perso";
import {Champignon, ChampignonEnum, champignons} from "../../types/Champignon";
import {getRandomEnumValue} from "../../fonctions/aleatoire";

export const evts_base: GroupeEvts = {
    evts: [
        {
            id: "evts_trouve champignon",
            description: async (perso: Perso): Promise<string> => {
                const champignonTrouve: Champignon = champignons[getRandomEnumValue(ChampignonEnum)];
                perso.champignons.push(champignonTrouve.nom);
                let num:number = 1;
                perso.digestion
                    .filter((champi:Champignon) => champi.nom === ChampignonEnum.AgaricusBisporus)
                    .forEach((_champi:Champignon) => {
                        perso.champignons.push(champignonTrouve.nom);
                        num++;
                    })
                return "You found " + num + " " + champignonTrouve.nom + ".";
            },
            conditions: (): boolean => true,
        },
    ],
    probaParDefaut: 1,
}
