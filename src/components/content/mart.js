import React from 'react';
import Commodity from './commodity';
import { withStyles } from '@material-ui/core';
// import {classnames} from 'classnames';
const commodityList = [
  {id:1138,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s,普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
  {id:1138,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
  {id:1138,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
  {id:1138,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
  {id:1138,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
  {id:1138,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
  {id:1138,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
  {id:1138,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
  {id:1138,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
  {id:1138,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
  {id:1138,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
  {id:1138,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
]

function Mart({classes}) {
  return (
    <div className={classes.root}>
        {commodityList.map((com,index) => 
        <div className={classes.card} key={index} >
          <React.Fragment>
            <Commodity {...com} />
          </React.Fragment>
        </div>
        )}
    </div>
  );
}
const styles = theme => ({
  root: {
    display: 'flex',
    maxWidth: '100%',
    overflowX: 'hidden',
    flexWrap: 'wrap'
  },
  card:{
    width:'25%',
    paddingLeft:20,
    paddingTop:10
  }
});

export default withStyles(styles)(Mart);
