import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GenreState {
  genre: string;
}

const initialState: GenreState = {
  genre: ''
}

const genreSlice = createSlice({
  name: 'genres',
  initialState,
  reducers:{
    updateGenre: (state, action: PayloadAction<string> ) => {
      state.genre = action.payload
    },
  },
})

export const { updateGenre } = genreSlice.actions

export default genreSlice.reducer