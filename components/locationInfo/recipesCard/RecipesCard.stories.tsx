import { ComponentMeta, ComponentStory } from '@storybook/react';
import RecipesCard, { IRecipesCard } from './RecipesCard';
import { mockRecipesCardProps } from './RecipesCard.mocks';
export default {
  title: 'recipesCard/RecipesCard',
  component: RecipesCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof RecipesCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RecipesCard> = (args) => (
  <RecipesCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockRecipesCardProps.base,
} as IRecipesCard;
