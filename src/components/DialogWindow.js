import React from 'react';
import { DialogTitle, Dialog } from '@mui/material';

const DialogWindow = ({ handleModal, open, isAssign, children }) => {
  return (
    <Dialog onClose={() => handleModal()} open={open}>
      <DialogTitle>Select locks to {isAssign ? 'assign' : 'unassign'}</DialogTitle>
      {children}
    </Dialog>
  );
};

export default DialogWindow;
