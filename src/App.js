import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from 'components/views/Main';
import { BeerList } from 'components/BeerList/BeerList';
import { Header } from 'components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/beers" element={<BeerList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
