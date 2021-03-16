import Chance from 'chance';
import {
  render,
  screen,
  waitFor,
  fireEvent,
  cleanup
} from '@testing-library/react';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import ProspectForm from '.';
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

const text = {
  companyLabel: /Empresa/i,
  companyPlaceholder: /Digite o nome da sua empresa/i,
  nameLabel: /Nome para contato/i,
  namePlaceholder: /Digite um nome para contato/i,
  emailLabel: /E-mail/i,
  emailPlaceholder: /Digite um e-mail para contato/i,
  phoneLabel: /Telefone/i,
  phonePlaceholder: /Digite um telefone para contato/i,
  requiredMessage: /Campo obrigatório/i,
  invalidNameMessage: /Nome inválido/i,
  invalidEmailMessage: /E-mail inválido/i,
  invalidPhoneMessage: /Número inválido! Digite um celular/i,
  button: /Solicitar uma conversa/i
};

describe('Testing <ProspectForm />', () => {
  const chance = new Chance();

  beforeEach(() => {
    render(
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <ProspectForm />
      </MuiThemeProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('Should render ProspectForm fields correctly', async () => {
    await waitFor(() => {
      expect(screen.getByPlaceholderText(text.companyPlaceholder)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(text.namePlaceholder)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(text.emailPlaceholder)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(text.phonePlaceholder)).toBeInTheDocument();
      const buttonFinalizar = screen.getByRole('button', { name: text.button });

      expect(buttonFinalizar).toBeInTheDocument();
      expect(buttonFinalizar).toHaveAttribute('disabled');
    });
  });

  test('Should show errors when fields are not filled', async () => {
    const companyField = screen.getByPlaceholderText(text.companyPlaceholder);
    const nameField = screen.getByPlaceholderText(text.namePlaceholder);
    const emailField = screen.getByPlaceholderText(text.emailPlaceholder);
    const phoneField = screen.getByPlaceholderText(text.phonePlaceholder);

    fireEvent.blur(companyField);
    fireEvent.blur(nameField);
    fireEvent.blur(emailField);
    fireEvent.blur(phoneField);

    await waitFor(() => {
      expect(screen.getAllByText(text.requiredMessage)).toHaveLength(4);
    });
  });

  test('Should render ProspectForm and fill all fields correctly', async () => {
    const companyField = screen.getByPlaceholderText(text.companyPlaceholder);
    const nameField = screen.getByPlaceholderText(text.namePlaceholder);
    const emailField = screen.getByPlaceholderText(text.emailPlaceholder);
    const phoneField = screen.getByPlaceholderText(text.phonePlaceholder);
    const buttonFinalizar = screen.getByRole('button', { name: text.button });

    const companyValue = chance.name();
    const nameValue = chance.name();
    const emailValue = chance.email();
    const phoneValue = '(11) 99222-3917';

    fireEvent.change(companyField, { target: { value: companyValue } });
    fireEvent.change(nameField, { target: { value: nameValue } });
    fireEvent.change(emailField, { target: { value: emailValue } });
    fireEvent.change(phoneField, { target: { value: phoneValue } });

    fireEvent.blur(companyField);
    fireEvent.blur(nameField);
    fireEvent.blur(emailField);
    fireEvent.blur(phoneField);

    await waitFor(() => {
      expect(companyField).toHaveValue(companyValue);
      expect(nameField).toHaveValue(nameValue);
      expect(emailField).toHaveValue(emailValue);
      expect(phoneField).toHaveValue(phoneValue);
      fireEvent.click(buttonFinalizar);
      expect(buttonFinalizar).not.toHaveAttribute('disabled');
    });
  });
});
