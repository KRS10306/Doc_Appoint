import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyProfile = () => {

  const {assets} = useContext(AppContext)


  return (
    <div>
      MyProfile
    </div>
  )
}

export default MyProfile