
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import Pages404 from '../pages/Pages404';
import ArchivedPage from '../pages/ArchivedPage';
import { getUserLogged, putAccessToken } from '../utils/network-data';
import ThemeContext from '../contexts/ThemeContext';
import LocaleContext from '../contexts/LocaleContext';
 
 
function NoteApp() {

  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);

  const [locale, setLocale] = React.useState(localStorage.getItem('locale') || 'en');

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';
      
      localStorage.setItem('locale', newLocale);

      return prevLocale === 'id' ? 'en' : 'id';
    });
  };

  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      
      localStorage.setItem('theme', newTheme);
      
      return newTheme;
    });
  };

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale
    };
  }, [locale]);

  React.useEffect(() => {
    
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  async function  onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  function onLogout() {
    setAuthedUser(null);
    putAccessToken('');
  }

  React.useEffect(() => {
    async function fetchGetUserLogged() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    }
 
    fetchGetUserLogged();
  }, []);

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <LocaleContext.Provider value={localeContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
      <div className='note-app'>
        <header className='note-app__header'>
          <h1>{locale === 'id' ? 'Aplikasi Catatan':'Notes App'}</h1>
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
      </ThemeContext.Provider></LocaleContext.Provider>
    )
  }

  return (
    <LocaleContext.Provider value={localeContextValue}>
    <ThemeContext.Provider value={themeContextValue}>
    <div className="note-app">
      <header className='note-app__header'>
        <h1>{locale === 'id' ? 'Aplikasi Catatan':'Notes App'}</h1>
        <Navigation logout={onLogout} name={authedUser.name} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archived" element={<ArchivedPage />} />
          <Route path="/new" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/*" element={< Pages404 />} />
        </Routes>
      </main>
    </div>
    </ThemeContext.Provider></LocaleContext.Provider>
  );
}
 
export default NoteApp;
