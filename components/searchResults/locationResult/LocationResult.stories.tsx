import { ComponentMeta, ComponentStory } from '@storybook/react';
import LocationResult, { ILocationResult } from './LocationResult';
import { mockLocationResultProps } from './LocationResult.mocks';

export default {
  title: 'locationResult/LocationResult',
  component: LocationResult,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LocationResult>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LocationResult> = (args) => (
  <LocationResult {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLocationResultProps.base,
} as ILocationResult;
