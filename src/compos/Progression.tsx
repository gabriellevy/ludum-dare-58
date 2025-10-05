import {useContext} from "react";
import Jauge from "./Jauge";
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";
import {DISTANCE_COMPLETE} from "../donnees/ReglagesJouabilite";

export default function Progression() {

    const { perso } = useContext(PersoContexte) as PersoContexteType;

    return (
            <Jauge value={perso.distanceParcourue} niveau={true} max={DISTANCE_COMPLETE}/> // TODO : préciser objectif
    );
}
