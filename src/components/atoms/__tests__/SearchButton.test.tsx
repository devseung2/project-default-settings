import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import SearchButton, { SearchButtonProps } from '@/components/atoms/Button/SearchButton'

describe('SearchButton 컴포넌트 describe', () => {
  const setup = (props: SearchButtonProps) => {
    const utils = render(<SearchButton {...props} />)

    const { getByText } = utils
    const button = getByText('검색')

    return {
      ...utils,
      button,
    }
  }

  test('search button click test', () => {
    const search = jest.fn()
    const { button } = setup({ search })

    userEvent.click(button)

    expect(search).toBeCalled()
  })
})
