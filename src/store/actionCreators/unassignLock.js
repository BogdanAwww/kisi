import { kisiClient } from '../../kisi';
import { EMAIL, PASSWORD } from '../../constants';

const unassignGroupLock = (id) => {
  return async (dispatch) => {
    await kisiClient.signIn(EMAIL, PASSWORD);
    await kisiClient.delete('group_locks', { id });
    dispatch({ type: 'UNASSIGN_GROUP_LOCK', payload: id });
  };
};

export { unassignGroupLock };
