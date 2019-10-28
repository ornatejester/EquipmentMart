import { combineReducers } from 'redux';

import layout from './LayoutState';
import shop from './ShopCarState';
import order from './MyOrderState';
import message from './MessageState';
export default combineReducers({
  layout,
  shop,
  order,
  message
});