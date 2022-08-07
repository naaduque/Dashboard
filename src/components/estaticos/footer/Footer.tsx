import React from 'react';
import {Typography, Box, Grid } from '@material-ui/core';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#303F9F", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://www.oscarcalcados.com.br/" rel="noopener noreferrer">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">www.oscarcalcados.com.br</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;