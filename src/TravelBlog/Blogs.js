import axios from 'axios'
import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blog, setblog ] = useState([])
    useEffect(() => {
        axios.get (`http://localhost:5000/Blogs`)
             .then((res) => {setblog(res.data)
             })
             .catch((err) => console.log(err))
    })
    return(
        <>
        <header className= "bg-primary text-white text-center py-5">
            <h1 className= "display-4">“Explore India, One Story at a Time”

</h1>
            <p className="lead">From hidden beaches to mountain trails, discover travel blogs filled with real experiences, tips, and breathtaking places worth exploring.

</p>
        </header>
        <section className="col-lg-12 py-5">
            <div className="container my-5">
                <div className="row g-4">
                    {
                        blog.map((blog, index) => {
                            return (
                                <div className='col-md-6 col-lg-4 ' >
                                    <div className="card  h-100 mb-4 shadow-sm">
                                          <img src={blog.image} className="blog-image"  alt={blog.title} />
                                        <div className='card-body d-flex flex-column'>
                                            <h5 className="card-title">{blog.title}</h5>
                            <Link to={`/blogs/${blog.id}`} className="btn btn-outline-primary mt-auto">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        )
                    }
                </div>
            </div>
        </section>
        </>
    )
}


export default Blogs