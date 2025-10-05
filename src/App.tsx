import Jeu from "./compos/Jeu";
import {Forme, Perso} from "./types/Perso";
import {CssBaseline} from "@mui/material";
import {PhaseDExecution} from "./types/Mode";
import PersoContexteProvider from "./contexte/PersoContexte";
import {FREQUENCE_EVT, VITESSE_DE_BASE} from "./donnees/ReglagesJouabilite";

export const initPerso:Perso = {
    faim: 5,
    cycle_passe: 0,
    distanceParcourue: 0,
    vitesse: VITESSE_DE_BASE,
    niveau: 1,
    vitesseExecution: FREQUENCE_EVT, // nombre de secondes entre chaque evt
    mort: false,
    victoire: false,
    phaseDExecution: PhaseDExecution.marche,
    debogue: true, // TODO : passer ça à false à la fin !!
    champignons: [],
    digestion: [],
    forme: Forme.humain,
}

function App() {
  return (
    <div className="App">
        <PersoContexteProvider initPersoContexte={{...initPerso}}>
            <CssBaseline />
            <Jeu/>
        </PersoContexteProvider>
    </div>
  );
}

export default App;
