import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

const isMobile = () => {
  try {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down('sm'));
  } catch (e) {
    return false;
  }
};

export default isMobile;
