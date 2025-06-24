import React from 'react'
import ReactDOM from 'react-dom/client'
import { APIProvider } from '@vis.gl/react-google-maps'

import './index.css'

import AppRoutes from '@/components/AppRoutes'

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
