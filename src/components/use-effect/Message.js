import React, { useEffect } from 'react';

export const Message = () => {

    useEffect(() => {
        
        console .log( 'Componente Message montado' );

        return () => {
            console .log( 'Componente Message desmontado' );
        }
    }, [])
    
    return (
        <h3>Eres genial!</h3>
    )
}
