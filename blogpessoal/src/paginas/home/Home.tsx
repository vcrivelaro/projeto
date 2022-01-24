 import React from 'react' ;
import {Typography, Box, Grid, Button} from '@material-ui/core';
import TabPostagem from '../../components/postagem/tabpostagem/TabPostagem'
import './Home.css';

function Home(){
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "purple" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Sejam bem vindos(as) ao meu blog pessoal!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Sintam-se livres para expressarem suas opniões sobre nosso conteúdo!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://pbs.twimg.com/media/DurHZc-WwAAIsyp?format=jpg&name=medium" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;