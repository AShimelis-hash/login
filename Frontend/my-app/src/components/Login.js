import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState("Login")


  return (
    <div>
      <form>
        <div>
          <p>{currentState}</p>
        </div>
        {
          currentState === "Login" ? null : (
            <input type='text' placeholder='name' required/>
          )
        }
      </form>
    </div>
  )

}

export default Login