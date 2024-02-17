import React from 'react'

function Avator({data}) {
  return (
   <div className="container">
   <div className="row">
     <div className="col-12">
       <div className="big-avatar">
         <h3>{data}</h3>
       </div>
     </div>
   </div>
 </div>
  )
}

export default Avator