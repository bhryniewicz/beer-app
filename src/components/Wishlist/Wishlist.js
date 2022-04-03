import React, { useContext, useEffect, useState } from 'react';
import { WishlistContext } from 'WishlistContext';
import {
  Wrapper,
  GridWrapper,
  ItemWrapper,
  WidthWrapper,
  Title,
  ItemWrapperDelete,
  ItemsInfo,
  AbsoluteWrapper
} from './Wishlist.styles';
import { Link } from 'react-router-dom';
import { BeerItem } from 'components/BeerItem/BeerItem';
import { AiFillDelete } from 'react-icons/ai';

export const Wishlist = () => {
  const { wishlistItems, handleDeleteItem } = useContext(WishlistContext);

  const styles = {
    color: '#FFC312',
    fontSize: '24px'
  };

  return (
    <Wrapper>
      <WidthWrapper>
        {wishlistItems.length ? (
          <Title>Your wishlist (total items: {wishlistItems.length})</Title>
        ) : null}
        <GridWrapper>
          {wishlistItems.length ? (
            wishlistItems.map(({ id, name, image_url, abv, ph }, idx) => {
              return (
                <AbsoluteWrapper id={id}>
                  <ItemWrapper>
                    <Link to={`/beers:${id}`} key={id}>
                      <BeerItem
                        id={id}
                        name={name}
                        image_url={image_url}
                        abv={abv}
                        key={idx}
                        ph={ph}
                      />
                    </Link>
                  </ItemWrapper>
                  {
                    <ItemWrapperDelete onClick={() => handleDeleteItem(id)}>
                      <AiFillDelete style={styles} />
                    </ItemWrapperDelete>
                  }
                </AbsoluteWrapper>
              );
            })
          ) : (
            <ItemsInfo>
              No items added yet <br />
              If you want to add something go <Link to="/beers">here</Link>
            </ItemsInfo>
          )}
        </GridWrapper>
      </WidthWrapper>
    </Wrapper>
  );
};
