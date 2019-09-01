import React from 'react';
import { Provider } from 'react-redux';
// import store from 'redux/store';
import store from './src/utils/redux/store';
import createRootNavigator from './src/utils/navigation/Routes';

const App = () => {
  const Layout = createRootNavigator;
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
