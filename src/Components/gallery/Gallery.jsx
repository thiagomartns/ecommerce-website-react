import React from 'react'
import { gallery } from '../../gallery'
import './gallery.scss'

const Gallery = () => {
  return (
    <div className='gallery'>
      {gallery.map((item) => (
        <div className='galleryItem' key={item.id}>
          {item.order === 0 &&
            <>
              <h1 className="galleryTitle">{item.title}</h1>
              <img src={item.img} className='galleryImg' alt="" />
            </>
          }
          {item.order === 1 &&
            <>
              <img src={item.img} className='galleryImg' alt="" />
              <h1 className="galleryTitle">{item.title}</h1>
            </>
          }
        </div>
      ))}
    </div>
  )
}

export default Gallery