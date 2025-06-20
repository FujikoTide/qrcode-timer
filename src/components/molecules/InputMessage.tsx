import FormTextInput from '@/components/atoms/FormTextInput'
import ContentColumn from '@/components/molecules/ContentColumn'

// need context stuff now !
export default function InputMessage({ ...props }) {
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
        {...props}
      />
    </ContentColumn>
  )
}
