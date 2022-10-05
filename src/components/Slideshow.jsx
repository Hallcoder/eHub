import React, { useState } from 'react';
function SlideShow({currentSlide}) {
    return (  
        <div className="h-full peer">
          {currentSlide.toString().match(/mp4/gi) === null ? <img src={ currentSlide} alt="well it's it" className="Transition h-full object-cover w-full" /> : <video muted autoPlay className="h-full w-full"><source src={currentSlide} /></video>}
        </div>
    );
}

export default SlideShow;