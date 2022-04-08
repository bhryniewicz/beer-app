import React from 'react';
import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper, HamburgerWrapper, MenuWrapper } from './MobileNav.styles';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { WishlistContext } from 'WishlistContext';

export const MobileNav = () => {
  const [flag, setFlag] = useState(false);

  const { wishlistItems } = useContext(WishlistContext);
  const changeVisibility = () => {
    setFlag(!flag);
  };

  const closeStyle = {
    color: '#03544B',
    position: 'absolute',
    top: '30px',
    right: '30px',
    fontSize: '35px'
  };

  const menuStyle = {
    color: '#FFC312',
    fontSize: '25px'
  };

  return (
    <MenuWrapper>
      {flag ? (
        <Wrapper>
          <AiOutlineClose onClick={changeVisibility} style={closeStyle} />
          <NavLink to="/" onClick={changeVisibility} className="nav-1">
            Home
          </NavLink>
          <NavLink to="/beers" onClick={changeVisibility} className="nav-2">
            Products
          </NavLink>
          <NavLink to="/contact" onClick={changeVisibility} className="nav-3">
            Contact
          </NavLink>
          <NavLink to="/blog" onClick={changeVisibility} className="nav-4">
            Blog
          </NavLink>
          <NavLink to="/wishlist" onClick={changeVisibility} className="nav-5">
            Wishlist ({wishlistItems?.length ? wishlistItems?.length : '0'})
          </NavLink>
        </Wrapper>
      ) : (
        <HamburgerWrapper>
          <AiOutlineMenu onClick={changeVisibility} style={menuStyle} />
        </HamburgerWrapper>
      )}
    </MenuWrapper>
  );
};
