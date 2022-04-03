import react, { useState, useEffect } from 'react';
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
import { Wishlist } from 'components/Wishlist/Wishlist';
import { theme } from './theme';
import { WishlistContext } from './WishlistContext';

function App() {
  const [wishlistItems, setWishlistItems] =
    useState(JSON.parse(localStorage.getItem('names of items'))) || '';
  const [alert, setAlert] = useState('');
  let arrOfBooleans = [];

  useEffect(() => {
    localStorage.setItem('names of items', JSON.stringify(wishlistItems));
  });

  const containsObject = (obj, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (JSON.stringify(obj) === JSON.stringify(arr[i])) {
        arrOfBooleans.push(true);
      } else {
        arrOfBooleans.push(false);
      }
    }
  };

  const handleAddToWishlist = beer => {
    containsObject(beer, wishlistItems);

    if (arrOfBooleans.includes(true)) {
      setAlert(`It's already on your wishlist`);
    } else {
      setAlert('Item has been added');
      setWishlistItems(prevState => [...prevState, beer]);
    }

    arrOfBooleans = [];
  };

  //   useEffect(() => {
  //     console.log('zmiana', wishlistItems);
  //   }, [wishlistItems]);

  const handleDeleteItem = id => {
    const filtered = wishlistItems.filter(item => item.id !== id);
    setWishlistItems(filtered);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, handleAddToWishlist, handleDeleteItem, alert }}
    >
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
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
            <Footer />
          </Wrapper>
        </BrowserRouter>
      </ThemeProvider>
    </WishlistContext.Provider>
  );
}

export default App;
