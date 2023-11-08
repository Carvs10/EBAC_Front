import { ReactNode } from 'react'
import { Title as TextTitle } from './styles'

export type Props = {
  children: ReactNode
  fontSize?: number
}
const Title = (props: Props) => (
  <TextTitle fontSize={props.fontSize}> {props.children}</TextTitle>
)

export default Title
