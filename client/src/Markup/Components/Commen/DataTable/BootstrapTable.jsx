import React from 'react'

import {format} from 'date-fns'
import {useAuth} from '../../../../Context/AuthContext'
import {Table,Button} from 'react-bootstrap'

function BootstrapTable({data}) {
  console.log(data);
  return (
    <>
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Active</th>
          <th>firstname</th>
          <th>lastamee</th>
          <th>Email</th>
          <th>Phone</th>
          <th>added_date</th>
          <th>Role</th>
          <th>Edite/Delete</th>
          
        </tr>
      </thead>
      <tbody>
       {data && data.map((single)=>{
        return <tr>
                <td>{single.active_employee==0? "NO": "Yes"}</td>
                <td>{single.firstname}</td>
                <td>{single.lastname}</td>
                <td>{single.email}</td>
                <td>{single.phone}</td>
                <td>{format(new Date(single.added_date),'MM-dd-yy | kk:mm')}</td>
                <td>{single.company_role_name}</td> 
                <td>Edite/Delete</td>
             </tr>
       })}
      
      </tbody>
    </Table>

    </>
  )
}

export default BootstrapTable