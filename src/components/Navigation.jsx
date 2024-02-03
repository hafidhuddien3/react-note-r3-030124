import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlusCircle, FaSignOutAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import ThemeContext from '../contexts/ThemeContext';
import LocaleContext from '../contexts/LocaleContext';
import { FaMoon, FaSun } from 'react-icons/fa';
 
function Navigation({ logout, name }) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/"><FaHome className='icon' size={50}/></Link></li>
        <li><Link to="/new"><FaPlusCircle className='icon' size={50}/></Link></li>
        <li><button onClick={logout} className="log-out" ><p>{name}</p>&nbsp;<FaSignOutAlt size={50}/></button></li>
        <li><button onClick={toggleTheme}>{theme === 'light' ? <FaMoon size={30}/> : <FaSun size={30}/>}</button></li>
        <button onClick={toggleLocale}>{locale === 'id' ? 'To English' : 'Ke Indonesia'}</button>
      </ul>
      </nav>
  );
}
 
Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;