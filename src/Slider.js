import React, { useState, useRef, useEffect} from "react";
import imgData from "./ImgData";
import classes from'./Slider.module.css';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai"


function Slider(){
    const [sliderData, setSliderData] = useState(imgData)
    const slideContanierRef = useRef()
    const useImgRef = useRef()
    const [width, setWidth] = useState()
    const [index, setIndex] = useState(0)
    const [bulian, setBulian] = useState(false)
    
    
    
    useEffect(()=>{
        changeWidth()
        window.addEventListener('resize', changeWidth)
        
        
    }, [index])
    const changeWidth = () => {
        setWidth(slideContanierRef.current.offsetWidth)
    }
    useEffect (() =>{
        slider()
        // changeWidth()
    },[index])
   
   const next = () =>{
     setIndex( index === imgData.length - 1 ? 0 : index + 1)
     setBulian(!bulian)

   }
   const prev = () =>{
    setIndex( index === 0 ? imgData.length - 1  : index - 1)
    setBulian(!bulian)

  }
  
    const slider=() =>{
        useImgRef.current.style.transform = `translate(-${index * width }px)`
        useImgRef.current.style.width = `${imgData.length * width}px`
        setBulian(!bulian)
        
    }
    console.log(width)
    return(
        <div className={classes['slider_contanier']} ref={slideContanierRef } >
            <div className={classes['img_div']} ref={useImgRef}>
                {sliderData.map((el,i) => {
        return(
            <img key={i} src={el} alt=''  width={width} className={classes['slide_img']}/>
        )
    })}

 
            </div>
            <AiOutlineArrowLeft className={classes['prev']} onClick={prev}/>
            <AiOutlineArrowRight className={classes['next']} onClick={next}/>
        </div>
    )
}

export default Slider