import { selector } from 'recoil'
import { listState } from '@/recoil/atoms/listAtom'

export const changeListState = selector({
  key: 'changeListState',
  get: ({ get }) => {
    const totalList = get(listState)
    const oddList = totalList.filter((num) => num % 2 !== 0)
    const evenList = totalList.filter((num) => num % 2 === 0)

    return { totalList, oddList, evenList }
  },
})
