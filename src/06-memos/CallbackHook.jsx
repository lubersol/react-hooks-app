import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

    const { counter, setCounter } = useState(10);

    //Función memorizada (apunta al mismo valor en memoria)
    const incrementFather = useCallback(
        () => {
            setCounter( (value) => value + 1 );
        }, []
    );

    // const incrementFather = () => {
    //     setCounter(counter + 1);
    // }

    useEffect(() => {

    }, [incrementFather]); //Si incrementFather cambia, se dispara el efecto


    return(
        <>
            <h1>Counter: { counter }</h1>
            <hr />

            <ShowIncrement increment={ incrementFather} />
        </>
    )
}