import React from 'react';
import Navbar from '../Navbar/Navbar';

export default function Header({ user, setUser, onLogout }) {

  return (
    <div className="header-background">
      <h1 className="header">Chefish</h1>
      <Navbar user={user} setUser={setUser} onLogout={onLogout}/>
    </div>
  )
}
