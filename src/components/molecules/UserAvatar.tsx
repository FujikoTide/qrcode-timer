import Avatar, { type AvatarProps } from '@/components/atoms/Avatar'
import Icon from '@/components/atoms/Icon'
import UserIcon from '@/assets/images/UserIcon.svg?react'

type UserAvatarProps = Omit<AvatarProps, 'fallback'>

export default function UserAvatar({ ...props }: UserAvatarProps) {
  return (
    <Avatar
      {...props}
      fallback={
        <Icon
          as={UserIcon}
          relativeSize="default"
          fillColor="none"
          strokeColor="secondary"
        />
      }
    />
  )
}
