export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;
    if( (presupuesto / 4) > restante ){
        //estamos en 25% restante
        clase = 'alert alert-danger';
    } else if( (presupuesto / 2) > restante ){
        //estamos en 50% restante
        clase = 'alert alert-warning';
    } else {
        //si tiene el 75%
        clase = 'alert alert-success';
    }

    return clase;
}