import { ComponentMeta, ComponentStory } from '@storybook/react';
import SocialMedias from './SocialMedias';
export default {
  title: 'SocialMedias/SocialMedias',
  component: SocialMedias,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SocialMedias>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SocialMedias> = () => <SocialMedias />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
