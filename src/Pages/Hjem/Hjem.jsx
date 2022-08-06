import React from 'react'
import "./Hjem.css";

const Hjem = () => {
  return (
    <div>
    <div className='PicsumImages'>
        <img src="https://picsum.photos/300/300/" alt='Random pictures' />
        <img src="https://picsum.photos/300/320/?random" alt='Random pictures' />
        <img src="https://picsum.photos/300/330/?random" alt='Random pictures' />
        <img src="https://picsum.photos/300/340/?random" alt='Random pictures' />
        <img src="https://picsum.photos/300/350/?random" alt='Random pictures' />
        <img src="https://picsum.photos/300/360/?random" alt='Random pictures' />
        <img src="https://picsum.photos/300/370/?random" alt='Random pictures' />
    </div>
    <h1>Random pictures from <a href="https://picsum.photos/">Picsum</a></h1>
    </div>
  )
}

export default Hjem