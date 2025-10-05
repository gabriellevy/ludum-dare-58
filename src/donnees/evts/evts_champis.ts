import {GroupeEvts} from "../../types/Evt";
import {Forme, Perso} from "../../types/Perso";
import {ChampignonEnum} from "../../types/Champignon";

import {compterNbDeChampisEnDigestion} from "../../fonctions/Champignons";
import {DISTANCE_COMPLETE} from "../ReglagesJouabilite";

export const evts_champis: GroupeEvts = {
    evts: [
        {
            id: "evts_trouve oeil_de_lynx",
            description: async (perso: Perso): Promise<string> => {
                const champignonTrouve: ChampignonEnum = ChampignonEnum.oeil_de_lynx;
                let num:number = 1 + compterNbDeChampisEnDigestion(perso, ChampignonEnum.oeil_de_lynx);
                for (let i = 0; i < num; i++) {
                    perso.champignons.push(champignonTrouve);
                }
                return "You found " + num + " " + champignonTrouve + ".";
            },
            proba: 3,
            conditions: (): boolean => true,
            //  conditions: (perso:Perso): boolean => !perso.nuit || perso.forme === Forme.fee_luciole,
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
            proba: 3,
            conditions: (): boolean => true,
            //  conditions: (perso:Perso): boolean => !perso.nuit || perso.forme === Forme.fee_luciole,
        },
        {
            id: "evts_trouve BoletusEdulis",
            description: async (perso: Perso): Promise<string> => {
                const champignonTrouve: ChampignonEnum = ChampignonEnum.Overexcited;
                let num:number = 1 + compterNbDeChampisEnDigestion(perso, ChampignonEnum.oeil_de_lynx);
                for (let i = 0; i < num; i++) {
                    perso.champignons.push(champignonTrouve);
                }
                return "You found " + num + " " + champignonTrouve + ".";
            },
            proba: 3,
            conditions: (): boolean => true,
           //  conditions: (perso:Perso): boolean => !perso.nuit || perso.forme === Forme.fee_luciole,
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
            conditions: (perso:Perso): boolean =>
                /*(!perso.nuit || perso.forme === Forme.fee_luciole)
                &&*/ perso.distanceParcourue >= DISTANCE_COMPLETE/10, // pas au tout début
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
            proba: 3,
            conditions: (perso:Perso): boolean =>
                /*(!perso.nuit || perso.forme === Forme.fee_luciole)
                && */ perso.distanceParcourue >= DISTANCE_COMPLETE/10, // pas au tout début
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
            proba: 5,
            //conditions: (): boolean => true,
            conditions: (perso:Perso): boolean =>
                /*(!perso.nuit || perso.forme === Forme.fee_luciole)
                &&*/ perso.distanceParcourue >= DISTANCE_COMPLETE/10, // pas au tout début
        },
        {
            id: "evts_trouve Poison",
            description: async (perso: Perso): Promise<string> => {
                const champignonTrouve: ChampignonEnum = ChampignonEnum.Poison;
                let num:number = 1 + compterNbDeChampisEnDigestion(perso, ChampignonEnum.oeil_de_lynx);
                for (let i = 0; i < num; i++) {
                    perso.champignons.push(champignonTrouve);
                }
                return "You found " + num + " " + champignonTrouve + ".";
            },
            proba: 3,
            //conditions: (): boolean => true,
            conditions: (perso:Perso): boolean =>
                /*(!perso.nuit || perso.forme === Forme.fee_luciole)
                &&*/ perso.distanceParcourue >= DISTANCE_COMPLETE/20, // pas au tout début
        },
        {
            id: "evts_nuit trouve rien",
            description: async (_perso: Perso): Promise<string> => {
                return "You can't find anything in the dark night. You also need to walk more slowly.";
            },
            proba: 25,
            conditions: (perso:Perso): boolean => perso.nuit && perso.forme !== Forme.lynx,
        },
    ],
    probaParDefaut: 1,
}
