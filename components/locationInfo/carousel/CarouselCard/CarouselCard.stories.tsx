import { ComponentMeta, ComponentStory } from '@storybook/react';
import CarouselCard, { ICarouselCard } from './CarouselCard';
import { mockCarouselCardProps } from './CarouselCard.mocks';
export default {
  title: 'carousel/CarouselCard',
  component: CarouselCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CarouselCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CarouselCard> = (args) => (
  <CarouselCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCarouselCardProps.base,
} as ICarouselCard;
