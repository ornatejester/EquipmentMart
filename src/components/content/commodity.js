import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';

import {doBuyCommodity} from '../../store/ShopCarState';
import {createOrderDirect} from '../../store/MyOrderState';
import {toggleCreateOrder,toggleToCar} from '../../store/MessageState'
import {actionCreator,orderActionCreator} from '../../storeAction';
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height:400,
    width:'100%'
  },
  media: {
    height: 240,
  },
  intro:{
    height:40,
    textAlign:'left'
  }
});

 function MediaCard({
   doBuyCommodity,
   isSidebarOpened,
   createOrderDirect,
   toggleCreateOrder,
   toggleToCar,
   ...props}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require(`../../assets/imgs/${props.id}.jpg`)}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography className={classes.intro}  variant="body2" color="textSecondary" component="p">
            {props.intro}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{
            doBuyCommodity(actionCreator('TOCAR',props));
            // toggleToCar()
          }}>
          加入购物车
        </Button>
        <Button size="small" color="primary" onClick={()=>{
            createOrderDirect(orderActionCreator('CREATE_ORDER_DIRECT',[props]));
            // toggleCreateOrder();
          }}>
          立即购买
        </Button>
        <div style={{display:'flex',flexGrow:1}}/>
        <Typography>
            <span style={{color:'red'}}>{props.price}￥</span>
        </Typography>
      </CardActions>
    </Card>
  );
}
export default connect(
  state=>({
    isSidebarOpened:state.layout.isSidebarOpened
  }),
  {
    doBuyCommodity,
    createOrderDirect,
    toggleToCar,
    toggleCreateOrder
  }
)(MediaCard)