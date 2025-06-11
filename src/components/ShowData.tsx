import { useParams } from 'react-router-dom'
import { decodeAndDecompress } from '../compression'
// import Meter from "./Meter";

export default function ShowData() {
  const params = useParams()
  const decodedObject = decodeAndDecompress(params.id)
  console.log(params.id, decodedObject)
  return (
    <div className="text-2xl text-orange-400 text-shadow-md text-shadow-neutral-800">
      {JSON.stringify(decodedObject, null, 2)}
      {/* <Meter props={props} /> */}
    </div>
  )
}
