import React, { useEffect, useState } from 'react';

export const Message = () => {

    const 
        [ coords, setCoords ] = useState({
            x: 0, y: 0
        }),
        { x, y } = coords;

    useEffect(() => {
        
        console.log( 'Componente Message montado' );

        const mouseMove = event => {   //  Definimos la funcionalidad
            const coords = {
                x: event.x,
                y: event.y
            }
            // console.log( coords );
            setCoords( coords );     
        }

        window.addEventListener( 'mousemove', mouseMove );      //  Monta la funcionalidad al listener

        return () => {
            console.log( 'Componente Message desmontado' );
            window.removeEventListener( 'mousemove', mouseMove );   //  Desmonta la funcionalidad del listener 
        }
    }, [])
    
    return (
        <>
            <h3>Eres genial!</h3>
            <p>x: { x }, y: { y }</p>
        </>
    )
}
