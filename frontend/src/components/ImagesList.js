import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ImagesList() {
    const [images, setImages] = useState([]);
    useEffect(() => {
        axios.get('/api/images/get-list')
            .then(response => {
                console.log(new Date(response.data[0].createdAt).toLocaleString());
                setImages(response.data);
            })

    }, [])

    return (
        <React.Fragment>
            { images && images.map((image, index) => (
                <div key={index} className="img-card">
                    <img className="home" src={image.url} alt=""></img>
                    <div className="username-section">
                        <span className="username">
                            {image.username}
                        </span>
                        
                    </div>
                    <div className="description">
                        {image.description}
                        <span className="date">
                            {new Date(image.createdAt).toLocaleString()}
                        </span>
                    </div>
                </div>
            ))}
        </React.Fragment>

    )
}
