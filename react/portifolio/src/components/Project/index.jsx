import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto A</Title>
    <Paragraph type="secondary">Lista de tarfeas feita com Vue Js</Paragraph>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Project
