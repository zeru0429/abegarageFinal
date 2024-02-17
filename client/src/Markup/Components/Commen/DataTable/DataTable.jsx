import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import moment from 'moment'


/*
"employee_id": 16,
"active_employee": 1,
"firstname": "Mihiretu",
"lastname": "Tigistu",
"email": "mihiretutigistu@gmail.com",
"phone": "0904825407",
"added_date": "2023-12-19T10:16:22.000Z",
"company_role_name": "admin"

*/


function createData(employee_id, active_employee,firstname, lastname,email, phone,added_date,company_role_name) {
  return { employee_id, active_employee,firstname, lastname,email, phone,added_date,company_role_name};
}


export default function DataTable(props) {

  const rows = props.data.map((single) => {
    return createData(single.employee_id, single.active_employee,single.firstname, single.lastname,single.email, single.phone,single.added_date,single.company_role_name)

  });

function convertDateFormat(inputTime) {
  const parsedTime = moment(inputTime);
  // Format the parsed time in the desired format employee_id, active_employee,firstname, lastname,email, phone,added_date,company_role_name
  const formattedTime = parsedTime.format('DD MMM YYYY');
  return formattedTime;
}

  return (
    <Table sx={{ minWidth: 700 }} size="small" aria-label="a dense table">
    <TableHead>
      <TableRow>
        <TableCell>Id</TableCell>
        <TableCell>Active</TableCell>
        <TableCell align="left">Firstname</TableCell>
        <TableCell align="left">Lastname</TableCell>
        <TableCell align="left">Email</TableCell>
        <TableCell align="left">Phone</TableCell>
        <TableCell align="left">Added date</TableCell>
        <TableCell align="left">Role</TableCell>
        <TableCell align="left">edit / delete</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows && rows.map((row) => (
        <TableRow
          key={row.employee_id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.employee_id}
          </TableCell>
          <TableCell component="th" scope="row">
            {row.active_employee}
          </TableCell>
          <TableCell align="left">{row.firstname}</TableCell>
          <TableCell align="left">{row.lastname}</TableCell>
          <TableCell align="left">{row.email}</TableCell>
          <TableCell align="left">{row.phone}</TableCell>
          <TableCell align="left">{convertDateFormat(row.added_date)}</TableCell>
          <TableCell align="left">{row.company_role_name}</TableCell>
          <TableCell align="left">
            <span className=''>
              <Link to="/admin/update-single-employee" state={{ data: row }}>
                <EditIcon />
              </Link>
            </span>
            <span className=''>
              <DeleteIcon />
            </span>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
   
  );
}