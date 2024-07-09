import React from 'react';
import './App.css';
import Movielist from './components/Movielist';
import MovieComp from './components/MovieComp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Error404 from './components/Error404';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Movielist />}/>
        <Route path="movie/:id" element={<MovieComp />} />
        <Route path="*" element={<Error404 />} />

      </Routes>
  );
}

export default App;
