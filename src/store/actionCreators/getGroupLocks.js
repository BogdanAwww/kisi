import { kisiClient } from '../../kisi';
import { EMAIL, PASSWORD } from '../../constants';

const getGroupLocks = (id) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_GROUP_LOCKS_LOADING' });
    kisiClient.signIn(EMAIL, PASSWORD).then(() => {
      kisiClient.get('group_locks', { group_id: id }).then((groupLocks) => {
        dispatch({ type: 'FETCH_GROUP_LOCKS', payload: groupLocks });
      });
    });
  };
};

export { getGroupLocks };
