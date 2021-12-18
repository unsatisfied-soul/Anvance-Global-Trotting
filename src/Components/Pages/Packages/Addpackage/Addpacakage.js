import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Addpakage.css'
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const Addpacakage = () => {
    const titleref = useRef('')
    const descRef = useRef('')


    const [profileImage,setprofileImage]=useState('https://i.ibb.co/9tgjVFZ/image.png')
    const handleSubmit = (e)=> {
        e.preventDefault()
        // console.log(e.target.value)
        console.log(titleref.current.value)
    }
    const imagehandeler = (e) => {
        const reader = new FileReader()
        reader.onload = ()=> {
            if(reader.readyState === 2){
                setprofileImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    return (
        <div>
            <form className='packageform px-3' onSubmit={handleSubmit}>
            <FontAwesomeIcon icon="coffee" />
            
                <div className="image-add py-4 mb-8">
                    <div className="img-holder rounded-lg">
                        <img className='rounded-lg' src={profileImage} id="img" alt="" />
                    </div>
                    <input type="file" name="image-upload"  id="image" accept="image/*" onChange={imagehandeler} required />
                    <div className="photo-alternate">
                        <label htmlFor="image" className='image-upload py-3 px-6 text-2xl font-semibold rounded-full cursor-pointer'>
                        <FontAwesomeIcon icon={faCamera}>add photo alternate</FontAwesomeIcon> 
                         choose your photo
                        </label>
                    </div>
                </div>
                <input type="text" ref={titleref} name="title" placeholder="Title" required/>
                <input type="text" name="description" placeholder="Description" required/>
                <input type="date" name="date" required/>
                <button type="submit" title="Submit form"><span>Sign up</span></button>
            </form>
        </div>
    );
};

export default Addpacakage;