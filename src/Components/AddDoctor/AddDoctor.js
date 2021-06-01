import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name);
        formData.append('email', info.email);
      
        fetch('http://localhost:5000/addADoctor', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
      }
    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-4 pr-5">
                <h1 className="text-brand">Add a Doctor</h1>
                <form onSubmit={handleSubmit}>
                    <div class="form-row align-items-center">
                        <div class="col-auto">
                            <label class="sr-only" for="inlineFormInput">Name</label>
                            <input onBlur={handleBlur} type="text" name="name" class="form-control mb-2" id="inlineFormInput" placeholder="Name" />
                        </div>
                        <div class="col-auto">
                            <label class="sr-only"  for="inlineFormInputGroup">Email</label>
                            <input onBlur={handleBlur} type="text" name="email" class="form-control" id="inlineFormInputGroup" placeholder="Email" />
                        </div>
                        <div class="col-auto">
                            <label class="sr-only" for="inlineFormInputGroup">Upload a photo</label>
                            <input onChange={handleFileChange} onBlur={handleBlur} type="file" class="form-control mt-2 mb-2" id="inlineFormInputGroup" placeholder="Picture" />
                        </div>
                        <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-2">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;