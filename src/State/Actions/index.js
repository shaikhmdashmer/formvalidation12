import { ADD_USER, DELETE_USER, SEARCH_USER, UPDATE_USER } from "./types";

export const addUser = (message) => ({
  type: ADD_USER,
  message,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  id,
});

export const updateUser = ({ message, id }) => ({
  type: UPDATE_USER,
  message,
  id,
});
export const searchUser =({message,id})=>({
  type : SEARCH_USER,
  message,
  id,
});
