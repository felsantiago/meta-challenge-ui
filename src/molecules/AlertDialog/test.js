import Chance from 'chance';
import { render, screen, fireEvent } from '@testing-library/react';

import AlertDialog from '.';

describe('Testing <AlertDialog />', () => {
  const chance = new Chance();
  const title = chance.sentence();
  const message = chance.word();
  const button = chance.sentence();

  test('Should render dialog correctly', () => {
    render(
      <AlertDialog
        title={title}
        message={message}
        button={button}
        open
        onClose={jest.fn()}
      />
    );

    expect(screen.queryByText(title)).toBeInTheDocument();
    expect(screen.queryByText(message)).toBeInTheDocument();
    expect(screen.queryByText(button)).toBeInTheDocument();
  });

  test('Should not show dialog when open is false', () => {
    render(
      <AlertDialog
        title={title}
        message={message}
        button={button}
        open={false}
        onClose={jest.fn()}
      />
    );

    expect(screen.queryByText(title)).toBeNull();
    expect(screen.queryByText(message)).toBeNull();
    expect(screen.queryByText(button)).toBeNull();
  });

  test('Should call close handler when user clicks the button', () => {
    const handleClose = jest.fn();

    const { getByText } = render(
      <AlertDialog
        button={button}
        open
        onClose={handleClose}
      />
    );

    fireEvent.click(getByText(button));
    expect(handleClose).toHaveBeenCalled();
  });
});
