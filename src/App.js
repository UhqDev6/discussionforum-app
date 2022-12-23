import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/atoms/Loading';
import Header from './components/moleculas/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { asyncUnSetAuthUser } from './states/authUser/action';
import { asyncPreloadProcess } from './states/isPreload/action';

function App() {
  const { authUser = null, isPreload = false } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnSetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element="" />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <div>
      <Loading />
      <div className="app-container">
        <header>
          <Header />
        </header>
        <main>
          <Route path="/" element={<HomePage />} />
          <Route path="/forums/:id" element="" />
        </main>
      </div>
    </div>
  );
}

export default App;
