 export default function userReducer(
    state = {
      count: 0,
      name: "Ahrorbek",
    },
    action
  ) {
    switch (action.type) {
      case "SET_COUNT":
        state = { ...state, count: action.payload };
        break;
      case "SET_NAME":
        state = { ...state, name: action.payload };
      default:
        return state;
    }
  
    return state;
  }