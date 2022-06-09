import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) =>{
    const [value, setValue] = useLocalStorage(initialValue);
    return ([value, setValue]);
};

export default useDarkMode;