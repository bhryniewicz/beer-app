import { lighten } from 'polished';
const sizes = {
  mobileS: '321px',
  mobileM: '376px',
  mobileL: '416px',
  tablet: '769px'
};
export const theme = {
  colors: {
    //ff9c6f
    sunflower: '#FFC312',
    greene: '#03544B',
    white: '#fff',
    black: '#000'
  },
  fontSizes: {
    gigaSmall: '12px',
    small: '14px',
    low: '16px',
    medium: '20px',
    big: '24px'
  },
  fontFamilies: {
    titleFont: `'Sansita Swashed', cursive`,
    normalFont: `'Montserrat', sans-serif`
  },
  lightenColors: {
    green: lighten(0.075, '#03544B')
  },

  breakpoints: {
    mobileS: `screen and (max-width:${sizes.mobileS})`,
    mobileM: `screen and (max-width:${sizes.mobileM})`,
    mobileL: `screen and (max-width:${sizes.mobileL})`,
    tablet: `screen and (max-width:${sizes.tablet})`
  }
};
