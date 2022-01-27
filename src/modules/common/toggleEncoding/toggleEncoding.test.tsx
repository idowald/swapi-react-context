import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { ToggleEncoding } from './toggleEncoding';
import { EncodingType } from '../../../types/encoding';

test('test toggle encoding correct text and click event triggers the change', () => {
  const mockedFunc = jest.fn();
  render(<ToggleEncoding selectedEncoding={'wookiee' as EncodingType} handleChange={mockedFunc} />);
  fireEvent.click(screen.getByText('Normal'));
  expect(mockedFunc).toBeCalledWith('normal');
});
