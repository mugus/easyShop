import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import Header from './components/Header';
import Navigation from './navigators/Navigation';
import Toast from 'react-native-toast-message';
import ShopContextProvider from './context/ShopContext';
import { StripeProvider } from '@stripe/stripe-react-native';

//Redux
import store from './redux/store';
import { Provider } from 'react-redux';

LogBox.ignoreAllLogs(true);

const App = () => {
  return (
    <ShopContextProvider>
      <Provider store={store}>
        <StripeProvider
          publishableKey="517951544573875"
          merchantIdentifier="merchant.identifier"
        >
          <Header />
          <Navigation />
          <Toast ref={(ref) => Toast.setRef(ref)} />
          <StatusBar style='auto' />
          
        </StripeProvider>
      </Provider>
    </ShopContextProvider>
  );
};

export default App;
