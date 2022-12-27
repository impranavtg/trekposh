import React from 'react'
import LoginPage from './LoginPage'
import LoginContext from '../../../Context/LoginContext'
const Admin = () => {
  return (
    <LoginContext>
        <LoginPage/>
    </LoginContext>
  )
}

export default Admin