import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={< Layout />}>

    <Route path='' element={<Home/>} />

    <Route path='/about'  element={<About/>} />

    <Route  path='/contact' element={<Contact/>} />



    <Route  path='user/' element={<User/>} >
      <Route path=':userid' element={<User/>} />
    </Route>

    <Route
    loader={githubInfoLoader}
    path='/github' element={<Github/>} />


    <Route  path='*' element={<div>NOT FOUND</div>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}  />
  </StrictMode>,
)
