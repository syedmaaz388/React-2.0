import { CAKE_ORDERED } from './cakeActions';
import { CAKE_RESTOCKED } from './cakeActions';
const initialState = {
  numberOfCakes: 10,
};
function cakeReducer(state = initialState, action) {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };
      case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };
    default:
      return state;
  }
}
export default cakeReducer;
