
const initialState = 10;
const Multidiv = (state = initialState,action) => {
    switch(action.type){
        case "DIVISION": return state * action.payload;
        case "MULTIPLY": return state / action.payload;
        default:return state;
    }
}
export default Multidiv;