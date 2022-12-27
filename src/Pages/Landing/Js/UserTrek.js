import React from 'react'
import Treks from './Treks'
import UserContext from '../../../Context/UserContext'

const UserTrek = () => {
  return (
    <UserContext>
        <Treks/>
    </UserContext>
  )
}

export default UserTrek