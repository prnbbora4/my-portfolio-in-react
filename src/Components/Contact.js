import React, { useState } from 'react'

const Contact = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    })

    let name, value
    const postUserData = (event) => {
        name = event.target.name
        value = event.target.value

        setUserData({ ...userData, [name]: value })
    }

    // connect with firebase
    const submitData = async (event) => {
        event.preventDefault()

        const { firstName, lastName, phone, email, address, message } = userData;

        if (firstName && lastName && phone && email && address && message) {
            const res = fetch("https://my-portfolio-react-af02d-default-rtdb.firebaseio.com/userDataRecordPortfolio.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        phone,
                        email,
                        address,
                        message,
                    }),
                }
            )

            if (res) {
                setUserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: "",
                });
                alert("Data sent succesfully")
            } else {
                alert("Please fill the data carefully")
            }
        } else {
            alert("Please fill the data carefully")
        }

    }
    return (
        <>
            <section className="contactus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1 className="main-heading fw-bold">
                                        Connect With Our <br /> Sales Team.
                                    </h1>
                                    <p className="main-hero-para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Deserunt eaque alias similique.
                                    </p>
                                    <figure>
                                        <img
                                            src="./images/hero1.jpg"
                                            alt="contatUsImg"
                                            className="img-fluid"
                                        />
                                    </figure>
                                </div>

                                {/* right side contact form  */}
                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method="POST">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    id=""
                                                    className="form-control"
                                                    value={userData.firstName}
                                                    onChange={postUserData}
                                                    placeholder="First Name"
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    id=""
                                                    className="form-control"
                                                    value={userData.lastName}
                                                    onChange={postUserData}
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id=""
                                                    className="form-control"
                                                    value={userData.phone}
                                                    onChange={postUserData}
                                                    placeholder="Phone Number "
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id=""
                                                    className="form-control"
                                                    value={userData.email}
                                                    onChange={postUserData}
                                                    placeholder="Email ID"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="address"
                                                    id=""
                                                    className="form-control"
                                                    value={userData.address}
                                                    onChange={postUserData}
                                                    placeholder="Add Address"
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 ">
                                                <input
                                                    type="text"
                                                    name="message"
                                                    id=""
                                                    className="form-control"
                                                    value={userData.message}
                                                    onChange={postUserData}
                                                    placeholder="Enter Your Message"
                                                />
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                            />
                                            <label
                                                class="form-check-label"
                                                className="main-hero-para">
                                                I agree that the Administratin team may contact me at the
                                                email address or phone number above
                                            </label>
                                        </div>

                                        <button type="submit" className="btn btn-style w-100" onClick={submitData}>
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
