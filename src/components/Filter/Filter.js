import React, { useEffect } from 'react';
import { Input as SearchInput, Label, Wrapper } from 'components/Filter/Filter.styles';

export const Filter = (
  { setIdx, idx, setFindAlcohol, alcohols, searchName, setSearchName },
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

  //   const alco = alcohols;

  //   console.log(
  //     alco.forEach(element => {
  //       console.log(element.name.toLowerCase());
  //     })
  //   );

  return (
    <Wrapper>
      <Label htmlFor="searchIdx">What are you looking for?</Label>
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
    </Wrapper>
  );
};
