import { kisiClient } from '../../kisi';
import { EMAIL, PASSWORD } from '../../constants';

const getGroups = (page, limit) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_GROUPS_LOADING' });
    kisiClient.signIn(EMAIL, PASSWORD).then(() => {
      kisiClient
        .get('groups', {
          offset: (page - 1) * limit,
          limit,
        })
        .then(({ data, pagination }) => {
          dispatch({ type: 'FETCH_GROUPS', payload: { data, pagination } });
        });
    });
  };
};

export { getGroups };
