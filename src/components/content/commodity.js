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
import {actionCreator} from '../../storeAction'
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    width:'100%'
  },
  media: {
    height: 140,
  },
});

 function MediaCard({doBuyCommodity,...props}) {
  const classes = useStyles();
//   const url=`../../../assets/imgs/${props.id}.jpg`
  return (
    // {id:1128,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../../../assets/imgs/1138.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.intro}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{doBuyCommodity(actionCreator('BUY',props))}}>
          加入购物车
        </Button>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
        <div style={{display:'flex',flexGrow:1}}/>
        <Typography gutterBottom variant="h6" component="h6">
            价格：<span style={{color:'red'}}>{props.price}</span>
        </Typography>
      </CardActions>
    </Card>
  );
}
export default connect(
  state=>({
    isSidebarOpened:state.layout.isSidebarOpened
  }),
  {doBuyCommodity}
)(MediaCard)