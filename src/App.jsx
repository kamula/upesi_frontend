import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom'
import LoginScreen from './screens/loginScreen/LoginScreen'
import RegisterScreen from './screens/registerScreen/RegisterScreen'
import DashboardScreen from './screens/dashboardScreen/DashboardScreen'
import UnAuthenticatedRoot from './components/includes/UnAuthenticatedRoot'
import AuthenticatedRoot from './components/includes/AuthenticatedRoot'

import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

import AuthOutlet from '@auth-kit/react-router/AuthOutlet'



const App = () => {
  const isAuthenticated = useIsAuthenticated()


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={isAuthenticated ? <AuthenticatedRoot /> : <UnAuthenticatedRoot />}>
        {/* replace login page if user is already authenticated */}
        <Route index element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route element={<AuthOutlet fallbackPath='/' />}>
          <Route path='/dashboard' element={<DashboardScreen />} />
        </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App