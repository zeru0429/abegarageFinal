import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmationDialog from "../Dialog/ConfirmationDialog";
import EmployeeService from "../../../../Service/Employee.service";
import {useToast} from '../../../../Context/ToastContext'

function EmployeeTable(props) {
  const { toastData, hideToast,setToastData } = useToast();
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});

  const handleDelete = async (id) => {
   // console.log(id);
    const response = await EmployeeService.deleteEmployee(id);
    //console.log(response);
    //alert(response.message);
   // props.setDisplayAlert(true);
   // console.log(response.success);
    setToastData(response);
    if (response.success) {

     // props.setDisplayMessage({ message: response.message, type: "success" });
    } else {
    //  props.setDisplayMessage({ message: response.message, type: "error" });
    }
    props.fetchData();
    handleClose();

  };

  const handleClickOpen = (row) => {
   // console.log(row);
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <Table striped bordered hover className="mb-4">
        <thead>
          <tr>
            <th>Active</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Added date</th>
            <th>Role</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((singleEmployee) => {
              return (
                <tr key={singleEmployee.employee_id}>
                  <td>{singleEmployee.active_employee}</td>
                  <td>{singleEmployee.firstname}</td>
                  <td>{singleEmployee.lastname}</td>
                  <td>{singleEmployee.email}</td>
                  <td>{singleEmployee.phone}</td>
                  <td>
                    {format(new Date(singleEmployee.added_date), "yyyy-MM-dd")}
                  </td>
                  <td>{singleEmployee.company_role_name}</td>
                  <td>
                    <Link
                      to={`/admin/employee/edit/${singleEmployee.employee_id}`}
                      state={{ data: singleEmployee }}
                    >
                      <EditIcon />
                    </Link>
                    <DeleteIcon
                      onClick={() => handleClickOpen(singleEmployee)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <ConfirmationDialog
        message="Are you sure you want to delete?"
        open={open}
        firstName={`${selectedRow.firstname} ${selectedRow.lastname}`}
        handleDelete={handleDelete}
        handleClose={handleClose}
        id={selectedRow.employee_id}
      />
    </>
  );
}

export default EmployeeTable;