export const initialState = {
    isSidebarOpened: false,
    isSelectShow:false,
    isShopButtonShow:false,
  };
  
  export const TOGGLE_SIDEBAR = "Layout/TOGGLE_SIDEBAR";
  export const SHOW_SELECT = "SHOW_SELECT";
  export const SHOW_SHOP_BUTTON = "SHOW_SHOP_BUTTON";
  
  export const toggleSidebar = () => ({
    type: TOGGLE_SIDEBAR,
  })
  export const toggleSelect = () => ({
    type: SHOW_SELECT,
  })
  export const toggleShopButton = () => ({
    type: SHOW_SHOP_BUTTON,
  })
  export default function LoginReducer(state = initialState, { type, payload }) {
    switch (type) {
      case TOGGLE_SIDEBAR:
        return {
          ...state,
          isSidebarOpened: !state.isSidebarOpened,
        };
      case SHOW_SELECT:
        return {
          ...state,
          isSelectShow: !state.isSelectShow,
        };
      case SHOW_SHOP_BUTTON:
          return {
            ...state,
            isShopButtonShow: !state.isShopButtonShow,
          };
      default:
        return state;
    }
  }
  