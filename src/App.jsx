import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Saved from './components/Saved';

const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('tokyo');
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([]);
  const API_KEY = 'Up9mhMol9dUhItQnpGvLbseDQC7KD56TfSxHXvZlORip8VsHxAK5A9c6';
  const url = `https://api.pexels.com/v1/search?query=${search}&per_page=100`;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: API_KEY,
          },
        });
        setImages(response.data.photos);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };


    const data=JSON.parse(localStorage.getItem("Images"))
    if(data){
      setSaved(data)
    }


    fetchImages();
  }, [search]);

  useEffect(() => {
    console.log("Images:", images);
    console.log("Saved Images:", saved);
    setLoader(false);
  }, [images, saved]);


  useEffect(() => {
    if(saved.length!=0) {
      const json = JSON.stringify(saved)
      localStorage.setItem("Images",json)
    } 
  }, [saved])
  

  return (
    <Router>
      {!loader && <Navbar setSearch={setSearch} />} {/* Render Navbar only when loader is false */}
      <Routes>
        <Route path="/" element={<Home images={images} loader={loader} saved={saved} setSaved={setSaved} />} />
        <Route path="/saved" element={<Saved  saved={saved} loader={loader}/>} />
      </Routes>
    </Router>
  );
};

export default App;
