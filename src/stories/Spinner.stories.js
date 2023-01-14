import React from 'react';
import Spinner from '../components/atoms/Spinner';

const stories = {
  title: 'Spinner',
  component: Spinner,
};

export default stories;

function TemplateStory(args) {
  return <Spinner {...args} />;
}

const WithSpinnerOnLoading = TemplateStory.bind({});

export { WithSpinnerOnLoading };
