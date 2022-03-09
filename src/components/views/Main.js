import React from 'react';
import { LandingPageWrapper, Wrapper } from './Mains.styles';
import { Section } from 'components/Section/Section';
import { Beers, Chmiel3, Types2 } from 'images';

export const Main = () => {
  const data = [
    {
      title: 'About us',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum voluptatem vitae aut est voluptatibus placeat animi, at alias dolor commodi eius voluptatum quos nisi iusto vero reprehenderit eos suscipit tempore repudiandae pariatur deserunt. Modi id sapiente ipsa quae illum nihil?',
      image: `${Beers}`,
      figcaption: 'Our beers are tasty and known all around the world'
    },
    {
      title: 'How we brew',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum voluptatem vitae aut est voluptatibus placeat animi, at alias dolor commodi eius voluptatum quos nisi iusto vero reprehenderit eos suscipit tempore repudiandae pariatur deserunt. Modi id sapiente ipsa quae illum nihil?',
      image: `${Chmiel3}`,
      figcaption: 'Our beers are tasty and known all around the world'
    },
    {
      title: 'your choice',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum voluptatem vitae aut est voluptatibus placeat animi, at alias dolor commodi eius voluptatum quos nisi iusto vero reprehenderit eos suscipit tempore repudiandae pariatur deserunt. Modi id sapiente ipsa quae illum nihil?',
      image: `${Types2}`
    }
  ];

  const backgrounds = {
    sunflower: '#FFC312'
  };

  const [isReversed, isOneBackground] = Array(2).fill(true);

  return (
    <Wrapper>
      <LandingPageWrapper>
        <div>
          <h1>
            The Beer,
            <br /> that you are waiting for!
          </h1>
          <p>Try our new 'Beach Beer'</p>
          <button>Pick your beer</button>
        </div>
      </LandingPageWrapper>
      <Section data={data[0]} />
      <Section isColor={backgrounds.sunflower} data={data[1]} isReversed={isReversed} />
      <Section data={data[2]} isOneBackground={isOneBackground} />
    </Wrapper>
  );
};
