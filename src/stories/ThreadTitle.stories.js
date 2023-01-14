import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ThreadTitle from '../components/atoms/ThreadTitle';

const stories = {
  title: 'ThreadTitle',
  component: ThreadTitle,
};

export default stories;

function TemplateStory(args) {
  return <BrowserRouter><ThreadTitle {...args} /></BrowserRouter>;
}

const WithThreadTitleOnThreads = TemplateStory.bind({});
const WithThreadTitleOnThreadDetail = TemplateStory.bind({});
WithThreadTitleOnThreads.args = {
  id: 'thread-B3N9KGa87vfMHyBQ',
  title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu!',
  category: 'introduction',
  isDetails: false,
};

WithThreadTitleOnThreadDetail.args = {
  id: 'thread-B3N9KGa87vfMHyBQ',
  title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu!',
  category: 'introduction',
  isDetails: true,
};

export { WithThreadTitleOnThreads, WithThreadTitleOnThreadDetail };
