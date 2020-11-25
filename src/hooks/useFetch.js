import { useState, useEffect } from "react"

export const useFetch = ( url ) => {

    //  TO DO: Validar URL

    const [ state, setState ] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        
        fetch( url )
            .then( response => response.json() )
            .then( data => {

                //  TO DO: Evaluar que viene la data

                setState({
                    data,
                    loading: false,
                    error: null
                });

            });

    }, [ url ]);

    return state;
}
