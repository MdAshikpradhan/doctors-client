import React from 'react';

const Contact = () => {
    return (
        <div className="bg-dark">
            <div className="container pb-5 pt-5">
                <div className="text-center pt-5">
                    <h5 className="text-primary">Contact</h5>
                    <h1 className="text-light">Always contact with us</h1>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <form className="w-75">
                        <input className="form-control" type="text" name="email" placeholder="Email Address"/><br /><br />
                        <input className="form-control" type="text" name="text" placeholder="Subject"/><br /><br />
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Message..."></textarea>
                        <div className="text-center mt-3">
                        <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;