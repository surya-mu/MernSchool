import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Components/navbar';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import AboutUs from './Components/about-us';
import { Courses } from './Components/courses';
import { Home } from './Components/home';
import { HowitWorks } from './Components/how-it-works';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
          <Navbar />
           <App />
           <Routes>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/courses" element= {<Courses />}/>
                <Route path = "/" element={<Home/>}/>
                <Route path = "/how-it-works" element ={<HowitWorks/>}/>
           </Routes>
    </BrowserRouter>

);


