import React from 'react'
import Loader from './Loader';
import { useLocation } from 'react-router-dom';


const Saved = ({saved,loader}) => {




  return (
    <>
    <div className="container">
      {loader | saved.length === 0 ? (
        <Loader />
      ) : (
        <div className="row">
          {saved.map((image) => {
            return (
              <div className="card" key={image.id} id="top" onClick={() => saveImage(image)}>
                <img src={image.src.medium} alt={image.photographer} />
              </div>
            );
          })}
          {saved.length > 0 && (
            <a href="#top" className="btn">
              Top
            </a>
          )}
        </div>
      )}
    </div>
    </>
  )
}

export default Saved
