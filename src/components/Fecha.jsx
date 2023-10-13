import { useState } from "react";

const Fecha = ({ onFechaSubmit }) => {
    const [fecha, setFecha] = useState("");

    const handleSubmit = () => {
        if(fecha){
            onFechaSubmit(fecha);
        }
    }
    return (
      <div className="box">
        <h1 className="title">Horóscopo React</h1>
        <label className="label">Selecciona tu fecha de nacimiento:</label>
        <input className="input is-link" type="date" name="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
  
        {/* Botón para enviar la fecha seleccionada */}
        <button className="button is-link is-outlined mt-3 is-fullwidth" onClick={handleSubmit}>
          Ver Horóscopo
        </button>
      </div>
    );
  };
  

export default Fecha;
