import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>Home
        <Link to="/todo"> Todo Page </Link>

    </div>
  )
}

export default Home