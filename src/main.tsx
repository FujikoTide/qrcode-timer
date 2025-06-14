import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import './css/output.css'

import { Root } from './Root'
import App from './pages/App'
import ShowData from './pages/ShowData'
import InputMessage from './components/InputMessage'
import InputSliders from './components/InputSliders'
import InputDate from './components/InputDate'
import InputLocation from './components/InputLocation'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<App />} />
      <Route path="message" element={<InputMessage />} />
      <Route path="sliders" element={<InputSliders />} />
      <Route path="date" element={<InputDate />} />
      <Route path="location" element={<InputLocation />} />
      <Route path=":id" element={<ShowData />} />
    </Route>,
  ),
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
