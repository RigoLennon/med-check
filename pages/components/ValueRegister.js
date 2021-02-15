import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField,Snackbar,Box,Typography,Container,Grid, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
            margin: theme.spacing(1),
            //width: '25ch',
        },
    },
}));

const VRegister = () =>{
    const classes = useStyles();

    /** functions to toast */
const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  
  const { vertical, horizontal, open } = state;
  
    const handleClick = (newState) => () => {
      setState({ open: true, ...newState });
    };
  
    const handleClose = () => {
      setState({ ...state, open: false });
    };
  
    const buttons = (
      <React.Fragment>
        <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })} variant="contained" color="primary" style={{textAlign: 'left', marginTop: '1rem'}}>
          Ingresar
        </Button>
      </React.Fragment>
    );
  
  /** */
    return(
        <Container>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <h2>Ingresa los datos</h2>
              </Grid>
              <Grid container xs={12} sm={3} md={3} lg={2} justify="center">
                <form className={classes.form} noValidate autoComplete="off">
                  <TextField id="outlined-username" label="Oximetro" variant="outlined" />
                  <TextField id="outlined-password" label="Presion Arterial" variant="outlined" />
                  <TextField id="outlined-password" label="Temperatura" variant="outlined" />
                </form>
              </Grid>
              <Grid container xs={12} sm={3} md={3} lg={2} justify="center">
                {buttons}
                  <Snackbar
                      anchorOrigin={{ vertical, horizontal }}
                      open={open}
                      onClose={handleClose}
                      message="¡Datos guardados con exito!"
                      key={vertical + horizontal}
                  />
              </Grid>
            </Grid>
          </Grid>
        </Container>
    )
}

/**
 * 
 * <Grid container direction="row" justify="center" alignItems="center">
                <h2>Ingresa los datos</h2>
                <Grid container direction="column" justify="center" alignItems="center">
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField id="outlined-username" label="Oximetro" variant="outlined" />
                        <TextField id="outlined-password" label="Presion Arterial" variant="outlined" />
                        <TextField id="outlined-password" label="Temperatura" variant="outlined" />
                    </form>
                </Grid>
                <Grid container direction="column" justify="center" alignItems="center">
                    {buttons}
                    <Snackbar
                        anchorOrigin={{ vertical, horizontal }}
                        open={open}
                        onClose={handleClose}
                        message="¡Datos guardados con exito!"
                        key={vertical + horizontal}
                    />
                </Grid>
            </Grid>
 * 
 */

export default VRegister