import React from 'react';

import { withStyles, CssBaseline } from '@material-ui/core';
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom';
import Header from './header';
import Sidebar from './sidebar';
import classnames from 'classnames'
import Mart from '../content/mart';
// 测试
import ShopCar from '../content/shopCarTest';
import MyOrder from '../content/myOrder';

import {connect} from 'react-redux';
import {toggleSidebar} from '../../store/LayoutState';


function Home({classes,isSidebarOpened}) {
  return (
    <div className={classes.root}>
     <CssBaseline />
     <BrowserRouter>
        <Header/>
        <Sidebar/>
        <div className={classnames(classes.content, { [classes.contentShift]: isSidebarOpened })}>
          <div className={classes.fakeToolbar} />
          <Switch>
          <Route exact path="/index" render={() => <Redirect to="/index/mart" />} />
            <Route path="/index/mart" component={Mart} />
            <Route path="/index/shopCar" component={ShopCar} />
            <Route path="/index/myOrder" component={MyOrder} />
          </Switch>
        </div>
     </BrowserRouter>
    </div>
  );
}


const styles = theme => ({
    root: {
      display: 'flex',
      maxWidth: '100vw',
      overflowX: 'hidden',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -180,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    fakeToolbar: {
      ...theme.mixins.toolbar,
    }
  });

export default connect(
  state=>({
      isSidebarOpened:state.layout.isSidebarOpened
  }),
toggleSidebar  
)(withStyles(styles)(Home));
