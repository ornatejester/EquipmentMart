export const initialState = {
    toCarIsSuccess:false,
    createOrderSuccess:false,
    noSelectCommedity:false,
};

export const TOCAR="TOCAR";
export const NO_SELECT="NO_SELECT"
export const CREATE_ORDER="CREATE_ORDER";

// 选择框关闭
export const TOCAR_CLOSE="TOCAR_CLOSE";
export const CREATE_ORDER_CLOSE="CREATE_ORDER_CLOSE";
export const NO_SELECT_CLOSE="NO_SELECT_CLOSE";

// const toCar = () => {
//     return {
//         type:TOCAR
//     }
// }
const select = () => {
    return {
        type:NO_SELECT
    }
}
// const createOrder = () => {
//     return {
//         type:CREATE_ORDER
//     }
// }
const toCarClose = () => {
    return {
        type:TOCAR_CLOSE
    }
}
const selectClose = () => {
    return {
        type:NO_SELECT_CLOSE
    }
}
const createOrderClose = () => {
    return {
        type:CREATE_ORDER_CLOSE
    }
}

export const toggleToCarMsg = () => dispatch =>{
    // dispatch(toCar);
    setTimeout(() => {
         dispatch(toCarClose())}
    , 1000);
}

export const toggleCreateOrderMsg = () => dispatch =>{
    // dispatch(createOrder());
    setTimeout(() => {
        dispatch(createOrderClose())}
        ,1000);
}

export const toggleNoSelectMsg = () => dispatch =>{
    dispatch(select());
    setTimeout(() => {
        dispatch(selectClose())}
        ,1000);
}

export default function MessageState(state = initialState, message) {
    switch (message.type) {
        case TOCAR_CLOSE:
        case TOCAR:
            return {
              ...state,
              toCarIsSuccess:!state.toCarIsSuccess
            };
        case CREATE_ORDER_CLOSE:
        case CREATE_ORDER:
            return {
                ...state,
                createOrderSuccess:!state.createOrderSuccess
            };
        case NO_SELECT_CLOSE:
        case NO_SELECT:
            return {
                ...state,
                noSelectCommedity:!state.noSelectCommedity
            }
        default:
            return state;
      }
    }
    