import { kisiClient } from '../../kisi';
import { EMAIL, PASSWORD } from '../../constants';

const getGroups = (page, limit) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_GROUPS_LOADING' });
    await kisiClient.signIn(EMAIL, PASSWORD);
    const { data, pagination } = await kisiClient.get('groups', {
      offset: (page - 1) * limit,
      limit,
    });
    dispatch({ type: 'FETCH_GROUPS', payload: { data, pagination } });
  };
};

export { getGroups };
