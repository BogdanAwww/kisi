const groups = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_GROUPS':
            return {
                ...state,
                ...action.payload.groups,
                currentPage: action.payload.page,
                data: {
                    ...state.data,
                    [action.payload.page]:  action.payload.groups.data.reduce((prev, cur) => {
                            prev[cur.id] = cur
                            return prev 
                     }, {})
                }

            }
            // return {
            //     ...state,
            //     ...action.payload,
            //     data: {
            //         ...state.groups,
            //         [action.payload.page]: action.payload.groups.data.reduce((prev, cur) => {
            //             prev[cur.id] = cur
            //             return prev 
            //     }, {})
            //     }
            // }
        default:
            return state;
    }
}
export default groups