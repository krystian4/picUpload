import React from 'react'
import ImagesList from '../components/ImagesList'

export default function HomePage() {
    return (
            <div className="container">
                <h1>Welcome to picUpload!</h1>

                <ImagesList></ImagesList>
            </div>
    )
}
