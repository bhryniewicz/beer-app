import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Wrapper,
  WidthWrapper,
  BeerImage,
  BeerInfo,
  BeerKey,
  BeerValue,
  BeerWrap,
  BeerWrapDescription,
  BeerTitle,
  BeerDescription,
  BeerFoodList
} from './Beer.styles';

export const Beer = () => {
  const params = useParams();
  const RawBeerId = params.id;
  const BeerId = RawBeerId.replace(':', '');
  const [beer, setBeer] = useState({});

  const fetchBeer = () => {
    axios
      .get(`${process.env.REACT_APP_BEER_API_LINK}/beers/${BeerId}`)
      .then(response => {
        console.log(response.data[0]);
        setBeer(response.data[0]);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchBeer();
  }, []);

  const {
    abv,
    ibu,
    attenuation_level,
    name,
    ph,
    id,
    image_url,
    description,
    brewers_tips,
    srm,
    first_brewed,
    tagline
  } = beer;

  const beerInfoLeft = {
    name,
    abv,
    id,
    'First brewed': first_brewed
  };

  const beerInfoRight = {
    ph,
    ibu,
    'Attentuation level': attenuation_level,
    srm
  };

  const beerInfoLeftEntries = Object.entries(beerInfoLeft);
  const beerInfoRightEntries = Object.entries(beerInfoRight);

  const foodPairing = beer?.food_pairing;

  console.log(foodPairing);

  return (
    <Wrapper>
      <WidthWrapper>
        <BeerInfo>
          {beerInfoLeftEntries.map(Info => {
            const [key, value] = Info;

            return (
              <div>
                {key === 'name' ? (
                  <BeerKey isName>
                    {key}: <BeerValue isName>{value}</BeerValue>
                  </BeerKey>
                ) : (
                  <BeerWrap>
                    <BeerKey>
                      {key}: <BeerValue>{value}</BeerValue>
                    </BeerKey>
                  </BeerWrap>
                )}
              </div>
            );
          })}
        </BeerInfo>
        <BeerImage src={image_url} alt={tagline} />
        <BeerInfo isRight>
          {beerInfoRightEntries.map(Info => {
            const [key, value] = Info;

            return (
              <div>
                {key === 'Brewers tips' ? (
                  <BeerKey>
                    {key}: <BeerValue isTip>{value}</BeerValue>
                  </BeerKey>
                ) : (
                  <BeerWrap>
                    <BeerKey>
                      {key}: <BeerValue>{value}</BeerValue>
                    </BeerKey>
                  </BeerWrap>
                )}
              </div>
            );
          })}
        </BeerInfo>
        {/* {tagline} */}
      </WidthWrapper>
      <BeerWrapDescription>
        <BeerTitle>What is this actually?</BeerTitle>
        <BeerDescription>{description}</BeerDescription>
        <BeerTitle>A brewer Tip</BeerTitle>
        <BeerDescription>{brewers_tips}</BeerDescription>
        <BeerTitle>Eat what you like!</BeerTitle>
        <BeerDescription>
          You can eat with whatever you want, but here there are our recommendations:
        </BeerDescription>
        <BeerFoodList>
          {foodPairing?.map(pair => {
            return <li>{pair}</li>;
          })}
        </BeerFoodList>
      </BeerWrapDescription>
    </Wrapper>
  );
};
