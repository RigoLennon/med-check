import React from 'react'
import { Button,Container,Grid } from '@material-ui/core'

import FaceIcon from '@material-ui/icons/Face';

const Profile = () =>{
    return(
        <div>
        <Container fixed>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid container xs={12} direction="column" alignItems="center">
                    <h1>Perfil</h1>
                        <Grid container xs={12} justify="center" direction="column" alignItems="center">
                            <Grid item xs={6}>
                                <h2>Bienvenido: 'username'</h2>
                            </Grid>
                            <Grid item xs={6}>
                                <FaceIcon style={{ fontSize: 100 }} />
                            </Grid>
                        </Grid>

                        <Grid container direction="column" alignItems="center">
                            <Grid item xs={12} direction="row">
                                <h4>full name user</h4>
                                <h4>PIN: ****</h4>
                                <Button variant="outlined" color="primary">Ver PIN</Button>
                            </Grid>
                        </Grid>

                        <Grid container direction="column" alignItems="center" style={{marginTop: '4vh'}}>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary">Historial completo</Button>
                            </Grid>
                        </Grid>
                </Grid>
            </Grid>
        </Container>
    </div>
    )
}

export default Profile