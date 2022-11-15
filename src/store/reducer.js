import { createSlice } from '@reduxjs/toolkit'
import { fetchNews } from './actions'

const initialState = {
  data: []
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.data = action.payload
    })
  }
})


export default newsSlice.reducer