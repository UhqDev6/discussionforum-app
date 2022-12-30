import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/atoms/Loading';
import Spinner from './components/atoms/Spinner';
import Footer from './components/moleculas/Footer';
import Header from './components/moleculas/Header';
import Navbar from './components/moleculas/Navbar';
import Sidebar from './components/moleculas/Sidebar';
import {
  ADD_PAGE, DETAIL_PAGE, HOME_PAGE, LEADER_BOARDS_PAGE, REGISTER_PAGE,
} from './constants/path';
import AddThread from './pages/AddThread';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LeaderBoards from './pages/LeaderBoards';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
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
    return (
      <div className="h-screen grid">
        <Spinner />
      </div>
    );
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
            <Route path={REGISTER_PAGE} element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <div>
      <Loading />
      <header>
        <Header />
      </header>
      <Navbar authUser={authUser} signOut={onSignOut} />
      <div className="container mx-auto">
        <div className="flex flex-grow mt-12">
          <div className="basis-1/4">
            <Sidebar authUser={authUser} signOut={onSignOut} />
          </div>
          <div className="basis-full ">
            <main>
              <Routes>
                <Route path={HOME_PAGE} element={<HomePage />} />
                <Route path={DETAIL_PAGE} element={<DetailPage />} />
                <Route path={ADD_PAGE} element={<AddThread />} />
                <Route path={LEADER_BOARDS_PAGE} element={<LeaderBoards />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
