import React from 'react';
import * as ReactDOM from 'react-dom';
import { Switch } from '../src';
import { describe, test } from 'vitest';

describe('Switch', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Switch />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
