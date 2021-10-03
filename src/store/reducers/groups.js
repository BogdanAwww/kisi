const initialState = {
  loading: true,
};

const groups = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GROUPS':
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case 'FETCH_GROUPS_LOADING':
      return {
        loading: true,
      };
    default:
      return state;
  }
};
export default groups;
