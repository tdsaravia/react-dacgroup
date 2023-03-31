import { ComponentMeta, ComponentStory } from '@storybook/react';
import Location, { ILocation } from './Location';
import { mockLocationProps } from './Location.mocks';
export default {
  title: 'location/Location',
  component: Location,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Location>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Location> = (args) => (
  <Location {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLocationProps.base,
} as ILocation;
