import React, { useState, useEffect } from 'react';
import axios from 'axios';


const baseUrl = `https://rallycoding.herokuapp.com/api/music_albums`

export const useAlbums = () => {
    const [albums, setAlbums] = useState([])

    useEffect(()=> {
        const getAlbums = async () =>{
            const { data } = await axios.get(`${baseUrl}`)
            setAlbums(data)
        }
        getAlbums()
    });
    return albums;
}