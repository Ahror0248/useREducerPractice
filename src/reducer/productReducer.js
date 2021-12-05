export default function productReducer(
    state = {
      title: "",
      price: 0,
    },
    action
  ) {
    switch (action.type) {
      case "SET_TITLE":
        state = { ...state, title: action.payload };
        break;
      case "SET_PRICE":
        state = { ...state, price: action.payload };
        break;
    }
    return state;
  }
  