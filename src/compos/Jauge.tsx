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
    niveau?: boolean, // jauge de progression de niveau
}

// Style personnalisé pour la jauge
const CustomLinearProgress = styled(LinearProgress)<{ value: number, progression: boolean }>(
    ({ value, progression }) => ({
        height: 20,
        borderRadius: 4,
        backgroundColor: '#d0ed9d',
        '& .MuiLinearProgress-bar': {
            borderRadius: 4,
            backgroundColor: progression ? '#091b73' :
                value < 40 ? '#4caf50' : // Vert pour les valeurs < 5
                    value < 60 ? '#ffda1c' : // Orange pour les valeurs entre 5 et 15
                        value < 80 ? '#f48518' : // Rouge pour les valeurs entre 15 et 18
                            '#f12413', // Rouge pour 19+
            animation: !progression && value >= 85 ? `${blink} 1s infinite` : 'none',
            transition: 'width 0.3s ease-out, background-color 0.3s ease',
        },
    })
);

// Composant Jauge
export default function Jauge ({ value, niveau, max = 20 }: Readonly<JaugeProps>) {
    // Limiter la valeur entre 0 et max
    const normalizedValue = Math.min(Math.max(value, 0), max);
    // Convertir en pourcentage pour MUI
    const progress = (normalizedValue / max) * 100;

    return (
        <Box sx={{ width: '100%', maxWidth: niveau ? null : 300}}>
            <CustomLinearProgress
                variant="determinate"
                value={progress}
                progression={niveau ?? false}
                valueBuffer={100}
            />
            {
                !niveau && progress >= 90 && (
                    <Box sx={{ mt: 1 }}>
                        Eat mushroom or you will starve !
                    </Box>

                )
            }
        </Box>
    );
};
