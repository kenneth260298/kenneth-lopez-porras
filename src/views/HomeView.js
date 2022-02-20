import React from 'react';
import Container from '@mui/material/Container';
import { Greeting } from '../components/home/Greeting';

export const HomeView = () => {
    return (
        <Container maxWidth="lg">
            <Greeting />
        </Container>
    )
}
