import { ReactNode } from 'react'
import { P } from './styles'

export type Props = {
  children: ReactNode
  type?: 'primary' | 'secondary'
}
const Paragraph = ({ children, type = 'primary' }: Props) => (
  <P type={type}> {children}</P>
)

export default Paragraph
