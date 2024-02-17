import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmationDialog from "../Dialog/ConfirmationDialog";
import CustomerService from "../../../../Service/CustomerService";
import { useToast } from "../../../../Context/ToastContext";
import LaunchIcon from "@mui/icons-material/Launch";

function CustomerTable(props) {
  const { setToastData } = useToast();
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});

  const handleDelete = async (id) => {
    // console.log(selectedRow.customer_id);
    const response = await CustomerService.deleteCustomer(
      selectedRow.customer_id
    );
    setToastData(response);
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

  useEffect(() => {
    console.log("object");
    //props.setCustomer(props.data);
  }, [props.data]);

  console.log(props.data);

  return (
    <>
      <Table striped bordered hover className="mb-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Added date</th>
            <th>Active</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((singleCustomer) => {
              return (
                <tr key={singleCustomer.customer_id}>
                  <td>{singleCustomer.customer_id}</td>
                  <td>{singleCustomer.firstName}</td>
                  <td>{singleCustomer.lastName}</td>
                  <td>{singleCustomer.email}</td>
                  <td>{singleCustomer.phoneNumber}</td>
                  <td>
                    {singleCustomer.addedDate
                      ? format(new Date(singleCustomer.addedDate), "yyyy-MM-dd")
                      : "N/A"}
                  </td>

                  <td>{singleCustomer.active == 1 ? "Yes" : "No"}</td>
                  <td>
                    <Link
                      to={`/admin/customer/edit/${singleCustomer.customer_id}`}
                      state={{ data: singleCustomer }}>
                      <EditIcon />
                    </Link>
                    <DeleteIcon
                      onClick={() => handleClickOpen(singleCustomer)}
                    />
                    <Link
                      to={`/admin/customer/:{customerId}`}
                      state={{ data: singleCustomer }}>
                      <LaunchIcon />
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <ConfirmationDialog
        message="Are you sure you want to delete?"
        open={open}
        firstName={`${selectedRow.firstName} ${selectedRow.lastName}`}
        handleDelete={handleDelete}
        handleClose={handleClose}
        id={selectedRow.employee_id}
      />
    </>
  );
}

export default CustomerTable;
