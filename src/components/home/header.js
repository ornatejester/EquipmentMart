import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {connect} from 'react-redux';
import {toggleSidebar} from '../../store/LayoutState';

const useStyles = makeStyles(theme => ({
  root: {
    display:'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // color:'red'
  },
  grow: {
    flexGrow: 1
  },
}));
function Header({toggleSidebar}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />
          <Typography variant="h6" className={classes.title}>
            王者荣耀购物商城
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default connect(
    state=>({
        isSidebarOpened:state.layout.isSidebarOpened
    }),
    {
        toggleSidebar  
    }
)(Header);