import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PhoneIcon from '@material-ui/icons/Phone';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <Link to='/' style={{textDecoration:"none", color:"white"}}>
          <IconButton edge="start" className={classes.ArrowBackIcon} color="inherit">
            <ArrowBackIcon />
          </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Shivaji Park, Mumbai
            </Typography>
            <IconButton edge="start" className={classes.PhoneIcon} color="inherit">
            <PhoneIcon />
          </IconButton>
          </Toolbar>
      </AppBar>
    </div>
  );
}
