// Assuming you are using Redux Toolkit createSlice
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload; // Or whatever your reducer logic is
    },
    removeUser: (state) => {
      return null; // Or whatever your reducer logic is
    },
  },
}); 

export const { addUser, removeUser } = userSlice.actions; // Make sure addUser and removeUser are exported here

export default userSlice.reducer; 