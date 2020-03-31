import React, {useState, Fragment} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [ nombreGasto, guardarNombre ] = useState('');
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarerror ] = useState(false); 

    const saveGasto = e => {
        e.preventDefault();

        //validar
        if(nombreGasto.trim() === '' || cantidad < 1 || isNaN(cantidad) ){
            guardarerror(true);
            return;
        }
        //contruir gasto
        guardarerror(false);
        const gasto = {
            nombre: nombreGasto,
            cantidad: cantidad,
            id: shortid.generate()
        }

        //enviamos gasto a la app principal
        guardarGasto(gasto);
        guardarCrearGasto(gasto);

        //reseteamos el formulario
        guardarNombre('');
        guardarCantidad(0);
    }

    return ( 
        <Fragment>
            <form
                onSubmit={saveGasto}
            >
                <h2>Agrega tus Gastos aqui</h2>
                {error ? <Error mensaje="El Gasto es Incorrecto"/> : null}
                <div className="campo" >
                    <label>Nombre del Gasto</label>
                    <input 
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. Transporte"
                        value={nombreGasto}
                        onChange={e => guardarNombre(e.target.value)}
                    />

                </div>
                <div className="campo" >
                    <label>Cantidad del Gasto</label>
                    <input 
                        type="number"
                        className="u-full-width"
                        placeholder="300"
                        value={cantidad}
                        onChange={ e => guardarCantidad( parseInt(e.target.value)) }
                    />

                </div>
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar Gasto"
                />
            </form>
        </Fragment>
     );
}
 
export default Formulario;