import React from 'react';
import './loader.css'
import loader from '../../../assests/fade-stagger-squares.svg'

function Loader(params) {
    return(
        <>
        <div className='loader'>
            <img src={loader}
            className='loader-img img-fluid'/> 
        </div>
        </>
    )
}

export default Loader