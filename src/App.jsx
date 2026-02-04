import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout/Layout'
import Home, {loader as homeLoader} from './pages/Home'
import About from './pages/About'
import Career from './pages/Career'
import Skills from './pages/Skills'
import Contacts from './pages/Contacts' 
import Portfolio from './pages/Portfolio'
import Error from './components/Error'

const router = createBrowserRouter(createRoutesFromElements(
  <Route id = "root" path = "/" element = {<Layout />} loader = {homeLoader}  errorElement={<Error/>}>
    <Route index element = {<Home />} />
    <Route path = "about" element = {<About/>} />
    <Route path = "portfolio" element = {<Portfolio/>}/>
    <Route path = "skills" element = {<Skills />} />
    <Route path="career" element = {<Career />}/>
    <Route path="contacts" element = {<Contacts />}/>
  </Route>
))

export default function App() {

  return (
    <RouterProvider router = {router} />
  )
}

