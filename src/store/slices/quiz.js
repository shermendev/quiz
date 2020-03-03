import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  points: 0,
  completed: false,
  currentQuestion: 0
}

const quizSlice = createSlice({
  initialState,
  name: `quiz`,
  reducers: {
    updateResult(state, actions) {
      const { currentQuestion, points } = state
      const newPoints = actions.payload

      state.points = points + newPoints
      state.currentQuestion = currentQuestion + 1
    },
    finishQuiz(state) {
      state.completed = true
    },
    resetQuiz: () => initialState
  }
})

export const { updateResult, finishQuiz, resetQuiz } = quizSlice.actions

const { reducer } = quizSlice

export default reducer
