import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Box,Container,Grid, Paper } from '@material-ui/core';
import { bottom } from '@material-ui/system';
import { compose, spacing, palette, breakpoints } from '@material-ui/system';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });

export default function CenteredGrid() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
    <Container fixed>
        <Grid container direction="row" justify="center" alignItems="flex-end" style={{ height: '10rem' }}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </Grid>
    </Container>
    );
}