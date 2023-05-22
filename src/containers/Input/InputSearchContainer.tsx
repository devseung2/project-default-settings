import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
import { QueryClient, dehydrate } from 'react-query'

import InputSearchGroup from '@/components/blocks/Input/InputSearchGroup'
import { FETCH_USERS } from '@/pages/api/hello/route'

const InputSearchContainer = () => {
  const [inputText, setInputText] = useState('')

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setInputText(value)
  }

  const search = () => {
    console.log('search!')
  }

  return <InputSearchGroup inputText={inputText} search={search} onChangeText={onChangeText} />
}

export default InputSearchContainer
