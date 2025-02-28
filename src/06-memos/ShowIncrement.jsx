import React from "react";

//Componente que evita que se renderice todo el rato cada vez que toquemos al botón de incrementar.
//Lo usamos en el componente CallbackHook con useCallback para memorizar funciones, es similar al useMemo
export const ShowIncrement = React.memo( ({ increment }) => {
    return(
        <button 
            className="btn btn-primary"
            onClick={() => {
                increment();
            }}
        >
            Incrementar
        </button>
    )
});