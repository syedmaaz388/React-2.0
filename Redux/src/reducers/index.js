import changeTheNumber from "./upDown";
import Multidiv from "./MultiDiv";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    changeTheNumber,
        Multidiv,
})

export default rootReducer;