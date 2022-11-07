import Landing from './src/components/Landing';
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import Register from './src/components/Register';
import { Provider } from 'react-redux';
import store from './src/redux';
import Test from './src/components/Test';

export default function App() {
  return (
    <Provider store={store}>
    <NativeRouter>
      <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/test" element={<Test />} />
      </Routes>
    </NativeRouter>
    </Provider>
  );
}

