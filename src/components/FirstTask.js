import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { Box } from '@mui/system';
import { Pagination } from '@mui/material';
import BasicCard from './BasicCard';
import { getGroups } from '../store/actionCreators/getGroups'
import {limit} from '../constants'

const FirstTask = () => {
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const groups = useSelector(store => store.groups?.data?.[page])
    const count = useSelector(store => store.groups?.pagination?.count)
    const groupLocks = useSelector(store => store.groupLocks)
    
    useEffect(() => {
        if(!groups) {
            dispatch(getGroups(page, limit))
        }
    },[page])

    const handlePagination = (event, value) => {
        setPage(value)
    }

    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='space-between' gap='100px'>
         <Box display='flex' gap='20px' flexWrap='wrap'>
            {groups && Object.values(groups).map(group => (
                <BasicCard 
                key={group?.id}
                name={group?.name}  
                description={group?.description}
                locks={groupLocks[group?.id]}
                />
            ))}
         </Box>
         <Pagination count={count ? Math.ceil(count / limit) : 1} onChange={handlePagination}/>
        </Box>
    )
}

export default FirstTask
