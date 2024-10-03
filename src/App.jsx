import '@fontsource/anton-sc';
import '@fontsource-variable/archivo';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AddNew from './Pages/AddNew/AddNew';
import GlobalContextProvider from './context/GlobalContext';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-new' element={<AddNew />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
