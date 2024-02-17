import React from "react";
import AdminMenu from "../../Components/Admin/AdminMenu/AdminMenu";
function EditOrder() {
  return (
    <div className="row">
      <div className="col-4">
        <AdminMenu />
      </div>
      <div className="col-8">
        <div>Edit Orders</div>
      </div>
    </div>
  );
}

export default EditOrder;
