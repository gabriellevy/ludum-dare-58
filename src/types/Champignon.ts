import {Perso} from "./Perso";

export enum ChampignonEnum {
    AgaricusBisporus = "Agaricus bisporus",
    /*AmanitaMuscaria = "Amanita muscaria",
    BoletusEdulis = "Boletus edulis",
    CantharellusCibarius = "Cantharellus cibarius",
    LactariusDeliciosus = "Lactarius deliciosus",
    PleurotusOstreatus = "Pleurotus ostreatus",
    MorchellaEsculenta  = "Morchella esculenta",
    RussulaVesca = "Russula vesca",
    Shiitake = "Shiitake",
    GanodermaLucidum = "Ganoderma lucidum",*/
}

export type Champignon = {
    nom: ChampignonEnum,
    effet: (perso: Perso) => string,
    proba?: number,
}

export type ChampignonsObj = Record<ChampignonEnum, Champignon>;

export const champignons: ChampignonsObj = {
    // citadins
    [ChampignonEnum.AgaricusBisporus]: {
        nom: ChampignonEnum.AgaricusBisporus,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
}