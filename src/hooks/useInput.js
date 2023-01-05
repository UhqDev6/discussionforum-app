import { useState } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  const handleValueChange = ({ target }) => {
    setValue(target.value);
  };

  const handleValueReset = () => {
    setValue('');
  };

  return [value, handleValueChange, setValue, handleValueReset];
}

export default useInput;
