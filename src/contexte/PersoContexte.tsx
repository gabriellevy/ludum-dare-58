import {ReactNode, useEffect, useState} from "react";
import {Perso} from "../types/Perso";
import { PersoContexte } from "./ContexteType";
export interface PersoContexteProviderProps {
    children: ReactNode;
    initPerso: Perso;
}

function PersoContexteProvider({children, initPerso}:Readonly<PersoContexteProviderProps>) {
    const [perso, setPerso] = useState<Perso>(initPerso);

    useEffect(() => {
        if (initPerso) {
            setPerso(initPerso);
        }
    }, [initPerso]);

    return (
        <PersoContexte.Provider value={{ perso, setPerso }}>
            {children}
        </PersoContexte.Provider>
    );
}

export default PersoContexteProvider;