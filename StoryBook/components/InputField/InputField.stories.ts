import { fn } from "@storybook/test";

import { InputField, InputFieldProps } from "./InputField";
import { Meta, StoryObj } from "@storybook/react";

type PagePropsAndCustomArgs = React.ComponentProps<typeof InputField>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: "Example/InputField",
  component: InputField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Input",
  },
};

export default meta;

type Story = StoryObj<PagePropsAndCustomArgs>;

const placeholder = "Type something";

export const Primary: Story = {
  args: {
    placeholder: placeholder,
  },
};

export const Focused: Story = {
  args: {
    label: "Input Focused",
    placeholder: placeholder,
    focused: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Input Disabled",
    placeholder: placeholder,
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: "Input Required",
    required: true,
    placeholder: placeholder,
  },
};

export const Error: Story = {
  args: {
    label: "Input Error",
    required: true,
    placeholder: placeholder,
    errorMessage: "This field is required",
  },
};
