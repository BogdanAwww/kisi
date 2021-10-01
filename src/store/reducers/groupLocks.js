const groupLocks = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_GROUP_LOCKS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export default groupLocks