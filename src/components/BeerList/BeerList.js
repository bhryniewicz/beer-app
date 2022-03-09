import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BeerItem } from 'components/BeerItem/BeerItem';
import { Wrapper, FlexWrapper, WidthWrapper } from './BeerList.styles';
import { Filter } from 'components/Filter/Filter';

export const BeerList = () => {
  const [alcohols, setAlcohols] = useState([]);
  const [findAlcohol, setFindAlcohol] = useState([]);
  const [idx, setIdx] = useState(0);
  const API_ADDRESS = 'https://api.punkapi.com/v2';

  useEffect(() => {
    axios
      .get(`${API_ADDRESS}/beers?per_page=50`)
      .then(({ data }) => {
        console.log(data);
        setAlcohols(data);
        setFindAlcohol(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <FlexWrapper>
      <WidthWrapper>
        <Filter setIdx={setIdx} idx={idx} alcohols={alcohols} setFindAlcohol={setFindAlcohol} />
        <Wrapper>
          {findAlcohol.map(({ id, name, image_url, abv, ph }, idx) => {
            // eslint-disable-next-line prettier/prettier
            return <BeerItem id={id} name={name} image_url={image_url} abv={abv} key={idx} ph={ph}/>;
          })}
        </Wrapper>
      </WidthWrapper>
    </FlexWrapper>
  );
};
