import { kisiClient } from '../../kisi';
import { EMAIL, PASSWORD } from '../../constants';

const unassignGroupLock = (id) => {
  return (dispatch) => {
    kisiClient.signIn(EMAIL, PASSWORD).then(() => {
      kisiClient.delete('group_locks', { id }).then(() => {
        dispatch({ type: 'UNASSIGN_GROUP_LOCK', payload: id });
      });
    });
  };
};

export { unassignGroupLock };
