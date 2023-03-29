import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoldLink, { IBoldLink } from './BoldLink';
import { mockBoldLinkProps } from './BoldLink.mocks';
export default {
  title: 'boldLink/BoldLink',
  component: BoldLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BoldLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BoldLink> = (args) => (
  <BoldLink {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBoldLinkProps.base,
} as IBoldLink;
