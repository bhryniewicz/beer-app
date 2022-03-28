import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BeerItem } from 'components/BeerItem/BeerItem';
import { Wrapper, FlexWrapper, WidthWrapper, Loading } from './BeerList.styles';
import { Filter } from 'components/Filter/Filter';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const BeerList = () => {
  const [alcohols, setAlcohols] = useState([]);
  const [loading, setLoading] = useState(true);
  const [findAlcohol, setFindAlcohol] = useState([]);
  const [idx, setIdx] = useState(0);
  const [searchName, setSearchName] = useState('');

  const fetchBeers = async () => {
    await axios
      .get(`${process.env.REACT_APP_BEER_API_LINK}/beers?per_page=80`)
      .then(({ data }) => {
        setAlcohols(data);
        setFindAlcohol(data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <FlexWrapper>
      <WidthWrapper>
        <Filter
          setIdx={setIdx}
          idx={idx}
          searchName={searchName}
          setSearchName={setSearchName}
          alcohols={alcohols}
          setFindAlcohol={setFindAlcohol}
        />
        <Wrapper as={motion.div}>
          {loading ? (
            <Loading>Loading...</Loading>
          ) : (
            findAlcohol.map(({ id, name, image_url, abv, ph }, idx) => {
              // eslint-disable-next-line prettier/prettier
              return (
                <Link to={`/beers:${id}`} key={id}>
                  <BeerItem id={id} name={name} image_url={image_url} abv={abv} key={idx} ph={ph} />
                </Link>
              );
            })
          )}
        </Wrapper>
      </WidthWrapper>
    </FlexWrapper>
  );
};
