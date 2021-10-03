import { kisiClient } from '../../kisi';
import { EMAIL, PASSWORD } from '../../constants';

const getLocks = (id) => {
  return (dispatch) => {
    kisiClient.signIn(EMAIL, PASSWORD).then(() => {
      kisiClient.get('locks', { place_id: id }).then((locks) => {
        dispatch({ type: 'ADD_LOCKS', payload: locks });
      });
    });
  };
};

export { getLocks };
