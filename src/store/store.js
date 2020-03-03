import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import quiz from './slices/quiz'

export const store = configureStore({
  devTools: process.env.NODE_ENV !== `production`,
  middleware: [thunk],
  reducer: {
    quiz
  }
})
