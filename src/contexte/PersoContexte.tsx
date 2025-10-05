import {ReactNode, useEffect, useState} from "react";
import {Perso} from "../types/Perso";
import { PersoContexte } from "./ContexteType";
export interface PersoContexteProviderProps {
    children: ReactNode;
    initPersoContexte: Perso;
}

function PersoContexteProvider({children, initPersoContexte}:Readonly<PersoContexteProviderProps>) {
    const [perso, setPerso] = useState<Perso>(initPersoContexte);

    useEffect(() => {
        if (initPersoContexte) {
            setPerso({
                ...initPersoContexte
            });
        }
    }, [initPersoContexte]);

    return (
        <PersoContexte.Provider value={{ perso, setPerso }}>
            {children}
        </PersoContexte.Provider>
    );
}

export default PersoContexteProvider;