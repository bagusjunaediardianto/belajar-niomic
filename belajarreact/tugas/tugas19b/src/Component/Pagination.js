import React from 'react'

const Pagination =({postPerPages, totalPosts, paginate})=>{
    const pageNumbers = []

    for(let i = 1; i < Math.ceil(totalPosts/postPerPages);i++){
        pageNumbers.push(i)
    }
    return(
        <nav>
            <ul>
                {pageNumbers.map((item)=>(
                    <li key={item}>
                        <a onClick={()=>paginate(item)} href="!#">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination