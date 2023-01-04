import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormRegister from '../components/moleculas/FormRegister';
import { HOME_PAGE } from '../constants/path';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate(HOME_PAGE);
  };

  return (
    <div className="flex">
      <FormRegister register={onRegister} />
    </div>
  );
}

export default RegisterPage;
