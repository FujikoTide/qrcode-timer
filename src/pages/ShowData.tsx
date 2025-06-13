import { useParams } from 'react-router-dom'
import { decodeAndDecompressUrlSafe } from '../compression'
import MainContainer from '../components/MainContainer'
import ProgressBar from '../components/ProgressBar'
import Message from '../components/Message'

type ShowDataParams = {
  id: string
}

export default function ShowData() {
  const { id } = useParams<ShowDataParams>()
  const decodedObject = decodeAndDecompressUrlSafe(id)
  console.log(id, decodedObject)
  return (
    <>
      <Message message={decodedObject['msg']} />
      <ProgressBar props={decodedObject['s']['m']} />
      <ProgressBar props={decodedObject['s']['h']} />
      <ProgressBar props={decodedObject['s']['d']} />
    </>
  )
}
