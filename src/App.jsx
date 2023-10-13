import React from 'react'
import './App.css'
import Fecha from './components/Fecha'
import Card from './components/CardHoroscopo'
import { useState } from 'react'

const App = () => {
  // Estado para almacenar la fecha seleccionada
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);

  // Función para manejar el cambio de fecha y actualizar el estado
  const handleFechaChange = (date) => {
    setFechaSeleccionada(date);
  };
  return (
    <React.Fragment>
      {/* Paso el estado y la función de manejo al componente Fecha */}
      <Fecha onFechaSubmit={handleFechaChange} />
      
      {/* Paso la fecha seleccionada al componente Card */}
      {fechaSeleccionada && <Card fechaSeleccionada={fechaSeleccionada} />}
    </React.Fragment>
  );
};

export default App
