import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path = "/" element = {<Layout />}>
    <Route index element = {<Home />} />
    <Route path = "about" element = {<About/>} />
  </Route>
))

export default function App() {

  return (
    <RouterProvider router = {router}>

    </RouterProvider>
  )
}

