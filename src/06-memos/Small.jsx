import { memo } from 'react';
// import React from 'react';

//memo es una función que tiene que enmarcar el componente con paréntesis. Se usa para que solo se ejecute cuando el componente cambie.
export const Small = memo(({ value }) => {
// export const Small = React.memo(({ value }) => {
    return(
        <small>{ value }</small>
    )
})