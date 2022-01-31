import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from "./pages/Home";
import { SwapiProvider } from './context/context/swapi/SwapiContext'
function App() {
  return (
    <>
      <SwapiProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
        <ToastContainer autoClose={4000} />
      </SwapiProvider>
    </>
  );
}

export default App;

/*
import { Provider } from "react-redux";
import { store } from './store/index'
<Provider store={store}>
      </Provider>
*/