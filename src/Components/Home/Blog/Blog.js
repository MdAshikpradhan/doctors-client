import React from 'react';

const Blog = ({blog}) => {
    return (
        <div className="col-md-4">
            <div className="d-flex">
                <div>
                    <img src={blog.authorImg} alt="" />
                </div>
                <div className="mt-3 ms-3">
                    <h5 className="text-primary">{blog.author}</h5>
                    <p>{blog.date}</p>
                </div>
            </div>
            <div className="mt-5">
                <h3>{blog.title}</h3>
                <p className="pt-3">{blog.description}</p>
            </div>
        </div>
    );
};

export default Blog;