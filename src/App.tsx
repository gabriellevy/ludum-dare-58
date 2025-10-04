import Jeu from "./compos/Jeu";
import {Perso} from "./types/Perso";
import {CssBaseline} from "@mui/material";
import {PhaseDExecution} from "./types/Mode";
import PersoContexteProvider from "./contexte/PersoContexte";

const initPerso:Perso = {
    faim: 5,
    distanceParcourue: 0,
    vitesse: 5,
    niveau: 1,
    evtsProgrammes: [],
    vitesseExecution: 4,
    mort: false,
    phaseDExecution: PhaseDExecution.marche,
    debogue: true, // TODO : passer ça à false à la fin !!
    champignons: [],
}

function App() {
  return (
    <div className="App">
        <PersoContexteProvider initPerso={initPerso}>
            <CssBaseline />
            <Jeu/>
        </PersoContexteProvider>
    </div>
  );
}

export default App;
