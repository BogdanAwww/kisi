import { kisiClient } from '../../kisi';
import { EMAIL, PASSWORD } from '../../constants';

const assignGroupLock = (groupId, lockId) => {
  return (dispatch) => {
    kisiClient.signIn(EMAIL, PASSWORD).then(() => {
      kisiClient
        .post('group_locks', {
          group_lock: {
            group_id: groupId,
            lock_id: lockId,
          },
        })
        .then((groupLock) => {
          dispatch({ type: 'ASSIGN_LOCK_GROUP', payload: groupLock });
        });
    });
  };
};

export { assignGroupLock };
