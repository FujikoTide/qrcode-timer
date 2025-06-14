import { useParams } from 'react-router-dom'
import { decodeAndDecompressUrlSafe } from '../compression'
import ProgressBar from '../components/ProgressBar'
import Message from '../components/atoms/Message'

type ShowDataParams = {
  id: string
}

export default function ShowData() {
  const { id } = useParams<ShowDataParams>()
  const decodedObject = decodeAndDecompressUrlSafe(id)
  const sliderObj = decodedObject['s']
  return (
    <>
      <Message message={decodedObject['msg']} />
      {Object.entries(sliderObj).map((data, key) => (
        <ProgressBar key={key} props={{ ...data[1] }} />
      ))}
    </>
  )
}
