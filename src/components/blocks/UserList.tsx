import UserItem, { UserItemProps } from '@/components/atoms/UserItem'

type UserListProps = {
  data: []
}

const UserList = ({ data }: UserListProps) => {
  return (
    <ul>
      {data?.map((obj: UserItemProps, idx) => (
        <UserItem {...obj} key={idx} />
      ))}
    </ul>
  )
}

export default UserList
