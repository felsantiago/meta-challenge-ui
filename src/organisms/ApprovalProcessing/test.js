import {
  render,
  screen,
  waitFor,
  cleanup
} from '@testing-library/react';
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';

import RewardCloud from '.';
import theme from '../../styles/theme-default';

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => <img alt='smartphone-minu-rewards-colors' />
}));

describe('Testing <RewardCloud />', () => {
  beforeEach(() => {
    render(
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <RewardCloud />
      </MuiThemeProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('Should render RewardCloud correctly', async () => {
    await waitFor(() => {
      expect(
        screen.getByRole('img', { name: /smartphone-minu-rewards-colors/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', {
          name: /seus clientes tem acesso a centenas de recompensas incríveis de grandes marcas do mercado\./i
        })
      ).toBeInTheDocument();
      expect(screen.getByRole('img', { name: /claro/i })).toBeInTheDocument();
      expect(
        screen.getByRole('img', { name: /nerdaocubo/i })
      ).toBeInTheDocument();
      expect(screen.getByRole('img', { name: /bobs/i })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: /tim/i })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: /looke/i })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: /vivo/i })).toBeInTheDocument();
      expect(
        screen.getByRole('img', { name: /crunchyroll/i })
      ).toBeInTheDocument();
      expect(screen.getByRole('img', { name: /oi/i })).toBeInTheDocument();
    });
  });
});
