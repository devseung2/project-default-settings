import { atom } from 'recoil'

export const listState = atom({
  key: 'listState',
  default: [1, 2, 3, 4, 5],
})
