import { combineReducers } from 'redux';

import layout from './LayoutState';
import shop from './ShopCarState'
export default combineReducers({
  layout,
  shop
});