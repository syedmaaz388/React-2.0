import { useDispatch, useSelector } from "react-redux";
import { DivNumber, MultiNumber,decNumber, incNumber } from "./actions";
export default function App() {
  const dispatch = useDispatch()
  const myState = useSelector((state) => state.changeTheNumber)
  const myStateTwo = useSelector((state) => state.Multidiv)
    return (
     <div className="bg" >
      <div className="card">
     <button onClick={() => dispatch(decNumber(5))} >-</button>
     <h1>{myState}</h1>
     <button onClick={() => dispatch(incNumber(5))} >+</button>
      </div>
      <div className="card">
     <button onClick={() => dispatch(MultiNumber(5))} >-</button>
     <h1>{myStateTwo}</h1>
     <button onClick={() => dispatch(DivNumber(5))} >+</button>
      </div>
     </div>
    );
  }
  