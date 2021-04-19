import React from 'react'
import { Pagination } from 'react-bootstrap';

const PaginationPage = ({ postPerPage, totalPosts, currentPage, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(
            <Pagination.Item
                key={i}
                active={i === currentPage}
                onClick={() => paginate(i)}
            >
                {i}
            </Pagination.Item>
        )
    }

    return (
        <>
            <Pagination size="md">
                {pageNumbers}
            </Pagination>
        </>
    )
}

export default PaginationPage