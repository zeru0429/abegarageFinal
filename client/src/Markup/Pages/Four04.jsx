import React from 'react'
import './Four04.css'
import { Link } from 'react-router-dom'
function Four04() {
  return (

    <>
    <section className="error-section"  >
        <div className="auto-container">
            <div className="content">
                <h1>404</h1>
                <h2>Oops! That page can’t be found</h2>
                <div className="text">Sorry, but the page you are looking for does not existing</div>
                <Link href="/" className="theme-btn btn-style-one">Go to home page</Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default Four04