import { kisiClient } from '../../kisi';
import { email, password } from '../../constants';

const getLocks = (id) => {
  return (dispatch) => {
    kisiClient.signIn(email, password).then(() => {
      kisiClient.get('locks', { place_id: id }).then((locks) => {
        dispatch({ type: 'ADD_LOCKS', payload: locks });
      });
    });
  };
};

export { getLocks };
