import React from 'react'
import Button from '@/components/atoms/Button/DefaultButton'
import { action } from '@storybook/addon-actions'

export default {
  component: Button,
  title: 'startup/atoms/buttons',
  parameters: {
    componentSubtitle: '기본 버튼 컴포넌트',
    docs: {
      description: {
        // component: `버튼 컴포넌트에 대해 설명`,
      },
    },
  },
  argTypes: {
    name: {
      description: `버튼 이름`,
      type: { summary: 'string', required: true },
    },
    theme: {
      description: `버튼 테마`,
      defaultValue: { summary: 'default' },
      options: ['default', 'naver', 'google'],
      control: { type: 'select' },
      type: { summary: 'string' },
    },
    size: {
      description: `버튼 사이즈`,
      type: { summary: 'string' },
      options: ['small', 'medium', 'big'],
      control: { type: 'select' },
    },
    backgroundColor: {
      description: '버튼 배경 색상',
      type: { summary: 'string' },
      control: 'color',
      // table: {
      //   category: 'Colors',
      // },
    },
    color: {
      description: '폰트 색상',
      type: { summary: 'string' },
      control: 'color',
    },
    disabled: {
      description: `버튼 비활성화`,
      type: { summary: 'boolean' },
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    isFullWidth: {
      description: `버튼 너비 100% 유무`,
      defaultValue: { summary: false },
      type: { summary: 'boolean' },
      control: { type: 'boolean' },
    },
    onClick: {
      description: `버튼 클릭 함수`,
      type: { summary: 'function' },
    },
  },
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  name: '버튼',
  theme: 'default',
  size: 'big',
  isFullWidth: true,
  onClick: action('Default Login Big Button Click'),
}

export const Naver = Template.bind({})
Naver.args = {
  name: 'Naver',
  theme: 'naver',
  size: 'big',
  isFullWidth: true,
  onClick: action('Naver Login Big Button Click'),
}

export const Google = Template.bind({})
Google.args = {
  name: 'Google',
  theme: 'google',
  size: 'big',
  isFullWidth: true,
  onClick: action('Google Login Big Button Click'),
}

export const DefaultGroup = () => {
  return (
    <div>
      <Default {...Default.args} />
      <Default name="버튼" size="medium" theme="default" onClick={action('default Login Medium Button Click')} />
      <Default name="버튼" size="small" theme="default" onClick={action('default Login Small Button Click')} />
    </div>
  )
}

export const NaverGroup = () => {
  return (
    <div>
      <Naver {...Naver.args} />
      <Naver name="Naver" size="medium" theme="naver" onClick={action('Naver Login Medium Button Click')} />
      <Naver name="Naver" size="small" mq_type="active" theme="naver" onClick={action('Naver Login Small Button Click')} />
    </div>
  )
}

export const GoogleGroup = () => {
  return (
    <div>
      <Google {...Google.args} />
      <Google name="Google" size="medium" theme="google" onClick={action('Google Login Medium Button Click')} />
      <Google name="Google" size="small" theme="google" onClick={action('Google Login Small Button Click')} />
    </div>
  )
}
