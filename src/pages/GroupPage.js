import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Box } from '@material-ui/system';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';
import { Button } from '@material-ui/core';
import CircularProgress from '@mui/material/CircularProgress';
import DialogWindow from '../components/DialogWindow';
import { getGroupLocks } from '../store/actionCreators/getGroupLocks';
import { getLocks } from '../store/actionCreators/getLocks';
import { unassignGroupLock } from '../store/actionCreators/unassignLock';
import { assignGroupLock } from '../store/actionCreators/assignLock';

const GroupPage = () => {
  const { groupId, placeId } = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [isAssign, setIsAssign] = useState(false);
  const groupLocks = useSelector((store) => store.groupLocks);
  const locks = useSelector((store) => store.locks);

  useEffect(() => {
    dispatch(getGroupLocks(groupId));
    dispatch(getLocks(placeId));
  }, []);

  const handleModal = (isAssign) => {
    setOpen((prev) => !prev);
    setIsAssign(isAssign);
  };

  const handleUnassign = (id) => {
    dispatch(unassignGroupLock(id));
  };

  const handleAssign = (groupId, lockId) => {
    dispatch(assignGroupLock(groupId, lockId));
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" padding="40px">
        <Typography variant="h2">Group ID {groupId}</Typography>
        <Box display="flex" gap="50px" margin="50px">
          <Button onClick={() => handleModal(true)} variant="contained" size="large">
            Assign
          </Button>
          <Button onClick={() => handleModal(false)} variant="contained" size="large">
            Unassign
          </Button>
        </Box>
        <Box>
          <Typography>Assigned locks:</Typography>
          {groupLocks.loading ? (
            <CircularProgress />
          ) : (
            groupLocks.data &&
            groupLocks.data.map((el) => <Typography key={el.id}>{el.lock.name}</Typography>)
          )}
        </Box>
      </Box>
      <DialogWindow open={open} handleModal={handleModal} isAssign={isAssign}>
        <List>
          {isAssign
            ? locks.data &&
              locks.data.map((el) => {
                const exception = groupLocks.data.some((item) => el.id === item.lockId);
                if (!exception) {
                  return (
                    <ListItem key={el.id} button onClick={() => handleAssign(groupId, el.id)}>
                      {el.name}
                    </ListItem>
                  );
                }
              })
            : groupLocks.data &&
              groupLocks.data.map((el) => (
                <ListItem key={el.id} button onClick={() => handleUnassign(el.id)}>
                  {el.lock.name}
                </ListItem>
              ))}
        </List>
      </DialogWindow>
    </Container>
  );
};

export default GroupPage;
