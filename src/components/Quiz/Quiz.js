import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { updateResult, finishQuiz } from '~store/slices/quiz'
import { questions } from '~config/questions'
import Choices from './Choices'
import quizStyles from './quiz.module.sass'

const animation = {
  from: {
    opacity: 0,
    transform: `translate(50%, -50%)`
  },
  enter: {
    opacity: 1,
    transform: `translate(-50%, -50%)`
  },
  leave: {
    opacity: 0,
    transform: `translate(-100%, -50%)`
  }
}

const Quiz = () => {
  const dispatch = useDispatch()

  const { currentQuestion } = useSelector(({ quiz }) => {
    return {
      currentQuestion: quiz.currentQuestion
    }
  })

  const history = useHistory()

  const handleChoice = useCallback(
    points => {
      dispatch(updateResult(points))

      if (questions.length - 1 === currentQuestion) {
        dispatch(finishQuiz())
        history.push(`/result`)
      }
    },
    [currentQuestion, dispatch, history]
  )

  const currentQuiz = questions[currentQuestion]

  const transitions = useTransition(currentQuiz, currentQuiz.title, animation)

  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} className={quizStyles.card} style={props}>
      <h2>{item.title}</h2>
      <Choices foods={item.foods} handleChoice={handleChoice} />
    </animated.div>
  ))
}

export default Quiz
