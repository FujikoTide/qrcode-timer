import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { useApiIsLoaded } from '@vis.gl/react-google-maps'

import { Root } from '@/Root'
import App from '@/pages/App'
import ShowData from '@/pages/ShowData'
import ContentColumn from '@/components/molecules/ContentColumn'
import Spinner from '@/components/atoms/Spinner'
import MainContainer from './organisms/MainContainer'

export default function AppRoutes() {
  const isLoaded = useApiIsLoaded()

  if (!isLoaded) {
    return (
      <MainContainer>
        <ContentColumn>
          <Spinner size="lg" />
        </ContentColumn>
      </MainContainer>
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
