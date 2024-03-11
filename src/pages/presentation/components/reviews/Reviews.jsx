import React from 'react'

//SASS
import "./reviews.scss";

//DATA
import { reviews } from "../../function/data.js";

const Reviews = () => {
    return (
        <div className="reviews">
            <h3>Cosa ne pensano gli studenti!</h3>
            <div className="listReviews">
                {reviews.map((item) => (
                    <div className="cardReview" key={item.name}>
                        <div className="headerImg">
                            <img src={item.img} alt="" />
                        </div>
                        <h5 className="userName">{item.name}</h5>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reviews
