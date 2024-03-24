import React from 'react';
import Loader from './Loader';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ images, loader, saved, setSaved }) => {

  const saveImage = (img) => {
    let flag=true;

    if(saved.length !== null && saved.length >0)
    {

    for(let i=0;i<saved.length;i++){
      if(saved[i].id===img.id){
        flag=false;
        toast.info('Already Saved!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
        console.log("Image is Already Exist");
        break;
      }
    }
  }

    if(flag){
      setSaved([...saved, img]); // Changed Saved to saved
      toast.success('Image Saved!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      console.log("Image Saved");
    }
  

  };

  return (
    <>
    <ToastContainer/>
    <div className="container">
      {loader ? (
        <Loader />
      ) : (
        <div className="row">
          {images.map((image) => {
            return (
              <div className="card" key={image.id} id="top" onClick={() => saveImage(image)}>
                <img src={image.src.medium} alt={image.photographer} />
              </div>
            );
          })}
          {images.length > 0 && (
            <a href="#top" className="btn">
              Top
            </a>
          )}
        </div>
      )}
    </div>
    </>
  );
};

export default Home;
