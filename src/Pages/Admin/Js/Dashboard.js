import React from 'react'
import Navbar from './Navbar'
import AddTrek from './AddTrek'
import AdminContext from '../../../Context/AdminContext'
const Dashboard = () => {
  return (
    <AdminContext>
        <Navbar/>
        <AddTrek/>
    </AdminContext>
  )
}

export default Dashboard