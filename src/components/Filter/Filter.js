import React, { useEffect } from 'react';
import { Input as SearchInput, Label, Wrapper } from 'components/Filter/Filter.styles';

export const Filter = ({ setIdx, idx, setFindAlcohol, alcohols }, ...props) => {
  const changeId = e => {
    const parsedSearchNumber = parseInt(e.target.value);
    setIdx(parsedSearchNumber);
    if (e.target.value === '') {
      setIdx(0);
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

  return (
    <Wrapper>
      <Label htmlFor="searchIdx">What are you looking for?</Label>
      <SearchInput type="text" name="searchIdx" onChange={changeId} isSearch placeholder="Find your favourite beer 🍺" />
    </Wrapper>
  );
};
