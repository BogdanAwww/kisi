import { kisiClient } from '../../kisi';
import { EMAIL, PASSWORD } from '../../constants';

const getEvents = () => {
  return async (dispatch) => {
    await kisiClient.signIn(EMAIL, PASSWORD);
    const places = await kisiClient.get('places');
    const events = await kisiClient.get('events', { place_id: places.data[0].id });
    console.log(events);
  };
};

export { getEvents };
