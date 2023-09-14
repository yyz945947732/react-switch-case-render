import React from 'react';
import * as ReactDOM from 'react-dom';
import { Switch, Case, Default } from '../src';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';

function Example({ expression }) {
  return (
    <Switch expression={expression}>
      <Case value="pig">pig</Case>
      <Case value="monkey">monkey</Case>
      <Case value="cat">cat</Case>
      <Case value="cat">fake cat</Case>
      <Default>nothing</Default>
    </Switch>
  );
}

describe('Switch', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Switch />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('Case', () => {
    const { container } = render(<Example expression="cat" />);
    const html = container.innerHTML;
    expect(html).not.eq('pig');
    expect(html).not.eq('monkey');
    expect(html).eq('cat');
    expect(html).not.eq('fake cat');
    expect(html).not.eq('nothing');
  });
  test('Default', () => {
    const { container } = render(<Example expression="dog" />);
    const html = container.innerHTML;
    expect(html).not.eq('pig');
    expect(html).not.eq('monkey');
    expect(html).not.eq('cat');
    expect(html).not.eq('fake cat');
    expect(html).eq('nothing');
  });
});
