import Landing from './src/components/Landing';
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import Register from './src/components/Register';
import { Provider } from 'react-redux';
import store from './src/redux';

export default function App() {
  return (
    <Provider store={store}>
    <NativeRouter>
      <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/register" element={<Register />} />
      </Routes>
    </NativeRouter>
    </Provider>
  );
}

