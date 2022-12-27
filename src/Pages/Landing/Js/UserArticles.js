import React from 'react'
import Articles from './Articles'
import UserContext from '../../../Context/UserContext'

const UserArticles = () => {
  return (
    <UserContext>
        <Articles/>
    </UserContext>
  )
}

export default UserArticles