import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export const Greeting = () => {
    return (
        <Grid container spacing={10} className="greeting">
            <Grid item xs={12} sm={12} md={8}>
                <ThemeProvider theme={theme}>
                    <Typography variant="h2">Kenneth López Porras </Typography>
                    <Typography variant="h3">Full-Stack Developer</Typography>
                    <br /><br />
                    <Typography variant="h6">Maecenas at accumsan quam. Suspendisse nisl nisl, sodales eu odio eu, tempus pellentesque ligula.</Typography>
                </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <img alt="profile" src="./profile.png" className="rounded center-image" />
            </Grid>
        </Grid>
    );
};
