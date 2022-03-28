import React from 'react';
import { LandingPageWrapper, Wrapper } from './Mains.styles';
import { Section } from 'components/Section/Section';
import { Beers, Chmiel3, Types2 } from 'images';
import { motion } from 'framer-motion';

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
          <motion.h1 animate={{ x: [100, 0], opacity: [0, 1] }} transition={{ duration: 1 }}>
            The Beer,
            <br /> that you are waiting for!
          </motion.h1>
          <motion.p
            animate={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            Try our new 'Beach Beer'
          </motion.p>
          <motion.button animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, delay: 0.75 }}>
            Pick your beer
          </motion.button>
        </div>
      </LandingPageWrapper>
      <Section data={data[0]} />
      <Section isColor={backgrounds.sunflower} data={data[1]} isReversed={isReversed} />
      <Section data={data[2]} isOneBackground={isOneBackground} />
    </Wrapper>
  );
};
