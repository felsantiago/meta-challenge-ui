import {
  render,
  screen,
  waitFor
} from '@testing-library/react';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import ProspectSignup from '.';
import theme from '../../styles/theme-default';

jest.mock('@apollo/client', () => ({
  useMutation: () => [
    jest.fn(),
    {
      loading: false,
      error: false,
      data: ''
    }
  ]
}));

jest.mock('../../molecules/RewardCloud', () => ({
  __esModule: true,
  default: () => <div data-testid='mock-rewards-cloud' />
}));

const text = {
  logo: /Logo meta/i,
  title: /Aumente a percepção de valor dos seus produtos/i,
  description: /Crie e divulgue ofertas de seus produtos e serviços/i
};

describe('Testing <ProspectSignup />', () => {
  test('Should render ProspectSignup correctly', async () => {
    render(
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <ProspectSignup />
      </MuiThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('mock-rewards-cloud')).toBeInTheDocument();
      expect(screen.getByAltText(text.logo)).toBeInTheDocument();
      expect(screen.getByText(text.title)).toBeInTheDocument();
      expect(screen.getByText(text.description)).toBeInTheDocument();
    });
  });
});
