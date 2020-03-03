import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { results } from '~config/results'
import { resetQuiz } from '~store/slices/quiz'

function getResult(points) {
  switch (true) {
    case points <= 10:
      return results[0]
    case points > 10 && points <= 15:
      return results[1]
    case points > 15 && points <= 20:
      return results[2]
    case points > 20 && points <= 25:
      return results[3]
    default:
      return results[0]
  }
}

const Result = () => {
  const { completed, points } = useSelector(({ quiz }) => {
    return {
      points: quiz.points,
      completed: quiz.completed
    }
  })

  const dispatch = useDispatch()

  const handleResetQuiz = useCallback(() => {
    dispatch(resetQuiz())
  }, [dispatch])

  const result = getResult(points)

  return (
    <>
      {completed ? (
        <>
          <h2>
            Result:
            <span className="text-success">{` ${points} points!`}</span>
          </h2>
          <h3>{`You are ${result.title}`}</h3>
          <p>{result.message}</p>
          <Link className="btn btn-success" to="/quiz" onClick={handleResetQuiz}>
            Take a Quiz again
          </Link>
        </>
      ) : (
        <>
          <h2>You have not completed the quiz yet!</h2>
          <Link className="btn btn-success" to="/quiz">
            Take a Quiz
          </Link>
        </>
      )}
    </>
  )
}

export default Result
