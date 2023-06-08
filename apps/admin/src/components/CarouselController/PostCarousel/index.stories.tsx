import PostCarousel from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/PostCarousel',
  component: PostCarousel,
  parameters: {},
} as Meta<typeof PostCarousel>;

type Story = StoryObj<typeof PostCarousel>;

const fileInfo = [
  {
    fileUrl:
      'http://bucket.ottokeng.site/743d7afd-690c-404a-b7fb-b6fe97598504.jpg',
    fileName: 'images.jpg',
    fileExtension: 'JPG,',
  },
];

export const Primary: Story = {
  args: {
    fileInfo: fileInfo,
    currentIndex: 0,
  },
};
