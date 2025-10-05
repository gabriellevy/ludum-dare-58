import {Forme, Perso} from "./Perso";
import {
    AgaricusBisporus,
    AmanitaMuscaria, BoletusEdulis, CantharellusCibarius,
    GanodermaLucidum, LactariusDeliciosus,
    MorchellaEsculenta,
    PleurotusOstreatus,
    RussulaVesca, Shiitake
} from "../donnees/images";
import {compterNbDeChampisEnDigestion} from "../fonctions/Champignons";

export enum ChampignonEnum {
    oeil_de_lynx = "Agaricus bisporus",
    Huge = "Amanita muscaria",
    BoletusEdulis = "Boletus edulis",
    Intuition_Escargot = "Cantharellus cibarius",
    Confused_Boar = "Lactarius deliciosus",
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
        effet: (perso: Perso) => {
            if (compterNbDeChampisEnDigestion(perso, ChampignonEnum.Transformer)>0) {
                // transformation
                perso.forme = Forme.fee_luciole;
                return ChampignonEnum.Transformer + " with a " + ChampignonEnum.Confused_Boar + " ! ";
            }
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.Huge]: {
        nom: ChampignonEnum.Huge,
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
    [ChampignonEnum.Intuition_Escargot]: {
        nom: ChampignonEnum.Intuition_Escargot,
        imageSrc: `${CantharellusCibarius}`,
        secondesDEffet: 10,
        description: "Intuition : reveals the effect of all mushrooms in tooltips",
        effet: (perso: Perso) => {
            if (compterNbDeChampisEnDigestion(perso, ChampignonEnum.Transformer)>0) {
                // transformation
                perso.forme = Forme.escargot;
                return ChampignonEnum.Transformer + " with a " + ChampignonEnum.Confused_Boar + " ! ";
            }
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.Confused_Boar]: {
        nom: ChampignonEnum.Confused_Boar,
        imageSrc: `${LactariusDeliciosus}`,
        secondesDEffet: 10,
        description: "?? Confused : go backward",
        effet: (perso: Perso) => {
            if (compterNbDeChampisEnDigestion(perso, ChampignonEnum.Transformer)>0) {
                // transformation
                perso.forme = Forme.sanglier;
                return ChampignonEnum.Transformer + " with a " + ChampignonEnum.Confused_Boar + " ! ";
            }
            return "You ate a mushroom.";
        },
    },
    [ChampignonEnum.Transformer]: {
        nom: ChampignonEnum.Transformer,
        imageSrc: `${PleurotusOstreatus}`,
        secondesDEffet: 10,
        description: "Transform yourself into something depending on the next mushroom you eat",
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