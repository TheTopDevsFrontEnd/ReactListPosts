import { useCallback, useState } from 'react';

export const useToggle = (bool = false) => {
  const [toggle, setToggle] = useState(bool);

  const onToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return [toggle, onToggle];
};
