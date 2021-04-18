import axios from 'axios'
import UsersService from "../../services/usersCrud"
import { setIsFetching, setUserData } from '../reducers/userDataReducer'

const SET_MESSAGE_FOR_ADMIN = "SET_MESSAGE_FOR_ADMIN";
const CREATE_USER = "CREATE_USER"
const UPDATE_USER = "UPDATE_USER"
const DELETE_USER = "DELETE_USER"

export const createUser = (avatar, desc, id, name, surname) => async (dispatch) => {
    try {
        const res = await UsersService.create({ avatar, desc, id, name, surname })
  
    dispatch({
        type: CREATE_USER,
        payload: res.data,
    });
  
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err)
    }
  };

export const updateUserData = (id, data) => async (dispatch) => {
    try {
        const res = await UsersService.update(id, data)
  
      dispatch({
        type: UPDATE_USER,
        payload: data,
      });
  
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err);
    }
  };

export const deleteUser = (id) => async (dispatch) => {
    try {
        await UsersService.remove(id)

        dispatch({
            type: DELETE_USER,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};
export const setMessageAdmin = (data) => async (dispatch) => {
    dispatch({
        type: SET_MESSAGE_FOR_ADMIN,
        payload: data,
    });
};
//
export const getData = () => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios.get('http://77.120.241.80:8811/api/users')
        dispatch(setUserData(response.data))
    }
}