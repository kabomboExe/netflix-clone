import React, { useState } from 'react';

const MyListContext = React.createContext([[], () => {}]);

const MyListProvider = (props) => {
  const [state, setState] = useState([]);
  return (
    <MyListContext.Provider value={[state, setState]}>
      {props.children}
    </MyListContext.Provider>
  );
}

export { MyListContext, MyListProvider };