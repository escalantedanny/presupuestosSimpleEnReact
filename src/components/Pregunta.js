import React, { Fragment, useState} from 'react';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    const [ cantidad, guardarCantidad ] = useState(0); 
    const [ error, guardarerror ] = useState(false); 

    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value));
    }

    const agregarPresupuesto = e => {
        e.preventDefault();

        //validar cantidad vacia
        if(cantidad < 1 || isNaN( cantidad )) {
            guardarerror(true);
            return;
        }
        guardarerror(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return ( 
        <Fragment>
            <h2>Asigna tu presupuesto semanal</h2>
            {error ? <Error mensaje="El resupuesto es Incorrecto"/> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    name="numero"
                    className="u-full-width"
                    placeholder="Asigna tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar Presupuesto Semanal"
                />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;