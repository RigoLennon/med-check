import React from 'react'
import { Button,Container,Grid } from '@material-ui/core'

import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

const Status = () =>{
    return(
        <div>
            <Container fixed>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid container xs={12} direction="column" alignItems="center">
                        <h1>Estatus del día: </h1>
                        <h2>¡Excelente!</h2>
                            <Grid container xs={12} justify="center">
                            <CheckCircleOutlineOutlinedIcon fontSize="large" />
                            </Grid>
                        <Button variant="contained" color="primary" style={{textAlign: 'left', marginTop: '1rem'}}>Ingresar</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Status