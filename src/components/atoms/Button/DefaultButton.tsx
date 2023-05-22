import React from 'react'
import { jsx, css } from '@emotion/react'
import PropTypes from 'prop-types'
import { mq } from '@/styles/general'

export type ButtonProps = {
  /** 버튼 이름 */
  name: string
  /** 버튼 테마 */
  theme?: 'default' | 'naver' | 'google'
  /** 버튼 사이즈 */
  size?: 'small' | 'medium' | 'big'
  /** 버튼 색상 */
  backgroundColor?: string
  /** 폰트 색상 */
  color?: string
  /** 버튼 비활성화 */
  disabled?: boolean
  /** 버튼 크기 100% */
  isFullWidth?: boolean
  /** 버튼 클릭 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

/**
 * `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.
 * */
const Button = ({ name, theme, size, backgroundColor, color, isFullWidth, disabled, onClick }: ButtonProps) => {
  return (
    <button css={[defaultBtnStyles, themes[theme], sizes[size], isFullWidth && fullSize, { backgroundColor }, { color }]} onClick={onClick}>
      {name}
    </button>
  )
}

export default Button

const defaultBtnStyles = css({
  marginBottom: '20px',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
})

const sizes = {
  small: css({
    width: '200px',
    height: '40px',
    fontSize: '14px',
  }),
  medium: css({
    width: '300px',
    height: '50px',
    fontSize: '16px',
  }),
  big: css({
    width: '460px',
    height: '60px',
    fontSize: '20px',
  }),
}

const fullSize = css(
  mq({
    width: ['100%', '100%'],
  })
)

const themes = {
  default: css({
    backgroundColor: '#343434',
    color: '#fff',
  }),
  naver: css({
    backgroundColor: '#19CE60',
    color: '#fff',
  }),
  google: css({
    backgroundColor: '#CCCCCC',
    color: '#fff',
  }),
}
