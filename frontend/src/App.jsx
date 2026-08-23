//import './App.css'
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"

import HomePage from "./pages/HomePage"
import RequireAuth from "./components/RequireAuth"
import LoginPage from "./pages/LoginPage"
import { useEffect } from "react"
import { useLoggedUserStore } from "./store/loggedUserStore"
import NotFound from "./pages/NotFound"
import SignupPage from "./pages/SignupPage"




const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage/>,
  },

  {
    path: '/signup',
    element: < SignupPage />
  },

  {
    element: <RequireAuth/>,
    children: [

      {
        path: "/",
        element: <HomePage/>
      },
    ]

  },

  {
    path: '*',
    element: < NotFound />
  }



])

function App() {

  const checkForLogin = useLoggedUserStore(state => state.checkForLogin)

  useEffect( () => {
    checkForLogin()
  }, [] )

  return <RouterProvider router={router} />
}

export default App
