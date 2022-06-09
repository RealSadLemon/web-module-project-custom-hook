import { useState } from 'react';

const useDarkMode = (initialValue) =>{
    const [value, setValue] = useState(initialValue);
    return ([value, setValue]);
};

export default useDarkMode;