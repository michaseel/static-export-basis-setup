import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Lightbulb from './Lightbulb';

it('renders default Lightbulb snapshot', () => {
  const tree = renderer.create(<Lightbulb />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders yellow Lightbulb snapshot', () => {
  const tree = renderer.create(<Lightbulb color="yellow" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders red Lightbulb snapshot', () => {
  const tree = renderer.create(<Lightbulb color="red" />).toJSON();
  expect(tree).toMatchSnapshot();
});
