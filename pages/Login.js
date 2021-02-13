import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import {TextField, Grid, Paper, Button, Divider} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    },
    paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    },
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Login = () =>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <h2>Login</h2>
                        <form className={classes.form} noValidate autoComplete="off">
                            <TextField id="outlined-username" label="Username" variant="outlined" />
                            <br />
                            <TextField id="outlined-password" label="PIN" variant="outlined" />
                        </form>
                        <Link href="/Main"><Button variant="contained" color="primary" style={{textAlign: 'left'}}>Ingresar</Button></Link>
                        <br/>
                        <Divider variant="inset" style={{marginTop:20}}/>

                        <p>¿No tienes cuenta?</p>
                        <Link href="/Register"><Button variant="outlined" color="primary">Registrate</Button></Link>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login