import React from 'react'

const Education = () => {
    return (
        <>
            <section class="education-section" >
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="heading">
                                <h2 className="main-heading"><b>Education</b></h2>
                                <h5 class="font-lite-black"><b>ACADEMIC CAREER</b></h5>
                            </div>
                        </div>
                        {/* <!-- col-sm-4 --> */}
                        <div class="col-sm-8">
                            <div class="education-wrapper">

                                <div class="education margin-b-50">
                                    <h2 className="main-heading"><b>MCA, RAJIV GANDHI UNIVERSITY, ITANAGAR</b></h2>
                                    <h5 class="font-yellow"><b>COMPUTER SCIENCE & ENGINEERING</b></h5>
                                    <h6 class="font-lite-black margin-t-40">PRESENT</h6>
                                    <p class="margin-tb-15">AVERAGE CGPA - 8.40</p>
                                </div>
                                {/* <!-- education --> */}

                                <div class="education margin-b-50">
                                    <h2 className="main-heading"><b>BCA, NORTH LAKHIMPUR COLLEGE (AUTONOMOUS), NORTH LAKHIMPUR</b></h2>
                                    <h5 class="font-yellow"><b>COMPUTER SCIENCE</b></h5>
                                    <h6 class="font-lite-black margin-t-40">JUN. 2018</h6>
                                    <p class="margin-tb-15">AVERAGE CGPA - 7.38</p>
                                </div>
                                {/* <!-- education --> */}

                                <div class="education margin-b-50">
                                    <h2 className="main-heading"><b>HS, REVEREND WILLIAM WARD JUNIOR COLLEGE, NORTH LAKHIMPUR</b></h2>
                                    <h5 class="font-yellow"><b>12th AHSEC, SCIENCE (PCM)</b></h5>
                                    <h6 class="font-lite-black margin-t-40">APR. 2014</h6>
                                    <p class="margin-tb-15">PERCENTAGE - 62.00%</p>
                                </div>
                                {/* <!-- education --> */}

                                <div class="education margin-b-50">
                                    <h2 className="main-heading"><b>HSLC, LALUK HIGHER SECONDARY SCHOOL, LALUK</b></h2>
                                    <h5 class="font-yellow"><b>10th SEBA</b></h5>
                                    <h6 class="font-lite-black margin-t-40">APR. 2012</h6>
                                    <p class="margin-tb-15">PERCENTAGE - 64.00%</p>
                                </div>
                                {/* <!-- education --> */}


                            </div> 
                        </div>
                    </div>
                </div>

            </section>
            {/* <!-- education-section --> */}
        </>
    )
}

export default Education
