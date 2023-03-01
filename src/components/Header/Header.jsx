import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import PrivateNavigation from '../Navigation/PrivateNavigation';
import PublicNavigation from '../Navigation/PublicNavigation';


export default function Header() {
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between
p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
  <h5 className="my-0 mr-md-auto font-weight-normal">Sign In App</h5>
  <nav className="my-2 my-md-0 me-md-3">
    <Link className="p-2 text-dark" to={"/"}>Home</Link>
    {isAuthenticated ? <PrivateNavigation /> : <PublicNavigation />}
   </nav>
  </div>
  )
}
