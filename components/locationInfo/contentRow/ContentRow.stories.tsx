import { ComponentMeta, ComponentStory } from '@storybook/react';
import ContentRow, { IContentRow } from './ContentRow';
import { mockContentRowProps } from './ContentRow.mocks';
export default {
  title: 'templates/ContentRow',
  component: ContentRow,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ContentRow>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContentRow> = (args) => (
  <ContentRow {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockContentRowProps.base,
} as IContentRow;
