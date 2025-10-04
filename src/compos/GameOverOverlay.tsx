import {Box, Button, Typography} from "@mui/material";

interface GameOverOverlayProps {
    onRestart: () => void;
    victoire?: boolean;
    mort?: boolean;
}

export function GameOverOverlay ({ onRestart, mort }: GameOverOverlayProps) {

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fond noir semi-transparent
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                color: 'white',
            }}
        >
            <Typography variant="h3" gutterBottom>
                {mort ? "You starved to death in the dark forest..." : "You managed to leave the forest !"}
            </Typography>
            <Button
                variant="contained"
                color="error"
                size="large"
                onClick={onRestart}
            >
                Restart
            </Button>
        </Box>
    );
}
