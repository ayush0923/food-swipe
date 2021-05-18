import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CropFreeSharpIcon from '@material-ui/icons/CropFreeSharp';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles((theme)=>({
  root: {
     display: 'flex',
     alignItems: 'center',
     maxwidth: 300,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Scan QR" icon={<CropFreeSharpIcon />} className={classes.input}  />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} className={classes.input} />
      <BottomNavigationAction label="My Cart" icon={<ShoppingCartIcon />} className={classes.input} />
      <BottomNavigationAction label="My Profile" icon={<AccountBoxIcon />} className={classes.input} />
    </BottomNavigation>
  );
}
