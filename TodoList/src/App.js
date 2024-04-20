import { useState } from 'react';
import './App.css';


function App() {


const [MyTaskList, setMyTaskList] = useState([])
function Additem(item){
  setMyTaskList((MyTaskList) => [...MyTaskList,item])
}

function DeleteItem(id){
  setMyTaskList((MyTaskList) => MyTaskList.filter((item) => item.id !== id))
}

function onToggleitem(id){
  setMyTaskList((MyTaskList) => MyTaskList.map((item) => item.id === id ? {...item,packed:!item.packed} : item))
}

function ClearAll(){
  setMyTaskList([]);
}

  return (
    <div>
<Logo/>
<Form Additem={Additem} />
<List MyTaskList={MyTaskList} ClearAll={ClearAll} DeleteItem={DeleteItem} onToggleitem={onToggleitem} />
<Footer/>
    </div>
  );
}

export default App;


function Logo(){
  return(
    <div className='Logo' >
      <h1>Todo List</h1>
    </div>
  )
}

function Form({Additem}){

  const [description,setDescription] = useState("");
  const [quantity,setQuantity] = useState(1);

  function handleSubmit(e){
    e.preventDefault();

    if(!description) return;

    const newItem = { description,quantity,packed:false,id:Math.random() * 1000 }
    console.log(newItem)
    Additem(newItem)

    setDescription("");
    setQuantity(1);
  }


  return(
    <div className='Form' >
    <form onSubmit={handleSubmit} >
    <select value={quantity} onChange={(e) => setQuantity(e.target.value)} >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
     </select>
     <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter the task...' />
     <button type='submit' >Submit</button>
    </form>
    
    </div>
  )
}


function List({
  MyTaskList,
  DeleteItem,
  onToggleitem,
  ClearAll
}){


  const [sortBy,setSortBy] = useState("input");
  let sortedItems;

  if(sortBy === "input") sortedItems = MyTaskList;

  if(sortBy === "description")
  sortedItems = MyTaskList.slice().sort((a,b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
  sortedItems = MyTaskList
    .slice()
    .sort((a, b) => Number(a.packed) - Number(b.packed));
  
  return(
    <div className='List' >
     <div className='ListBox' >
    {sortedItems.map((item) => {
      return(
       <ItemList item={item} key={item.id} onToggleitem={onToggleitem} DeleteItem={DeleteItem} />
      )
    })}
     </div>
     <div>
     <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} >
     <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
     </select>
     <button onClick={ClearAll} >Clear All</button>

     </div>
    </div>
  )
}

function ItemList({DeleteItem,item,onToggleitem}){
  return(
    <div className='item' >
    <input type="checkbox" value={item.packed} 

onChange={() => onToggleitem(item.id)}

    />
    <span style={item.packed ? {textDecoration:"line-through"} : {}} >
    <p>{item.quantity} -  {item.description}</p>

    </span>
    <button onClick={() => DeleteItem(item.id)} >❌</button>
          </div>
  )
}

function Footer(){
  return(
    <div className='Footer' >
      <h5>Hello</h5>
    </div>
  )
}



  
  
  

 



