import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
import { QueryClient, dehydrate, useQuery } from 'react-query'

import { FETCH_USERS } from '@/pages/api/hello/route'
import UserList from '@/components/blocks/UserList'

const UserListContainer = () => {
  const [userList, setUserList] = useState([])

  const { isLoading, error, data } = useQuery('users', FETCH_USERS)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>error</div>
  }

  return <UserList data={data} />
}

export default UserListContainer

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60,
      },
    },
  })

  await queryClient.prefetchQuery('users', FETCH_USERS)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
