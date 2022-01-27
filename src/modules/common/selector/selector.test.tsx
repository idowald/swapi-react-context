import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Selector } from './selector';
import { Entities } from '../../../types/entity';

test('test Selector correct text and click event triggers the change', () => {
  const mockedFunc = jest.fn();
  render(<Selector
    name="selector"
    selected={Entities.Species}
    onChange={mockedFunc}
    options={[Entities.Species, Entities.Planets]}
  />);
  fireEvent.click(screen.getByLabelText('planets'));
  expect(mockedFunc).toBeCalledWith('planets');
  expect(screen.getByText('planets').className).toContain('MuiFormControlLabel-label');
});
