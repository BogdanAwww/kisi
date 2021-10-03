const groupLocks = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_GROUP_LOCKS':
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case 'FETCH_GROUP_LOCKS_LOADING':
      return {
        loading: true,
      };
    case 'ASSIGN_LOCK_GROUP':
      return {
        ...state,
        ...action.payload,
      };
    case 'UNASSIGN_GROUP_LOCK':
      return {
        ...state,
        data: state.data.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};
export default groupLocks;
