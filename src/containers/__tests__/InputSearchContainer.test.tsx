import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import { RecoilRoot } from 'recoil'

import InputSearchContainer from '@/containers/Input/InputSearchContainer'

describe('InputSearchContainer 컴포넌트 describe', () => {
  const setup = (props) => {
    const utils = render(<InputSearchContainer {...props} />, { wrapper: RecoilRoot })
    const { getByText, getByPlaceholderText } = utils
    const input = getByPlaceholderText('검색어')
    const button = getByText('검색')

    return {
      ...utils,
      input,
      button,
    }
  }

  test('input 값 변경 test', () => {
    const inputText = ''
    const onChangeText = jest.fn()
    const { input } = setup({ inputText, onChangeText })

    fireEvent.change(input, {
      target: {
        value: '옷 공장',
      },
    })

    expect(input).toHaveAttribute('value', '옷 공장')
  })

  test('search api call', async () => {
    const searchedData = {
      data: [
        {
          name: '옷 공장',
          moq: 1000,
          price: 3000,
        },
      ],
    }

    const responseData = {
      code: 0,
      message: '검색에 성공하였습니다.',
      data: searchedData,
    }

    const mock = new AxiosMockAdapter(axios, { delayResponse: 200 })

    mock.onGet('/api/search').reply(200, responseData)

    const result = await axios.get('/api/search').then((res) => res.data)

    expect(result).toStrictEqual(responseData)
  })
})
