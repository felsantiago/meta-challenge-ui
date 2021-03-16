import { useContext, useEffect } from 'react';
import {
  render,
  screen,
  waitFor
} from '@testing-library/react';
import Chance from 'chance';

import UserTheme from '.';
import AppContext from '../../store/appContext';
import GlobalStateProvider from '../../store/GlobalStateProvider';

const chance = new Chance();
const text = {
  msg: chance.sentence()
};

const FakeComponent = () => {
  const { dispatch } = useContext(AppContext);
  useEffect(() => {
    const handleDispatch = () => dispatch({
      type: 'OFFER',
      theme: 'meta'
    });
    handleDispatch();
  }, []);
  return (<h1>{text.msg}</h1>);
};

describe('Testing <ProspectTemplate />', () => {
  test('Should render ProspectTemplate correctly', async () => {
    render(
      <GlobalStateProvider>
        <UserTheme parentTheme='meta'>
          <FakeComponent />
        </UserTheme>
      </GlobalStateProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(text.msg)).toBeInTheDocument();
    });
  });
});
