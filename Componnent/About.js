import React from 'react'
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'
const About = () => {
  return<div className='about-section-container'>
    <div className='about-background-image-container'>
        <img src={AboutBackground} alt="" />
    </div>
    <div className='about-section-image-container'>
        <img src={AboutBackgroundImage} alt="" />
    </div >
    <div className='about-section-text-container'>
        <p className='primary-subheading'>About</p>
        <h1 className='primary-heading'>
            Food is An Important Part of A Balanced Diet
        </h1>
        <p className='primary-text'>
           We believe that food is not just a necessity but an experience to be savored. Our mission is to bring you the finest dishes made with love and passion.
        </p>
        <p className='primary-text'>
        Crafting every meal with the freshest ingredients and innovative techniques, we aim to create a dining experience that delights all your senses.
        </p>
        <div className='about-button-container'>
            <button className='secondary-button'>Learn More</button>
            <button className='watch-video-button'>
                {" "}
                <BsFillPlayCircleFill/>Watch Video</button>
        </div>
    </div>
    </div>
}
export default About