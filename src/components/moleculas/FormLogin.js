import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import useInput from '../../hooks/useInput';

function FormLogin({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const handleLogin = (event) => {
    event.preventDefault();
    login(({ email, password }));
  };

  return (
    <form className="p-8 w-full sm:w-1/2 mt-20 mx-auto" onSubmit={handleLogin}>
      <div>
        <h2 className="text-3xl "><span className="text-slate-600">Login Page</span></h2>
        <div className="w-full mt-4">
          <input
            className="w-full bg-white text-base appearance-none border-slate-100 py-2 px-4 h-12 text-gray-700 leading-tight rounded-xl focus:outline-none border-[1px] focus:bg-white focus:border-pink-400"
            type="text"
            value={email}
            onChange={onEmailChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="w-full mt-4">
          <input
            className="w-full bg-white text-base  appearance-none border-slate-100 py-2 px-4 h-12 text-gray-700 leading-tight rounded-xl border-[1px] focus:outline-none focus:bg-white focus:border-pink-400"
            type="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="Password"
            required
          />
        </div>
        <div className="w-full mt-4">
          <Button
            type="submit"
            className="hover:from-pink-300 text-base justify-center hover:to-yellow-100 bg-gradient-to-r bg-white w-full h-10 rounded-md border-[1px] border-pink-400 hover:border-none text-pink-400 hover:text-white"
          >
            Sign in
          </Button>
        </div>
        <div className="w-full mt-4">
          <p className="text-slate-600 text-base">
            Dont have an account yet ?
            {' '}
            <Link to="/register" className="underline">Create your account</Link>
          </p>
        </div>
      </div>
    </form>
  );
}

FormLogin.propTypes = {
  login: PropTypes.func.isRequired,
};

export default FormLogin;
