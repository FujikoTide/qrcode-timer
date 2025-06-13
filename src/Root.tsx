import { Outlet } from 'react-router-dom'
import MainContainer from './components/MainContainer'

export function Root() {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  )
}
