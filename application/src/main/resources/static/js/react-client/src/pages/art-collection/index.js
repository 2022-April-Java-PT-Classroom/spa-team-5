import axios, { Axios } from "axios";
import React, { useEffect, useState} from "react";


const ArtCollection = () => {

    const [loading, setLoading] = useState(true),
    [artdata, setArtdata] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios('http://localhost:8080/api/art');
            artdata(result.data);
        }
        if (artdata){
            setLoading(false);
        }
        const timer = setTimeout(() => {
            !artdata && fetchData();
        }, 1000);
        return () => clearTimeout(timer);
    })
}
export default ArtCollection;