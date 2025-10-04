import {Perso} from "./Perso";
import {
    AgaricusBisporus,
    AmanitaMuscaria, BoletusEdulis, CantharellusCibarius,
    GanodermaLucidum, LactariusDeliciosus,
    MorchellaEsculenta,
    PleurotusOstreatus,
    RussulaVesca, Shiitake
} from "../donnees/images";

export enum ChampignonEnum {
    AgaricusBisporus = "Agaricus bisporus", //--
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
    secondesDEffet: number, // temps de départ à l'ingestion, diminue ensuite
    imageSrc: string,
    description: string,
    proba?: number,
}

export type ChampignonsObj = Record<ChampignonEnum, Champignon>;

export const champignons: ChampignonsObj = {
    [ChampignonEnum.AgaricusBisporus]: {
        nom: ChampignonEnum.AgaricusBisporus,
        imageSrc: `${AgaricusBisporus}`,
        secondesDEffet: 10,
        description: "Eagle eye : x2 mushrooms",
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.AmanitaMuscaria]: {
        nom: ChampignonEnum.AmanitaMuscaria,
        imageSrc: `${AmanitaMuscaria}`,
        secondesDEffet: 10,
        description: "50% Faster but needs more food",
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.BoletusEdulis]: {
        nom: ChampignonEnum.BoletusEdulis,
        imageSrc: `${BoletusEdulis}`,
        secondesDEffet: 10,
        description: "?????",
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.CantharellusCibarius]: {
        nom: ChampignonEnum.CantharellusCibarius,
        imageSrc: `${CantharellusCibarius}`,
        secondesDEffet: 10,
        description: "?????",
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.LactariusDeliciosus]: {
        nom: ChampignonEnum.LactariusDeliciosus,
        imageSrc: `${LactariusDeliciosus}`,
        secondesDEffet: 10,
        description: "?????",
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.PleurotusOstreatus]: {
        nom: ChampignonEnum.PleurotusOstreatus,
        imageSrc: `${PleurotusOstreatus}`,
        secondesDEffet: 10,
        description: "?????",
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.MorchellaEsculenta]: {
        nom: ChampignonEnum.MorchellaEsculenta,
        imageSrc: `${MorchellaEsculenta}`,
        secondesDEffet: 10,
        description: "?????",
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.RussulaVesca]: {
        nom: ChampignonEnum.RussulaVesca,
        imageSrc: `${RussulaVesca}`,
        secondesDEffet: 10,
        description: "?????",
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.Shiitake]: {
        nom: ChampignonEnum.Shiitake,
        imageSrc: `${Shiitake}`,
        secondesDEffet: 10,
        description: "?????",
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.GanodermaLucidum]: {
        nom: ChampignonEnum.GanodermaLucidum,
        imageSrc: `${GanodermaLucidum}`,
        secondesDEffet: 10,
        description: "?????",
        effet: () => {
            return "You ate a mushroom.";
        },
    },
}