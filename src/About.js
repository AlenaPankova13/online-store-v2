import { useState } from 'react';
import './App.css'
import { photos } from './photos';


function About () {
    const [photo, setPhoto] = useState(0);
    const {id, image} = photos[photo];

    const nextPhoto = () => {
        setPhoto((photo => {
            photo ++;
            if (photo > photos.length - 1) {
                photo = 0;
            }
            return photo;
        }))
    }

    const previousPhoto = () => {
        setPhoto (photo => {
            photo--;
            if (photo < 0) {
                return photos.length - 1;
            }
            return photo;
        })
    }

    return (
        <div>
        <div className='container'>
            <h1>About us</h1>
            <p className='hidden'>{id}</p>
        </div>

        <div className='container'>
            <button onClick={previousPhoto}>Previous</button>
            <img src={image} width='500px' alt='owners'/>
            <button onClick={nextPhoto}>Next</button>
        </div>

        <div className='container'>
            <p>We are Rose and Christine, creating candles since 2017. We decided to create this company by combining our knowledge of how quality handmade candles should be created and packaged. We hope you'll be pleased with our candles. Leave your feedback and suggestions for improving the brand in the contact us section.</p>
        </div>
        </div>

    )
}

export default About;