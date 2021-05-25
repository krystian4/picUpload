import React, { useEffect, useRef, useState } from 'react'
import LoadingIcon from '../components/LoadingIcon';
import axios from 'axios';

export default function UploadPage() {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState();
    const [description, setDescription] = useState("");
    const [pictureURL, setPictureURL] = useState();
    const uploadInputRef = useRef(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

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
        if (event.target.files[0] !== undefined) {
            setPictureURL(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }
        setMessage('');
    }

    function inputButtonClick(e) {
        e.preventDefault();
        uploadInputRef.current.click();
    }

    function uploadHandler(e) {
        e.preventDefault();
        console.log('upload start');
        let fileExt = '.' + image.name.split('.')[1];
        let fileName = new Date().getTime().toString() + '_' + image.name.split('.')[0] + fileExt;
        let formData = new FormData();

        formData.append("image", image, fileName);
        formData.append("description", description);
        formData.append("user", JSON.stringify(user));
        console.log(description);
        console.log(formData);
        axios.post('/api/images/upload', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
            .then(response => {
                setMessage(response.data.message);
                setError(false);
            })
            .catch(error => {
                setMessage(error.response.data.message);
                setError(true);
            });
        console.log('upload end');
    }


    return (
        <div className="container">
            <h1>Upload your image</h1>
            {user ?
                <React.Fragment>
                    <form>
                        <input
                            className="file-input"
                            ref={uploadInputRef}
                            type="file"
                            accept="image/*"
                            onChange={fileChangedHandler}
                        />
                        <button onClick={inputButtonClick} className="submit-button">Pick image</button>
                        {message && <div className={error ? "error-box" : "alert-box"} >{message}</div>}
                        <div className="img-preview">
                            {pictureURL ? <img id="loaded-img" src={pictureURL} className="fadeIn" alt="uploaded by user"></img>
                            : <span>Image will be displayed here</span>}
                            
                        </div>
                        <textarea placeholder="Please provide your description..." onChange={e => setDescription(e.target.value)}>
                        </textarea>
                        {pictureURL && description &&
                            <button onClick={uploadHandler} className="submit-button">Upload</button>
                        }
                    </form>
                </React.Fragment>
                :
                <p>Please login first to upload your picture</p>
            }
        </div>
    )
}
