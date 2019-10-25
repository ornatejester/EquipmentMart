export const actionCreator = (type, argNames) => {
    const action = { type };
    action.commodity=argNames;
    return action;
};