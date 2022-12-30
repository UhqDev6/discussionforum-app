import React from 'react';
import { useDispatch } from 'react-redux';
import FormLogin from '../components/moleculas/FormLogin';
import Sidebar from '../components/moleculas/Sidebar';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <div className="flex">
      <FormLogin login={onLogin} />
    </div>
  );
}

export default LoginPage;
