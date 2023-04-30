// [wiki] learning and experimenting with REST API handling


import { useState } from "react";
import Button from "./Button";


interface Props {
    url: string;
}


export default function FetchAPI({ url }: Props) {

    const [imageURL, setImageURL] = useState("");

    ///////////////////////// working with API
    // [demo] a very basic fetch GET: we get an image and put it beliow the button
    const apiGet = () => {
        fetch(url)
            .then((response) => response.json())    // [demo] 'then' will wait for an async function
            .then((json) => {
                console.log(json)
                setImageURL(json.url)
            });
    };


    return (
        <>
            <h2>FetchAPI</h2>
            <Button color="primary" onClick={apiGet}>Get NASA APOD</Button>
            <img src={imageURL} />
        </>
    )
}
