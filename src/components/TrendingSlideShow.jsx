import React, { useEffect, useState } from 'react';
import {MdArrowForwardIos} from 'react-icons/md';
import I6 from '../assets/images/6th.jfif';
import I4 from '../assets/images/4th.jfif';
import I5 from '../assets/images/5th.jfif';
import {MdArrowBackIosNew} from 'react-icons/md';
import SlideShow from './Slideshow';
function TrendingSlideShow() {
let images = [I4,I5,I6];
const [currentSlide,setCurrentSlide] = useState(images[0]);
const handleAction = (action)=>{
    let slides = [...images];
    let index;
    switch(action){
        case 'next':
         index = slides.indexOf(currentSlide);
         if(index + 1>(slides.length-1)) {
            setCurrentSlide(slides[0])
        }else{
             setCurrentSlide(slides[index+1]);
        }
        break;
        case 'previous':
        index = slides.indexOf(currentSlide);
         if(index - 1< 0) {
            setCurrentSlide(slides[slides.length-1])
         }else{
            setCurrentSlide(slides[index-1]);
         }
        break;
        default:
         setCurrentSlide(slides[index]);
    }
}
useEffect(()=>{
  let interval = setInterval(()=>{
 handleAction('next');
    },12000)
    return ()=>{
    clearInterval(interval);
    }
},[currentSlide])
return ( 
        <div className='slide m-auto border h-[50vh]'>
            <SlideShow images={images} currentSlide={currentSlide}/>
            <MdArrowForwardIos  onClick={() => handleAction('next')} className='absolute top-[35%] hover:flex peer-hover:flex left-[89.5%] hidden text-white bg-opacity-40 h-12 w-8  bg-black'/>
            <MdArrowBackIosNew  onClick={() => handleAction('previous')} className='absolute top-[35%] hover:flex peer-hover:flex hidden text-white bg-opacity-40 h-12 w-8 bg-black' />
        </div>
     );
}

export default TrendingSlideShow;