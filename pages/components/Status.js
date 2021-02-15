import React from 'react'
import { Button,Container,Grid } from '@material-ui/core'

import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

const Status = () =>{
    return(
        <Container>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid container direction="column" alignItems="center">
                    <h1>Estatus del día: </h1>
                    <h2>¡Excelente!</h2>
                        <Grid container xs={12} justify="center">
                            <CheckCircleOutlineOutlinedIcon style={{ fontSize: 100 }} />
                        </Grid>
                    <Button variant="contained" color="primary" style={{textAlign: 'left', marginTop: '1rem'}}>Ingresar</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Status