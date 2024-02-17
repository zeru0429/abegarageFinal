import React from 'react'
import { Link } from 'react-router-dom'


function DashBordCard(props) {
 
  return (
   <div className="col-lg-4 service-block-one">
   <div className="inner-box hvr-float-shadow">
     <h5>{props.title}</h5>
     <h2>{props.subTitile} </h2>
     <Link to={props.linkPath} className="read-more">
      {props.thrirdTitile}
     </Link>
     <div className="icon">
       <span className={props.iconClass}></span>
     </div>
   </div>
 </div>
  )
}

export default DashBordCard