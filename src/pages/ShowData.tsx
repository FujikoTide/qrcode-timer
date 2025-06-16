import { useParams } from 'react-router-dom'
import { decodeAndDecompressUrlSafe } from '@/compression'
import ProgressBar from '@/components/ProgressBar'
import Typography from '@/components/atoms/Typography'
import MainContainer from '@/components/organisms/MainContainer'

type ShowDataParams = {
  id: string
}

export default function ShowData() {
  const { id } = useParams<ShowDataParams>()
  const decodedObject = decodeAndDecompressUrlSafe(id)
  const sliderObj = decodedObject['s']
  return (
    <>
      <MainContainer>
        <Typography message={decodedObject['msg']} />
        {Object.entries(sliderObj).map((data, key) => (
          <ProgressBar key={key} props={{ ...data[1] }} />
        ))}
      </MainContainer>
    </>
  )
}
