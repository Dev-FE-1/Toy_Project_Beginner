import '@/App.css'
import GlobalStyles from '@/styles/GlobalStyle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '@/pages/Login'
import AddPlaylist from '@/pages/AddPlaylist'
import Bookmark from '@/pages/Bookmark'
import MyPlaylist from '@/pages/MyPlaylist'
import Networking from '@/pages/Networking'
import Profile from '@/pages/Profile'
import SignUp from '@/pages/SignUp'
import Header from '@/components/theHeader/Header'
import Navigation from './components/theNavigation/Navigation'

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
            path="/networking"
            element={<Networking />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
