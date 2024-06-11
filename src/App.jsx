import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import './App.css'
import { login, logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components/index'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])
  return loading ? (
    <h1 className='text-slate-700'>loading...</h1>
  ) : (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default App
