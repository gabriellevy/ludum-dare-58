import {useContext, useState} from "react";
import {PersoContexte, PersoContexteType} from "../contexte/ContexteType";
import {PhaseDExecution} from "../types/Mode";
import {Grid, Paper} from "@mui/material";
import Decor from "./Decor";

export default function Histoire() {
    const [afficherMenu, setAfficherMenu] = useState(false); // À FAIRE : passer à true à la fin
    const { perso } = useContext(PersoContexte) as PersoContexteType;

    return (
        <>
            {afficherMenu ? (
                <div>youpi</div>
            ) : perso.phaseDExecution === PhaseDExecution.marche && (
                <Grid container spacing={3} sx={{ height: '100vh', width: '100vw' }}>
                    <Grid size={4}>
                        <Paper elevation={3} sx={
                            {
                                p: 3,
                                mt: 4,
                                height: '100vh',
                                overflowY: 'auto',
                                position: 'sticky',
                                top: 0,
                                marginTop: 0,
                                padding: '0px',
                            }
                        }>
                            affichage du perso
                        </Paper>
                    </Grid>
                    <Grid size={8}>
                        <Decor/>
                        <Paper elevation={3} sx={
                            { p: 3, mt: 4, height: '100vh', overflowY: 'auto', marginTop: 0 }
                        }>
                            boucle d'éevts ??
                        </Paper>
                    </Grid>
                </Grid>
            )}
        </>
    );
}
