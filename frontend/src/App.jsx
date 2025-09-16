import Navbar from "./components/Navbar"
import { Routes, Route, Navigate } from "react-router-dom"
import { useAuthStore } from "./store/useAuthStore"
import {Loader} from "lucide-react"

import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import SettingsPage from "./pages/SettingsPage"
import ProfilePage from "./pages/ProfilePage"
import { useEffect } from "react"


function App() {
  const {authUser, checkAuth, isCheckingAuth} = useAuthStore()

  useEffect(() => {
    checkAuth()
  },[checkAuth]);

  console.log({authUser});
  
  if(isCheckingAuth && !authUser) return (
    <div>
      <Loader className="size10 animate-spin" />
    </div>
  )

  return (
    <div>

    <Navbar/>
    <Routes>
      <Route path="/" element={authUser? <HomePage /> : <Navigate to="login" /> } />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/profile" element={<ProfilePage />} />

    </Routes>

    <h1>App Component</h1>

    </div>
  )
}

export default App
