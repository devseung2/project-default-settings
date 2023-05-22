import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import InputSearchGroup, { InputSearchGroupProps } from '@/components/blocks/Input/InputSearchGroup'

describe('InputSearchGroup 컴포넌트 랜더링 describe', () => {
  const setup = (props: InputSearchGroupProps) => {
    const utils = render(<InputSearchGroup {...props} />)
    const { getByText, getByLabelText, getByPlaceholderText } = utils
    const button = getByText('검색')
    const text = getByPlaceholderText('검색어')

    return {
      ...utils,
      button,
      text,
    }
  }

  test('초기 랜더링 test', () => {
    const search = jest.fn()
    const inputText = ''
    const onChangeText = jest.fn()
    const { button, text } = setup({ inputText, search, onChangeText })

    expect(button).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })
})
