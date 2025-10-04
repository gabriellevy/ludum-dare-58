import {Perso} from "./Perso";

export enum ChampignonEnum {
    AgaricusBisporus = "Agaricus bisporus",
    AmanitaMuscaria = "Amanita muscaria",
    BoletusEdulis = "Boletus edulis",
    CantharellusCibarius = "Cantharellus cibarius",
    LactariusDeliciosus = "Lactarius deliciosus",
    PleurotusOstreatus = "Pleurotus ostreatus",
    MorchellaEsculenta  = "Morchella esculenta",
    RussulaVesca = "Russula vesca",
    Shiitake = "Shiitake",
    GanodermaLucidum = "Ganoderma lucidum",
}

export type Champignon = {
    nom: ChampignonEnum,
    effet: (perso: Perso) => string,
    proba?: number,
}

export type ChampignonsObj = Record<ChampignonEnum, Champignon>;

export const champignons: ChampignonsObj = {
    [ChampignonEnum.AgaricusBisporus]: {
        nom: ChampignonEnum.AgaricusBisporus,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.AmanitaMuscaria]: {
        nom: ChampignonEnum.AmanitaMuscaria,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.BoletusEdulis]: {
        nom: ChampignonEnum.BoletusEdulis,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.CantharellusCibarius]: {
        nom: ChampignonEnum.CantharellusCibarius,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.LactariusDeliciosus]: {
        nom: ChampignonEnum.LactariusDeliciosus,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.PleurotusOstreatus]: {
        nom: ChampignonEnum.PleurotusOstreatus,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.MorchellaEsculenta]: {
        nom: ChampignonEnum.MorchellaEsculenta,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.RussulaVesca]: {
        nom: ChampignonEnum.RussulaVesca,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.Shiitake]: {
        nom: ChampignonEnum.Shiitake,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.GanodermaLucidum]: {
        nom: ChampignonEnum.GanodermaLucidum,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
}