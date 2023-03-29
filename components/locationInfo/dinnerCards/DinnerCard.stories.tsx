import { ComponentMeta, ComponentStory } from '@storybook/react';
import DinnerCard, { IDinnerCard } from './DinnerCard';
import { mockDinnerCardProps } from './DinnerCard.mocks';
export default {
  title: 'cards/DinnerCard',
  component: DinnerCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DinnerCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DinnerCard> = (args) => (
  <DinnerCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDinnerCardProps.base,
} as IDinnerCard;
