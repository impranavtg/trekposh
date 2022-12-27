import React from 'react'
import AdminTreks from './AdminTreks'
import AdminContext from '../../../Context/AdminContext'

const ADT = () => {
  return (
    <AdminContext>
        <AdminTreks/>
    </AdminContext>
  )
}

export default ADT