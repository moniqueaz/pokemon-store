import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  fire: 'red',
  water: 'blue',
  dragon: 'green',
});

export const textColor = theme('mode', {
  fire: '#fff',
  water: '#000',
  dragon: '#fff',
});

export const buttonBackgroundColor = theme('mode', {
  light: '#222',
  dark: '#eee',
});

export const buttonTextColor = theme('mode', {
  light: '#eee',
  dark: '#222',
});
