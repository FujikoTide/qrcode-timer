import { useParams } from 'react-router-dom'
import { base64ToString } from '../base64'

export default function ShowData() {
  const params = useParams()
  const sliderDataString = base64ToString(params.id)
  console.log(params.id, sliderDataString)
  return (
    <div className='text-2xl text-orange-400 text-shadow-md text-shadow-neutral-800'>
      {sliderDataString}
    </div>
  )
}
