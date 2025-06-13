import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import ShowData from './ShowData'

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<ShowData />} />
      </Routes>
    </BrowserRouter>
  )
}
