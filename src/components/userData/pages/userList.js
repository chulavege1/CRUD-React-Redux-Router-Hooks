import React, { useState } from 'react'
// Style.
import styled, { css } from 'styled-components'
//
const UserList = ({ userdata }) => {
// State.
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)
    // Page pagination.
    const totalPosts = userdata.length
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = userdata.slice(indexOfFirstPost, indexOfLastPost)
// Change page.
    const paginate = pageNumber => setCurrentPage(pageNumber)

    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

return (
<>
    <div>
        { currentPosts.map(users =>
            <ULNAV primary key={users.id}>
                <li>{users.avatar}</li>
                <li>{users.id}</li>
                <li>{users.name}</li>
                <li>{users.surname}</li>
                <li>{users.desc}</li>
            </ULNAV> )
        }
    </div>
    <nav>
        <ULNAV primary>
            { pageNumbers.map(number => (
                <li key={number}>
                    <button onClick={() => paginate(number)} style={{color: '#000'}}>
                        {number}
                    </button>
                </li>
                ))
            }
        </ULNAV>
    </nav>
</>
    )
}

const ULNAV = styled.ul `display: flex; 
    & li {
        ${ props => props.primary && css`
            list-style: none; 
            margin: 0 4px;
        `}
    }
    & button {
        ${ props => props.primary && css`
            color: blue; height: 100%; padding: 10px; 
            border-radius: 4px; border: 1px solid #000;
            transition: all 0.8s;
        `}
        &:hover {
            background: rgba(0,125,255,0.2); border: 1px solid #ffe;
        }
    }
    
    `


export default UserList