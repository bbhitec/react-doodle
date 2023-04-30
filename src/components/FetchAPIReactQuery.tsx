// [wiki] learning and experimenting with improved REST API handling usin axios and ReactQuery


import { useState } from "react";
import Button from "./Button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// props elaboration
interface Props {
    url: string;
}

// we can provide fetched data interface
// [wip] learn to get in via props?
interface NasaAPODData {
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}


export default function FetchAPIReactQuery({ url }: Props) {

    // [bp] using axios and then ReactQuery to handle requests
    // [wiki] axios is an HTTP cient similar to 'fetch'
    // [wiki] we use useQuery for GET and useMutation for PUSH and such
    // [wiki] the interface 'data' can be 'undefined' since it needs some time to fetch
    const { data, isLoading, isError } = useQuery({
        // [wip] reactQuery is not on the top level so it allows us an 'await'
        // [wiki] we define the asking function here. axios or 'fetch' can be used
        queryFn: async () => {
            const { data } = await axios.get(url)
            return data as NasaAPODData; // apply data interface
        },
        onError(data) {
            // optional onError callback

        }
    })

    return (
        <>
            <h2>FetchAPIReactQuery</h2>
            {/* [wip] the query loads with the app. set a button to initialize the query */}
            {/* <Button color="primary" onClick={() => useQuery} disabled>Get NASA APOD</Button> */}
            <div>{isLoading ? "Getting Data..." : "Resting"}</div>
            {isError ? <div>There was a problem with the fetch...</div> : <img src={data?.url} />}
        </>
    )
}
