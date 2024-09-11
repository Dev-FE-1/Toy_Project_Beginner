import {
  CgHome,
  CgStack,
  CgBookmark,
  CgMathPlus,
  CgProfile
} from 'react-icons/cg'
import { css } from '@emotion/react'
import Colors from '@/styles/Colors'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <div css={navbar}>
        <NavLink to="/home">
          <CgHome css={icon} />
        </NavLink>
        <NavLink to="/myplaylist">
          <CgStack css={icon} />
        </NavLink>
        <NavLink to="/addplaylist">
          <CgMathPlus css={icon} />
        </NavLink>
        <NavLink to="/bookmark">
          <CgBookmark css={icon} />
        </NavLink>
        <NavLink to="/profile">
          <CgProfile css={icon} />
        </NavLink>
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
  width: 430px;
  background-color: ${Colors.black};
  color: ${Colors.lightGrey};
  opacity: 0.8;
  z-index: 100;
  border-radius: 10px;
  .active {
    color: ${Colors.white};
  }
`

const icon = css`
  font-size: 24px;
  opacity: 0.8;
`

export default Navigation
