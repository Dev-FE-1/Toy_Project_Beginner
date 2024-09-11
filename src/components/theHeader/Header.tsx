import { css } from '@emotion/react'
import Colors from '@/styles/Colors'

const Header = () => {
  return (
    <div css={header}>
      <span css={title}>페이지 제목</span>
    </div>
  )
}

const header = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  color: ${Colors.white};
`

const title = css`
  font-size: 20px;
  color: ${Colors.black};
`

export default Header
