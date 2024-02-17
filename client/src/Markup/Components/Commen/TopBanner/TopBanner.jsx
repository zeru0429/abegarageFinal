import React from 'react'


const TopBanner = (props) => {
  return (
    <div>
      <section className="page-title"style={{ backgroundImage: `url(${props.bgImage})` }}>
        <div className="auto-container">
            <h2>{props.title}</h2>
            <ul className="page-breadcrumb">
                <li><a href="index.html">{props.subtitle}</a></li>
                <li>{props.title}</li>
            </ul>
        </div>
        <h1 data-parallax='{"x": 200}'>Car Repairing</h1>
    </section>
    </div>
  )
}

export default TopBanner
