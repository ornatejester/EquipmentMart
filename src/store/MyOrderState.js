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
// 单个项目生成订单
export const createOrderDirect = (action) => dispatch =>{
    dispatch(action);
}

export default function OrderReducer(state = initialState, commodity) {
    // console.log('order',state);
    
switch (commodity.type) {
    case CREATE_ORDER:
        return {
            ...state,
            orderList:[...state.orderList,commodity.order]
        };
    case CREATE_ORDER_DIRECT:
        return {
             ...state,
             orderList:[...state.orderList,commodity.order]
        };
    default:
        return state;
  }
}
