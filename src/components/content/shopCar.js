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
import { Button } from '@material-ui/core';

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
  },
  table: {
    minWidth: 700,
  },
}));

function ShopCar({myCommodity}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h5" component="h4">
            我的购物车
      </Typography>
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>装备名称</StyledTableCell>
            <StyledTableCell align="center">装备编号</StyledTableCell>
            <StyledTableCell align="center">装备价格</StyledTableCell>
            {/* <StyledTableCell align="right">装备说明</StyledTableCell> */}
            <StyledTableCell align="right">选择操作</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myCommodity.map((commodity,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {commodity.name}
              </StyledTableCell>
              <StyledTableCell align="center">{commodity.id}</StyledTableCell>
              <StyledTableCell align="center">{commodity.price}</StyledTableCell>
              {/* <StyledTableCell align="right">
                <Button type='primary'>立即购买</Button>
              </StyledTableCell> */}
              <StyledTableCell align="right">
              <Button color='primary'>立即购买</Button>
              <Button color='secondary'>移出购物车</Button>
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
    myCommodity:state.shop.myCommodity
  })
)(ShopCar)