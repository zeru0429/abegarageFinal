import React from 'react'
//images
import vban1 from "../../../../assets/images/custom/misc/vban1.jpg";
import vban2 from "../../../../assets/images/custom/misc/vban2.jpg";
import bgImage from "../../../../assets/images/banner/banner.jpg";
import image3 from "../../../../assets/images/resource/image33.jpg";
import image4 from "../../../../assets/images/resource/image-4 (2).jpg";
import bgImage2 from "../../../../assets/images/background/bg2.png";

function Home() {
  return (
    <>
    <div>
      <div className="page-wrapper">
        <section className="video-section swiper-slide">
          <div
            data-parallax='{"y": 50}'
            className="sec-bg"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          ></div>
          <div className="auto-container">
            {/* <h5>{employee.employee_first_name}Working since 1999</h5> */}
            <h2>
              Tuneup Your Car <br />
              to Next Level
            </h2>
            <div className="video-box">
              <div className="video-btn">
                <a
                  href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                  className="overlay-link lightbox-image video-fancybox ripple"
                >
                  <i className="flaticon-play"></i>
                </a>
              </div>
              <div className="text">
                Watch intro video
                <br /> about us
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-5">
                <div className="image-box">
                  <img className="parallax-image" src={vban1} alt="" />
                  <img className="parallax-image" src={vban2} alt="" />
                  <div
                    className="year-experience move-slowly"
                    data-parallax='{"y": 30}'
                  >
                    <strong>17</strong> years <br />
                    Experience{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-7 pl-lg-5">
                <div className="sec-title">
                  <h5>Welcome to Our workshop</h5>
                  <h2>We have 24 years experience</h2>
                  <div className="text">
                    <p>
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved from generation X
                      is on the runway heading towards a streamlined cloud
                      solution. User generated content in real-time will have
                      multiple touchpoints for offshoring.
                    </p>
                    <p>
                      Capitalize on low hanging fruit to identify a ballpark
                      value added activity to beta test. Override the digital
                      divide with additional clickthroughs from DevOps.
                      Nanotechnology immersion along the information highway
                      will close the loop on focusing.
                    </p>
                  </div>
                  <div className="link-btn mt-40">
                    <a
                      href="about.html"
                      className="theme-btn btn-style-one style-two"
                    >
                      <span>
                        About Us <i className="flaticon-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="auto-container">
            <div className="sec-title style-two">
              <h2>Our Featured Services</h2>
              <div className="text">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution.{" "}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 service-block-one">
                <div className="inner-box hvr-float-shadow">
                  <h5>Service and Repairs</h5>
                  <h2>Performance Upgrade</h2>
                  <a href="#" className="read-more">
                    read more +
                  </a>
                  <div className="icon">
                    <span className="flaticon-power"></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 service-block-one">
                <div className="inner-box hvr-float-shadow">
                  <h5>Service and Repairs</h5>
                  <h2>Transmission Services</h2>
                  <a href="#" className="read-more">
                    read more +
                  </a>
                  <div className="icon">
                    <span className="flaticon-gearbox"></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 service-block-one">
                <div className="inner-box hvr-float-shadow">
                  <h5>Service and Repairs</h5>
                  <h2>Break Repair & Service</h2>
                  <a href="#" className="read-more">
                    read more +
                  </a>
                  <div className="icon">
                    <span className="flaticon-brake-disc"></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 service-block-one">
                <div className="inner-box hvr-float-shadow">
                  <h5>Service and Repairs</h5>
                  <h2>Engine Service & Repair</h2>
                  <a href="#" className="read-more">
                    read more +
                  </a>
                  <div className="icon">
                    <span className="flaticon-car-engine"></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 service-block-one">
                <div className="inner-box hvr-float-shadow">
                  <h5>Service and Repairs</h5>
                  <h2>Tyre & Wheels</h2>
                  <a href="#" className="read-more">
                    read more +
                  </a>
                  <div className="icon">
                    <span className="flaticon-tire"></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 service-block-one">
                <div className="inner-box hvr-float-shadow">
                  <h5>Service and Repairs</h5>
                  <h2>Denting & Painting</h2>
                  <a href="#" className="read-more">
                    read more +
                  </a>
                  <div className="icon">
                    <span className="flaticon-spray-gun"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="inner-container">
                  <h2>
                    Quality Service And <br /> Customer Satisfaction !!
                  </h2>
                  <div className="text">
                    We utilize the most recent symptomatic gear to ensure your
                    vehicle is fixed or adjusted appropriately and in an
                    opportune manner. We are an individual from Professional
                    Auto Service, a first className execution arrange, where
                    free assistance offices share shared objectives of being
                    world-className car administration focuses.
                  </div>
                </div>
              </div>
              <div className="col-lg-6 autoImage">
                <div className="image">
                  <img src={image3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose-us">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="sec-title style-two">
                  <h2>Why Choose Us</h2>
                  <div className="text">
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation heading
                    towards.
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon">
                    <span className="flaticon-mechanic"></span>
                  </div>
                  <h4>Certified Expert Mechanics</h4>
                </div>
                <div className="icon-box">
                  <div className="icon">
                    <span className="flaticon-wrench"></span>
                  </div>
                  <h4>Fast And Quality Service</h4>
                </div>
                <div className="icon-box">
                  <div className="icon">
                    <span className="flaticon-price-tag-1"></span>
                  </div>
                  <h4>Best Prices in Town</h4>
                </div>
                <div className="icon-box">
                  <div className="icon">
                    <span className="flaticon-trophy"></span>
                  </div>
                  <h4>Awarded Workshop</h4>
                </div>
              </div>
              <div className="col-lg-6 sec-conainer">
                <div className="sec-title style-two">
                  <h2>Addtional Services</h2>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="image">
                      <img src={image4} alt="" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <ul className="list">
                      <li>General Auto Repair & Maintenance</li>
                      <li>Transmission Repair & Replacement</li>
                      <li>Tire Repair and Replacement</li>
                      <li>State Emissions Inspection</li>
                      <li>Break Job / Break Services</li>
                      <li>Electrical Diagnostics</li>
                      <li>Fuel System Repairs</li>
                      <li>Starting and Charging Repair</li>
                      <li>Steering and Suspension Work</li>
                      <li>Emission Repair Facility</li>
                      <li>Wheel Alignment</li>
                      <li>Computer Diagaonstic Testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="video-section">
          <div
            data-parallax='{"y": 50}'
            className="sec-bg"
            style={{
              backgroundImage: `url(${bgImage2})`,
            }}
          ></div>
          <div className="auto-container">
            <h5>Working since 1992</h5>
            <h2>
              We are leader <br /> in Car Mechanical Work
            </h2>
            <div className="video-box">
              <div className="video-btn">
                <a
                  href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                  className="overlay-link lightbox-image video-fancybox ripple"
                >
                  <i className="flaticon-play"></i>
                </a>
              </div>
              <div className="text">
                Watch intro video <br /> about us
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="auto-container">
            <div className="wrapper-box">
              <div className="left-column">
                <h3>Schedule Your Appointment Today</h3>
                <div className="text">
                  Your Automotive Repair & Maintenance Service Specialist
                </div>
              </div>
              <div className="right-column">
                <div className="phone">1800.456.7890</div>
                <div className="btn">
                  <a href="#" className="theme-btn btn-style-one">
                    <span>Appointment</span>
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div> 
    </>
  )
}

export default Home