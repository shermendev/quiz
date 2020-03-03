import React from 'react'
import PropTypes from 'prop-types'

const Choices = ({ foods, handleChoice }) => {
  const choices = foods.map(({ name, points }) => (
    <button
      key={name}
      className="btn btn-info mr-2"
      type="button"
      onClick={() => {
        handleChoice(points)
      }}
    >
      {name}
    </button>
  ))

  return <>{choices}</>
}

Choices.propTypes = {
  handleChoice: PropTypes.func.isRequired,
  foods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired
    })
  ).isRequired
}

export default Choices
