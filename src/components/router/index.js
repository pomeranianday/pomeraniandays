import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import { MainPage } from '../pages/main'
import { AboutPage } from '../pages/about'
import routeModels from '../../routes'

export const MainRouter = () => {
  return (
     <Routes>
        {/* <Route path="/main" element={<MainPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route
          path="*"
          element={<Navigate to="/main" />}
        /> */}
        {
          routeModels.map(
            routeModel => <Route path={routeModel.path} element={<routeModel.element/>}/>
          )
        }
      </Routes>
  )
}
