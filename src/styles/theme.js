import theme from 'styled-theming';

// Colors

export const primary = theme('mode', {
  fire: '#FF0101',
  water: '#0099E0',
  dragon: '#E08B02',
});

export const primaryLight = theme('mode', {
  fire: '#FF4D4D',
  water: '#19B6FF',
  dragon: '#FFA81C',
});

export const primaryDark = theme('mode', {
  fire: '#800000',
  water: '#006594',
  dragon: '#945B01',
});

export const secondary = theme('mode', {
  fire: '#FFFC19',
  water: '#E07A00',
  dragon: '#0277E0',
});

export const secondaryLight = theme('mode', {
  fire: '#FFFC66',
  water: '#FF9819',
  dragon: '#1C95FF',
});

export const secondaryDark = theme('mode', {
  fire: '#807E0D',
  water: '#945100',
  dragon: '#014F94',
});

export const black = theme('mode', {
  fire: '#272A2B',
  water: '#272A2B',
  dragon: '#272A2B',
});

export const white = theme('mode', {
  fire: '#fff',
  water: '#fff',
  dragon: '#fff',
});

export const gray = theme('mode', {
  fire: '#6C7378',
  water: '#6C7378',
  dragon: '#6C7378',
});

export const grayLight = theme('mode', {
  fire: '#D1D1D1',
  water: '#D1D1D1',
  dragon: '#D1D1D1',
});

export const grayDark = theme('mode', {
  fire: '#555A5E',
  water: '#555A5E',
  dragon: '#555A5E',
});

export const error = theme('mode', {
  fire: '#C90241',
  water: '#E01631',
  dragon: '#E00DBE',
});

export const success = theme('mode', {
  fire: '#3C7800',
  water: '#0BE0B0',
  dragon: '#10948C',
});

export const backgroundColor = theme('mode', {
  fire: primary,
  water: primary,
  dragon: primary,
});

export const textColor = theme('mode', {
  fire: white,
  water: white,
  dragon: white,
});

export const backgroundColorSecondary = theme('mode', {
  fire: secondary,
  water: secondary,
  dragon: secondary,
});

export const textColorSecondary = theme('mode', {
  fire: black,
  water: black,
  dragon: white,
});

export const backgroundFooter = theme('mode', {
  fire: primary,
  water: primary,
  dragon: primary,
});

export const textColorFooter = theme('mode', {
  fire: white,
  water: white,
  dragon: white,
});

// Button

export const textButtonColor = theme('mode', {
  fire: white,
  water: white,
  dragon: white,
});

export const backgroundButtonColor = theme('mode', {
  fire: success,
  water: success,
  dragon: success,
});

export const textButtonColorDisabled = theme('mode', {
  fire: black,
  water: black,
  dragon: black,
});

export const backgroundButtonColorDisabled = theme('mode', {
  fire: gray,
  water: gray,
  dragon: gray,
});
