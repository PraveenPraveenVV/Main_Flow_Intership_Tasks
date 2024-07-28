import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeasls from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"

const Work = () => {

    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur. maecenas orci et sagitti",

        },
        {
            image: ChooseMeasls,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur. maecenas orci et sagitti",

        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Lorem ipsum dolor sit amet consectetur. maecenas orci et sagitti",

        },

    ]

    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='Primary-subheading'>Work</p>
                <h1 className='Primary-subheading'>How It Works</h1>
                <p className='primary-text'>"Experience Simplicity and Satisfaction At Every Step - From Browsing Our Menu To Savoring Each Delightful Bite."</p>
            </div>
            <div className='work-section-bottom'>{
                workInfoData.map((data) => (
                <div className='work-section-info'>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                </div>
                ))
            }
            </div>
        </div>
    )
}

export default Work