import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ date, modalIsOpen, closeModal, appointmentOn}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();

        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success) {
                console.log(success)
                closeModal();
                alert('Appointment created Successfully.')
            }
        })
    };

    return (
        <div>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >

            <div className="text-center mb-3">
                <h2 className="text-brand">{appointmentOn}</h2>
                <small className="text-secondary">On {date.toDateString()}</small>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" className="form-control" {...register("name", { required: true })} name="name"/>
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group mt-2">
                    <input type="text" className="form-control" {...register("phone", { required: true })} name="phone"/>
                    {errors.phone && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group mt-2">
                    <input type="text" className="form-control" {...register("email", { required: true })} name="email"/>
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group row mt-2">
                    <div className="col-4">
                        <select className="form-control" {...register("gander", { required: true })} name="gander">
                            <option value="Not set ">Select Gander</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Not set">Other</option>
                            {errors.gander && <span className="text-danger">This field is required</span>}
                        </select>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" {...register("age", { required: true })} name="age"/>
                        {errors.age && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" {...register("weight", { required: true })} name="weight"/>
                        {errors.weight && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                <div className="form-group mt-3">
                    <button type="submit" className="btn-brand text-right">Send</button>
                </div>
            </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;