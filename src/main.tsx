import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { APIProvider } from '@vis.gl/react-google-maps'

import './index.css'

import { Root } from './Root'
import App from './pages/App'
import ShowData from './pages/ShowData'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<App />} />
      <Route path=":id" element={<ShowData />} />
    </Route>,
  ),
)

const libraries: 'geocoding'[] = ['geocoding']

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <APIProvider
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <RouterProvider router={router} />
    </APIProvider>
  </React.StrictMode>,
)
