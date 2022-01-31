import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from './store/index'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      <ToastContainer autoClose={4000} />
    </Provider>
  );
}

export default App;
