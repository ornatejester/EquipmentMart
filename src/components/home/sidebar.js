import React from 'react';
// import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import {connect} from 'react-redux';
import {toggleSidebar} from '../../store/LayoutState';
import {Link} from 'react-router-dom';
const drawerWidth = 180;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const menuList=[
    {id:1,label:'装备商城',link:'/index/mart'},
    {id:2,label:'购物车',link:'/index/shopcar'},
    {id:3,label:'我的订单',link:'/index/myorder'},
    {id:4,label:'我的足迹',link:''},
    {id:5,label:'我收藏的',link:''},
]

function Sidebar({toggleSidebar,isSidebarOpened}) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <Drawer
        variant="persistent"
        anchor="left"
        open={isSidebarOpened}
        classes={{
          paper: classes.drawerPaper,
        }}
        className={classes.drawer}
      >
        <div className={classes.drawerHeader}>
          <IconButton
           onClick={toggleSidebar}
           >
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuList.map((text,index) => (
              <Link to={text.link} key={text.id}>
                <ListItem button >
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text.label} />
            </ListItem>
             </Link>
          ))}
        </List>
      </Drawer>
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
)(Sidebar);