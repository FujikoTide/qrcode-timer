import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { APIProvider, useApiIsLoaded } from '@vis.gl/react-google-maps'

import './index.css'

import { Root } from '@/Root'
import App from '@/pages/App'
import ShowData from '@/pages/ShowData'
import Typography from '@/components/atoms/Typography'
import Spinner from '@/components/atoms/Spinner'

function AppRoutes() {
  const isLoaded = useApiIsLoaded()

  if (!isLoaded) {
    return (
      <Typography>
        <Spinner />
      </Typography>
    )
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<App />} />
        <Route path=":id" element={<ShowData isMapApiLoaded={isLoaded} />} />
      </Route>,
    ),
  )

  return <RouterProvider router={router} />
}

const libraries: ('maps' | 'marker' | 'places' | 'geocoding')[] = [
  'maps',
  'marker',
  'places',
  'geocoding',
]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <APIProvider
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <AppRoutes />
    </APIProvider>
  </React.StrictMode>,
)
