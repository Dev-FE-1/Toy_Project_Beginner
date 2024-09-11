import '@/App.css'
import GlobalStyles from '@/styles/GlobalStyle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '@/pages/Login'
import AddPlaylist from '@/pages/AddPlaylist'
import Bookmark from '@/pages/Bookmark'
import MyPlaylist from '@/pages/MyPlaylist'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import SignUp from '@/pages/SignUp'
import Layout from '@/components/theLayout/Layout'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout />}>
            <Route
              index
              element={<Home />}
            />
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
              path="/home"
              element={<Home />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
