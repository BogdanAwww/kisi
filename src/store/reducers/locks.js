const locks = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LOCKS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default locks;
