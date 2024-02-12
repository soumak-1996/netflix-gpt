
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import appStore from './utils/appStore';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';

function App() {
  let persistor = persistStore(appStore);
  return (
    <Provider store={appStore}>
      <PersistGate persistor={persistor}>
      <Body/>
      </PersistGate>
    </Provider>
  );
}

export default App;
