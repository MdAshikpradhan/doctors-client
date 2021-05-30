import React from 'react';
import './Testimonial.css';

const Testimonial = ({testimonial}) => {
    return (
        <div className="col-md-4 mt-3 testimonialCard p-3">
            <div>
                <p className="pb-3">{testimonial.description}</p>
            </div>
            <div className="d-flex">
                <img className="" src={testimonial.img} alt="" />
                <div className="ms-2 mt-3">
                    <h6 className="text-primary">{testimonial.name}</h6>
                    <p>{testimonial.from}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;