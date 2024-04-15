import { useState } from 'react';
import './App.css';

const Questions = [
  {
    id:1,
    question:"What is Js ?",
    answer:"Programming Language"
  },
  {
    id:2,
    question:"What is React Js ?",
    answer:"React. js is an open-source JavaScript library, crafted with precision by Facebook, that aims to simplify the intricate process of building interactive user interfaces."

  },
  {
    id:3,
    question:"What is Node Js ?",
    answer:"Node. js provides a runtime environment outside of the browser. It's also built on the Chrome V8 JavaScript engine. "
  },
  {
    id:4,
    question:"What is Express ?",
    answer:"Express is a node js web application framework that provides broad features for building web and mobile applications. "
  },
  {
    id:5,
    question:"What is Mongo db ?",
    answer:"MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas."
  },
  {
    id:6,
    question:"What is Next Js ?",
    answer:"Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application."
  }
]

function App() {

 

  return (
    <div>
    <Card/>

      
    </div>
  );
}

export default App;


function Card() {
  const [selectedId,setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id)
  }

  return (
    <div className='FlashDiv' >
   {Questions.map((question) => (
    <div className={question.id === selectedId ? "Cards Color" : "Cards"}
    onClick={() => handleClick(question.id)}
     >
      <p>{question.id === selectedId ? question.answer : question.question}</p>
    </div>
   ))}
    </div>
  );
}