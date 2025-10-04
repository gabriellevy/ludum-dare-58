import {useContext} from "react";
import Jauge from "./Jauge";
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";

export default function Progression() {

    const { perso } = useContext(PersoContexte) as PersoContexteType;

    return (
            <Jauge value={perso.distanceParcourue} niveau={true} max={1000}/>
    );
}
