import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler = () => {
    authservice
      .logout()
      .then(() => {
        dispatch(logout())
      })
      .catch((err) => console.log(err))
    navigate('/')
  }
  return (
    <button
      onClick={logoutHandler}
      className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    >
      Logout
    </button>
  )
}

export default LogoutBtn
