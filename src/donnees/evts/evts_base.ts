import {GroupeEvts} from "../../types/Evt";
import {Perso} from "../../types/Perso";
import {Champignon, ChampignonEnum, champignons} from "../../types/Champignon";
import {getRandomEnumValue} from "../../fonctions/aleatoire";
import {compterNbDeChampisEnDigestion} from "../../fonctions/Champignons";
import {DISTANCE_COMPLETE} from "../ReglagesJouabilite";

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
            id: "evts_trouve Confused_Boar",
            description: async (perso: Perso): Promise<string> => {
                const champignonTrouve: ChampignonEnum = ChampignonEnum.Confused_Boar;
                let num:number = 1 + compterNbDeChampisEnDigestion(perso, ChampignonEnum.oeil_de_lynx);
                for (let i = 0; i < num; i++) {
                    perso.champignons.push(champignonTrouve);
                }
                return "You found " + num + " " + champignonTrouve + ".";
            },
            proba: 999993,
            conditions: (perso:Perso): boolean => perso.distanceParcourue >= DISTANCE_COMPLETE/10, // pas au tout début
        },
        {
            id: "evts_trouve Intuition_Escargot",
            description: async (perso: Perso): Promise<string> => {
                const champignonTrouve: ChampignonEnum = ChampignonEnum.Intuition_Escargot;
                let num:number = 1 + compterNbDeChampisEnDigestion(perso, ChampignonEnum.oeil_de_lynx);
                for (let i = 0; i < num; i++) {
                    perso.champignons.push(champignonTrouve);
                }
                return "You found " + num + " " + champignonTrouve + ".";
            },
            proba: 3,
            conditions: (perso:Perso): boolean => perso.distanceParcourue >= DISTANCE_COMPLETE/10, // pas au tout début
        },
        {
            id: "evts_trouve Huge",
            description: async (perso: Perso): Promise<string> => {
                const champignonTrouve: ChampignonEnum = ChampignonEnum.Huge;
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
            id: "evts_trouve Transformer",
            description: async (perso: Perso): Promise<string> => {
                const champignonTrouve: ChampignonEnum = ChampignonEnum.Transformer;
                let num:number = 1 + compterNbDeChampisEnDigestion(perso, ChampignonEnum.oeil_de_lynx);
                for (let i = 0; i < num; i++) {
                    perso.champignons.push(champignonTrouve);
                }
                return "You found " + num + " " + champignonTrouve + ".";
            },
            proba: 50, // TODO : 3
            conditions: (): boolean => true,
            //conditions: (perso: Perso): boolean => perso.distanceParcourue >= DISTANCE_COMPLETE/3, // TODO remettre à la fin : ne doit pas se trouver dès le début du jeu
        },
    ],
    probaParDefaut: 1,
}
