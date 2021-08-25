import React from 'react'
import Contact from './Contact'
import Education from './Education'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import Projects from './Projects'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
