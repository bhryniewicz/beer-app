import { Wrapper } from 'App.styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from 'components/views/Main';
import { BeerList } from 'components/BeerList/BeerList';
import { Header } from 'components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { Footer } from 'components/Footer/Footer';

function App() {
  const theme = {
    colors: {
      sunflower: '#FFC312'
    },
    fontSizes: {
      low: '16px',
      medium: '20px',
      big: '24px'
    },
    fontFamilies: {
      titleFont: `'Sansita Swashed', cursive`,
      normalFont: `'Montserrat', sans-serif`
    }
  };
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
