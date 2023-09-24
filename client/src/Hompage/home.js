import React from 'react';
import './home.css'
import Typewriter from 'typewriter-effect';

export function Home(){
    return(
        <>
        
        <div className='dhome d-flex justify-content-center align-items-center container-fluid '>
        <h1 className='dhhead'><Typewriter
        options={{
          strings:['DRONE SERVICE ...'],
          autoStart:true,
          loop:true,
        }}
        />
        </h1>
      </div>

      

     
        </>
    );
}
