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
                let num:number = 1 + compterNbDeChampisEnDigestion(perso, ChampignonEnum.oeil_de_lynx);
                for (let i = 0; i < num; i++) {
                    perso.champignons.push(champignonTrouve.nom);
                }
                return "You found " + num + " " + champignonTrouve.nom + ".";
            },
            conditions: (): boolean => true,
        },
        {
            id: "evts_trouve champignon",
            description: async (perso: Perso): Promise<string> => {
                const champignonTrouve: ChampignonEnum = ChampignonEnum.Confused_Snail;
                let num:number = 1 + compterNbDeChampisEnDigestion(perso, ChampignonEnum.oeil_de_lynx);
                for (let i = 0; i < num; i++) {
                    perso.champignons.push(champignonTrouve);
                }
                return "You found " + num + " " + champignonTrouve + ".";
            },
            proba: 50,
            conditions: (): boolean => true,
        },
        {
            id: "evts_trouve champignon",
            description: async (perso: Perso): Promise<string> => {
                const champignonTrouve: ChampignonEnum = ChampignonEnum.Transformer;
                let num:number = 1 + compterNbDeChampisEnDigestion(perso, ChampignonEnum.oeil_de_lynx);
                for (let i = 0; i < num; i++) {
                    perso.champignons.push(champignonTrouve);
                }
                return "You found " + num + " " + champignonTrouve + ".";
            },
            proba: 50,
            conditions: (): boolean => true,
        },
    ],
    probaParDefaut: 1,
}
