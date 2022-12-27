import React from 'react'
import AdminArticles from './AdminArticles'
import AdminContext from '../../../Context/AdminContext'

const ADA = () => {
  return (
    <AdminContext>
        <AdminArticles/>
    </AdminContext>
  )
}

export default ADA