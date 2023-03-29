import { ComponentMeta, ComponentStory } from '@storybook/react';
import LocationData, { ILocationData } from './LocationData';
import { mockLocationDataProps } from './LocationData.mocks';
export default {
  title: 'locationData/LocationData',
  component: LocationData,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LocationData>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LocationData> = (args) => (
  <LocationData {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLocationDataProps.base,
} as ILocationData;
