import React, { useState } from 'react'
// Redux.
import { useDispatch, useSelector } from 'react-redux'
import { createUser, updateUserData, deleteUser, getData, setMessageAdmin } from '../../../redux/actions/userDataAction' 
// Style.
import styled from 'styled-components'
import { FormControl, TextField } from '@material-ui/core'

const UserEditor = ({ userdata }, props) => {
    const dispatch = useDispatch()
// Form default state.
  const adminData = useSelector(state => state.userdata.message)
    const [userState , setUserData] = useState({
        avatar: "",
        desc: "",
        id: "",
        name: "",
        surname: ""
    })
// Inputs data saver.
  const handleChanger = e => {
      const { name, value } = e.target
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
  }
// Create new user.
  const saveUser = () => {
      const { avatar, desc, id, name, surname} = userState
  
      dispatch(createUser(avatar, desc, id, name, surname))
        .then(data => {
          setUserData({
              avatar: data.avatar,
              desc: data.desc,
              id: data.id,
              name: data.name,
              surname: data.surname
          });
          console.log(data)
          dispatch(getData())
          dispatch(setMessageAdmin(`Create user id-${data.id} succefuly`))
        })
        .catch(e => {
          console.log(e)
        })
    };
// Update user data.
  const updateUser = async (e) => {
    e.preventDefault()
    dispatch(updateUserData(userState.id, userState))
      .then(response => {
        console.log(response)
        dispatch(setMessageAdmin('User has update!'))
        dispatch(getData())
      })
      .catch(e => {
        console.log(e)
      });
  };
// Deleate user.
  const removeUser = () => {
    dispatch(deleteUser(userState.id))
      .then(() => {
        dispatch(getData())
        dispatch(setMessageAdmin('User has deleate!'))
      })
      .catch(e => {
        console.log(e)
      });
  };
// UI
    return (
        <FormControl >
            <Flex>
                <TextField 
                    label="Avatar"
                    variant="outlined"
                    value={userState.avatar}
                    type='text'
                    onChange={handleChanger}
                    name='avatar'
                />
                <TextField 
                    label="Description"
                    variant="outlined"
                    value={userState.desc}
                    type='text'
                    onChange={handleChanger}
                    name='desc'
                />
                <TextField 
                    label="Name"
                    value={userState.name}
                    type='text'
                    onChange={handleChanger}
                    name='name'
                />
                <TextField
                    label="Surname"
                    variant="outlined"
                    value={userState.surname}
                    onChange={handleChanger}
                    name='surname'
                />
            </Flex>
            <Flex>
              <TextField 
                label="id"
                value={userState.id}
                type='text'
                onChange={handleChanger}
                name='id'
              />
            </Flex>
            <ButtonContainer>
              <button onClick={saveUser} className="btn btn-success">
                Submit
              </button>
              <button
                type="submit"
                className="badge badge-success"
                onClick={updateUser}
              >
                Update
              </button>
            <button className="badge badge-danger mr-2" onClick={removeUser}>
              Delete
            </button>
          </ButtonContainer>
          {adminData}
        </FormControl>
    )
}


const Flex = styled.div`display: flex; flex-direction: column; grid-gap: 10px; 
  height: 100%; width: 100%; `             
const ButtonContainer = styled.div `display: flex; justify-content: space-around;
  margin: 10px 0;
  & button {
    padding: 5px 10px;
  }`

export default UserEditor