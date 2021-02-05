import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

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
          <Box p={3}>
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
  
  /*function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }*/
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const Main = () =>{
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    /*const handleChange = (event, newValue) => {
        setValue(newValue);
    };*/

  return (
    <div className={classes.root}>
      <TabPanel value={value} index={0}>
        <VRegister />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Status />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Profile />
      </TabPanel>

      <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Registar datos" icon={<AddCircleOutline />} />
      <BottomNavigationAction label="Mis datos" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Perfil" icon={<AccountCircle />} />
      </BottomNavigation>
    </div>
  );
}

export default Main