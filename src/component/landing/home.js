import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Navbar from './navbar';
import './home.css';

function Home(){

    return(
        
        <>
        <Navbar />
        <div> <h1 className="col-6 mx-auto">
             HI, I'M HOME
         </h1>
         </div>
       </>
    );
}
export default Home;