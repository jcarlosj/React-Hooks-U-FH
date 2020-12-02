import { useState, useEffect, useRef } from "react"

export const useFetch = ( url ) => {

    //  TO DO: Validar URL

    const
        isMounted = useRef( true ),             //  El Componente esta montado cuando se renderiza por primera vez 
        [ state, setState ] = useState({
            data: null,
            loading: true,
            error: null
        });

    useEffect( () => {

        return () => {
            /** Acciones cuando el componente se desmonte */
            isMounted.current = false;          //  Mantenemos la referencia del punto de montaje del componente
        }
    }, [] );    //  Solo se hará cuando el componente se cargue por primera vez

    useEffect( () => {

        /** Establece el State para permitir la carga del Loading entre frases */
        setState({
            data: null,
            loading: true,
            error: null
        });
        
        fetch( url )
            .then( response => response.json() )
            .then( data => {

                //  TO DO: Evaluar que viene la data
                // setTimeout( () => {

                    /** Controlamos la peticion de acuerdo al estado de montaje del componente */
                    if( isMounted.current ) {

                        setState({
                            data,
                            loading: false,
                            error: null
                        });

                    }
                    else {
                        console.log( `Se acaba de prevenir la actualización de estado de un componente desmontado` );
                    }

                // }, 4000 );

            })
            .catch( error => {
                // console.log( error );
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo obtener la data'
                });

            });

    }, [ url ]);

    return state;
}
