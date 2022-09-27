//import './App.css'; //se borro todo el contenido que venia por defecto(dentro de return), el logo 

import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;