import { ReactElement, useEffect, useState } from 'react'
import { jsx, css } from '@emotion/react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { listState } from '@/recoil/atoms/listAtom'
import { changeListState } from '@/recoil/selectors/listSelector'
import Link from 'next/link'
import InputSearchContainer from '@/containers/Input/InputSearchContainer'

export const mul = (a: number, b: number) => {
  return a * b
}

export default function Home() {
  const [list, setList] = useRecoilState(listState)
  const { totalList, oddList, evenList } = useRecoilValue(changeListState)
  const [addText, setAddText] = useState('')

  const addList = (text: string) => setList([...list, Number(text)])
  const deleteList = () => setList(list.slice(0, list.length - 1))

  const changeTextNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setAddText(value)
  }

  return (
    <div>
      {/* <Header /> */}
      <div css={HomeWrap}>Hello, World!</div>

      <div>
        <button onClick={() => deleteList()}> 삭제 </button>
        <input css={InputWrap} type="text" value={addText} onChange={changeTextNumber} />
        <button onClick={() => addList(addText)}> 추가 </button>
      </div>

      <div css={ListWrap}>
        <div>
          {list.map((num, idx) => (
            <li key={idx}>{num}</li>
          ))}
        </div>
      </div>

      <div>
        <div>{oddList}</div>
        <div>{evenList}</div>
      </div>

      <InputSearchContainer />
      <Link href="/list">List Page Move</Link>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}

const HomeWrap = css({
  fontSize: '2rem',
  color: '#000',
})

const ListWrap = css({
  display: 'flex',
  fontSize: '2rem',
})

const InputWrap = css({
  border: '1px solid #000000',
})
