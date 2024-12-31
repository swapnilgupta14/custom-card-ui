import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Cards/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    padding: { control: 'text' },
    shadow: { control: 'text' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <div>Default Card Content</div>,
  },
};

export const CustomStyled: Story = {
  args: {
    backgroundColor: '#f0f4ff',
    padding: '2rem',
    shadow: '0 4px 12px rgba(0,0,0,0.1)',
    children: (
      <div>
        <h2>Custom Styled Card</h2>
        <p>This is a card with custom styling</p>
      </div>
    ),
  },
};

export const NoShadow: Story = {
  args: {
    shadow: 'none',
    children: <div>Card without shadow</div>,
  },
};

export const LargePadding: Story = {
  args: {
    padding: '3rem',
    children: <div>Card with large padding</div>,
  },
}; 