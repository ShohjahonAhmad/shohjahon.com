import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout/Layout'
import Home, {loader as homeLoader} from './pages/Home'
import About from './pages/About'
import Career, {loader as careerLoader} from './pages/Career'
import Skills from './pages/Skills'
import Contacts from './pages/Contacts' 
import Portfolio, {loader as portfolioLoader} from './pages/Portfolio'
import NoName from './components/NoName'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path = "/" element = {<Layout />}>
    <Route index element = {<Home />} loader = {homeLoader} />
    <Route path = "about" element = {<About/>} />
    <Route path = "noname" element = {<NoName/>} />
    <Route path = "portfolio" element = {<Portfolio/>} loader = {portfolioLoader}/>
    <Route path = "skills" element = {<Skills />} />
    <Route path="career" element = {<Career />} loader = {careerLoader}/>
    <Route path="contacts" element = {<Contacts />}/>
  </Route>
))

export default function App() {

  return (
    <RouterProvider router = {router} />
  )
}

