import React, { useEffect } from 'react';
import {
  Input as SearchInput,
  Label,
  Wrapper,
  SearchWrapper
} from 'components/Filter/Filter.styles';
import axios from 'axios';

export const Filter = (
  { setIdx, idx, setFindAlcohol, alcohols, searchName, setSearchName, procentage, setProcentage },
  ...props
) => {
  const changeId = e => {
    const parsedSearchNumber = parseInt(e.target.value);
    setIdx(parsedSearchNumber);
    if (e.target.value === '') {
      setIdx(0);
    }
  };

  const changeName = e => {
    console.log(e.target.value);
    setSearchName(e.target.value);
    if (e.target.value === '') {
      setSearchName('');
    }
  };

  const changeProcentage = e => {
    let procentage = parseFloat(e.target.value);

    console.log(procentage);
    setProcentage(procentage);
  };

  useEffect(() => {
    if (idx === 0) {
      setFindAlcohol(alcohols);
      return;
    }
    const filtered = alcohols.filter(alco => alco.id === idx);
    console.log(filtered);
    setFindAlcohol(filtered);
  }, [idx]);

  useEffect(() => {
    if (searchName === '') {
      setFindAlcohol(alcohols);
    }
    const nameContains = alcohols.filter(({ name }) => name.toLowerCase().match(searchName));
    setFindAlcohol(nameContains);
  }, [searchName]);

  useEffect(() => {
    if (isNaN(procentage) || procentage === '') {
      setFindAlcohol(alcohols);
    } else {
      axios
        .get(`${process.env.REACT_APP_BEER_API_LINK}/beers?abv_gt=${procentage}`)
        .then(res => {
          console.log(res.data);
          setFindAlcohol(res.data);
        })
        .catch(err => console.log(err));
    }
  }, [procentage]);

  return (
    <Wrapper>
      <Label htmlFor="searchIdx">What are you looking for?</Label>
      <SearchWrapper>
        <SearchInput
          type="text"
          name="searchIdx"
          onChange={changeId}
          isSearch
          placeholder="Find your favourite beer 🍺"
        />
        <SearchInput
          type="text"
          name="searchName"
          onChange={changeName}
          isSearch
          placeholder="Find your beer by name"
        />
        <SearchInput
          type="text"
          name="changeProcentage"
          onChange={changeProcentage}
          isSearch
          placeholder="what procentage do you want"
        />
      </SearchWrapper>
    </Wrapper>
  );
};
