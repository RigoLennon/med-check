import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField,BottomNavigationAction,Box,Typography,Container,Grid, Button, InputLabel } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const VRegister = () =>{
    const classes = useStyles();
    return(
        <div>
            <Container fixed>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid container xs={12} direction="column" alignItems="center">
                        <h1>Ingresa los datos</h1>
                            <Grid container xs={12} justify="center">
                                <form className={classes.form} noValidate autoComplete="off">
                                    <TextField id="outlined-username" label="Oximetro" variant="outlined" />
                                        <br />
                                    <TextField id="outlined-password" label="Presion Arterial" variant="outlined" />
                                    <br />
                                    <TextField id="outlined-password" label="Temperatura" variant="outlined" />
                                </form>
                            </Grid>
                        <Button variant="contained" color="primary" style={{textAlign: 'left', marginTop: '1rem'}}>Ingresar</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default VRegister