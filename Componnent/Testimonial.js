import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png"
import { AiFillStar } from 'react-icons/ai'

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They Are Saying</h1>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt="" />
            <p>
                Absolutely delightful! The flavors were out of this world, and the presentation was impeccable. A must-try for every food lover!
            </p>
            <div className='testimonial-stars-container'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John doee</h2>
        </div>
    </div>
  )
}

export default Testimonial