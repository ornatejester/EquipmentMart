// 购物车的action创建
export const actionCreator = (type, argNames) => {
    const action = { type };
    action.commodity=argNames;
    return action;
};



// 订单的action创建
export const orderActionCreator = (type, argNames) => {
    const date = new Date();
    const fullDate = date.toLocaleDateString();
    const action = { 
        type,
        order:{} 
    };
    action.order.orderlist=argNames;
    action.order.createTime=fullDate;
    action.order.id="129u3rihsadwgr7383r";
    return action;
};

// 消息action创建
export const messageActionCreator = (type) => {
    const action = { 
        type
    };
    return action;
};
