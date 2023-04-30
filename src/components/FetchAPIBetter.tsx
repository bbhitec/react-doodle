// [wiki] learning and experimenting with improved REST API handling usin axios and ReactQuery


import { useState } from "react";
import Button from "./Button";
import axios from "axios";

// props elaboration
interface Props {
    url: string;
}


export default function FetchAPIBetter({ url }: Props) {

    const [imageURL, setImageURL] = useState("");

    ///////////////////////// working with API
    const apiGetAxios = () => {
        return axios.get(url)
            .then(response => {
                // handle success
                // console.log(response.data);
                setImageURL(response.data.url)  // [demo] axios response has the json annotations
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }


    return (
        <>
            <h2>FetchAPIBetter</h2>
            <Button color="primary" onClick={apiGetAxios}>Get NASA APOD</Button>
            <img src={imageURL} />
        </>
    )
}
