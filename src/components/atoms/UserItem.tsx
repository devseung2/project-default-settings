export type UserItemProps = {
  id: number
  name: string
  username: string
  company: string
  email: string
  phone: string
  website: string
}

const UserItem = ({ id, name }: UserItemProps) => {
  return (
    <li>
      {id} {name}
    </li>
  )
}

export default UserItem
