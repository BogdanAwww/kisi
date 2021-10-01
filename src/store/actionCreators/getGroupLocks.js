import {kisiClient} from "../../kisi"
import { email, password } from "../../constants"

const getGroupLocks = (id) => {
    return (dispatch) => {
        kisiClient.signIn(email, password)
        .then(() => {
            kisiClient
            .get('group_locks', { group_id: id })
            .then(groupLocks => {
                dispatch({ type: 'ADD_GROUP_LOCKS', payload: {[id]: groupLocks.data } })
            })
        })
    }
}

export {getGroupLocks}