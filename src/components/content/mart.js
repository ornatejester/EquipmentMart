import React from 'react';
import Commodity from './commodity';
import { withStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import {connect} from 'react-redux';
import PositionedSnackbar from './message';
const commodityList = [
  {id:1138,name:'破军',intro:'大量增加攻击力',price:320},
  {id:1128,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
  {id:1155,name:'轻语',intro:'增强穿甲效果',price:260},
  {id:1239,name:'辉月',intro:'可以使自己进入免疫状态2s，但是无法移动',price:200},
  {id:11311,name:'名刀司命',intro:'在自己生命值较低的时候，减少收到的伤害',price:240},
  {id:1128,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
  {id:1155,name:'轻语',intro:'增强穿甲效果',price:260},
  {id:1239,name:'辉月',intro:'可以使自己进入免疫状态2s，但是无法移动',price:200},
  {id:11311,name:'名刀司命',intro:'在自己生命值较低的时候，减少收到的伤害',price:240},
  {id:1128,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
  {id:1155,name:'轻语',intro:'增强穿甲效果',price:260},
  {id:1239,name:'辉月',intro:'可以使自己进入免疫状态2s，但是无法移动',price:200},
  {id:11311,name:'名刀司命',intro:'在自己生命值较低的时候，减少收到的伤害',price:240},
]

function Mart({classes,toCarSuccess,createOrderSuccess}) {
  return (
    <React.Fragment> 
      <PositionedSnackbar open={toCarSuccess} message={"加入购物车成功"}></PositionedSnackbar>
      <PositionedSnackbar open={createOrderSuccess} message={"购买成功，请在订单中查看"}></PositionedSnackbar>
      <Typography variant="h5" component="h4" className={classes.title}>
           商品列表
      </Typography>
    <div className={classes.root}>
        {commodityList.map((com,index) => 
        <div className={classes.card} key={index} >
          <React.Fragment>
            <Commodity {...com} />
          </React.Fragment>
        </div>
        )}
    </div>
    </React.Fragment>
  );
}
const styles = theme => ({
  root: {
    display: 'flex',
    maxWidth: '100%',
    overflowX: 'hidden',
    flexWrap: 'wrap',
    textAlign:'center'
  },
  card:{
    width:'25%',
    paddingLeft:25,
    paddingRight:25,
    paddingTop:20
  },
  title:{
    paddingLeft:'47%'
  }
});

export default connect(
  state=>({
    toCarSuccess:state.message.toCarIsSuccess,
    createOrderSuccess:state.message.createOrderSuccess
  })
)(withStyles(styles)(Mart));
