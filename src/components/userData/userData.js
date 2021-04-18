import React, { useEffect } from 'react'
// Route.
import { Route } from "react-router-dom"
// Style.
import styled from 'styled-components'
// Redux.
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/actions/userDataAction' 
// Child.
import Links from './links'
import UserList from './pages/userList'
import UserEditor from './pages/userEditor'
//
const UserData = () => {
// Redux. 
    const dispatch = useDispatch()
    const userdata = useSelector(state => state.userdata.users)
    const isFetching = useSelector(state => state.userdata.isFetching)
    console.log(userdata)
// Get user data.
    useEffect(() => {
        dispatch(getData())
    }, [dispatch] )

    return (
        <UserDataContainer>
            <Links />
            { 
                isFetching === false
                    ?
                    <>
                        <Route exact path="/allusers">
                            <UserList userdata={userdata}  />
                        </Route>
                        <Route exact path="/usereditor">
                            <UserEditor userdata={userdata} />
                        </Route>
                    </>
                    :
                <div><h1>Wait fetching data!</h1></div>
            }
        </UserDataContainer>
    )
    
}

const UserDataContainer = styled.div `background: rgba(0,0,0,0.1); padding: 10px; border-radius: 10px;
    display: flex; flex-direction: column;  align-items: center; height: 100%;`


export default UserData