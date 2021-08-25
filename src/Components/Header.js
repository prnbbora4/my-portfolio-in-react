import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        {/* main header left */}
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                            <h1 className="display-2">Pranab Bora</h1>
                            <p className="main-hero-para">Hello there this is Pranab Bora. A Full Stack Web Developer, Data Science 
                            & Machine Learning Engineer. You can see my work down below. I love to code in MERN stack, PhpMySql, 
                            Python & Java. I am a friendly guy you can connect with me on social media, I would love to have you in my life.
                            </p>
                            {/* <h3>Contact No</h3> */}
                            <div className="input-group mt-3">
                                {/* <input type="text" className="rounded-pill w-75 me-3 p-2 form-control-text" placeholder="Enter your email"/> */}
                                <NavLink to={{ pathname : "tel:918486891210"}} target="_blank" className="btn btn-style btn-style-border">
                                    Call Me
                                </NavLink>
                            </div>
                        </div>

                        {/* main header right */}
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                            <img src="./images/propic.jpg" alt="heroimg" className="img-fluid" />
                            {/* <img src="./images/propic.jpg" alt="heroimg" className="img-fluid main-hero-img2" /> */}
                        </div>
                    </div> 
                </section>
            </header>
        </>
    )
}

export default Header
