import { ComponentMeta, ComponentStory } from '@storybook/react';
import SocialMediaCard, { ISocialMediaCard } from './SocialMediaCard';
import { mockSocialMediaCardProps } from './SocialMediaCard.mocks';
export default {
  title: 'cards/SocialMediaCard',
  component: SocialMediaCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SocialMediaCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SocialMediaCard> = (args) => (
  <SocialMediaCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSocialMediaCardProps.base,
} as ISocialMediaCard;
