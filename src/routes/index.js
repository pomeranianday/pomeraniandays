import { Navigate } from 'react-router-dom'
import { AboutPage } from "../components/pages/about"
import { MainPage } from "../components/pages/main"

export default [
  { path: '/main', element: MainPage, text: 'Home' },
  { path: '/about', element: AboutPage, text: 'About Us' },
  { path: '/*', element: () => <Navigate to="/main" />, text: '' },
]