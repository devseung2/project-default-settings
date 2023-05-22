import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'

describe('/hello api test', () => {
  test('hello index api test', async () => {
    // Given
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

    // When
    const mock = new AxiosMockAdapter(axios, { delayResponse: 200 })
    mock.onGet('/api/hello').reply(200, responseData)

    const result = await axios.get('/api/hello').then((res) => res.data)

    // Then
    expect(mock.history.get[0].url).toEqual(`/api/hello`)
    expect(result).toStrictEqual(responseData)
  })
})
