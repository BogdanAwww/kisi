import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { Pagination } from '@mui/material';
import BasicCard from './BasicCard';
import DialogWindow from './DialogWindow';
import { getGroups } from '../store/actionCreators/getGroups';
import { limit } from '../constants';

const FirstTask = () => {
  const [page, setPage] = useState(1);
  const [selectedGroup, setSelectedGroup] = useState({
    isOpen: false,
    id: '',
    isAssign: false,
  });
  const dispatch = useDispatch();
  const groups = useSelector((store) => store.groups?.data?.[page]);
  const count = useSelector((store) => store.groups?.pagination?.count);
  const groupLocks = useSelector((store) => store.groupLocks);

  useEffect(() => {
    if (!groups) {
      dispatch(getGroups(page, limit));
    }
  }, [page]);

  const handlePagination = (event, value) => {
    setPage(value);
  };
  const handleModal = (id, assign) => {
    setSelectedGroup((prev) => ({
      isOpen: !prev.isOpen,
      id: id,
      isAssign: assign,
    }));
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      gap="100px">
      <Box display="flex" gap="20px" flexWrap="wrap">
        {groups &&
          Object.values(groups).map((group) => (
            <BasicCard
              key={group?.id}
              groupId={group?.id}
              name={group?.name}
              description={group?.description}
              locks={groupLocks[group?.id]}
              handleModal={handleModal}
            />
          ))}
      </Box>
      <DialogWindow
        selectedGroup={selectedGroup}
        handleModal={handleModal}
        placeId={groups && Object.values(groups)[0].placeId}
      />
      <Pagination count={count ? Math.ceil(count / limit) : 1} onChange={handlePagination} />
    </Box>
  );
};

export default FirstTask;
