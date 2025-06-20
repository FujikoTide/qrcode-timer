import FormDatePicker from '@/components/atoms/FormDatePicker'
import ContentColumn from '@/components/molecules/ContentColumn'

export default function InputDate({ ...props }) {
  return (
    <ContentColumn className="text-center">
      <FormDatePicker {...props} />
    </ContentColumn>
  )
}
