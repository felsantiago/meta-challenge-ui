/* eslint-disable consistent-return */
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const getNameTheme = (value) => {
  if (!value) {
    return;
  }
  const listTheme = publicRuntimeConfig.NEXT_PUBLIC_ACCEPTED_THEME.split(',');
  return listTheme.find((theme) => (value.toLowerCase() === theme.toLowerCase()));
};

export default getNameTheme;
