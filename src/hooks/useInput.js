import { useState } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  const handleValueChange = ({ target }) => {
    setValue(target.value);
  };

  return [value, handleValueChange, setValue];
}

export default useInput;
