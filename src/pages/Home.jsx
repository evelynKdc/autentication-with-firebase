import React, { useState } from 'react'
import { Register } from './Register';

export const Home = () => {

    const [user, setUser] = useState(null);
  return (
    <div>Home
        {user ? "Bienvenido" : <Register/> }
    </div>
  )
}
