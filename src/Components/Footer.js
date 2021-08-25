import React from 'react'
import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-6 col-lg-3">
                                    <h2>Education</h2>
                                    <ul>
                                        <li>
                                            <NavLink to="/education">MCA</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/education">BCA</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/education">Hardware and Networking</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <h2>Projects</h2>
                                    <ul>
                                        <li>
                                            <NavLink to="/projects">Traffi Sign Recognition</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/projects">Todo App</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/projects">House Price Prediction</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/projects">Social App</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <h2>Contact</h2>
                                    <ul>
                                        <li>
                                            <NavLink to="/contact">Meet Me</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <h2>Follow us</h2>
                                    <div className="row">
                                        <div className="col-3 mx-auto">
                                            <NavLink to={{ pathname : "https://www.linkedin.com/in/pranab-bora-6084a4169/"}} target="_blank">
                                                <i className="fab fa-linkedin fontawesome-style"></i>
                                            </NavLink>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <NavLink to={{ pathname : "https://github.com/prnbbora4"}} target="_blank">
                                                <i className="fab fa-github fontawesome-style"></i>
                                            </NavLink>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <NavLink to={{ pathname : "https://www.instagram.com/prnbbora4/"}} target="_blank">
                                                <i className="fab fa-instagram fontawesome-style"></i>
                                            </NavLink>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <NavLink to={{ pathname : "https://twitter.com/pranab889bora"}} target="_blank">
                                                <i className="fab fa-twitter fontawesome-style"></i>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-5">
                                <p className="main-hero-para text-center w-100">Copyright @ 2021 Pranab Bora. All right reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
