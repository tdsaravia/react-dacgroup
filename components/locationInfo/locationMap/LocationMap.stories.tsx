import { ComponentMeta, ComponentStory } from '@storybook/react';
import LocationMap, { ILocationMap } from './LocationMap';
import { mockLocationMapProps } from './LocationMap.mocks';
export default {
  title: 'locationMap/LocationMap',
  component: LocationMap,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LocationMap>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LocationMap> = (args) => (
  <LocationMap {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLocationMapProps.base,
} as ILocationMap;
