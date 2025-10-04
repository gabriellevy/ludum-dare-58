import {GroupeEvts} from "../../types/Evt";
import {Perso} from "../../types/Perso";

export const evts_base: GroupeEvts = {
    evts: [
        {
            id: "evts_base1",
            description: async (perso: Perso): Promise<string> => {
                let texte = "Le petit train train quotidien. ";
                return texte;
            },
            conditions: (): boolean => true,
        },
    ],
    probaParDefaut: 1,
}
