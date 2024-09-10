import {
  CgHome,
  CgStack,
  CgBookmark,
  CgMathPlus,
  CgProfile
} from 'react-icons/cg'
import { css } from '@emotion/react'
import Colors from '@/styles/Colors'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <div css={navbar}>
        <Link to="/networking">
          <CgHome css={icon} />
        </Link>
        <Link to="/myplaylist">
          <CgStack css={icon} />
        </Link>
        <Link to="/addplaylist">
          <CgMathPlus css={icon} />
        </Link>
        <Link to="/bookmark">
          <CgBookmark css={icon} />
        </Link>
        <Link to="/profile">
          <CgProfile css={icon} />
        </Link>
      </div>
    </>
  )
}

const navbar = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 72px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 390px;
  background-color: ${Colors.black};
  color: ${Colors.lightGrey};
  opacity: 0.8;
  z-index: 100;
`

const icon = css`
  font-size: 24px;
  opacity: 0.8;
`

export default Navigation
