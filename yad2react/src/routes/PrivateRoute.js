import React, { useEffect } from 'react'
import { navigate } from 'hookrouter'
import auth from '../communication/auth'

export default ({ Component }) => {  
  const loginPageURI = '/login'
  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await auth()
      if (!isAuth) navigate(loginPageURI)
    }
    checkAuth()
  }, [])
  return <Component />
}
