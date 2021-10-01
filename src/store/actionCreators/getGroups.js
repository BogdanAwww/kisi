import {kisiClient} from "../../kisi"
import { email, password } from "../../constants"
import { getGroupLocks } from "./getGroupLocks"

const getGroups = (page, limit) => {
    return (dispatch) => {
        kisiClient.signIn(email, password)
        .then(() => {
            kisiClient
            .get('groups', {
                offset: (page-1)*limit,
                limit
            })
            .then(groups => {
                dispatch({ type: 'ADD_GROUPS', payload: { groups, page} })
                groups.data.forEach(g => {
                    dispatch(getGroupLocks(g.id))
                })
            })
        })
    }
}

export {getGroups}