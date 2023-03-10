import React from 'react';
import ThreadHead from '../components/atoms/ThreadHead';

const stories = {
  title: 'ThreadHead',
  component: ThreadHead,
};

export default stories;

function TemplateStory(args) {
  return <ThreadHead {...args} />;
}

const WithThreadHeadOnThreads = TemplateStory.bind({});
const WithThreadHeadOnThreadDetail = TemplateStory.bind({});
WithThreadHeadOnThreads.args = {
  name: 'Dicoding',
  avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
  isDetails: false,
};

WithThreadHeadOnThreadDetail.args = {
  name: 'Dicoding',
  avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
  isDetails: true,
};

export { WithThreadHeadOnThreads, WithThreadHeadOnThreadDetail };
