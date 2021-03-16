import Chance from 'chance';
import {
  render,
  screen,
  waitFor
} from '@testing-library/react';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Footer from '.';
import theme from '../../styles/theme-default';

const text = {
  footer: /todos os direitos reservados/i
};

describe('Testing <Footer />', () => {
  const chance = new Chance();
  const randomText = chance.sentence();

  test('Should render Footer correctly', async () => {
    render(
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <Footer
          text={randomText}
        />
      </MuiThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(randomText)).toBeInTheDocument();
    });
  });

  test('Should render Footer with defaultProps correctly', async () => {
    render(
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <Footer />
      </MuiThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(text.footer)).toBeInTheDocument();
    });
  });
});
