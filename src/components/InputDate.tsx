import FormDatePicker from './atoms/FormDatePicker'
import ContentColumn from './molecules/ContentColumn'

export default function InputDate({ ...props }) {
  return (
    <ContentColumn className="text-center">
      <FormDatePicker {...props} />
    </ContentColumn>
  )
}
