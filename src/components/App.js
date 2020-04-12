// ./src/components/App.js
import React from 'react';

import ResetStyle from './styled/Reset';
import GlobalStyle from './styled/Global';
import LoginPanel from './LoginPanel';

const App = () => (
    <>
        <ResetStyle />
        <GlobalStyle />
        <LoginPanel />
    </>
);

export default App;