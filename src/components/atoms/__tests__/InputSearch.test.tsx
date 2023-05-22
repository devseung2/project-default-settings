import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import InputSearch, { InputSearchProps } from '@/components/atoms/Input/InputSearch'

describe('InputSearch 컴포넌트 describe', () => {
  const setup = (props: InputSearchProps) => {
    const utils = render(<InputSearch {...props} />)
    const { getByPlaceholderText } = utils
    const input = getByPlaceholderText('검색어')

    return {
      ...utils,
      input,
    }
  }

  test('input props value test', () => {
    const inputText = '옷 공장'
    const onChangeText = jest.fn()
    const { input } = setup({ inputText, onChangeText })

    expect(input).toHaveAttribute('value', '옷 공장')
  })

  test('input 값 변경 test', () => {
    const inputText = ''
    const onChangeText = jest.fn()
    const { input } = setup({ inputText, onChangeText })

    userEvent.type(input, '옷 공장')

    expect(onChangeText).toBeCalled()
  })
})
