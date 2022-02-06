import {useMemo} from 'react';

export const usePagination = (totalPages) =>{

    const pagesArray = useMemo(() => {
        console.log('run')
        const arr = [...Array(totalPages).keys()].map(i => i+1);
        return arr
    }, [totalPages] )
    return pagesArray
}