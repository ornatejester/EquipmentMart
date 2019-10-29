import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {connect} from 'react-redux';
import { Button, Typography } from '@material-ui/core';


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
    height:520,
    overflow:'hiddn'
  },
  table: {
    minWidth: 700,
  },
  title:{
    margin:5
  }
}));

// 记录所有订单的总金额
let allSum=0;

const sumMoney=function(arr){
  var sum=0;
  arr.forEach(element => {
    sum=sum+element.price;
  });
  allSum=allSum+sum;
  return sum;
}

 function MyOrder({orderList}) {
  const classes = useStyles();
  allSum=0;
  return (
    <React.Fragment>
      <Typography variant="h5" component="h4">
            我的订单列表
     </Typography>
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>订单详情</StyledTableCell>
            <StyledTableCell align="center">订单编号</StyledTableCell>
            <StyledTableCell align="right">订单金额</StyledTableCell>
            <StyledTableCell align="right">创建时间</StyledTableCell>
            <StyledTableCell align="right">查看物流</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderList.map((row,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.orderlist.map((order,index)=>
                  <div key={index}>
                    <span style={{fontSize:14}}>{order.name}</span>
                    <br/>
                  </div>
                  )}
              </StyledTableCell>
              <StyledTableCell align="center">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{sumMoney(row.orderlist)}RMB</StyledTableCell>
              <StyledTableCell align="right">{row.createTime}</StyledTableCell>
              <StyledTableCell align="right">
              <Button variant="contained" color="primary">
                查看物流
               </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Typography variant="h6" component="h6">
            订单总额:{allSum}
     </Typography>
    </React.Fragment>
  );
}
export default connect(
  state=>({
    orderList:state.order.orderList
  })
)(MyOrder)