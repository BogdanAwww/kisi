import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { Pagination } from '@material-ui/core';
import CircularProgress from '@mui/material/CircularProgress';
import BasicCard from '../components/BasicCard';
import { getGroups } from '../store/actionCreators/getGroups';
import { LIMIT } from '../constants';

const GroupsPage = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const groups = useSelector((store) => store.groups);

  useEffect(() => {
    dispatch(getGroups(page * LIMIT, LIMIT));
  }, [page]);

  const handlePagination = (event, value) => {
    setPage(value - 1);
  };
  return (
    <Container>
      <Box
        minHeight="100vh"
        padding="40px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between">
        <Box display="flex" flexWrap="wrap" gap="30px" justifyContent="center">
          {groups.loading ? (
            <CircularProgress />
          ) : (
            groups.data.map((el) => (
              <BasicCard key={el.id} groupId={el.id} name={el.name} description={el.description} placeId={el.placeId}/>
            ))
          )}
        </Box>
        <Box>
          <Pagination
            count={Math.ceil(groups?.pagination?.count / LIMIT)}
            onChange={handlePagination}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default GroupsPage;
