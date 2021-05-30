import React from 'react';
import Featured from '../../../images/Featured.png';

const FeaturedService = () => {
    return (
        <section className="featured-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-mb-0">
                        <img src={Featured} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, on your Term</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a animi sapiente voluptatum corrupti dolore.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;