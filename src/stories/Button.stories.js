import React from 'react';
import Button from '../components/atoms/Button';

const stories = {
  title: 'Button',
  component: Button,
};

export default stories;

function TemplateStory(args) {
  return <Button {...args} />;
}

const WithBgDefault = TemplateStory.bind({});
WithBgDefault.args = {
  children: 'Default Button',
  type: 'submit',
};

export {
  WithBgDefault,
};
