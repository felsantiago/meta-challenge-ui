import Chance from 'chance';
import { render, fireEvent } from '@testing-library/react';

import TextField from '.';

describe('Testing TextField molecule', () => {
  const chance = new Chance();

  test('Should render field correctly', () => {
    const placeholder = chance.sentence();
    const { queryByPlaceholderText } = render(
      <TextField placeholder={placeholder} />
    );

    expect(queryByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  test('Should call event handlers correctly', () => {
    const placeholder = chance.sentence();
    const value = chance.sentence();
    const handleChange = jest.fn();
    const handleValidStateChange = jest.fn();

    const { getByPlaceholderText, queryByDisplayValue } = render(
      <TextField
        placeholder={placeholder}
        onChange={handleChange}
        onValidStateChange={handleValidStateChange}
      />
    );
    const input = getByPlaceholderText(placeholder);

    fireEvent.change(input, { target: { value } });
    fireEvent.blur(input);

    expect(queryByDisplayValue(value)).toBeInTheDocument();
    expect(handleChange).toHaveBeenCalled();
    expect(handleValidStateChange).toHaveBeenCalledWith(true);
  });

  test('Should apply mask when format and mask props are set', () => {
    const placeholder = chance.sentence();
    const char = chance.character({ alpha: true });
    const format = chance.string({ pool: `#${char}`, length: 16 });
    const value = format.replace(/#/g, chance.character({ numeric: true }));

    const { getByPlaceholderText, queryByDisplayValue } = render(
      <TextField
        placeholder={placeholder}
        format={format}
      />
    );
    const input = getByPlaceholderText(placeholder);

    fireEvent.change(input, { target: { value: value.replace(/\D/g, '') } });
    fireEvent.blur(input);

    expect(queryByDisplayValue(value)).toBeInTheDocument();
  });

  test('Should apply transformation on value change when transform prop is set', () => {
    const placeholder = chance.sentence();
    const transform = (text) => text.toUpperCase();
    const symbols = chance.string({ symbols: true });
    const numbers = chance.string({ numeric: true });
    const value = `${chance.word()} ${symbols} ${chance.word()} ${numbers} ${chance.word()}`;
    const expectedValue = value.toUpperCase();
    const handleChange = jest
      .fn((event) => expect(event.target.value).toStrictEqual(expectedValue));

    const { getByPlaceholderText, queryByDisplayValue } = render(
      <TextField
        placeholder={placeholder}
        transform={transform}
        onChange={handleChange}
      />
    );
    const input = getByPlaceholderText(placeholder);

    fireEvent.change(input, { target: { value } });
    fireEvent.blur(input);

    expect(queryByDisplayValue(expectedValue)).toBeInTheDocument();
    expect(handleChange).toHaveBeenCalled();
  });

  test('Should not show error message when field is required and filled', async () => {
    const placeholder = chance.sentence();
    const requiredMessage = chance.sentence();
    const handleValidStateChange = jest.fn();

    const { getByPlaceholderText, queryByText } = render(
      <TextField
        placeholder={placeholder}
        required
        requiredMessage={requiredMessage}
        onValidStateChange={handleValidStateChange}
      />
    );
    const input = getByPlaceholderText(placeholder);

    fireEvent.change(input, { target: { value: chance.character() } });
    fireEvent.blur(input);
    expect(queryByText(requiredMessage)).toBeNull();
    expect(handleValidStateChange).toHaveBeenLastCalledWith(true);
  });

  test('Should show required error message when field is required and empty', async () => {
    const placeholder = chance.sentence();
    const requiredMessage = chance.sentence();
    const handleValidStateChange = jest.fn();

    const { getByPlaceholderText, queryByText } = render(
      <TextField
        placeholder={placeholder}
        required
        requiredMessage={requiredMessage}
        onValidStateChange={handleValidStateChange}
      />
    );
    const input = getByPlaceholderText(placeholder);

    fireEvent.blur(input);
    expect(queryByText(requiredMessage)).toBeInTheDocument();
    expect(handleValidStateChange).toHaveBeenLastCalledWith(false);
  });

  test('Should not show error message when field value equals format', async () => {
    const placeholder = chance.sentence();
    const invalidMessage = chance.sentence();
    const char = chance.character({ alpha: true });
    const format = chance.string({ pool: `#${char}`, length: 16 });
    const value = format.replace(/#/g, chance.character({ numeric: true })).replace(/\D/g, '');
    const handleValidStateChange = jest.fn();

    const { getByPlaceholderText, queryByText } = render(
      <TextField
        placeholder={placeholder}
        format={format}
        invalidMessage={invalidMessage}
        onValidStateChange={handleValidStateChange}
      />
    );
    const input = getByPlaceholderText(placeholder);

    fireEvent.change(input, { target: { value } });
    fireEvent.blur(input);
    expect(queryByText(invalidMessage)).toBeNull();
    expect(handleValidStateChange).toHaveBeenLastCalledWith(true);
  });

  test('Should show invalid error message when field value differs from format', async () => {
    const placeholder = chance.sentence();
    const invalidMessage = chance.sentence();
    const char = chance.character({ alpha: true });
    const format = chance.string({ pool: `#${char}`, length: 16 });
    const value = chance.character({ numeric: true });
    const handleValidStateChange = jest.fn();

    const { getByPlaceholderText, queryByText } = render(
      <TextField
        placeholder={placeholder}
        format={format}
        invalidMessage={invalidMessage}
        onValidStateChange={handleValidStateChange}
      />
    );
    const input = getByPlaceholderText(placeholder);

    fireEvent.change(input, { target: { value } });
    fireEvent.blur(input);
    expect(queryByText(invalidMessage)).toBeInTheDocument();
    expect(handleValidStateChange).toHaveBeenLastCalledWith(false);
  });

  test('Should not show error message when field value matches pattern', async () => {
    const placeholder = chance.sentence();
    const invalidMessage = chance.sentence();
    const value = chance.word();
    const pattern = new RegExp(value);
    const handleValidStateChange = jest.fn();

    const { getByPlaceholderText, queryByText } = render(
      <TextField
        placeholder={placeholder}
        pattern={pattern}
        invalidMessage={invalidMessage}
        onValidStateChange={handleValidStateChange}
      />
    );
    const input = getByPlaceholderText(placeholder);

    fireEvent.change(input, { target: { value } });
    fireEvent.blur(input);
    expect(queryByText(invalidMessage)).toBeNull();
    expect(handleValidStateChange).toHaveBeenLastCalledWith(true);
  });

  test('Should show invalid error message when field value does not match pattern', async () => {
    const placeholder = chance.sentence();
    const invalidMessage = chance.sentence();
    const value = chance.word();
    const pattern = new RegExp(chance.word());
    const handleValidStateChange = jest.fn();

    const { getByPlaceholderText, queryByText } = render(
      <TextField
        placeholder={placeholder}
        pattern={pattern}
        invalidMessage={invalidMessage}
        onValidStateChange={handleValidStateChange}
      />
    );
    const input = getByPlaceholderText(placeholder);

    fireEvent.change(input, { target: { value } });
    fireEvent.blur(input);
    expect(queryByText(invalidMessage)).toBeInTheDocument();
    expect(handleValidStateChange).toHaveBeenLastCalledWith(false);
  });
});
