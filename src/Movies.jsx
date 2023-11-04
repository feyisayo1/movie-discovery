import { useEffect } from "react";
import { useState } from "react";

const movies = ( ) => {

    const [result, setResult] = useState('')

    const url =`https://api.publicapis.org/entries`;

    useEffect(() => {
        // const url = 'https://developer.themoviedb.org/reference/intro/getting-started';
        // let result;

        fetch( url)
            .then( response => response.json())
            .then(data => {
                // data = result;
                setResult(data)
                console.log(data);
                // console.log(data.entries[0]);
            })
    }, [url])




    return(
        <>
            <p>{result.count}</p>
            {/* <p>{result.entries.API}</p> */}
        </>
    )
}

export default movies;