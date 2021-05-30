import React from 'react';
import Erdwad from '../../../images/Ellipse 1.png';
import Blog from '../Blog/Blog';

const blogData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae itaque inventore hic accusantium blanditiis omnis?',
        author : 'Dr. Erdwad',
        authorImg : Erdwad,
        date: '23 May 2021'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae itaque inventore hic accusantium blanditiis omnis?',
        author : 'Dr. Erdwad',
        authorImg : Erdwad,
        date: '23 May 2021'
    },
    {
        title : 'The tooth cancer is taking a challenge',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae itaque inventore hic accusantium blanditiis omnis?',
        author : 'Dr. Erdwad',
        authorImg : Erdwad,
        date: '23 May 2021'
    }
]

const Blogs = () => {
    return (
        <section className="mt-5 pt-p">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">Blogs</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck mt-5 row d-flex justify-content-center">
                    {
                        blogData.map(blog => <Blog blog={blog}/>)
                    }
                </div>
            </div>
        </section>
    );
}
export default Blogs;