export const initialState = {
    isSidebarOpened: false,
    isSelectShow:false
  };
  
  export const TOGGLE_SIDEBAR = "Layout/TOGGLE_SIDEBAR";
  export const SHOW_SELECT = "SHOW_SELECT";
  
  export const toggleSidebar = () => ({
    type: TOGGLE_SIDEBAR,
  })
  export const toggleSelect = () => ({
    type: SHOW_SELECT,
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
      default:
        return state;
    }
  }
  