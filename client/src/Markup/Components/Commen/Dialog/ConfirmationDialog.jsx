import React from 'react'


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

function ConfirmationDialog({open,firstName,handleDelete,handleClose,Transition,message,id}) {
  
  return (
   <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose} // Use the handleClose prop here
      aria-describedby="alert-dialog-slide-description"
    >
        <DialogTitle>{message}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           {firstName}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={()=>handleDelete(id)}>Yes</Button>
        </DialogActions>
      </Dialog>
  )
}

export default ConfirmationDialog