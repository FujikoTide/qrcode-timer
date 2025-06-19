import FormTextInput from '@/components/atoms/FormTextInput'
import ContentColumn from './molecules/ContentColumn'

// need context stuff now !
export default function InputMessage() {
  return (
    <ContentColumn>
      <FormTextInput
        name="message"
        placeholder="Enter Message..."
        rounded="rounded"
        textCase="capitalize"
        textWeight="bold"
        border="lg"
        textSize="xl"
        placeholderColor="warning"
        backgroundColor="default"
      />
    </ContentColumn>
  )
}
