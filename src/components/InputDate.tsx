import FormDatePicker from './atoms/FormDatePicker'
import ContentColumn from './molecules/ContentColumn'
import Title from './molecules/Title'

export default function InputDate() {
  return (
    <ContentColumn className="text-center">
      <FormDatePicker />
    </ContentColumn>
  )
}
