export const initialState = {
    toCarIsSuccess:false,
    createOrderSuccess:false,
    noSelectCommedity:false,
    removeSuccess:false
};

export const TOCAR_MSG="TOCAR_MSG";
export const NO_SELECT_MSG="NO_SELECT_MSG";
export const CREATE_ORDER_MSG="CREATE_ORDER_MSG";
export const REMOVE_SUCCESS="REMOVE_SUCCESS";

const toCar = () => {
    return {
        type:TOCAR_MSG
    }
}
const select = () => {
    return {
        type:NO_SELECT_MSG
    }
}
const createOrder = () => {
    return {
        type:CREATE_ORDER_MSG
    }
}
const remove = () => {
    return {
        type:REMOVE_SUCCESS
    }
}


export const toggleToCarMsg = () => dispatch =>{
    dispatch(toCar());
    setTimeout(() => {
         dispatch(toCar())}
    , 1000);
}

export const toggleCreateOrderMsg = () => dispatch =>{
    dispatch(createOrder());
    setTimeout(() => {
        dispatch(createOrder())}
        ,1000);
}

export const toggleNoSelectMsg = () => dispatch =>{
    dispatch(select());
    setTimeout(() => {
        dispatch(select())}
        ,1000);
}

export const toggleRemoveSuccessMsg = () => dispatch =>{
    dispatch(remove());
    setTimeout(() => {
        dispatch(remove())}
        ,1000);
}
// Message
export default function MessageState(state = initialState, message) {
    switch (message.type) {
        case TOCAR_MSG:
            return {
              ...state,
              toCarIsSuccess:!state.toCarIsSuccess
            };
        case CREATE_ORDER_MSG:
            return {
                ...state,
                createOrderSuccess:!state.createOrderSuccess
            };
        case NO_SELECT_MSG:
            return {
                ...state,
                noSelectCommedity:!state.noSelectCommedity
            }
        case REMOVE_SUCCESS:
            return {
                ...state,
                removeSuccess:!state.removeSuccess
            }
        default:
            return state;
      }
    }
    