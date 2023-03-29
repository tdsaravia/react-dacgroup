import { ComponentMeta, ComponentStory } from '@storybook/react';
import StoreHours, { IStoreHours } from './storeHours';
import { mockStoreHoursProps } from './storeHours.mocks';
export default {
  title: 'storeHours/StoreHours',
  component: StoreHours,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StoreHours>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StoreHours> = (args) => (
  <StoreHours {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockStoreHoursProps.base,
} as IStoreHours;
