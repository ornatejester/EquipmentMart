export const initialState = {
    myCommodity: [
        {id:1138,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
    ],
  };
  
  export const BUY = "BUY";
  
  export const doBuyCommodity = (action) => dispatch => {
        dispatch(action);
  }
  
  export default function ShopReducer(state = initialState, commodity) {
    switch (commodity.type) {
      case BUY:
        return {
          ...state,
          myCommodity:[...state.myCommodity,commodity.commodity]
        };
      default:
        return state;
    }
  }
  