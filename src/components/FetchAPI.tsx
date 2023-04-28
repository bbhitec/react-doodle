// [wiki] learning and experimenting with REST API handling


import { useState } from "react";
import Button from "./Button";

interface Props {
    url: string;
}


export default function FetchAPI({url}: Props) {

    const [imageURL, setImageURL] = useState("");

    ///////////////////////// working with API
    // [demo] a very basic fetch GET: we get an image and put it beliow the button
    const apiGet = () => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                // console.log(json)
                setImageURL(json.url)
            });
    };


    // [wip] use axios and then ReactQuery to handle requests
    // const fetchTest = () => {
    //     return axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    //         .then(function (response) {
    //             // handle success
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         });
    // }


    return (
        <>
            <h2>FetchAPI</h2>
            <Button color="primary" onClick={apiGet}>Get NASA APOD</Button>
            <img src={imageURL} />
        </>
    )
}
