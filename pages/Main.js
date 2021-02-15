import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { BottomNavigation,BottomNavigationAction,Box,Typography,Container,Grid } from '@material-ui/core'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import VRegister from './components/ValueRegister'
import Profile from './components/Profile'
import Status from './components/Status'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Main = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div style={{height: '88vh'}}>
      <Container container spacing={3} style={{height: '100%'}}>
        <Grid item xs >
          <TabPanel value={value} index={0}>
            <VRegister />
          </TabPanel>
        </Grid>
        <Grid item xs>
          <TabPanel value={value} index={1}>
            <Status />
          </TabPanel>
        </Grid>
        <Grid item xs>
          <TabPanel value={value} index={2}>
            <Profile />
          </TabPanel>
        </Grid>
      </Container>
      
      <Container>
      <Grid container spacing={3} direction="row" justify="center" alignItems="flex-end">
        <Grid item xs>
          <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Registar datos" icon={<AddCircleOutlineIcon />} />
          <BottomNavigationAction label="Mis datos" icon={<FavoriteBorderIcon />} />
          <BottomNavigationAction label="Perfil" icon={<AccountCircleIcon />} />
        </BottomNavigation>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
}

export default Main