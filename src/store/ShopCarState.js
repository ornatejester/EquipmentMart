export const initialState = {
    myCommodity: [
        {number:0,id:1138,name:'冰霜长茅',intro:'普通攻击会减少目标攻速和移速，远程英雄为1s',price:220},
    ],
  };
  // 用作用于购物车商品的唯一标识符;
  var commodityNumber=1;

  export const TOCAR = "TOCAR";
  export const REMOVE = "REMOVE";
  export const REDUCER_ORDER = "REDUCER_ORDER";
  
  // 根据唯一标识符移除商品
  const removeCommodity = function(arr,x){
    const arrNew=[];
      arr.forEach(element => {
          if(element.number!==x.number)
          arrNew.push(element)    
      });
    return arrNew;
  }
  // 根据唯一标识符移除商品
  const removeCommodityList = function(arr,arrReduce){
        var arrNew=arr;
        arrReduce.forEach(element => {   
          arrNew=removeCommodity(arrNew,element);
        })
    return arrNew;
  }

  export const doBuyCommodity = (action) => dispatch => {
        dispatch(action);
  }
  export const doRemoveCommodity = (action) => dispatch => {
        dispatch(action);
  }
  export const reduceOrder = (action) => dispatch => {
        dispatch(action);
}
  
  export default function ShopReducer(state = initialState, commodity) {
    switch (commodity.type) {
      case TOCAR:
          const commodityNew={
            ...commodity.commodity,
            number:commodityNumber
          };
          commodityNumber++;
        return {
          ...state,
          myCommodity:[...state.myCommodity,commodityNew]
        };
      case REMOVE:
        return {
          ...state,
          myCommodity: removeCommodity(state.myCommodity,commodity.commodity)
        };
      case REDUCER_ORDER:{
        return {
          ...state,
          myCommodity: removeCommodityList(state.myCommodity,commodity.commodity)
        }
      }
      default:
        return state;
    }
  }
  