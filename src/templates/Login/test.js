import { render, screen, waitFor } from '@testing-library/react';
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';

import ProspectTemplate from '.';
import ProspectPage from '../../pages/index';

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
  flower: /flor/i,
  shapes: /figuras geométricas/i,
  footer: /todos os direitos reservados/i,
  title: /Aumente a percepção de valor dos seus produtos/i,
  description: /Crie e divulgue ofertas de seus produtos e serviços/i
};

describe('Testing <ProspectTemplate />', () => {
  test('Should render ProspectTemplate correctly', async () => {
    render(
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <ProspectTemplate />
      </MuiThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('mock-rewards-cloud')).toBeInTheDocument();
      expect(screen.getByAltText(text.logo)).toBeInTheDocument();
      expect(screen.getByAltText(text.flower)).toBeInTheDocument();
      expect(screen.getByAltText(text.shapes)).toBeInTheDocument();
      expect(screen.getByText(text.footer)).toBeInTheDocument();
      expect(screen.getByText(text.title)).toBeInTheDocument();
      expect(screen.getByText(text.description)).toBeInTheDocument();
    });
  });
});

describe('Testing <ProspectPage />', () => {
  test('Should render ProspectPage correctly', async () => {
    render(
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <ProspectPage />
      </MuiThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByAltText(text.logo)).toBeInTheDocument();
      expect(screen.getByAltText(text.flower)).toBeInTheDocument();
      expect(screen.getByAltText(text.shapes)).toBeInTheDocument();
      expect(screen.getByText(text.footer)).toBeInTheDocument();
      expect(screen.getByText(text.title)).toBeInTheDocument();
      expect(screen.getByText(text.description)).toBeInTheDocument();
    });
  });
});
