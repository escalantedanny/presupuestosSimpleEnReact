import React, {Fragment, useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';
function App() {

    // citas en localStorage
    let gastosIniciales = JSON.parse(localStorage.getItem('gastos'));
    if(!gastosIniciales){
      gastosIniciales = [];
    }

  // definir presupeusto y restante
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ restante, guardarRestante] = useState(0);
  const [ mostrarPregunta, actualizarPregunta ] = useState(true);
  const [ gastos, guardarGastos ] = useState(gastosIniciales);
  const [ gasto, guardarGasto ] = useState({});
  const [ crearGasto, guardarCrearGasto ] = useState(false);

  // use el HOOK useEffect para cuando el state cambia
  useEffect( () => {
/*     if(gastosIniciales){
      localStorage.setItem('gastos', JSON.stringify(gastos))
      actualizarPregunta(false)
    }else {
      actualizarPregunta(true)
      localStorage.setItem('gastos', JSON.stringify([]))
    } */
    if(crearGasto){
      //agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);

      //resta el nuevo presupuesto
      const presupuestoActual = restante - gasto.cantidad;
      guardarRestante(presupuestoActual);

      guardarCrearGasto(false);
    }
  }, [gasto])

  return (
    <Fragment>
      <div className="container">
        <header>
          <h1><u>Gasto Semanal</u></h1>
          <div className="contenido-principal contenido">
            { mostrarPregunta ? (
                <Pregunta 
                guardarPresupuesto = {guardarPresupuesto}
                guardarRestante = {guardarRestante}
                actualizarPregunta = {actualizarPregunta}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario 
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos={gastos}
                  />
                  <ControlPresupuesto 
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            ) }

          </div>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
