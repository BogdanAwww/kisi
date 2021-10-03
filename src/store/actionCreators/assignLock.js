import { kisiClient } from '../../kisi';
import { EMAIL, PASSWORD } from '../../constants';

const assignGroupLock = (groupId, lockId) => {
  return async (dispatch) => {
    await kisiClient.signIn(EMAIL, PASSWORD);
    const groupLock = await kisiClient.post('group_locks', {
      group_lock: {
        group_id: groupId,
        lock_id: lockId,
      },
    });

    dispatch({ type: 'ASSIGN_LOCK_GROUP', payload: groupLock });
  };
};

export { assignGroupLock };
