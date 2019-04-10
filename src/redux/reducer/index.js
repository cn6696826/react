import { type } from "./../action/index";
const initalState = {
  menuName: "首页"
};
export default (state = initalState, action) => {
  switch (action) {
    case type.SWITCH_MENU:
      return {
        ...state,
        menuName: action.menuName
      };
      break;
    default:
      break;
  }
};
