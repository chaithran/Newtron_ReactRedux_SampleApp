import {
  ADD_SUPPLIER, TOGGLE_IS_LOGGED, UPDATE_CURRENTUSER, SET_MAINPAGE,
  HOME_MAINPAGE,SET_SELECTEDSUPPLIER
} from "../constants/action-types";


const initialState = {
  suppliers: [{ id: "1", title: "Supplier name" }],
  isLoggedIn: false,
  currentUser: 'chai',
  setMainPage: HOME_MAINPAGE,
  selectedSupplier:1
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_SUPPLIER) {
    return Object.assign({}, state, {
      suppliers: state.suppliers.concat(action.payload)
    });
  }
  if (action.type === TOGGLE_IS_LOGGED) {
    return Object.assign({}, state, {
      isLoggedIn: !(state.isLoggedIn)
    });
  }
  if (action.type == UPDATE_CURRENTUSER) {
    return Object.assign({}, state, {
      currentUser: action.payload
    });
  }
  if (action.type == SET_MAINPAGE) {
    return Object.assign({}, state, {
      setMainPage: action.payload
    });
  }
  if (action.type == SET_SELECTEDSUPPLIER) {
    return Object.assign({}, state, {
      selectedSupplier: action.payload
    });
  }
  return state;
};

export default rootReducer;