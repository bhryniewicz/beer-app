import React, { useContext } from 'react';
import { Wrapper, Logo, Navigation, WidthWrapper, Counter } from './Header.styles';
import { NavLink } from 'react-router-dom';
import { MobileNav } from 'components/MobileNav/MobileNav';
import { Logo as HeaderLogo } from 'images';
import { WishlistContext } from 'WishlistContext';
import { AiOutlinePicLeft } from 'react-icons/ai';

export const Header = props => {
  const ifActive = ({ isActive }) => (isActive ? 'active' : '');
  const ifActiveWish = ({ isActive }) => (isActive ? 'active wish' : '');
  const { wishlistItems } = useContext(WishlistContext);

  const style = {
    fontSize: '26px'
  };

  return (
    <Wrapper>
      <WidthWrapper>
        <NavLink to="/">
          <Logo src={HeaderLogo}></Logo>
        </NavLink>
        <Navigation>
          <ul>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              Home
            </NavLink>
            <NavLink to="/beers" className={ifActive}>
              Products
            </NavLink>
            <NavLink to="/contact" className={ifActive}>
              Contact
            </NavLink>
            <NavLink to="/blog" className={ifActive}>
              Blog
            </NavLink>
            <NavLink to="/wishlist" className={ifActiveWish}>
              <AiOutlinePicLeft style={style} />{' '}
              <Counter>{wishlistItems.length > 9 ? '9+' : wishlistItems.length}</Counter>
            </NavLink>
          </ul>
        </Navigation>
        <MobileNav />
      </WidthWrapper>
    </Wrapper>
  );
};
