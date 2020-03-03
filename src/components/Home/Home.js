import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <>
    <h3>Tell Us Your Favorite Foods And We’ll Guess What Type Of Personality You Have</h3>
    <Link className="btn btn-success" to="/quiz">
      Take a Quiz!
    </Link>
  </>
)

export default Home
