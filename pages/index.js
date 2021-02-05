import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'

import { Button, CardHeader, Grid, Card, TextField, CardContent, CardActions, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 10
  },
  title: {
    fontSize: 21,
  },
  text:{
    padding: 9,
  }
}));

export default function Home() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Head>
        <title>Med Check</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Card>
          <CardHeader title="Login" />
          <CardContent>
            <TextField className={classes.text} id="user" label="Usuario" variant="outlined" />
            <TextField className={classes.text} id="pin" label="PIN" variant="outlined" />
            <Button color='primary' variant='outlined'>Entrar</Button>
          </CardContent>
          <CardActions>
            <Typography className={classes.text}>¿No tienes cuenta?</Typography>
            <Button color='primary' variant='outlined'>Registrate</Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  )

}
