import { useContext } from 'react';
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
  const context = useContext(WishlistContext);

  const styles = {
    color: '#FFC312',
    fontSize: '24px'
  };

  return (
    <Wrapper>
      <WidthWrapper>
        {context.wishlistItems?.length ? (
          <Title>
            Your wishlist (total items:{' '}
            {context.wishlistItems?.length ? context.wishlistItems?.length : '0'})
          </Title>
        ) : null}
        <GridWrapper>
          {context.wishlistItems?.length ? (
            context.wishlistItems.map(({ id, name, image_url, abv, ph }, idx) => {
              return (
                <AbsoluteWrapper id={id} key={idx}>
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
                    <ItemWrapperDelete onClick={() => context.handleDeleteItem(id)}>
                      <AiFillDelete style={styles} />
                    </ItemWrapperDelete>
                  }
                </AbsoluteWrapper>
              );
            })
          ) : (
            <ItemsInfo>
              No items added yet <br />
              If you want to add something go{' '}
              <Link style={{ color: '#03544B' }} to="/beers">
                here
              </Link>
            </ItemsInfo>
          )}
        </GridWrapper>
      </WidthWrapper>
    </Wrapper>
  );
};
