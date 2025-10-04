import React from 'react';
import { LinearProgress, Box, keyframes } from '@mui/material';
import { styled } from '@mui/system';

// Animation de clignotement
const blink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
`;

// Props du composant
interface JaugeProps {
    value: number;
    max?: number;
}

// Style personnalisé pour la jauge
const CustomLinearProgress = styled(LinearProgress)<{ value: number }>(
    ({ value }) => ({
        height: 20,
        borderRadius: 10,
        backgroundColor: '#e0e0e0',
        '& .MuiLinearProgress-bar': {
            borderRadius: 10,
            backgroundColor:
                value < 40 ? '#4caf50' : // Vert pour les valeurs < 5
                    value < 60 ? '#ffda1c' : // Orange pour les valeurs entre 5 et 15
                        value < 80 ? '#f48518' : // Rouge pour les valeurs entre 15 et 18
                            '#f12413', // Rouge pour 19+
            animation: value >= 85 ? `${blink} 1s infinite` : 'none',
        },
    })
);

// Composant Jauge
export default function Jauge ({ value, max = 20 }: Readonly<JaugeProps>) {
    // Limiter la valeur entre 0 et max
    const normalizedValue = Math.min(Math.max(value, 0), max);
    // Convertir en pourcentage pour MUI
    const progress = (normalizedValue / max) * 100;

    return (
        <Box sx={{ width: '100%', maxWidth: 300, mx: 'auto' }}>
            <CustomLinearProgress
                variant="determinate"
                value={progress}
                valueBuffer={100}
            />
            {
                progress >= 90 && (
                    <Box sx={{ mt: 1 }}>
                        Eat mushroom or you will starve !
                    </Box>

                )
            }
        </Box>
    );
};
