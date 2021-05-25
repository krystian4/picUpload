import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ImagesList() {
    const [images, setImageS] = useState([]);
    useEffect(() => {
        axios.get('/api/images/get-list')
        .then(response=>{
            console.log(response.data[0].url);
            console.log(response.data);
            setImageS(response.data);
        })

    }, [])
    
    return (
        <div>
            {images.map((image, index)=>(
                <img className="home" key={index} src={image.url} alt=""></img> 
            ))}
        </div>
    )
}
