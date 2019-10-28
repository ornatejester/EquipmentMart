// import {toggleCreateOrder}  from './MessageState'
export const initialState = {
    // 所有订单
    orderList:[],
  };

const CREATE_ORDER="CREATE_ORDER";
const CREATE_ORDER_DIRECT="CREATE_ORDER_DIRECT";

// 选择项目生成订单
export const createOrder = (action) => dispatch =>{
    dispatch(action);
}
// 商城页面直接生成订单
export const createOrderDirect = (action) => dispatch =>{
    dispatch(action);
}
export default function ShopReducer(state = initialState, commodity) {
switch (commodity.type) {
    case CREATE_ORDER:
        return {
            ...state,
            orderList:[...state.orderList,commodity.order]
        };
    case CREATE_ORDER_DIRECT:
        // console.log(state);
        return {
             ...state,
             orderList:[...state.orderList,commodity.order]
        };
    default:
        return state;
  }
}
