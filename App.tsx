import React from 'react';
// import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './src/navigation';
import config, {store} from './src/redux/store';

function App() {
  // const isDarkMode = useColorScheme() === 'dark';
  const {persistor} = config();
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
