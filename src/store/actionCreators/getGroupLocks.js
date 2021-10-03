import { kisiClient } from '../../kisi';
import { EMAIL, PASSWORD } from '../../constants';

const getGroupLocks = (id) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_GROUP_LOCKS_LOADING' });
    await kisiClient.signIn(EMAIL, PASSWORD);
    const groupLocks = await kisiClient.get('group_locks', { group_id: id });
    dispatch({ type: 'FETCH_GROUP_LOCKS', payload: groupLocks });
  };
};

export { getGroupLocks };
