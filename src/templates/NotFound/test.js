import {
  render,
  screen,
  waitFor
} from '@testing-library/react';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import NotFoundTemplate from '.';
import NotFoundPage from '../../pages/404';

import theme from '../../styles/theme-default';

const text = {
  title: /Página não encontrada/i
};

describe('Testing <NotFoundTemplate />', () => {
  test('Should render NotFoundTemplate correctly', async () => {
    render(
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <NotFoundTemplate />
      </MuiThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(text.title)).toBeInTheDocument();
    });
  });
});

describe('Testing <NotFoundPage />', () => {
  test('Should render NotFoundPage correctly', async () => {
    render(
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <NotFoundPage />
      </MuiThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(text.title)).toBeInTheDocument();
    });
  });
});
