import { Wrapper } from 'App.styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from 'components/views/Main';
import { BeerList } from 'components/BeerList/BeerList';
import { Header } from 'components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { Footer } from 'components/Footer/Footer';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/beers" element={<BeerList />} />
          </Routes>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
