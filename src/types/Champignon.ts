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
    imageSrc: string,
    proba?: number,
}

export type ChampignonsObj = Record<ChampignonEnum, Champignon>;

export const champignons: ChampignonsObj = {
    [ChampignonEnum.AgaricusBisporus]: {
        nom: ChampignonEnum.AgaricusBisporus,
        imageSrc: `${AgaricusBisporus}`,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.AmanitaMuscaria]: {
        nom: ChampignonEnum.AmanitaMuscaria,
        imageSrc: `${AmanitaMuscaria}`,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.BoletusEdulis]: {
        nom: ChampignonEnum.BoletusEdulis,
        imageSrc: `${BoletusEdulis}`,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.CantharellusCibarius]: {
        nom: ChampignonEnum.CantharellusCibarius,
        imageSrc: `${CantharellusCibarius}`,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.LactariusDeliciosus]: {
        nom: ChampignonEnum.LactariusDeliciosus,
        imageSrc: `${LactariusDeliciosus}`,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.PleurotusOstreatus]: {
        nom: ChampignonEnum.PleurotusOstreatus,
        imageSrc: `${PleurotusOstreatus}`,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.MorchellaEsculenta]: {
        nom: ChampignonEnum.MorchellaEsculenta,
        imageSrc: `${MorchellaEsculenta}`,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.RussulaVesca]: {
        nom: ChampignonEnum.RussulaVesca,
        imageSrc: `${RussulaVesca}`,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.Shiitake]: {
        nom: ChampignonEnum.Shiitake,
        imageSrc: `${Shiitake}`,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.GanodermaLucidum]: {
        nom: ChampignonEnum.GanodermaLucidum,
        imageSrc: `${GanodermaLucidum}`,
        effet: () => {
            return "You ate a mushroom.";
        },
    },
}