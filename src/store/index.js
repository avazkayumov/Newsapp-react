import { configureStore } from '@reduxjs/toolkit'
import newsSlice from './reducer'

export const store = configureStore({
  reducer: newsSlice,
})

