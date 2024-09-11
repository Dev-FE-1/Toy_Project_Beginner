import '@/App.css'
import GlobalStyles from '@/styles/GlobalStyle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '@/pages/Login'
import AddPlaylist from '@/pages/AddPlaylist'
import Bookmark from '@/pages/Bookmark'
import MyPlaylist from '@/pages/myPlaylist'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import SignUp from '@/pages/SignUp'
import Header from '@/components/theHeader/Header'
import Navigation from './components/theNavigation/Navigation'
import Toast from '@/components/theToast/Toast' // Toast 컴포넌트 연동(연지)
import PlaylistDetail from '@/pages/PlaylistDetail' // 플리목록 (연지)

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Navigation />
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="/addplaylist"
            element={<AddPlaylist />}
          />
          <Route
            path="/bookmark"
            element={<Bookmark />}
          />
          <Route
            path="/myplaylist"
            element={<MyPlaylist />}
          />
          <Route
            path="/Home"
            element={<Home />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          {/* ↓ 아래 플리목록 페이지 추가하기(연지) */}
          <Route
            path="/playlist"
            element={<PlaylistDetail />}
          />
        </Routes>
      </BrowserRouter>
      {/* ↓ 아래 토스트컴포넌트 추가하기(연지) */}
      <Toast />
    </>
  )
}

export default App
