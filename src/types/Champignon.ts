import {Forme, Perso} from "./Perso";
import {
    AgaricusBisporus,
    AmanitaMuscaria, BoletusEdulis, CantharellusCibarius,
    GanodermaLucidum, LactariusDeliciosus,
    MorchellaEsculenta,
    PleurotusOstreatus,
    RussulaVesca, Shiitake
} from "../donnees/images";

export enum ChampignonEnum {
    oeil_de_lynx = "Agaricus bisporus",
    AmanitaMuscaria = "Amanita muscaria",
    BoletusEdulis = "Boletus edulis",
    CantharellusCibarius = "Cantharellus cibarius",
    Confused_Snail = "Lactarius deliciosus",
    Transformer = "Pleurotus ostreatus",
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
    [ChampignonEnum.oeil_de_lynx]: {
        nom: ChampignonEnum.oeil_de_lynx,
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
        description: "Huge : 50% Faster but needs more food",
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.BoletusEdulis]: {
        nom: ChampignonEnum.BoletusEdulis,
        imageSrc: `${BoletusEdulis}`,
        secondesDEffet: 10,
        description: "Overexcited -1s to get next event",
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.CantharellusCibarius]: {
        nom: ChampignonEnum.CantharellusCibarius,
        imageSrc: `${CantharellusCibarius}`,
        secondesDEffet: 10,
        description: "Intuition : reveals the effect of all mushrooms in tooltips",
        effet: () => {
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.Confused_Snail]: {
        nom: ChampignonEnum.Confused_Snail,
        imageSrc: `${LactariusDeliciosus}`,
        secondesDEffet: 10,
        description: "?? Confused : go backward",
        effet: (perso: Perso) => {
            perso.forme = Forme.escargot;
            return ChampignonEnum.Transformer + " with a " + ChampignonEnum.Confused_Snail + " ! ";
        },
    },
    [ChampignonEnum.Transformer]: {
        nom: ChampignonEnum.Transformer,
        imageSrc: `${PleurotusOstreatus}`,
        secondesDEffet: 10,
        description: "Transformer",
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