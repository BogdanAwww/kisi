import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DialogTitle, Dialog, Button } from '@mui/material';
import { getLocks } from '../store/actionCreators/getLocks';
import { assignGroupLock } from '../store/actionCreators/assignLock';

const DialogWindow = ({ handleModal, selectedGroup, placeId }) => {
  const dispatch = useDispatch();
  const locks = useSelector((store) => store.locks.data);
  const groupLocks = useSelector((store) => store.groupLocks[selectedGroup.id]);
  useEffect(() => {
    if (!locks) {
      dispatch(getLocks(placeId));
    }
  });

  const handleAssign = (groupId, lockId) => {
    dispatch(assignGroupLock(groupId, lockId))
  }

  return (
    <Dialog onClose={() => handleModal()} open={selectedGroup.isOpen}>
      <DialogTitle>Select locks to {selectedGroup.isAssign ? 'assign' : 'de-assign'}</DialogTitle>
      {selectedGroup.isAssign
        ? locks &&
          groupLocks &&
          locks.map((el) => {
            const consilience = groupLocks.some((item) => item.lock.id === el.id);
            if (!consilience) {
              return <Button onClick={() => handleAssign(selectedGroup.id, el.id)} key={el.id}>{el.name}</Button>;
            }
          })
        : groupLocks && groupLocks.map((el) => <Button key={el.lock.id}>{el.lock.name}</Button>)}
    </Dialog>
  );
};

export default DialogWindow;
