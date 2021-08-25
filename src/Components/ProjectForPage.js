import React, {useState} from 'react'
import ProjectsPageApi from "./Api/ProjectsApi";


const ProjectForPage = () => {
    const [projects, setProjectsPages] = useState(ProjectsPageApi)

    return (
        <>
            <section>
                <div className="workk-container container">
                    <h1 className="main-heading text-center">My Projects Portfolio</h1>
                    <div className="row">
                        {
                            projects.map((curElem) => {
                                const { id, image, title, info } = curElem
                                return (
                                    <>
                                        <div className="col-12 col-lg-4 text-center work-container-subdiv"
                                            key={id}>
                                            {/* <i class={`fontawesome-style ${logo}`}></i> */}
                                            <figure>
                                                <img
                                                    src={image}
                                                    alt="contatUsImg"
                                                    className="img-fluid"
                                                />
                                            </figure>
                                            <h2 className="sub-heading">{title}</h2>
                                            <p className="main-hero-para w-100">{info}</p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectForPage
