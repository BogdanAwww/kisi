const unlockEvents = (state = [], action) => {
  switch (action.type) {
    case 'GET_EVENTS':
      return [...action.payload];
    default:
      return state;
  }
};
export default unlockEvents;
