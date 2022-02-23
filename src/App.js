import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './js/Login';
import MenuPrincipal from './js/MenuPrincipal';

export default function App() {
  return (

    <Routes>
      <Route path='/' element={<MenuPrincipal />} />
      <Route path='/Login' element={<Login />} />
    </Routes>

  );
}

