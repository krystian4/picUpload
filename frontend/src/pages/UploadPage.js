import React, { useEffect, useRef, useState } from 'react'
import LoadingIcon from '../components/LoadingIcon';
import axios from 'axios';

export default function UploadPage() {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState();
    const [description, setDescription] = useState("Image Description");
    const [pictureURL, setPictureURL] = useState();
    const uploadInputRef = useRef(null);
    const [error, setError] = useState('');


    useEffect(() => {
        let loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
        setLoading(false);
    }, [])

    if (loading) {
        return <LoadingIcon />
    }

    function fileChangedHandler(event) {
        console.log(event.target.files[0])
        setImage(event.target.files[0]);
        setPictureURL(URL.createObjectURL(event.target.files[0]));
    }

    function inputButtonClick(e) {
        e.preventDefault();
        uploadInputRef.current.click();

    }



    function uploadHandler(e) {
        e.preventDefault();
        console.log('upload start');
        let fileExt = '.' + image.name.split('.')[1];
        let fileName =  image.name.split('.')[0] + new Date().getTime().toString() + fileExt;
        let formData = new FormData();

        formData.append("image", image, fileName);
        formData.append("description", description);
        formData.append("user", JSON.stringify(user));

        console.log(formData);
        axios.post('/api/images/upload', formData,{
            headers: {
                "Content-Type": "multipart/form-data",
              }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.response.data.message);
                setError(error.response.data.message);
            });
        console.log('upload end');

    }

    return (
        <div className="container">
            <h1>UpLoad Page</h1>
            {user ?
                <div>
                    <p>Logged user upload</p>
                    <form>
                        <input
                            className="file-input"
                            ref={uploadInputRef}
                            type="file"
                            accept="image/*"
                            onChange={fileChangedHandler}
                        />
                        <button onClick={inputButtonClick}>Pick image</button>
                        <button onClick={uploadHandler}>Upload</button>

                    </form>
                    <div className="img-preview">
                        <img src={pictureURL} alt=""></img>
                    </div>
                </div>
                :
                <p>Please login first to upload your picture</p>
            }
        </div>
    )
}
