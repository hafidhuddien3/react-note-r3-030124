import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlusCircle } from 'react-icons/fa';
 
function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/"><FaHome className='icon' size={50}/></Link></li>
        <li><Link to="/new"><FaPlusCircle className='icon' size={50}/></Link></li>
      </ul>
    </nav>
  );
}
 
export default Navigation;