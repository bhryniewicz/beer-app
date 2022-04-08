import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BeerItem } from 'components/BeerItem/BeerItem';
import { Wrapper, FlexWrapper, WidthWrapper, Loading } from './BeerList.styles';
import { Filter } from 'components/Filter/Filter';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scroll } from 'components/Scroll/Scroll';
import { Bars } from 'react-loader-spinner';

export const BeerList = () => {
  const [alcohols, setAlcohols] = useState([]);
  const [loading, setLoading] = useState(true);
  const [findAlcohol, setFindAlcohol] = useState([]);
  const [idx, setIdx] = useState(0);
  const [searchName, setSearchName] = useState('');
  const [procentage, setProcentage] = useState('');
  const [error, setError] = useState('');

  const fetchBeers = async () => {
    await axios
      .get(`${process.env.REACT_APP_BEER_API_LINK}/beers?per_page=80`)
      .then(({ data }) => {
        setAlcohols(data);
        setFindAlcohol(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError('Cant fetch data');
      });
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <FlexWrapper>
      <Scroll />
      <WidthWrapper>
        <Filter
          setIdx={setIdx}
          idx={idx}
          searchName={searchName}
          setSearchName={setSearchName}
          alcohols={alcohols}
          setFindAlcohol={setFindAlcohol}
          procentage={procentage}
          setProcentage={setProcentage}
        />
        <Wrapper as={motion.div}>
          {error ? (
            error
          ) : loading ? (
            <Loading>
              Loading <Bars color="black" height={30} width={30} />
            </Loading>
          ) : (
            findAlcohol.map(({ id, name, image_url, abv, ph }, idx) => {
              //   // eslint-disable-next-line prettier/prettier
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
