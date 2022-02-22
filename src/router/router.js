import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
// import { MainPage } from '../../pages'

export const MainRouter = () => {
  return (

    <BrowserRouter>
     <Routes>
      <Route path="/main" />
       <Route
        path="*"
        element={<Navigate to="/main" />}
    />
      </Routes>
    </BrowserRouter>
  )
}
