import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path = "/" element = {<Layout />}>
    <Route index element = {<Home />} />
  </Route>
))

export default function App() {

  return (
    <RouterProvider router = {router}>

    </RouterProvider>
  )
}

