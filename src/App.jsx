import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import BlogWriter from './pages/BlogWriter'
import Career from './pages/Career'
import Skills from './pages/Skills'
import BlogPage from './pages/BlogPage'
import Contacts from './pages/Contacts' 
import Portfolio from './pages/Portfolio'
import Error from './components/Error'
import { blogWriterGuard, loader, loaderBlog} from './utils/loader'

const router = createBrowserRouter(createRoutesFromElements(
  <Route id = "root" path = "/" element = {<Layout />} loader = {loader} shouldRevalidate={() => false}  errorElement={<Error/>}>
    <Route index element = {<Home />} />
    <Route path = "about" element = {<About/>} />
    <Route path = "portfolio" element = {<Portfolio/>} />
    <Route path = "skills" element = {<Skills />} />
    <Route path="career" element = {<Career />} />
    <Route path="contacts" element = {<Contacts />} />
    <Route path="blogs" element={<Blogs/>}/>
    <Route path="blogs/:slug" element={<BlogPage/>} loader={loaderBlog} />
    <Route path="write-blog" element={<BlogWriter/>} loader={blogWriterGuard} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router = {router} />
  )
}

