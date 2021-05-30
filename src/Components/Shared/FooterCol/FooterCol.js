import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterCol = () => {
    return (
        <div>
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-md-3">
                    <div className="mt-5 pt-4">
                        <div></div>
                        <p>Emergency Dental Care</p>
                        <p>Check Up</p>
                        <p>Treatment of professional Diseases</p>
                        <p>Tooth Extraction</p>
                        <p>Check Up</p>
                    </div>
                </div>
                <div className="col-md-3">
                <h5 className="text-primary">Our Services</h5>
                    <div className="mt-5">
                        <p>Emergency Dental Care</p>
                        <p>Check Up</p>
                        <p>Treatment of professional Diseases</p>
                        <p>Tooth Extraction</p>
                        <p>Check Up</p>
                        <p>Check Up</p>
                        <p>Check Up</p>
                    </div>
                </div>
                <div className="col-md-3">
                <h5 className="text-primary">Oral Health</h5>
                    <div className="mt-5">
                        <p>Emergency Dental Care</p>
                        <p>Check Up</p>
                        <p>Treatment of professional Diseases</p>
                        <p>Tooth Extraction</p>
                        <p>Check Up</p>
                        <p>Check Up</p>
                        <p>Check Up</p>
                    </div>
                </div>
                <div className="col-md-3">
                <h5 className="text-primary">Our Address</h5>
                    <div className="mt-5">
                        <p>New York-101010 Hudson Yards</p>
                        <div className="footerIcon text-primary">
                            <FontAwesomeIcon className="icon" icon={faFacebook} />
                            <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                            <FontAwesomeIcon className="icon" icon={faTwitter} />
                        </div>
                    </div>
                    <div className="mt-5">
                        <p>Call Now</p>
                        <button className="btn btn-primary">+963-158-932</button>
                    </div>
                </div>
            </div>
            <p className="text-center mt-5">Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
    );
};

export default FooterCol;