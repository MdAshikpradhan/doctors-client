import React from 'react';
import Person1 from '../../../images/Ellipse 1.png'
import Person2 from '../../../images/Ellipse 2.png'
import Person3 from '../../../images/Ellipse 3.png'
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        name: 'Willson Henrry',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, error!",
        img: Person1,
        from: 'California',
    },
    {
        name: 'Ellisa',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, error!",
        img: Person2,
        from: 'California',
    },
    {
        name: 'Ema',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, error!",
        img: Person3,
        from: 'California',
    }
]

const Testimonials = () => {
    return (
        <section className="container mt-5 pt-5 pb-5">
            <div className="row w-75">
                <div className="col-md-8">
                    <h5 className="text-uppercase text-primary">Testimonial</h5>
                    <h2>What's Our Patients Says</h2>
                </div>
                <div className="col-md-4">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;