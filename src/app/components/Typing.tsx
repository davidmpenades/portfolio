'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

export default function App() {
  return (
    <div >
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString('Desarrollador frontend web')
              .pauseFor(2000)
              .deleteAll()
              .typeString('Web frontend developer')
              .start();
          }}
        />
     
    </div>
  );
}
