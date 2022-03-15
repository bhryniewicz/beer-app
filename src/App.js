import { Wrapper } from 'App.styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from 'components/views/Main';
import { BeerList } from 'components/BeerList/BeerList';
import { Contact } from 'components/Contact/Contact';
import { Header } from 'components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { Footer } from 'components/Footer/Footer';
import { Blog } from 'components/Blog/Blog';
import { BlogPost } from 'components/BlogPost/BlogPost';
import { Beer } from 'components/Beer/Beer';
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
            <Route path="/beers:id" element={<Beer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog:id" element={<BlogPost />} />
          </Routes>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
