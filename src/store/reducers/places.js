const places = (state = {}, action) => {
    switch (action.type) {
      case 'GET_PLACES':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
  export default places;
  