import React, { useState } from 'react';

const FetchContext = React.createContext([{}, () => {}]);

const FetchProvider = (props) => {
  const [state, setState] = useState({});
  return (
    <FetchContext.Provider value={[state, setState]}>
      {props.children}
    </FetchContext.Provider>
  );
}

export { FetchContext, FetchProvider};