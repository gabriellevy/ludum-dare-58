import Histoire from "./compos/Histoire";
import {Perso} from "./types/Perso";
import {CssBaseline} from "@mui/material";
import {PhaseDExecution} from "./types/Mode";
import PersoContexteProvider from "./contexte/PersoContexte";

const initPerso:Perso = {
    faim: 50,
    distanceParcourue: 0,
    evtsProgrammes: [],
    vitesseExecution: 2,
    mort: false,
    phaseDExecution: PhaseDExecution.marche, // A FAIRE : mettre sur menu ?
}

function App() {
  return (
    <div className="App">
        <PersoContexteProvider initPerso={initPerso}>
            <CssBaseline />
            <Histoire/>
        </PersoContexteProvider>
    </div>
  );
}

export default App;
