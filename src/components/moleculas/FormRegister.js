import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import useInput from '../../hooks/useInput';

function FormRegister({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (event) => {
    setIsLoading(true);
    event.preventDefault();
    register({ name, email, password });
    setIsLoading(false);
  };

  return (
    <form className="p-8 w-full sm:w-1/2 mt-20 mx-auto" onSubmit={handleRegister}>
      <div>
        <h2 className="text-3xl"><span className="text-slate-600">Register Page</span></h2>
        <div className="w-full mt-4">
          <input
            className="w-full bg-white appearance-none border-slate-100 py-2 px-4 h-12 text-gray-700 leading-tight rounded-xl focus:outline-none border-[1px] focus:bg-white focus:border-pink-400"
            type="text"
            value={name}
            onChange={onNameChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="w-full mt-4">
          <input
            className="w-full bg-white appearance-none border-slate-100 py-2 px-4 h-12 text-gray-700 leading-tight rounded-xl focus:outline-none border-[1px] focus:bg-white focus:border-pink-400"
            type="text"
            value={email}
            onChange={onEmailChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="w-full mt-4">
          <input
            className="w-full bg-white appearance-none border-slate-100 py-2 px-4 h-12 text-gray-700 leading-tight rounded-xl border-[1px] focus:outline-none focus:bg-white focus:border-pink-400"
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
            loading={isLoading}
            className="hover:from-pink-300 justify-center hover:to-yellow-100 bg-gradient-to-r bg-white w-full h-10 rounded-md border-[1px] border-pink-400 hover:border-none text-pink-400 hover:text-white"
          >
            Register
          </Button>
        </div>
        <div className="w-full mt-4">
          <p className="text-slate-600">
            Do you have account ?
            {' '}
            <Link to="/" className="underline">Get hare</Link>
          </p>
        </div>
      </div>
    </form>
  );
}

FormRegister.propTypes = {
  register: PropTypes.func.isRequired,
};

export default FormRegister;
