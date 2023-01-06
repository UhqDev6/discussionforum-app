import React from 'react';
import { useDispatch } from 'react-redux';
import WrapperView from '../components/atoms/WrapperView';
import FormLogin from '../components/moleculas/FormLogin';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <WrapperView>
      <div className="flex">
        <FormLogin login={onLogin} />
      </div>
    </WrapperView>
  );
}

export default LoginPage;
