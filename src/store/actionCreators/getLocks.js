import { kisiClient } from '../../kisi';
import { EMAIL, PASSWORD } from '../../constants';

const getLocks = (id) => {
  return async (dispatch) => {
    await kisiClient.signIn(EMAIL, PASSWORD);
    const locks = await kisiClient.get('locks', { place_id: id });
    dispatch({ type: 'ADD_LOCKS', payload: locks });
  };
};

export { getLocks };
