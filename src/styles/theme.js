import meta from './theme-default';

import getNameTheme from '../utils/getNameTheme';

const themes = {
  meta
};

export const getTheme = (name) => {
  const theme = getNameTheme(name) || 'meta';
  return themes[theme];
};

export default meta;
