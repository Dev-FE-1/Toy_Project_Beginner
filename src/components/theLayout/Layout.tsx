import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/theHeader/Header'
import Navigation from '@/components/theNavigation/Navigation'
import { css } from '@emotion/react'

const Layout = () => {
  return (
    <>
      <div css={pageContainer}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Navigation />
      </div>
    </>
  )
}
const pageContainer = css`
  position: relative;
  width: 100%;
  max-width: 430px;
  height: 100%;
  margin: 0 auto;
`
export default Layout
