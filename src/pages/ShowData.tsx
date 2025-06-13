import { useParams } from 'react-router-dom'
import { decodeAndDecompressUrlSafe } from '../compression'
import MainContainer from '../components/MainContainer'
import ProgressBar from '../components/ProgressBar'
import Message from '../components/Message'

export default function ShowData() {
  const params = useParams()
  const decodedObject = decodeAndDecompressUrlSafe(params.id)
  console.log(params.id, decodedObject)
  return (
    <MainContainer>
      <Message message={decodedObject['msg']} />
      <ProgressBar props={decodedObject['s']['m']} />
      <ProgressBar props={decodedObject['s']['h']} />
      <ProgressBar props={decodedObject['s']['d']} />
    </MainContainer>
  )
}
