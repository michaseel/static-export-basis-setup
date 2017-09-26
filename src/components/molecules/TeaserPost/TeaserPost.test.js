import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import TeaserPost from './TeaserPost';

it('renders default TeaserPost snapshot', () => {
  const tree = renderer.create(<TeaserPost id={1} title="Lorem" body="ipsum" />).toJSON();
  expect(tree).toMatchSnapshot();
});
