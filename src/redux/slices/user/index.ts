import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  lastname: string;
  password: string;
}

const initialState: UserState = {
  name: '',
  lastname: '',
  password: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {}
})

export default userSlice.reducer