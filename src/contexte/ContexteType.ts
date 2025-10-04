import {createContext} from "react";
import type {Perso} from "../types/Perso";

export type PersoContexteType = {
    perso: Perso;
    setPerso: (perso: Perso) => void;
};

export const PersoContexte = createContext<PersoContexteType | null>(null);