import React from 'react';
import {usePagination} from '../../../hooks/usePagination';

const MyPagination = ({page, changePage, totalPages}) => {

    const paginationRange = usePagination(totalPages)

    return (
        <div className='page_container'>
            {paginationRange.map(p=>
                <button
                    key={p+1}
                    onClick={()=>changePage(p)}
                    className={page === p ? 'page page_current': 'page'} >
                    {p}
                </button>)}
        </div>
    );
};

export default MyPagination;
