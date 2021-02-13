import React from 'react'
import { Button,Container,Grid } from '@material-ui/core'

const Profile = () =>{
    return(
        <div>
        <Container fixed>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid container xs={12} direction="column" alignItems="center">
                    <h1>Perfil</h1>
                        <Grid container xs={12} justify="center">
                            
                        </Grid>
                    <Button variant="contained" color="primary" style={{textAlign: 'left', marginTop: '1rem'}}>Ingresar</Button>
                </Grid>
            </Grid>
        </Container>
    </div>
    )
}

export default Profile