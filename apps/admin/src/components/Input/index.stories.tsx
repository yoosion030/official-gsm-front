import Input from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/Input",
  component: Input,
  parameters: {},
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const PasswordTextarea: Story = {
  args: {
    width: "21.4375rem",
    height: "2.75rem",
    placeholder: "비밀번호를 입력해주세요.",
    resetBtn: true,
  },
};

export const InputTitle: Story = {
  args: {
    width: "36.125rem",
    height: "2.75rem",
    placeholder: "제목을 입력해주세요.",
  },
};
