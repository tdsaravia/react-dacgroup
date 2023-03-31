import { ComponentMeta, ComponentStory } from '@storybook/react';
import Marker, { IMarker } from './Marker';
import { mockMarkerProps } from './Marker.mocks';
export default {
  title: 'marker/Marker',
  component: Marker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Marker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Marker> = (args) => <Marker {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMarkerProps.base,
} as IMarker;
