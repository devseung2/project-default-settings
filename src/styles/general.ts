import { css, keyframes } from '@emotion/react'
import facepaint from 'facepaint'

export const size = {
  mobile_s: '375px',
  mobile: '600px',
  laptop: '1200px',
}

export const mq = facepaint(
  [
    `@media (max-width: ${size.mobile_s})`,
    `@media (min-width: ${size.mobile_s}) and (max-width: ${size.mobile})`,
    `@media (min-width: ${size.mobile}) and (max-width: ${size.laptop})`,
    `@media (min-width: ${size.laptop})`,
  ],
  {
    literal: true,
  }
)

export const pcHide = css(
  mq({
    display: ['block', 'block', 'block', 'none'],
  })
)
