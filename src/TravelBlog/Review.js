import axios from 'axios'
import React, {useState, useEffect } from 'react'

const Review = () => {
    const [review, setreview ] = useState([])
    useEffect(() => {
        axios.get (`http://localhost:5000/Review`)
             .then((res) => {setreview(res.data)
             })
             .catch((err) => console.log(err))
    })
    return(
        <>
        <header className= "bg-info text-white text-center py-5">
            <h1 className= "display-4">Traveller reviews</h1>
             <p className="text-muted">Unfiltered opinions from passionate explorers.</p>
        </header>
        <section className="col-lg-12 py-5">
            <div className="container my-5">
                <div className="row g-4">
                    {
                        review.map((review, index) => {
                            return (
                                <div className='col-md-6 col-lg-4 ' >
                                    <div className="card  h-100 mb-4 shadow-sm">
                                        <div className='card-body'>
                                            <h5 className="card-text">{review.name}</h5>
                                            <p className="card-text">{review.location}</p>
                                            <p className="card-text">{review.comment}</p>
                                            <p className="card-text">{review.rating}</p>
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


export default Review