import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import { Button, Checkbox } from '@material-ui/core';

import {doRemoveCommodity,reduceOrder} from '../../store/ShopCarState';
import {createOrder,createOrderDirect} from '../../store/MyOrderState';
import {toggleSelect} from '../../store/LayoutState';

import {actionCreator,orderActionCreator} from '../../storeAction';
import PositionedSnackbar from './message';
import {toggleNoSelectMsg,toggleCreateOrderMsg} from '../../store/MessageState'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    height:550,
    overflow:'hiddn'
  },
  table: {
    minWidth: 700,
  },
  button:{
    marginLeft: theme.spacing(3),
  }
}));

function ShopCar(
  {isSelectShow,
    myCommodity,
    createOrder,
    createOrderDirect,
    reduceOrder,
    doRemoveCommodity,
    toggleSelect,
    noSelectCommedity,
    createOrderSuccess,
    toggleNoSelectMsg,
    toggleCreateOrderMsg}
  ) {
  const classes = useStyles();
  //临时存放多选框被选中的商品
  let wareHouse = [];
  return (
    <React.Fragment>
      <PositionedSnackbar open={noSelectCommedity} message={"请先选择物品"}></PositionedSnackbar>
      <PositionedSnackbar open={createOrderSuccess} message={"购买成功！请到订单中查看"}></PositionedSnackbar>
      <Typography variant="h5" component="h4">
            我的购物车
      <Button color="primary" 
      className={classes.button}
      onClick={toggleSelect}>
        批量编辑
      </Button>
      <Button variant="contained" color="secondary" 
      className={classes.button}
      onClick={()=>{
          if(wareHouse.length>0){
            createOrder(orderActionCreator("CREATE_ORDER",wareHouse));
            reduceOrder(actionCreator("REDUCER_ORDER",wareHouse));
            // 显示提示信息
            toggleCreateOrderMsg();
            // 隐藏选择框
            toggleSelect();
            wareHouse = [];
          }else{
            toggleNoSelectMsg();
          }
        }}>
        立即购买
      </Button>
      </Typography>
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">选中购买</StyledTableCell>
            <StyledTableCell align="left">装备名称</StyledTableCell>
            <StyledTableCell align="center">装备编号</StyledTableCell>
            <StyledTableCell align="center">装备价格</StyledTableCell>
            <StyledTableCell align="right">选择操作</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myCommodity.map((commodity,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="left">
                {isSelectShow===true?
                <Checkbox
                onChange={(event)=>{
                  if(event.target.checked===true){
                      wareHouse.push(commodity);
                  }else{
                      wareHouse.pop(commodity);
                  }
                }}/>:index+1
            }
                
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {commodity.name}
              </StyledTableCell>
              <StyledTableCell align="center">{commodity.id}</StyledTableCell>
              <StyledTableCell align="center">{commodity.price}</StyledTableCell>
              <StyledTableCell align="right">
              <Button color='primary'
              onClick={()=>{
                // 添加到订单，移出购物车
                createOrderDirect(orderActionCreator('CREATE_ORDER_DIRECT',[commodity]));
                doRemoveCommodity(actionCreator('REMOVE',commodity));
                toggleCreateOrderMsg();
              }}
              >立即购买</Button>
              <Button color='secondary' 
              onClick={()=>{
                doRemoveCommodity(actionCreator('REMOVE',commodity))
              }}>移出购物车</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </React.Fragment>
  );
}
export default connect(
  state=>({
    myCommodity:state.shop.myCommodity,
    isSelectShow:state.layout.isSelectShow,
    noSelectCommedity:state.message.noSelectCommedity,
    createOrderSuccess:state.message.createOrderSuccess
  }),
  {
    doRemoveCommodity,
    reduceOrder,
    createOrder,
    createOrderDirect,
    toggleSelect,
    toggleNoSelectMsg,
    toggleCreateOrderMsg,
  }
)(ShopCar)