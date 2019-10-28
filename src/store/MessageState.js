import {messageActionCreator} from '../storeAction'

export const initialState = {
    toCarIsSuccess:false,
    createOrderSuccess:false,
    shoppingSuccess:false,
    // 未选中订单
    noSelectCommedity:false,
};

export const TOCAR="TOCAR";
export const SHOPPING="SHOPPING";
export const NO_SELECT="NO_SELECT"
export const CREATE_ORDER="CREATE_ORDER";

// 选择框关闭
export const SHOPPING_CLOSE="SHOPPING_CLOSE";
export const TOCAR_CLOSE="TOCAR_CLOSE";
export const CREATE_ORDER_CLOSE="CREATE_ORDER_CLOSE";
export const NO_SELECT_CLOSE="NO_SELECT_CLOSE";

export const toggleToCar = () => dispatch =>{
    dispatch(messageActionCreator(TOCAR));
    setTimeout(() => {
         dispatch(messageActionCreator(TOCAR_CLOSE))}
    , 1000);
}

export const toggleCreateOrder = () => dispatch =>{
    // console.log('xxxxxx');
    dispatch(messageActionCreator(CREATE_ORDER));
    setTimeout(() => {
        dispatch(messageActionCreator(CREATE_ORDER_CLOSE))}
        ,1000);
}

export const toggleShopping = () => dispatch =>{
    dispatch(messageActionCreator(SHOPPING));
    setTimeout(() => {
        dispatch(messageActionCreator(SHOPPING_CLOSE))}
        ,1000);
}

export const toggleNoSelect = () => dispatch =>{
    dispatch(messageActionCreator(NO_SELECT));
    setTimeout(() => {
        dispatch(messageActionCreator(NO_SELECT_CLOSE))}
        ,1000);
}

export default function MessageState(state = initialState, message) {
    switch (message.type) {
        case TOCAR_CLOSE:
            return {
              ...state,
              toCarIsSuccess:false
            };
        case TOCAR:
            return {
              ...state,
              toCarIsSuccess:true
            };

        case CREATE_ORDER_CLOSE:
            return {
                ...state,
                createOrderSuccess:false
            };
        case CREATE_ORDER:
            return {
                ...state,
                createOrderSuccess:true
            };

        case SHOPPING_CLOSE:
            return {
                ...state,
                shoppingSuccess:false
            }
        case SHOPPING:
            return {
                ...state,
                shoppingSuccess:true
            }

        case NO_SELECT_CLOSE:
            return {
                ...state,
                noSelectCommedity:false
            }
        case NO_SELECT:
            return {
                ...state,
                noSelectCommedity:true
            }

        default:
            return state;
      }
    }
    