import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import useInput from '../../hooks/useInput';

function FormThread(props) {
  const {
    onAddThread,
  } = props;

  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [isLoading, setIsloading] = useState(false);

  const handleAddThread = async (event) => {
    setIsloading(false);
    event.preventDefault();
    await onAddThread({ title, category, body });
    setIsloading(true);
  };

  return (
    <div className="container gap-5 items-center p-4 w-[85%] mx-auto sm:-mt-10 -mt-0 relative">
      <form className="p-0 w-full sm:w-full -mt-4 sm:mt-6 mx-auto" onSubmit={handleAddThread}>
        <div>
          <h2 className="text-lg flex justify-center"><span className="text-pink-400">Create you`re talk</span></h2>
          <div className="w-full mt-4">
            <input
              className="w-full bg-white appearance-none border-slate-100 py-2 px-4 h-12 text-gray-700 text-sm leading-tight rounded-xl focus:outline-none border-[1px] focus:bg-white focus:border-pink-400"
              type="text"
              value={title}
              onChange={onTitleChange}
              placeholder="Title"
              required
            />
          </div>
          <div className="w-full mt-4">
            <input
              className="w-full bg-white appearance-none border-slate-100 py-2 px-4 h-12 text-gray-700 text-sm leading-tight rounded-xl focus:outline-none border-[1px] focus:bg-white focus:border-pink-400"
              type="text"
              value={category}
              onChange={onCategoryChange}
              placeholder="Category"
              required
            />
          </div>
          <div className="w-full mt-4">
            <textarea
              className="w-full bg-white transition  py-1.3 ease-in-out appearance-none border-slate-100 py-2 px-4 h-32 text-gray-700 text-sm leading-tight rounded-xl border-[1px] focus:outline-none focus:bg-white focus:border-pink-400"
              type="text"
              value={body}
              onChange={onBodyChange}
              placeholder="What do you think... ?"
              required
            />
          </div>
          <div className="w-full mt-4">
            <Button
              type="submit"
              loading={isLoading}
              className="from-pink-300 justify-center to-yellow-100 bg-gradient-to-r bg-white w-full h-10 rounded-2xl border-[1px] hover:border-none text-black hover:text-white"
            >
              Create
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

FormThread.propTypes = {
  onAddThread: PropTypes.func.isRequired,
};

export default FormThread;
