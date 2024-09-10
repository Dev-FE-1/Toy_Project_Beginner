import '@/App.css'
import GlobalStyles from '@/styles/GlobalStyle'
import { css } from '@emotion/react'
import Colors from '@/styles/Colors'

function App() {
  return (
    <>
      <GlobalStyles />
      <div css={container}>
        <div css={preview}>북마크</div>
      </div>
    </>
  )
}
const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  background-color: ${Colors.white};
`
const preview = css`
  color: ${Colors.black};
`
export default App
